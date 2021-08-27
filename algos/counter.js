//print even number up to a given number

let countToI = (stop) => {
    for (i = 0; i < stop + 1; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
};
let numberToCountTo = prompt("enter a number to count to");
numberToCountTo = parseInt(numberToCountTo);
countToI(numberToCountTo);
