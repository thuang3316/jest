export function capitalize(str) {
    if (!str) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

const calculator = {
    add(x, y) {
        return x + y;
    },
    subtract(x, y) {
        return x - y;
    },
    divide(x, y) {
        return x / y;
    },
    multiply(x, y) {
        return x * y;
    }
}

export default calculator;

export function caesarCipher(str, offset) {
    return str.split('').map(s => s.charCodeAt(0) + offset > 122 ? String.fromCharCode(s.charCodeAt(0) + offset - 26) : String.fromCharCode(s.charCodeAt(0) + offset)).join('');
}

export function analyzeArray(arr) {
    const average = arr.reduce((acc, item) => acc + item, 0) / arr.length;
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
    const length = arr.length;

    return {
        average: average,
        min: minValue,
        max: maxValue,
        length: length
    };
}
