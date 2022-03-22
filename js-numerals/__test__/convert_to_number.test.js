const { test, expect } = require("@jest/globals");

const {convert_tens, convert_hundreds, convert_thousands, convert_millions} = require("../js/functions");

test("convert_tens passes for an number (7)", () => {
    expect(convert_tens(7)).toEqual("seven");
});

test("convert_tens passes for an number (47)", () => {
    expect(convert_tens(47)).toEqual("forty seven");
});

test("convert_tens fails for a non-number", () => {
    expect(convert_tens("seven")).toEqual("seven");
});

test("convert_hundreds passes for an nunber (7)", () => {
    expect(convert_hundreds(7)).toEqual("seven");
});

test("convert_hundreds passes for an nunber (47)", () => {
    expect(convert_hundreds(47)).toEqual("forty seven");
});

test("convert_hundreds passes for an nunber (100)", () => {
    expect(convert_hundreds(100)).toEqual("one hundred ");
});

test("convert_hundreds passes for an nunber (199)", () => {
    expect(convert_hundreds(199)).toEqual("one hundred ninety nine");
});

test("convert_hundreds fails for an non-number", () => {
    expect(convert_hundreds("one hundred")).toEqual("one hundred ");
});

test("convert_thousands passes for an number (7)", () => {
    expect(convert_thousands(7)).toEqual("seven");
});

test("convert_thousands passes for an nunber (47)", () => {
    expect(convert_thousands(47)).toEqual("forty seven");
});

test("convert_thousands passes for an nunber (100)", () => {
    expect(convert_thousands(100)).toEqual("one hundred ");
});

test("convert_thousands passes for an nunber (199)", () => {
    expect(convert_thousands(199)).toEqual("one hundred ninety nine");
});

test("convert_thousands passes for an nunber (1999)", () => {
    expect(convert_thousands(1999)).toEqual("one thousand nine hundred ninety nine");
});

test("convert_thousands passes for an nunber (2001)", () => {
    expect(convert_thousands(2001)).toEqual("two thousand one");
});

test("convert_thousands passes for an nunber (17999)", () => {
    expect(convert_thousands(17999)).toEqual("seventeen thousand nine hundred ninety nine");
});

test("convert_thousands passes for an nunber (100001)", () => {
    expect(convert_thousands(100001)).toEqual("one hundred  thousand one");
});

test("convert_thousands passes for an nunber (342251)", () => {
    expect(convert_thousands(342251)).toEqual("three hundred forty two thousand two hundred fifty one");
});

test("convert_thousands fails for an non-number", () => {
    expect(convert_thousands("two thousand one")).toEqual("two thousand one");
});

test("convert_millions passes for an number (7)", () => {
    expect(convert_millions(7)).toEqual("seven");
});

test("convert_millions passes for an nunber (47)", () => {
    expect(convert_millions(47)).toEqual("forty seven");
});

test("convert_millions passes for an nunber (100)", () => {
    expect(convert_millions(100)).toEqual("one hundred ");
});

test("convert_millions passes for an nunber (199)", () => {
    expect(convert_millions(199)).toEqual("one hundred ninety nine");
});

test("convert_millions passes for an nunber (1999)", () => {
    expect(convert_millions(1999)).toEqual("one thousand nine hundred ninety nine");
});

test("convert_millions passes for an nunber (2001)", () => {
    expect(convert_millions(2001)).toEqual("two thousand one");
});

test("convert_millions passes for an nunber (17999)", () => {
    expect(convert_millions(17999)).toEqual("seventeen thousand nine hundred ninety nine");
});

test("convert_millions passes for an nunber (342251)", () => {
    expect(convert_millions(342251)).toEqual("three hundred forty two thousand two hundred fifty one");
});

test("convert_millions passes for an nunber (1300420)", () => {
    expect(convert_millions(1300420)).toEqual("one million three hundred  thousand four hundred twenty ");
});

test("convert_millions passes for an nunber (10300420)", () => {
    expect(convert_millions(10300420)).toEqual("ten million three hundred  thousand four hundred twenty ");
});

test("convert_millions passes for an nunber (100300420)", () => {
    expect(convert_millions(100300420)).toEqual("one hundred  million three hundred  thousand four hundred twenty ");
});

test("convert_millions fails for an non-number", () => {
    expect(convert_millions("one million three hundred  thousand four hundred twenty ")).toEqual("one million three hundred  thousand four hundred twenty ");
});