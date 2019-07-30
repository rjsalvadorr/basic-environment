/*
QUESTION 1.

Leet:

L37'5 h4v3 50m3 fun.

Replace certain letters with the mapping below:

[a,A] -> 4
[e,E] -> 3
[i,I] -> 1
[o,O] -> 0
[s,S] -> 5
[t,T] -> 7
[b,D] -> 5

Note: [o,O] is not an owl face, it's the letter "o" and it should be replaced with a zero.

Objective: to convert a String into Leet.

Examples

Let's have some fun. -> L37'5 h4v3 50m3 fun.
C is for cookie, that's good enough for me -> C 15 f0r c00k13, 7h47'5 g00d 3n0ugh f0r m3
By the power of Grayskull! -> By 7h3 p0w3r 0f Gr4y5kull!
*/

function leetify(str) {
  
  const charMap = {};
  charMap['a'] = 4;
  charMap['A'] = 4;
  charMap['e'] = 3;
  charMap['E'] = 3;
  charMap['i'] = 1;
  charMap['I'] = 1;
  charMap['o'] = 0;
  charMap['O'] = 0;
  charMap['s'] = 5;
  charMap['S'] = 5;
  charMap['t'] = 7;
  charMap['T'] = 7;
  charMap['b'] = 5;
  charMap['D'] = 5;
  
  const strArray = str.split('');
  let newString = '';
  let charVal;

  for(let char of strArray) {
    charVal = charMap[char];
    if(charVal === 0 || charVal) {
      newString += charVal;
    } else {
      newString += char;
    }
  }

  // console.log(newString);

  return newString;
}

export { leetify };
