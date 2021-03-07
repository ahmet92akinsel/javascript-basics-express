const getNthElement = (index, array) => {
  const newIndex = index;
  if (newIndex < array.length) {
    return array[newIndex];
  }

  return array[newIndex - array.length];
};
 
/* let cc; 
  if (index > (array.length -1)) {
    (cc = index % array.length)
    return array[cc]
  } else {
    return array[index]
  }
};*/

function arrayToCSVString(array) {
  return array.toString();
}

const csvStringToArray = string => {
  let noCommas = string.replace(/,/g, "")
  return noCommas.split("")
};

const addToArray = (element, array) => {
  array.push(element);
  
};

const addToArray2 = (element, array) => {
  return array.concat(element);

  //element = what
  //array = where
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
              
};

const numbersToStrings = numbers => {
  
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  
  return strings.map(string => string.toUpperCase());

};

const reverseWordsInArray = strings => {
    return strings.map(string => string.split("").reverse().join(""));
};

const onlyEven = numbers => {    
    return numbers.filter(x => x%2 == 0);  
  
};

const removeNthElement2 = (index, array) => {
 let newArray = array.map(x =>x)
  
    newArray.splice(index,1);
  return newArray; 
  
};


const elementsStartingWithAVowel = strings => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return strings.filter(word => {
    const firstLetter = word[0].toLowerCase();
    return vowels.includes(firstLetter);
  });
};

const removeSpaces = string => {

  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  
  return numbers.reduce((acc,number) => {
    return acc + number;
  });
};

const sortByLastLetter = strings => {
//
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};