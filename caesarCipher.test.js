import { caesarCipher } from "./functions";

test('Works well with overflow', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('Encode correctly in normal cases', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
})