import { capitalize } from "./functions";

test('Input an empty string returns the string itself.', () => {
    expect(capitalize('')).toMatch('');
});

test('Works with normal strings.', () => {
    expect(capitalize('title')).toBe('Title');
})