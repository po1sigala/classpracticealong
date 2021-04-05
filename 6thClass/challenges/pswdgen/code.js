let promptUser = (response) => {
    const length = prompt(
        `what length of password woudl you like? Password must be between 8 and 128 characters`
    );
    const useSpecials = confirm(
        "would you like us to add special characters to your secure password?"
    );

    const useUpper = confirm(
        `would you like us to use upper case letters in your secured password?`
    );
    const useLower = confirm(
        `would you like us to use lower case in your secured password?`
    );
    const useNumbers = confirm(
        `Would you like us to use numbers in your secured password?`
    );
    let responses = {
        length: length,
        useSpecials: useSpecials,
        useUpper: useUpper,
        useLower: useLower,
        useNumbers: useNumbers,
    };
    return responses;
};
const specialCharacters = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
];
const lowerCases = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
const upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//start logic
let creatPassword = () => {
    //get password criteria
    let responses = promptUser();
    const errorList = [];
    //make sure it meets standards
    let validResponse = validator(responses, errorList);

    if (validResponse === false) {
        alert(
            `please make the following changes to your slections:\n${errorList}`
        );
    } else if (validResponse === true) {
        assemblePassword();
    }
};
let validator = (responses, errorList) => {
    let hasErrors = false;

    if (
        parseInt(responses.length) > 128 ||
        parseInt(responses.length) < 8 ||
        responses.length == null
    ) {
        console.log("error");
        errorList.push(
            ` password cannot be ${responses.length} characters long please choose a password  between 8 and 128 characters long`
        );
        hasErrors = true;
    }
    if (
        responses.useLower === false &&
        responses.useUpper === false &&
        responses.useSpecials === false &&
        responses.useNumbers === false
    ) {
        errorList.push(
            ` No criteria selected. you must select at least one criteria (lowe/upper case, numbers, or special characters) for your password`
        );
        hasErrors = true;
    }

    if (hasErrors === true) {
        return false;
    } else {
        return true;
    }
};
let assemblePassword = (arr) => {};

creatPassword();
