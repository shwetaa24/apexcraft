pipeline {
    agent any
environment {
        // Using the standard path which points to your user path automatically
        DOCKER_HOST = "unix:///var/run/docker.sock"
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
                sh 'npm run build'
                sh 'npm run lint || true'
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    sh "docker build --no-cache -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                    sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Force remove old container to prevent "Name in use" error
                    sh "docker rm -f ${CONTAINER_NAME} || true"
                    sh "docker run -d --name ${CONTAINER_NAME} -p ${APP_PORT}:3000 ${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
            }
        }

        stage('Health Check') {
            steps {
                script {
                    echo "Waiting for app to start..."
                    sleep 10
                    sh "curl --fail http://localhost:${APP_PORT} || exit 1"
                }
            }
        }
    }
post {
    always {
        script {
            withCredentials([string(credentialsId: 'slack-webhook-url', variable: 'WEBHOOK')]) {
                // We use single quotes (') for the SH command to prevent Groovy interference
                sh 'curl -X POST -H "Content-type: application/json" --data "{\\"text\\":\\"🚀 Build #$BUILD_NUMBER finished! Status: $currentBuild.currentResult\\"}" $WEBHOOK'
            }
        }
    }
}
}