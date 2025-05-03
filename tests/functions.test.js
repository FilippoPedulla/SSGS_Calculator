const sum = require('../src/functions.js').sum;
const sub = require('../src/functions.js').sub;
const mul = require('../src/functions.js').mul;
const div = require('../src/functions.js').div;
const pow = require('../src/functions.js').pow;

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});

/*test('adds 3 + 5 not to equal 7', () => {
  expect(sum(2, 2)).toBe(7);
});*/

test('sub 2 - 2 to equal 0', () => {
  expect(sub(2, 2)).toBe(0);
});

test('mult 2 * 2 to equal 4', () => {
  expect(mul(2, 2)).toBe(4);
});

test('div 2 / 2 to equal 1', () => {
  expect(div(2, 2)).toBe(1);
});

test('div 2 / 0 to equal error', () => {
  expect(div(2, 0)).toBe(null);
});

test('div 2^2 to equal 4', () => {
  expect(pow(2, 2)).toBe(4);
});