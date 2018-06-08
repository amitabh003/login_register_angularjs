const express = require('express');
const app = express();

var myLogger = function(req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/*', function(req, res) {
  res.send('Hello World..!')
})

app.listen(3003, () => {
  console.log('Server started!');
});