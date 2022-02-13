export class Drug {
	constructor(name, expiresIn, benefit) {
		this.name = name;
		this.expiresIn = expiresIn;
		this.benefit = benefit;
	}
}

export class Pharmacy {
	constructor(drugs = []) {
		this.drugs = drugs;
	}

	updateBenefitValue() {
		let updatedDrugs = [];

		this.drugs.reduce((_, currentValue) => {
			switch (currentValue.name) {
				case "Herbal Tea":
					currentValue.expiresIn <= 0 ? (currentValue.benefit += 2) : (currentValue.benefit += 1);
					currentValue.benefit >= 50 ? (currentValue.benefit = 50) : currentValue.benefit;
					currentValue.benefit <= 0 ? (currentValue.benefit = 0) : currentValue.benefit;
					currentValue.expiresIn--;
					break;

				case "Fervex":
					currentValue.expiresIn >= 10 ? (currentValue.benefit += 2) : (currentValue.benefit += 1);
					currentValue.expiresIn >= 5 ? currentValue.benefit : (currentValue.benefit += 1);
					currentValue.expiresIn == 0 ? (currentValue.benefit = 0) : currentValue.benefit;
					currentValue.benefit >= 50 ? (currentValue.benefit = 50) : currentValue.benefit;
					currentValue.benefit <= 0 ? (currentValue.benefit = 0) : currentValue.benefit;
					currentValue.expiresIn--;
					break;

				case "Magic Pill":
					break;

				case "Dafalgan":
					currentValue.expiresIn <= 0 ? (currentValue.benefit -= 4) : (currentValue.benefit -= 2);
					currentValue.benefit >= 50 ? (currentValue.benefit = 50) : currentValue.benefit;
					currentValue.benefit <= 0 ? (currentValue.benefit = 0) : currentValue.benefit;
					currentValue.expiresIn--;
					break;

				default:
					currentValue.expiresIn <= 0 ? (currentValue.benefit -= 2) : (currentValue.benefit -= 1);
					currentValue.benefit >= 50 ? (currentValue.benefit = 50) : currentValue.benefit;
					currentValue.benefit <= 0 ? (currentValue.benefit = 0) : currentValue.benefit;
					currentValue.expiresIn--;
			}

			updatedDrugs.push(currentValue);
		}, []);

		return updatedDrugs;
	}
}
