const { test, expect } = require("@jest/globals");

const {convert_tens, convert_hundreds} = require("../js/functions");

test("convert_tens passes for an number (7)", () => {
    expect(convert_tens(7)).toEqual("seven");
});

test("convert_tens passes for an number (47)", () => {
    expect(convert_tens(47)).toEqual("forty-seven");
});

test("convert_tens fails for a non-number", () => {
    expect(convert_tens("seven")).toEqual("seven");
});

test("convert_hundreds passes for an nunber (7)", () => {
    expect(convert_hundreds(7)).toEqual("seven");
});

test("convert_hundreds passes for an nunber (47)", () => {
    expect(convert_hundreds(47)).toEqual("forty-seven");
});

test("convert_hundreds passes for an nunber (100)", () => {
    expect(convert_hundreds(100)).toEqual("one hundred");
});

test("convert_hundreds passes for an nunber (199)", () => {
    expect(convert_hundreds(199)).toEqual("one hundred and ninety-nine");
});

test("convert_hundreds fails for an non-number", () => {
    expect(convert_hundreds("one hundred")).toEqual("one hundred");
});