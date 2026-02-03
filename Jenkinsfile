pipeline {
    agent any

    environment {
        DOCKER_HOST = "unix:///Users/shwetaa/.docker/run/docker.sock"
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
                sh 'npm install' 
            }
        }

        stage('Build & Test') {
            steps {
                // Ensure the build generates the standalone folder
                sh 'npm run build'
                sh 'npm run lint || true' 
            }
        }

        stage('Docker Build & Versioning') {
            steps {
                script {
                    echo "Building Docker image..."
                    // We use --no-cache to ensure the standalone folder is freshly detected
                    sh "docker build --no-cache -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                    sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"
                    sh "docker run -d --name ${CONTAINER_NAME} -p ${APP_PORT}:3000 ${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
            }
        }

        stage('Health Check & Rollback') {
            steps {
                script {
                    echo "Waiting for app..."
                    sleep 15 
                    try {
                        sh "curl --fail http://localhost:${APP_PORT} || exit 1"
                    } catch (Exception e) {
                        sh "docker stop ${CONTAINER_NAME} || true"
                        sh "docker rm ${CONTAINER_NAME} || true"
                        sh "docker run -d --name ${CONTAINER_NAME} -p ${APP_PORT}:3000 ${DOCKER_IMAGE}:latest"
                        error("Health check failed.")
                    }
                }
            }
        }
    }

    post {
        success {
            // Added 'channel' parameter to fix the Slack error
            slackSend(channel: '#general', tokenCredentialId: 'slack-webhook-url', color: 'good', message: "✅ Success: ${env.JOB_NAME} [${env.BUILD_NUMBER}]")
        }
        failure {
            // Added 'channel' parameter to fix the Slack error
            slackSend(channel: '#general', tokenCredentialId: 'slack-webhook-url', color: 'danger', message: "❌ Failed: ${env.JOB_NAME} [${env.BUILD_NUMBER}]")
        }
    }
}