// Create a function called `myFunction()`
// YOUR CODE HERE
myFunction = () => {
    //
    // Create a variable that will use `document.querySelector()` to target the `id` of the input
    let searchTerm = document.getElementById("searchTerm").value;
    // Use `.value` to capture the value of the input and store it in the variable
    // YOUR CODE HERE
    //
    // Make a `fetch` request concatenating that variable to the query URL
    // Remember to add your API key at the end
    // YOUR CODE HERE
    //
    let API = "HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1";
    fetch(
        // `https://api.giphy.com/v1/gifs/search?q=` +
        //     searchTerm +
        //     "&api_key=" +
        //     API
        `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API}`
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            // Create a variable that will select the <div> where the GIF will be displayed
            // YOUR CODE HERE
            let appendHere = document.getElementById("response-container");

            //
            // Empty out the <div> before we append a GIF to it
            appendHere.innerHTML = "";
            // YOUR CODE HERE
            //
            var gifImg = document.createElement("img");
            gifImg.setAttribute(
                "src",
                response.data[0].images.fixed_height.url
            );
            // Append 'gifImg' to the <div>
            // YOUR CODE HERE
            appendHere.appendChild(gifImg);
            //
        });
};
