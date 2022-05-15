//code
document.querySelector(".button").addEventListener("click", function () {
  let filmName = document.querySelector(".search-box").value;
  fetch(`https://api.tvmaze.com/search/shows?q=${filmName}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.map(function (value) {
        // div one
        let litDiv = document.createElement("div");
        litDiv.classList.add("movie-card");
        // div two
        let littlest = document.createElement("div");
        litDiv.appendChild(littlest);
        //images
        littlest.classList.add("movie-image");
        let image = document.createElement("img");
        littlest.appendChild(image);
        image.src = value.show.image.medium;
        //header
        let headers = document.createElement("header");
        littlest.appendChild(headers);
        headers.innerText = value.show.name;
        headers.classList.add("movie-heading");

        //appendChild to movie section
        document.querySelector(".movies-section").appendChild(litDiv);
      });
    });
});
