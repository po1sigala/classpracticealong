function myFunction() {
    var searchTerm = document.getElementById("searchTerm").value;
    // Create a variable to hold the value of rating
    let rating = document.getElementById("rating").value;
    // YOUR CODE HERE
    //
    const apiKey = "HvaacROi9w5oQCDYHSIk42eiDSIXH3FN";
    console.log(`rating is ${rating}`);
    fetch(
        `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&rating=${rating}&api_key=${apiKey}`
        // Add the rating parameter
        // YOUR CODE HERE

        // Remember to add your API key
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response.data[0]);
            var responseContainerEl = document.querySelector(
                "#response-container"
            );
            responseContainerEl.innerHTML = "";
            var gifImg = document.createElement("img");
            gifImg.setAttribute(
                "src",
                response.data[0].images.fixed_height.url
            );
            responseContainerEl.appendChild(gifImg);
        });
}
