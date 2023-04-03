# Token Request <img align="right" src="https://github.com/1Hive/website/blob/master/website/static/img/bee.png" height="80px" />

[![CircleCI](https://circleci.com/gh/1Hive/token-request-app.svg?style=svg)](https://circleci.com/gh/1Hive/token-request-app)
[![Coverage Status](https://coveralls.io/repos/github/1Hive/token-request-app/badge.svg?branch=master&service=github)](https://coveralls.io/github/1Hive/token-request-app?branch=master&service=github)

Modified version of [1Hive's Token Request.](https://github.com/1Hive/token-request-app)

Token Request app allows users to create a vote which requests an Organization's tokens in exchange for payment. For example a user may request minting 100 organization tokens in exchange for 100 USDC. The request would require a vote to approve, if the vote is rejected the user would receive their payment back and if it is approved the payment would be deposited in the organization's vault.

#### 🚨 Security review status: [Contracts audited](https://diligence.consensys.net/audits/2019/12/dandelion-organizations/)

# Token Request Vesting
The same app with added vesting functionality. Tokens received by the user will be vested for a period of time specified by the contract manager.

start - The date vesting started

cliff - The cliff period

end - The fully vested date

You will receive your tokens right after generating in our DAO. Cliff means the period of time after which the first portion of your tokens will become transferable. Vesting means the period of time after which all your tokens will become transferable.

![image](https://user-images.githubusercontent.com/111743010/229564675-627a06b8-c96f-45cb-bb6b-28f0f5b8880d.png)
