const {describe, it} = require("@jest/globals");

const { test, expect } = require("@jest/globals");

const {convert_tens, convert_hundreds, convert_thousands, convert_millions, convert_milliards} = require("../js/functions");

describe("convert_tens", () => {
    it("Pass For a Number (7)", () => {
        expect(convert_tens(7)).toEqual("seven");
    });

    it("Pass for an number (10)", () => {
        expect(convert_tens(10)).toEqual("ten");
    });

    it("Pass for an number (11)", () => {
        expect(convert_tens(11)).toEqual("eleven");
    });

    it("Pass for an number (12)", () => {
        expect(convert_tens(12)).toEqual("twelve");
    });

    it("Pass for an number (18)", () => {
        expect(convert_tens(18)).toEqual("eighteen");
    });

    it("Pass for an number (42)", () => {
        expect(convert_tens(42)).toEqual("forty-two");
    });

    it("Pass for an number (57)", () => {
        expect(convert_tens(57)).toEqual("fifty-seven");
    });

    it("Pass for an number (70)", () => {
        expect(convert_tens(70)).toEqual("seventy");
    });

    it("Pass for an number (99)", () => {
        expect(convert_tens(99)).toEqual("ninety-nine");
    });
});

describe("convert_hundreds", () => {
    it("Check 7", () => {
        expect(convert_hundreds(7)).toEqual("seven");
    });

    it("Check 42", () => {
        expect(convert_hundreds(42)).toEqual("forty-two");
    });

    it("Check 100", () => {
        expect(convert_hundreds(100)).toEqual("one hundred");
    });

    it("Check 299", () => {
        expect(convert_hundreds(299)).toEqual("two hundred and ninety-nine")
    });

    it("Check 545", () => {
        expect(convert_hundreds(545)).toEqual("five hundred and forty-five")
    });

    it("Check 999", () => {
        expect(convert_hundreds(999)).toEqual("nine hundred and ninety-nine")
    });
});

describe("convert_thousands", () => {
    it("Check 7", () => {
        expect(convert_thousands(7)).toEqual("seven");
    });

    it("Check 42", () => {
        expect(convert_thousands(42)).toEqual("forty-two");
    });

    it("Check 1000", () => {
        expect(convert_thousands(1000)).toEqual("one thousand ")
    });

    it("Check 1999", () => {
        expect(convert_thousands(1999)).toEqual("one thousand nine hundred and ninety-nine")
    });

    it("Check 2001", () => {
        expect(convert_thousands(2001)).toEqual("two thousand and one")
    });

    it("Check 2101", () => {
        expect(convert_thousands(2101)).toEqual("two thousand one hundred and one")
    });

    it("Check 10000", () => {
        expect(convert_thousands(10000)).toEqual("ten thousand ");
    });

    it("Check 20001", () => {
        expect(convert_thousands(20001)).toEqual("twenty thousand and one");
    });

    it("Check 17999", () => {
        expect(convert_thousands(17999)).toEqual("seventeen thousand nine hundred and ninety-nine")
    });

    it("Check 100000", () => {
        expect(convert_thousands(100000)).toEqual("one hundred thousand ")
    });

    it("Check 100001", () => {
        expect(convert_thousands(100001)).toEqual("one hundred thousand and one")
    });

    it("Check 342251", () => {
        expect(convert_thousands(342251)).toEqual("three hundred and forty-two thousand two hundred and fifty-one")
    });
});

