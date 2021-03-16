$(".upButton").on(click, function () {
    $(".captainplanet").animate({ top: "-=200px" }, "normal");
});

$(".downButton").on("click", function () {
    $(".captainplanet").animate({ top: "+=200px" }, "normal");
});

// clean code problem
$("#randomButton").on("click", function () {
    for (var i = 0; i < 3; i++) {
        alert(Math.floor(Math.random() * 25) + 1);
    }
});

// When randomButton is clicked...
$("#randomButton").on("click", function () {
    // Loop through 3 times...
    for (var i = 0; i < 3; i++) {
        // And create an alert with a new random number between 1 and 25.
        alert(Math.floor(Math.random() * 25) + 1);
    }
});
