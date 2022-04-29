let raceNumber = Math.floor(Math.random() * 1000);

let RegisterationEarly = true;

let runnerAge = 19;

if (RegisterationEarly && runnerAge > 18) {
	raceNumber += 1000;
}

if (RegisterationEarly && runnerAge > 18) {
	console.log(
		`The race will begin at 9:30 am and your race number is: ${raceNumber}`
	);
} else if (!RegisterationEarly && runnerAge > 18) {
	console.log(
		`The race will begin at 11:00 am and your race number is: ${raceNumber}`
	);
} else if (runnerAge < 18) {
	console.log(
		`The race will begin at 12:30 pm and your race number is: ${raceNumber}`
	);
} else {
	console.log(`Please confirm your registeration! Thanks.`);
}
