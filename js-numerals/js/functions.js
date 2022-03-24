let ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

/*const checkbox_number = document.getElementById("number");
const checkbox_year = document.getElementById("year");
const number = document.getElementById("input_field").value;
const text = document.getElementById("text");*/

function convert_milliards(num) {
    //Checks num is greater than 999999999
    if(num > 999999999) {

        //Check num is greater than 100000000000 and num's 10 characters are 0
        if (num > 100000000000 && num.toString().substr(1, 9) == "000000000" || num.toString().substr(9,10) == "0") return convert_millions(Math.floor(num / 1000000000)) + " milliard and " + convert_millions(num % 1000000000);

        //Checks num is greater than 10000000000 and num is less than 100000000000 and num's nine characters are 0
        if (num > 10000000000 && num < 100000000000 && num.toString().substr(1, 8) == "00000000" || num.toString().substr(8,9) == "0") return convert_millions(Math.floor(num / 1000000000)) + " milliard and " + convert_millions(num % 1000000000);

        //Checks num is greater than 1000000000 and num is less than 10000000000 and num's eight characters are 0
        if (num > 1000000000 && num < 10000000000 && num.toString().substr(1, 7) == "0000000" || num.toString().substr(7,8) == "0") return convert_millions(Math.floor(num / 1000000000)) + " milliard and " + convert_millions(num % 1000000000);

        return convert_millions(Math.floor(num / 1000000000)) + " milliard " + convert_millions(num % 1000000000);
    }

    return convert_millions(num);
}

function convert_millions(num) {
    //Checks num is greater than 999999
    if(num > 999999) {
        if (num > 1000000 && num < 10000000 && num.toString().substr(1, 5) == "00000") return convert_thousands(Math.floor(num / 1000000)) + " million and " + convert_thousands(num % 1000000);
        
        if (num > 10000000 && num < 100000000 && num.toString().substr(1, 6) == "000000") return convert_thousands(Math.floor(num / 1000000)) + " million and " + convert_thousands(num % 1000000);
        
        if (num > 100000000 && num < 1000000000 && num.toString().substr(1, 7) == "0000000") return convert_thousands(Math.floor(num / 1000000)) + " million and " + convert_thousands(num % 1000000);

        return convert_thousands(Math.floor(num / 1000000)) + " million " + convert_thousands(num % 1000000);
    }

    return convert_thousands(num);
}

function convert_thousands(num, year = false) {
    if(year == false) {
         //Checks num is greater than 999
        if(num > 999) {

            //Checks num is greater than 100000 and num's three and four characters are 0
            if(num > 100000 && num.toString()[3] == "0" && num.toString()[4] == "0") return convert_hundreds(Math.floor(num / 1000)) + " thousand and " + convert_hundreds(num % 100000);

            //Checks num is greater than 10000 and num is less than 100000 and num's two and three characters are 0
            if(num > 10000 && num < 100000 && num.toString()[2] == "0" && num.toString()[3] == "0") return convert_hundreds(Math.floor(num / 1000)) + " thousand and " + convert_hundreds(num % 10000);

            //Checks num is greater than 1000 and num is less than 10000 and num's one and two characters are 0
            if(num > 1000 && num < 10000 && num.toString()[1] == "0" && num.toString()[2] == "0") return convert_hundreds(Math.floor(num / 1000)) + " thousand and " + convert_hundreds(num % 1000);

            return convert_hundreds(Math.floor(num / 1000)) + " thousand " + convert_hundreds(num % 1000);
        }

        return convert_hundreds(num);
    }

     //Checks num is greater than 999
     if(num > 999) {

        if(num >= 1000 && num.toString().substr(1, 4) == "000") return convert_hundreds(Math.floor(num / 1000), true) + " thousand";

        if(num > 1000 && num.toString().substr(1, 2) == "00") return convert_hundreds(Math.floor(num / 1000), true) + " thousand and " + convert_hundreds(num % 1000, true);

        if(num > 1000 && num.toString().substr(2, 3) == "00") return convert_hundreds(Math.floor(num / 100), true) + " hundred";

        if(num > 1000 && num.toString()[2] == "0") return convert_hundreds(Math.floor(num / 100), true) + " oh " + convert_hundreds(num % 100, true)
        
        return convert_hundreds(Math.floor(num / 100,true)) + " " + convert_hundreds(num % 100,true);
    }

    return convert_hundreds(num, true);
}

function convert_hundreds(num, year = false) {
    //Checks year is false
    if(year == false) {
        //Checks num is greater than 99
        if(num > 99) {
            //Checks num's two last characters are 0
            if(num.toString().substr(1, num.toString().length) == "00") return ones[Math.floor(num / 100)] + " hundred";

            return ones[Math.floor(num / 100)] + " hundred and " + convert_tens(num % 100); 
        }

        return convert_tens(num);
    }

    //Checks nim is greater than 99
    if(num > 99) {
        //Checks num's two last characters are 0
        if(num.toString().substr(1, num.toString().length) == "00") return ones[Math.floor(num / 100)] + " hundred";

        //Checks num's one character is 0
        if(num.toString()[1] == "0") return ones[Math.floor(num / 100)] + " oh " + convert_tens(num % 100);

        return ones[Math.floor(num / 100)] + " " + convert_tens(num % 100);
    }

    return convert_tens(num);
}

function convert_tens(num) {
    //Checks num is less than 10
    if(num < 10) return ones[num];

    //Checks num is greater or equal 10 and num is less than 20
    if(num >= 10 && num < 20) return teens[num - 10];

    //Checks num is greater than 10 and num's last character is 0
    if(num > 10 &&  num.toString().substr(1, num.toString().length) == "0") return tens[num / 10];

    return tens[Math.floor(num / 10)] + "-" + ones[num % 10];
}

function convert(num) {
    // if(checkbox_number.checked == true) {
    //     if (num == 0) return "zero";

    //     return convert_milliards(num);
    // }

    // if(num <= 0 || num > 9999) return "Add The Year Between 1 and 9999";

    // return convert_thousands(num, true);
    pass
}

//exports for the tests too
module.exports = {
    convert,
    convert_tens,
    convert_hundreds,
    convert_thousands,
    convert_millions,
    convert_milliards,
};
