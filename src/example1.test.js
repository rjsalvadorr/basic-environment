/// UNIT TEST FOR QUESTION 1

import { leetify } from './example1';

test('leetifies string correctly', () => {
  expect(leetify('Let\'s have some fun')).toMatch('L37\'5 h4v3 50m3 fun');
  expect(leetify('By the power of Grayskull!')).toMatch('By 7h3 p0w3r 0f Gr4y5kull!');
  expect(leetify('C is for cookie, that\'s good enough for me')).toMatch('C 15 f0r c00k13, 7h47\'5 g00d 3n0ugh f0r m3');
});
