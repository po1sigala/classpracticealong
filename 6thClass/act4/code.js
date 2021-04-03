console.log("js added");

document.getElementById("addition").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    let type = typeof a;
    console.log(` the first number called a is ${a} its type is ${type}`);
    const sum = a + b;
    alert(`sum is ${sum}`);
});
//adder function takes three gives sum
function adder(a, b, c) {
    return a + b + c;
}
function multiplier(a, b, c) {
    return a * b * c;
}

function isSrting(a, b, c) {
    if (
        typeof a == "string" &&
        typeof b === "string" &&
        typeof c === "string"
    ) {
        console.log("all strings");
    } else {
        console.log("not all strings");
    }
}
isSrting("hj", "df", true);
