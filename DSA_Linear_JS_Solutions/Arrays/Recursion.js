function recursiveFunction(parameters) {
    if (baseCaseCondition) {
        return result; // Base case
    }
    // Recursive case
    return recursiveFunction(smallerProblem);
}
//---------------------------------

function factorial(n) {
    if (n === 1) { // Base case
        return 1;
    }
    return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // Output: 120
//------------------------------------


