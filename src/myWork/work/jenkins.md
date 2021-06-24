  <h3>jenkins 工作流程</h3>
  <p >
    <img style="width: 50%;" src="./assets/img/branch-jenkins.png" alt=""><br>
    <br>
    <img style="width: 50%;" src="./assets/img/shell-jenkins.png" alt="">
  </p>
  <p>dist脚本:</p>
  <p>
    chmod 777 scripts/deploy-dist-pro.sh<br>
    # $1=yarn build:$1; $2=env; $3=ver; $4=packageType; $5=jobName; $6=to;<br>
    ./scripts/deploy-dist-pro.sh uat UAT pro Build epos-frontend-uat-pro-build
  </p>
  <p>source Code脚本:</p>
  <p>
    chmod 777 ./scripts/deploy-source-pro.sh<br>
    # $1=env; $2=ver; $3=packageType; $4=jobName; $5=to;<br>
    ./scripts/deploy-source-pro.sh UAT pro Source epos-frontend-training-pro-build
  </p>

  <p>
    <img style="width: 50%;" src="./assets/img/jenkins-dist-email.png" alt=""><br>
    <img style="width: 50%;" src="./assets/img/jenkins-code.png" alt="">
  </p>
