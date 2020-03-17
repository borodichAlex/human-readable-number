module.exports = function toReadable(number) {
	number = number + '';
	let numbers = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
	}

	let subStr = {
		'2': 'twent',
		'3': 'thirt',
		'4': 'fourt',
		'5': 'fift',
		'6': 'sixt',
		'7': 'sevent',
		'8': 'eight',
		'9': 'ninet',
		'100': 'hundred',
	}

	if (number < 13) {
		return numbers[number];
	}
	if (number > 12 && number < 20) {
		return subStr[number - 10] + 'een'
	}

	if (number > 19 && number < 100 && number[1] !== '0') {
		if (number[0] === '4') {
			return `forty ${numbers[number[1]]}`
		}
		return `${subStr[number[0]]}y ${numbers[number[1]]}`
	}

	if (number > 19 && number < 100 && number[1] === '0') {
		if (number[0] === '4') {
			return `forty`
		}
		return `${subStr[number[0]]}y`
	}

	if (number > 99 && number < 1000) {
		let dozen = number.slice(1);
		let result = '';

		result += `${numbers[number[0]]} ${subStr[100]}`;

		if (dozen > 0 && dozen < 13) result += ' ' + numbers[Number(dozen)];

		if (dozen > 12 && dozen < 20) result += ' ' + subStr[dozen - 10] + 'een';

		if (dozen > 19 && dozen < 100 && number.slice(2, 3) !== '0') {
			if (number.slice(1, 2) === '4') {
				return result += ' forty ' + numbers[number.slice(2, 3)];
			}
			return result += ' ' + subStr[number.slice(1, 2)] + 'y ' + numbers[number.slice(2, 3)];
		}

		if (dozen > 19 && dozen < 100 && number.slice(2, 3) === '0') {
			if (number.slice(1, 2) === '4') {
				return result += ' forty';
			}
			return result += ' ' + subStr[number.slice(1, 2)] + 'y';
		}

		return result;
	}

}
