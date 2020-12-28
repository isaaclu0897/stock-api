MongoDB RESTful Api in Node.js
===

###### tags: `mongodb` `node.js` `restful`

1. 創建專案
```
npm init
```

2. 安裝程式
```
npm i express
```

3. index.js
```
const express = require('express');
const app = express();

const conf = require("./config");

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(conf.port, function () {
  console.log(`server start on http://localhost:${conf.port}`);
});
```

4. config.js
```
module.exports = {
    // bind the port of service
    port: 3000
};
```

API
| Order | URI | Method | parameter | result |
| -------- | -------- | -------- | -------- | -------- |
|  |  |  |
