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
		for (var i = 0; i < this.drugs.length; i++) {
			if (
				this.drugs[i].name != "Herbal Tea" &&
				this.drugs[i].name != "Fervex"
			) {
				if (this.drugs[i].benefit > 0) {
					if (this.drugs[i].name != "Magic Pill") {
						if (this.drugs[i].name != "Dafalgan") {
							// Standard drug
							this.drugs[i].benefit = this.drugs[i].benefit - 1;
						} else {
							// Dafalgan
							if (this.drugs[i].benefit > 1) {
								this.drugs[i].benefit = this.drugs[i].benefit - 2;
							} else {
								this.drugs[i].benefit = 0;
							}
						}
					}
				}
			} else {
				if (this.drugs[i].benefit < 50) {
					this.drugs[i].benefit = this.drugs[i].benefit + 1;
					if (this.drugs[i].name == "Fervex") {
						if (this.drugs[i].expiresIn < 11) {
							if (this.drugs[i].benefit < 50) {
								this.drugs[i].benefit = this.drugs[i].benefit + 1;
							}
						}
						if (this.drugs[i].expiresIn < 6) {
							if (this.drugs[i].benefit < 50) {
								this.drugs[i].benefit = this.drugs[i].benefit + 1;
							}
						}
					}
				}
			}

			// Decrement of ExpiresIn value
			if (this.drugs[i].name != "Magic Pill") {
				this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
			}

			// Post ExpiresIn benefit management
			if (this.drugs[i].expiresIn < 0) {
				if (this.drugs[i].name != "Herbal Tea") {
					if (this.drugs[i].name != "Fervex") {
						if (this.drugs[i].benefit > 0) {
							if (this.drugs[i].name != "Magic Pill") {
								// Standard Drug
								this.drugs[i].benefit = this.drugs[i].benefit - 1;
							}
						}
					} else {
						this.drugs[i].benefit =
							this.drugs[i].benefit - this.drugs[i].benefit;
					}
				} else {
					if (this.drugs[i].benefit < 50) {
						this.drugs[i].benefit = this.drugs[i].benefit + 1;
					}
				}
			}
		}

		return this.drugs;
	}
}
