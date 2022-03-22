let ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

/*const checkbox_number = document.getElementById("number");
const checkbox_year = document.getElementById("year");
const number = document.getElementById("input_field").value;
const text = document.getElementById("text");*/

function convert_thousands(num) {
    if (num >= 1000) 
        //num >= 1000 return convert_hundreds and " thousand " plus convert_hundreds
        return convert_hundreds(Math.floor(num / 1000)) + " thousand " + convert_hundreds(num % 1000);
    else 
        //num < 1000 then give the number to convert_hundreds function and return value
        return convert_hundreds(num);
}

function convert_hundreds(num) {
    if(num > 99) 
        //num > 99 and second and last characters are 0 return an element of ones and "hundred"
        return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
    else 
        // num < 100 then give the number to convert_tens function and return value
        return convert_tens(num);
}

function convert_tens(num) {
    if (num < 10)
        //num < 10 then return an element of ones array
        return ones[num];
    else if (num >= 10 && num < 20)
        //num >=10 and num < 20 return an element of teens array
        return teens[num - 10];
    else if (num >= 10 && num[1] == 0)
        //num >= 10 and second character of num is equal 0 return an element of tens 
        return tens[num / 10];
    else 
        //otherwise return an element of tens and an element of ones with "-"
        return tens[Math.floor(num / 10)] + "-" + ones[num % 10];
}

function convert(num) {
    if (num == 0) return "zero";
    else return convert_tens(num);
}

//exports for the tests too
module.exports = {
    convert_tens,
    convert_hundreds,
    convert_thousands,
};