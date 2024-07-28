
function sumNumbers(numbersJson) {
    const numbers = JSON.parse(numbersJson);
    let total = 0;
    numbers.forEach(num => total += num);
    return total;
}

console.assert(sumNumbers(JSON.stringify([1, 2, 3, 4])) === 10, 'Тест 1 не пройден');

console.assert(sumNumbers(JSON.stringify([])) === 0, 'Тест 2 не пройден');

console.assert(sumNumbers(JSON.stringify([-1, -2, -3, -4])) === -10, 'Тест 3 не пройден');

console.assert(sumNumbers(JSON.stringify([1.5, 2.5, 3.5])) === 7.5, 'Тест 4 не пройден');

console.assert(sumNumbers(JSON.stringify([0, 0, 0, 0])) === 0, 'Тест 5 не пройден');

console.assert(sumNumbers(JSON.stringify([42])) === 42, 'Тест 6 не пройден');

