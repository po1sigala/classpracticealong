const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "tell me your name",
        },
        {
            type: "list",
            message: "What is your preferred method of communication?",
            name: "contact",
            choices: ["email", "phone", "Slack", "smoke signal"],
        },
        {
            type: "checkbox",
            message: "What languages do you know?",
            name: "stack",
            choices: ["HTML", "CSS", "JavaScript", "SQL"],
        },
    ])
    .then(function (data) {
        console.log(data);
        const filename = data.name.toLowerCase().split(" ").join("") + ".json";
        // fs.writeFile(
        //     filename,
        //     JSON.stringify(data, null, "\t"),
        //     function (err) {
        //         if (err) {
        //             return console.log(err);
        //         }
        //         console.log("yaaaas done");
        //     }
        // );
    });
