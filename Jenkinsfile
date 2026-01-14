pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/vijayendra-b/ci-cd-poc.git'
            }
        }

        stage('Verify Node') {
            steps {
                sh '''
                export PATH="/opt/homebrew/opt/node@18/bin:$PATH"
                node -v
                npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t vijayendra1/pocprojects:latest .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'b799765c-9aab-4075-8537-541d450e7f9d',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    docker push vijayendra1/pocprojects:latest
                    '''
                }
            }
        }
    }
}
