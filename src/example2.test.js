import { sum, subtract } from './example2';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtracts 4 from 9 to equal 5', () => {
  expect(subtract(9, 4)).toBe(5);
});
