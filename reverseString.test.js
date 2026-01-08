import { reverseString } from "./functions";

test('Works with normal strings.', () => {
    expect(reverseString('abcde')).toBe('edcba');
});

test('Works with empty string', () => {
    expect(reverseString('')).toBe('');
})