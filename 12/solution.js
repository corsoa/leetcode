var repeatChar = ((char, numTimes) => {
	let repeatStr = '';
	for (let i = 0; i < numTimes; i++) {
    repeatStr += char;
  } 
	return repeatStr;
});
var constructPartialNumeral = ((oneChar, fiveChar, tenChar, digit) => {
  let numeral = '';
  if (digit <= 3) {
    numeral += repeatChar(oneChar, digit);
  }
  else if (digit === 4) {
    numeral += oneChar;
    numeral += fiveChar;
  }
  else if (digit >= 5 && digit < 9) {
    numeral += fiveChar;
    numeral += repeatChar(oneChar, digit-5);
  }
  else {
    numeral += oneChar;
    numeral += tenChar;
  }
  return numeral;
});
/**
 *  * @param {number} num
 *   * @return {string}
 *    */
var intToRoman = function(num) {
  let numeral = '';
  const digits = Number(num).toString().split('').map((strInt) => {
    return Number(strInt);
  })
  const numDigits = digits.length;
  digits.forEach((digit, numPos) => {
    const place = numDigits - numPos - 1;
    if (place === 3) {
      numeral += repeatChar('M', digit);
    }
    else if (place === 2) {
      numeral += constructPartialNumeral('C','D','M', digit);
    }
    else if (place === 1) {
      numeral += constructPartialNumeral('X', 'L', 'C', digit);
    }
    else if (place === 0) {
      numeral += constructPartialNumeral('I', 'V', 'X', digit);
    }
	});
  return numeral;
};
