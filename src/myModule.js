/**
 * Returns the sum of two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    return a + b;
}

/**
 * Returns a greeting message.
 * @param {string} name
 * @returns {string}
 */
function greet(name) {
    return `Hello, ${name}!`;
}

module.exports = { add, greet };
