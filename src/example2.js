/*
QUESTION 2. 

String:

You have a string aaabbdcccccf, transform it the following way => a3b2d1c5f1 
ie: aabbaa -> a2b2a2 not a4b2
*/

function charCount(str) {
  const strArray = str.split('');
  const charMap = {};
  let prevChar = '';
  let uniqueCharCount = 0;
  let charCount = 1;
  
  for(let [char] of strArray) {
    if(char === prevChar) {
      charCount++;
    } else {
      charCount = 1;
      uniqueCharCount++;
    }

    // charMap[char] = charCount;
    charMap[`${char}-${uniqueCharCount}`] = charCount;
    prevChar = char;
  }
  
  let newStr = '';
  for(let [key, value] of Object.entries(charMap)) {
    newStr += `${key.charAt(0)}${value}`;
  }

  // console.log(charMap, newStr);

  return newStr;
}

export { charCount };
