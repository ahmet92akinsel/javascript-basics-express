const express = require('express');

const app = express();

app.use(express.json());

const { sayHello, uppercase, lowercase, firstCharacter } = require('./lib/strings');

const { add, subtract, divide, multiply, remainder } = require('./lib/numbers');

const { negate, truthiness, isOdd, startsWith  } = require('./lib/booleans');

const { getNthElement, 
        arrayToCSVString, 
        addToArray2,  
        elementsStartingWithAVowel, 
        removeNthElement,
        removeNthElement2 } = require('./lib/arrays');



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
  res.status(200).json({ result: req.params.id.firstCharacters(3)})
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
  if (Number(b) === 0) {
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

app.post('/numbers/remainder', (req, res) => {

const {a, b} = req.body
if(Number(b) === 0){
  res.status(400).json({ error: 'Unable to divide by 0.' })
}else if(typeof a === 'undefined'|| typeof b === 'undefined') {
  res.status(400).json({ error: 'Parameters "a" and "b" are required.'})
} else if (isNaN(a) === false && isNaN(b) === false) {
  res.status(200).json ({ result: remainder(a, b)})
} else {
  res.status(400).json({ error: 'Parameters must be valid numbers.' })
}
}); 


//BOOLEANS


  app.post('/booleans/negate',(req, res) => {
  res.status(200).json({ result: negate(Boolean(req.body.value)) })
  });

  app.post('/booleans/truthiness', (req, res) => {
    res.status(200).json({ result : truthiness(req.body.value)})
  });
 
 

  app.get('/booleans/is-odd/:a', (req, res) => {
    if (isNaN(Number(req.params.a)))  {
      res.status(400).json({ error: 'Parameter must be a number.' })
    } else {
      res.status(200).json({ result : isOdd(req.params.a) })

    }
  });

  app.get('/booleans/:a/starts-with/:b', (req, res) => {
    if(req.params.b.length !== 1 ) {
      res.status(400).json({ error: 'Parameter "character" must be a single character.' })
    } else {
      res.status(200).json({ result: startsWith(req.params.b, req.params.a) })
    }    
  });

 
//ARRAYS


app.post('/arrays/element-at-index/:id', (req, res) => {
  res.status(200).send({ result: getNthElement(req.params.id, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
 res.status(200).send({ result: arrayToCSVString(req.body.array) });
 
});

app.post('/arrays/append', (req, res) => {
 res.status(200).send({ result: addToArray2(req.body.value, req.body.array)})
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).send({ result: elementsStartingWithAVowel(req.body.array) });
});

app.post('/arrays/remove-element', (req, res)=> {

  res.status(200).send({ result: removeNthElement(req.body.index, req.body.array) })

}); 



module.exports = app;