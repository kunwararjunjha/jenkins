pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t httpd .'
            }
        }

        stage('Run') {
            steps {
                sh 'docker run -d -p 80:80 httpd'
            }
        }
    }
}
