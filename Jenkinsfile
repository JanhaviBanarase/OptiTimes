pipeline {
    agent any

    stages {
        stage('Dev') {
            steps {
                bat '''D:
cd Training
git clone https://github.com/JanhaviBanarase/OptiTimes.git'''
            }
        }
        stage("QA")
        {
            steps{
                bat '''D:
cd Training/OptiTimes
echo "This is Pipelinejob-1" >secondfile.txt
git add secondfile.txt
git config --global user.email "janhavib12345@gmail.com"
git config --global user.name "JanhaviBanarase"
git commit -m "my new commit"
git push https://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@github.com/JanhaviBanarase/OptiTimes.git '''

            }
        }
        stage("operation")
        {
            steps{
                echo "Hello Operation"
            }
        }
    }
}
