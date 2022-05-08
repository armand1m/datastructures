import { romanToInt } from './romanToInt';

test('III', () => {
  expect(romanToInt('III')).toBe(3);
});

test('IV', () => {
  expect(romanToInt('IV')).toBe(4);
});

test('LVIII', () => {
  expect(romanToInt('LVIII')).toBe(58);
});

test('MCMXCIV', () => {
  expect(romanToInt('MCMXCIV')).toBe(1994);
});

test('MMXIV', () => {
  expect(romanToInt('MMXIV')).toBe(2014);
});
