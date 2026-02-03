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
            echo "Cleaning up old container..."
            // Use -f to force remove even if it's stuck
            sh "docker rm -f ${CONTAINER_NAME} || true"
            
            echo "Starting new container..."
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
    always {
        // This ensures a notification is sent regardless of success or failure
        slackSend(
            channel: '#general', 
            color: currentBuild.currentResult == 'SUCCESS' ? 'good' : 'danger',
            message: "Build ${env.BUILD_NUMBER} for ${env.JOB_NAME} settled as ${currentBuild.currentResult}: ${env.BUILD_URL}"
        )
    }
}
}
}