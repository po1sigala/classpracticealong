let promptUser = () => {
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
        return false;
    } else if (validResponse === true) {
        //create object containing all of our values
        let characters = {
            useSpecials: [
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
            ],
            useUpper: [
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
            ],
            useLower: [
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
            ],
            useNumbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        };
        //create an array containing all the parameters slected
        let masterArr = assembleArr(responses, characters);
        //randomly select from the array to generate the password
        let password = assemblePassword(masterArr, responses.length);
        return password;
    }
};
let validator = (responses, errorList) => {
    let hasErrors = false;

    if (
        parseInt(responses.length) > 128 ||
        parseInt(responses.length) < 8 ||
        responses.length == null
    ) {
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
let assembleArr = (responses, characters) => {
    let arr = [];
    let keys = Object.keys(responses);

    keys.map((i) => {
        if (responses[i] === true) {
            arr.push(characters[i]);
        }
    });
    return arr;
};
let assemblePassword = (arr, length) => {
    let password = [];
    let j;
    let k;
    for (i = 0; i < length; i++) {
        j = Math.floor(Math.random() * arr.length);
        k = Math.floor(Math.random() * arr[j].length);
        password.push(arr[j][k]);
    }
    password = password.join(``);

    return password;
};

//--------------EVENT LISTENERS----------------------------
document.getElementById("passwordGen").addEventListener("click", function () {
    let password = creatPassword();
    if (password === false) {
        return;
    } else {
        alert(`your password is ${password}`);
    }
});
