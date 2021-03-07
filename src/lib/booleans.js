const negate = a => {
  return (!a > 0)
};

const both = (a, b) => {
 
  return (a && b);
  
};

const either = (a, b) => {
  if (a || b) {
    return true
  } else {
    return false
  };
};

const none = (a, b) => {
  if (!a && !b) {
    return true
  } else {
    return false
  }
};
const one = (a, b) => {
if (a === !b){
  return true
} else {
  return false;
};

};
const truthiness = a => {
  if (a) {
    return true
  } else {
    return false
  }
};

const isEqual = (a, b) => {
 if (a === b) {
   return true
 } else {
   return false
 }
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true
  } else {
    return false
  };
};

const isLessThanOrEqualTo = (a, b) => {
 if (a <= b) {
   return true
 } else {
   return false
 };
};

const isOdd = a => {
  if (a % 2 == 0) {
    return false;
  } else {
    return true;
  };

};

const isEven = a => {
  
   if (a % 2 == 0) {
    return true;
  } else {
    return false;
  };
};

const isSquare = a => {
if (Number.isInteger(Math.sqrt(a))) {
  return true
} else {
  return false
}

};

const startsWith = (char, string) => {
  
  if (string.charAt(0) === char) {
    return true
  } else  {
    return false
  }

};

const containsVowels = string => {
  
  string = string.toLowerCase(); 
  if (string.includes("a") || string.includes("o")) {
    return true
  } else {
    return false
  }
};

const isLowerCase = string => {
    
 if (string === string.toLowerCase()) {
   return true
 } else {
   return false
 }
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
