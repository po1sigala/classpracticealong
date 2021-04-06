// TODO: Create a variable to hold the count
let count = 0;
let updatCount = (count) => {
    document.querySelector("#count").textContent = count;
};
// TODO: Create variables to select the increment button, decrement button and count heading by their respective ids.
document.getElementById("increment").addEventListener("click", function () {
    count++;
    updatCount(count);
});
document.getElementById("decrement").addEventListener("click", function () {
    count--;
    updatCount(count);
});
// TODO: Create a function that displays the current count on the page

// TODO: Create an addEventListener that will increment the count on click
// and calls the function to display the current count

// TODO: Create an addEventListener that will decrement the count on click
// and calls the function to display the current count
