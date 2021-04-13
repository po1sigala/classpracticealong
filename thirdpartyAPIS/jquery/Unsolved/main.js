console.log("running");
let pbjcount = 0;
let bltcount = 0;
let grillCount = 0;
let displayGif = (search) => {
    let queryURL =
        "https://api.giphy.com/v1/gifs/search?q=" +
        search +
        "&api_key=3QGN2O8Bws9dO6cv6z5FmzS3twWYL4ZZ&limit=10&offset=0&rating=PG-13&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
    });
};
$("#pbj").on("click", function (event) {
    pbjcount++;
    alert(`boring choice youve now eate ${pbjcount} pbj sandwiches`);
    displayGif("PBJ");
});
