module.exports = function toReadable(number = 1) {
    const numUpToTwelve = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
    ];
    const baseNum = {
        '2': 'twent',
        '3': 'thirt',
        '4': 'fort',
        '5': 'fift',
        '6': 'sixt',
        '7': 'sevent',
        '8': 'eight',
        '9': 'ninet',
    };
    const arrFromNum = [...String(number)];
    const lenNum = arrFromNum.length;
    const lenBaseNum = numUpToTwelve.length;

    const getNumUpToTwelve = (num) => numUpToTwelve[num];
    const getNumLessHundred = ([firstPart, secondPart]) => {
        if (firstPart + secondPart == 14) return 'fourteen';
        if (firstPart + secondPart < lenBaseNum) {
            return getNumUpToTwelve(Number(firstPart + secondPart));
        }
        if (firstPart == 1) return baseNum[secondPart] + 'een';
        if (secondPart == 0) return baseNum[firstPart] + 'y';
        return `${baseNum[firstPart]}y ${getNumUpToTwelve(
            Number(secondPart)
        )}`;
    };
    const getNumMoreHundred = ([firstPart, secondPart, thirdPart]) => `${getNumUpToTwelve(
        Number(firstPart)
    )} hundred${(secondPart + thirdPart === '00') ? '' : ' ' + getNumLessHundred([secondPart, thirdPart])}`;

    return (number < lenBaseNum) ?
        getNumUpToTwelve(number) : (lenNum <= 2) ?
            getNumLessHundred(arrFromNum) : getNumMoreHundred(arrFromNum);
};
