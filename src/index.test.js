const { generateStrongPassword, isStrongPassword } = require('./index');

describe('generateStrongPassword', () => {
  test('generates a password of the specified length', () => {
    expect(generateStrongPassword(12)).toHaveLength(12);
  });

  test('generates a password of length 1', () => {
    expect(generateStrongPassword(1)).toHaveLength(1);
  });

  test('uses default length of 12 when no argument is given', () => {
    expect(generateStrongPassword()).toHaveLength(12);
  });

  test('generated password only contains allowed characters', () => {
    const password = generateStrongPassword(50);
    expect(password).toMatch(/^[A-Za-z0-9!@#$%^&*()_+]+$/);
  });
});

describe('isStrongPassword', () => {
  test('returns false for "Hello World" (no digit, no special char)', () => {
    expect(isStrongPassword('Hello World')).toBe(false);
  });

  test('returns true for "pC%mD8TpCKn2"', () => {
    expect(isStrongPassword('pC%mD8TpCKn2')).toBe(true);
  });

  test('returns false for passwords shorter than 8 characters', () => {
    expect(isStrongPassword('Ab1!')).toBe(false);
  });

  test('returns false when missing an uppercase letter', () => {
    expect(isStrongPassword('abc123!@#')).toBe(false);
  });

  test('returns false when missing a lowercase letter', () => {
    expect(isStrongPassword('ABC123!@#')).toBe(false);
  });

  test('returns false when missing a digit', () => {
    expect(isStrongPassword('ABCabc!@#')).toBe(false);
  });

  test('returns false when missing a special character', () => {
    expect(isStrongPassword('ABCabc123')).toBe(false);
  });

  test('returns true for a valid strong password', () => {
    expect(isStrongPassword('Secure@Pass1')).toBe(true);
  });
});