describe("convert_millions", () => {
    it("Check 7", () => {
        expect(convert_millions(7)).toEqual("seven");
    });

    it("Check 42", () => {
        expect(convert_millions(42)).toEqual("forty-two");
    });

    it("Check 1999", () => {
        expect(convert_millions(1999)).toEqual("one thousand nine hundred and ninety-nine")
    });

    it("Check 2001", () => {
        expect(convert_millions(2001)).toEqual("two thousand and one")
    });

    it("Check 17999", () => {
        expect(convert_millions(17999)).toEqual("seventeen thousand nine hundred and ninety-nine")
    });

    it("Check 100001", () => {
        expect(convert_millions(100001)).toEqual("one hundred thousand and one")
    });

    it("Check 342251", () => {
        expect(convert_millions(342251)).toEqual("three hundred and forty-two thousand two hundred and fifty-one")
    });

    it("Check 1000001", () => {
        expect(convert_millions(1000001)).toEqual("one million and one")
    });

    it("Check 1300420", () => {
        expect(convert_millions(1300420)).toEqual("one million three hundred thousand four hundred and twenty")
    });

    it("Check 1999999", () => {
        expect(convert_millions(1999999)).toEqual("one million nine hundred and ninety-nine thousand nine hundred and ninety-nine")
    });

    it("Check 10000001", () => {
        expect(convert_millions(10000001)).toEqual("ten million and one")
    });

    it("Check 19999999", () => {
        expect(convert_millions(19999999)).toEqual("nineteen million nine hundred and ninety-nine thousand nine hundred and ninety-nine")
    });

    it("Check 100000001", () => {
        expect(convert_millions(100000001)).toEqual("one hundred million and one")
    });

    it("Check 199999999", () => {
        expect(convert_millions(199999999)).toEqual("one hundred and ninety-nine million nine hundred and ninety-nine thousand nine hundred and ninety-nine")
    });
});

describe("convert_milliards", () => {
    it("Check 7", () => {
        expect(convert_milliards(7)).toEqual("seven");
    });

    it("Check 42", () => {
        expect(convert_milliards(42)).toEqual("forty-two");
    });

    it("Check 1999", () => {
        expect(convert_milliards(1999)).toEqual("one thousand nine hundred and ninety-nine")
    });

    it("Check 2001", () => {
        expect(convert_milliards(2001)).toEqual("two thousand and one")
    });

    it("Check 17999", () => {
        expect(convert_milliards(17999)).toEqual("seventeen thousand nine hundred and ninety-nine")
    });

    it("Check 100001", () => {
        expect(convert_milliards(100001)).toEqual("one hundred thousand and one")
    });

    it("Check 342251", () => {
        expect(convert_milliards(342251)).toEqual("three hundred and forty-two thousand two hundred and fifty-one")
    });

    it("Check 1300420", () => {
        expect(convert_milliards(1300420)).toEqual("one million three hundred thousand four hundred and twenty")
    });

    it("Check 1000000001", () => {
        expect(convert_milliards(1000000001)).toEqual("one milliard and one")
    });

    it("Check 1000000011", () => {
        expect(convert_milliards(1000000011)).toEqual("one milliard and eleven")
    });

    it("Check 1000000111", () => {
        expect(convert_milliards(1000000111)).toEqual("one milliard one hundred and eleven")
    });

    it("Check 10000000001", () => {
        expect(convert_milliards(10000000001)).toEqual("ten milliard and one")
    });

    it("Check 100000000001", () => {
        expect(convert_milliards(100000000001)).toEqual("one hundred milliard and one")
    });

    it("Check 999999999999", () => {
        expect(convert_milliards(999999999999)).toEqual("nine hundred and ninety-nine milliard nine hundred and ninety-nine million nine hundred and ninety-nine thousand nine hundred and ninety-nine")
    });
});

describe("convert_tens_to_year", () => {
    it("Pass For a Number (7)", () => {
        expect(convert_tens(7)).toEqual("seven");
    });

    it("Pass for an number (10)", () => {
        expect(convert_tens(10)).toEqual("ten");
    });

    it("Pass for an number (11)", () => {
        expect(convert_tens(11)).toEqual("eleven");
    });

    it("Pass for an number (12)", () => {
        expect(convert_tens(12)).toEqual("twelve");
    });

    it("Pass for an number (18)", () => {
        expect(convert_tens(18)).toEqual("eighteen");
    });

    it("Pass for an number (42)", () => {
        expect(convert_tens(42)).toEqual("forty-two");
    });

    it("Pass for an number (57)", () => {
        expect(convert_tens(57)).toEqual("fifty-seven");
    });

    it("Pass for an number (70)", () => {
        expect(convert_tens(70)).toEqual("seventy");
    });

    it("Pass for an number (99)", () => {
        expect(convert_tens(99)).toEqual("ninety-nine");
    });
});