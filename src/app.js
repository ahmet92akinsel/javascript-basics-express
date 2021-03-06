const express = require('express');

const app = express();

app.use(express.json());

const { sayHello, uppercase, lowercase, firstCharacter } = require('./lib/strings');

const { add, subtract, divide, multiply, remainder } = require('./lib/numbers');

const { negate } = require('./lib/booleans');




//STRINGS

app.get('/strings/hello/:id', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.id) })
});

app.get('/strings/upper/:string', (req,res) => {
  res.status(200).json({ result: uppercase(req.params.string)})
});

app.get('/strings/lower/:id', (req,res) => {
  res.status(200).json({ result: lowercase(req.params.id) })
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200).json({ result: firstCharacter(req.params.string) })
});

/*app.get('/strings/first-characters/:id', (req, res) => {
  res.status(200).json({ result: req.params.id.substring(0, req.query.q)})
});*/



//NUMBERS


//add


app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (isNaN(a) === false && isNaN(b) === false) {
    res.status(200).json({ result: add(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});


//substract


app.get('/numbers/subtract/:b/from/:a', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  if(isNaN(a) === false && isNaN(b) === false){
    res.status(200).json({ result: subtract(b,a)})
  } else {
    res.status(400).json ({ error: 'Parameters must be valid numbers.'})
  }
});

//multiply

app.post('/numbers/multiply',(req, res) => {

const {a, b} = req.body

if(typeof a === 'undefined'|| typeof b === 'undefined') {
  res.status(400).json({ error: 'Parameters "a" and "b" are required.'})
} else if (isNaN(a) === false && isNaN(b) === false) {
  res.status(200).json ({ result: multiply(a, b)})
} else {
  res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.'})
}
}); 
  

//divide


app.post('/numbers/divide', (req, res) => {
    
  const {a, b} = req.body
  if (b === 0) {
  res.status(400).json({ error: 'Unable to divide by 0.' });
 } else if (typeof a === 'undefined' || typeof b === 'undefined') {
  res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
 } else if (isNaN(a) === false && isNaN(b) === false) {
  res.status(200).json({ result: divide(a, b) });
 } else {
  res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
}
});

//remainder

app.post('/number/remainder', (req, res) => {

const {a, b} = req.body

if(typeof a === 'undefined'|| typeof b === 'undefined') {
  res.status(400).json({ error: 'Parameters "a" and "b" are required.'})
} else if (isNaN(a) === false && isNaN(b) === false) {
  res.status(200).json ({ result: remainder(a, b)})
} else {
  res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.'})
}
}); 


//BOOLEANS


app.post('/booleans/negate',(req, res) => {
res.status(200).json({ result: negate(req.body.value) })
});

app.post('/booleans/negate',(req, res) => {
 
  res.status(200).json({ result: negate(req.body.value) })
  console.log(req.body.value)
  });


module.exports = app;