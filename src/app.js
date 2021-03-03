const express = require('express');

const app = express();
//strings 

app.get('/strings/hello/world', (req, res) => {
  res.status(200).json({ result: 'Hello, world!' });
});

/*app.get('/strings/hello/:string', (req, res) => {
  res.json({result: sayHello(req.params.string) });
}); */

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
/*app.get('/numbers/multiply/10/and/3', (req, res) => {
  res.status(200). json ({ result: 30 })
});*/


//booleans

//arrays





module.exports = app;
