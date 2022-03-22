const { test, expect } = require("@jest/globals");

const {convert_tens} = require("../js/functions");

test("convert_tens passes for an number (7)", () => {
    expect(convert_tens(7)).toEqual("seven");
});

test("convert_tens passes for an number (47)", () => {
    expect(convert_tens(47)).toEqual("forty-seven");
});

test("convert_tens fails for a non-number", () => {
    expect(convert_tens("seven")).toEqual("seven");
});