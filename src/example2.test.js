/// UNIT TEST FOR QUESTION 2

import { charCount } from './example2';

test('counts duplicate chars in string', () => {
  expect(charCount('aaabbdcccccf')).toMatch('a3b2d1c5f1');
  expect(charCount('aabbaa')).toMatch('a2b2a2');
});

