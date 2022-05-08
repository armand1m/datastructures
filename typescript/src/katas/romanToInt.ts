type RomanChar = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';

/**
 * Calculation found at
 * https://mail.haskell.org/pipermail/haskell-cafe/2009-June/062508.html
 */
export function romanToInt(str: string): number {
  const romanMap: Record<RomanChar, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return Array.from(str).reduce((acc, romanChar) => {
    const num = romanMap[romanChar as RomanChar];
    const summed = acc + num;
    const modded = acc % num;
    const modTwice = modded * 2;
    return summed - modTwice;
  }, 0);
}
