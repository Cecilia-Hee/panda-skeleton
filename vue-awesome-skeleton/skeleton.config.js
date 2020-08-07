
module.exports = {
  "pageName": process.env.npm_config_pagename,
  "outputPath": `skeleton-output/${process.env.npm_config_pagename}`,
  "pageUrl": process.env.npm_config_pageurl || 'http://10.2.26.144:8082/#/',
  "openRepeatList": true,
  "device": "iPhone 6",
  "minGrayBlockWidth": 80,
  "minGrayPseudoWidth": 10,
  "debug": true,
  "debugTime": 10000,
  "cookies": [
    {
      "domain": ".baidu.com",
      "expirationDate": 1568267131.555328,
      "hostOnly": false,
      "httpOnly": false,
      "name": "BDORZ",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "yyyyyyyyy",
      "id": 2
    }
  ]
}