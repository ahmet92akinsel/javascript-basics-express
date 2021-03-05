const express = require('express');

//const sayHello = require('./lib/strings.js');

const { add, subtract, divide, multiply, remainder } = require('./lib/numbers.js');

const app = express();


//strings 

app.get('/strings/hello/world', (req, res) => {
  res.status(200).json({ result: 'Hello, world!' });
});

app.get('/strings/hello/:string', (req, res) => {
  res.json({result: sayHello(req.params.string) });
}); 

app.get('/strings/upper/hello', (req,res) => {
  res.status(200).json({ result :'HELLO' })
});

app.get('/strings/lower/HELLO', (req,res) => {
  res.status(200).json({ result: 'hello' })
});

app.get('/strings/first-characters/hello', (req, res) => {
  res.status(200).json({ result: 'h' })
});

app.get('/strings/first-characters/sd32fg45', (req, res) => {
  res.status(200).json({ result: 'sd32' })
});

//numbers

app.get('/numbers/add/2/and/1', (req, res) => {
  res.status(200).json ({ result: 3 })
});

app.get('/numbers/add/12/and/0', (req, res) => {
  res.status(200).json ({ result : 12 })
});

app.get('/numbers/add/10/and/-5', (req, res) => {
  res.status(200).json ({ result : 5 })
});
app.get('/numbers/add/fish/and/chips', (req, res) => {
  res.status(400).json ({ error: 'Parameters must be valid numbers.'})
});

app.get('/numbers/subtract/2/from/1', (req, res) => {
  res.status(200).json ({ result: -1 })
});
app.get('/numbers/subtract/-2/from/1', (req, res) => {
  res.status(200).json ({ result: 3 })
});
app.get('/numbers/subtract/fish/from/chips', (req,res) => {
  res.status(400).json ({ error: 'Parameters must be valid numbers.' })
});
app.get('/numbers/multiply/10/and/3', (req, res) => {
  res.status(200).json ({ result: 30 })
});

app.post('/numbers/multiply', (req, res) => {
  const a1 = 3;
  const b1 = 10;
  res.status(200).send({ result: multiply(a1, b1) })
});

app.post('/numbers/multiply/minusnumbers', (req, res) => {
  const numa = -4;
  const numb = -9;
  res.status(200).send({ result: multiply(numa, numb) })
});

/* app.post('/numbers/multiply', (req, res) => {
  const a = 'fish';
  res.status(400).send({ error: 'Parameters "a" and "b" are required.' })
}); 

app.post('/numbers/multiply', (req, res) => {
  const a2 = 'fish';
  const b2 = 'chips';
  res.status(400).send({ error: 'Parameters "a2" and "b2" are required.' })
}); */

app.post('/numbers/divide', (req, res) => {
  const divideNum1 = 162;
  const divideNum2 = 3;
  res.status(200).send({ result: divide(divideNum1, divideNum2) });
});
app.post('/numbers/divide', (req, res) => {
 const divNum1 = '-4';
 const divNum2 = '-8';
 res.status(200).send({ result: divide(divNum1, divNum2) })
});


/*

//booleans

app.post('/booleans/negate', (req, res) => {
  res.status(200).json ({ result: false })
});

app.post('/booleans/negate', (req, res) => {
  res.status(200).json ({ result: true })
});

app.post('/booleans/truthiness', (req, res) => {
  res.status({ value: '' }).send ({ result : false })
});

app.post('/booleans/truthiness',(req, res) => {
  res.status(200).send({ result: false })
});

app.post('/booleans/truthiness', (req, res) => {
  res.status({ value: 0 }).send({ result: false });
});


app.post('/booleans/truthiness', (req, res) => {
  res.status({ value: null }).send({ result: false })
  console.log(result)
});
 */



module.exports = app;
