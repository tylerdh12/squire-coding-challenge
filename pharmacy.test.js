import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
	it("should decrease the benefit and expiresIn", () => {
		expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
			[new Drug("test", 1, 2)]
		);
	});
});

// Test for Dafalgan correct decrement
describe("Pharmacy", () => {
	it("should decrease the benefit by double the standard and expiresIn only 1", () => {
		expect(
			new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
		).toEqual([new Drug("Dafalgan", 1, 1)]);
	});
});

// The standard drug value should never be less than 0
describe("Pharmacy", () => {
	it("should never be less than 0", () => {
		expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
			[new Drug("test", 1, 0)]
		);
	});
});

// Date should never be less than 0
describe("Pharmacy", () => {
	it("Dafalgan should never be less than 0", () => {
		expect(
			new Pharmacy([new Drug("Dafalgan", 2, 1)]).updateBenefitValue()
		).toEqual([new Drug("Dafalgan", 1, 0)]);
	});
});
