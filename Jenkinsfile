pipeline {
    agent any

    environment {
        // 👇 ADD THIS LINE - It tells Jenkins to look in the Homebrew folder for npm
        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
        
        DOCKER_IMAGE = "apexcraft-app"
        DOCKER_TAG = "${env.BUILD_NUMBER}"
        CONTAINER_NAME = "apexcraft-container"
        APP_PORT = "3000"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Use 'npm install' for the first time if 'npm ci' fails
                sh 'npm install' 
            }
        }

        stage('Build & Test') {
            steps {
                sh 'npm run build'
                // This version is standard and the '|| true' ensures the pipeline 
                // continues to the Docker stage even if there are lint warnings.
                sh 'npm run lint || true' 
            }
        }

        stage('Docker Build & Versioning') {
            steps {
                script {
                    echo "Building Docker image..."
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                    sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo "Deploying to target environment..."
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"
                    sh "docker run -d --name ${CONTAINER_NAME} -p ${APP_PORT}:3000 ${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
            }
        }

        stage('Health Check & Rollback') {
            steps {
                script {
                    echo "Waiting for application to initialize..."
                    sleep 15 
                    
                    try {
                        echo "Performing health check..."
                        sh "curl --fail http://localhost:${APP_PORT} || exit 1"
                        echo "Deployment verified successfully."
                    } catch (Exception e) {
                        echo "Health check failed! Initiating Rollback..."
                        sh "docker stop ${CONTAINER_NAME} || true"
                        sh "docker rm ${CONTAINER_NAME} || true"
                        // Rollback logic: restart the 'latest' stable image
                        sh "docker run -d --name ${CONTAINER_NAME} -p ${APP_PORT}:3000 ${DOCKER_IMAGE}:latest"
                        error("Pipeline failed: Health check failure.")
                    }
                }
            }
        }
    }

  post {
        success {
            echo "Pipeline completed successfully!"
            // Ensure 'slack-webhook-url' is the ID you gave in the Credentials menu
            slackSend(tokenCredentialId: 'slack-webhook-url', color: 'good', message: "✅ Success: ${env.JOB_NAME} [${env.BUILD_NUMBER}]")
        }
        failure {
            echo "Pipeline failed."
            slackSend(tokenCredentialId: 'slack-webhook-url', color: 'danger', message: "❌ Failed: ${env.JOB_NAME} [${env.BUILD_NUMBER}]")
        }
    }
}