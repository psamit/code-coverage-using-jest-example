const INSUFFICIENT_ARGUMENTS = 'Insufficient arguments';

const sum = async (firstNumber, secondNumber) => {
    if (firstNumber && secondNumber) {
        return firstNumber + secondNumber;
    }
    throw INSUFFICIENT_ARGUMENTS;
}

const substract = async (firstNumber, secondNumber) => {
    if (firstNumber && secondNumber) {
        return firstNumber - secondNumber;
    }
    throw INSUFFICIENT_ARGUMENTS;
}

const divide = async (firstNumber, secondNumber) => {
    if (firstNumber && secondNumber) {
        return firstNumber / secondNumber;
    }
    throw INSUFFICIENT_ARGUMENTS;
}

const multiplyNumbers = async (firstNumber, secondNumber) => {
    if (firstNumber && secondNumber) {
        return firstNumber * secondNumber;
    }
    throw INSUFFICIENT_ARGUMENTS;
}

module.exports = { sum, substract, divide, multiplyNumbers }
