let ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

/*const checkbox_number = document.getElementById("number");
const checkbox_year = document.getElementById("year");
const number = document.getElementById("input_field").value;
const text = document.getElementById("text");*/

function convert_hundreds(num) {
    let value = num.toString();
    if(num > 99 && value.substr(1, value.length - 1) == "00") return ones[Math.floor(num / 100)] + " hundred";
    else if(num > 99) return ones[Math.floor(num / 100)] + " hundred and " + convert_tens(num % 100);
    else return convert_tens(num);
}

function convert_tens(num) {
    //num < 10 then return an element of ones array
    if (num < 10) return ones[num];
    //num >=10 and num < 20 return an element of teens array
    else if (num >= 10 && num < 20) return teens[num - 10];
    //num >= 10 and second character of num is equal 0 return an element of tens
    else if (num >= 10 && num[1] == 0) return tens[num / 10];
    //otherwise return an element of tens and an element of ones with "-"
    else return tens[Math.floor(num / 10)] + "-" + ones[num % 10];
}

function convert(num) {
    if (num == 0) return "zero";
    else return convert_tens(num);
}

//exports for the tests too
module.exports = {
    convert_tens,
    convert_hundreds,
};