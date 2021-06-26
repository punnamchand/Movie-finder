document.getElementById("movie_title").addEventListener("keyup", function (event) {

  if (event.keyCode === 13) {
    event.preventDefault();

    document.getElementById("btn").click();
  }
});

function getMovieInfo() {
  var uid = document.getElementById("movie_title").value;
  var req = new XMLHttpRequest();
  var url = "https://www.omdbapi.com/?i=tt3896198&apikey=697c891d&t=";

  req.open("GET", url + uid);
  req.send();
  req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var c = JSON.parse(this.responseText);

      if (c.Title == undefined) {
        alert('Please enter a correct title');
      }
      else {
        if (screen.width > 800 && screen.width <= 1200) {
          document.getElementsByClassName("details")[0].style.backgroundColor = "white";
          document.getElementsByClassName("details")[0].style.border = "2px solid green";
          document.getElementsByClassName("image")[0].style.border = "2px solid green";
          document.getElementsByClassName("image")[0].style.backgroundColor = "white";
          document.getElementsByClassName("image")[0].style.width = "auto";

        }
        else if (screen.width <= 800) {
          document.getElementsByClassName("details")[0].style.backgroundColor = "white";
          document.getElementsByClassName("details")[0].style.border = "2px solid green";
          document.getElementsByClassName("image")[0].style.border = "2px solid green";
          document.getElementsByClassName("image")[0].style.backgroundColor = "white";
          document.getElementsByClassName("image")[0].style.width = "auto";

          document.getElementById("movieresults").style.width = "935px";
          document.getElementsByClassName("details")[0].style.width = "450px";


        }
        else {
          document.getElementsByClassName("details")[0].style.backgroundColor = "white";
          document.getElementsByClassName("details")[0].style.border = "2px solid green";
          document.getElementsByClassName("image")[0].style.border = "2px solid green";
          document.getElementsByClassName("image")[0].style.backgroundColor = "white";
        }


        for (const [key, value] of Object.entries(c)) {
          if (`${value}` == c.Title) {
            document.querySelector("#title>.title").innerHTML = `${key}:`;
            document.querySelector("#title>.description").innerHTML = `${value}`;
          }
          if (`${value}` == c.Year) {
            document.querySelector("#Year>.title").innerHTML = `${key}:`;
            document.querySelector("#Year>.description").innerHTML = `${value}`;
          }
          if (`${value}` == c.Rated) {
            document.querySelector("#Rated>.title").innerHTML = `${key}:`;
            document.querySelector("#Rated>.description").innerHTML = `${value}`;
          }

          if (`${value}` == c.Director) {
            document.querySelector("#Director>.title").innerHTML = `${key}:`;
            document.querySelector("#Director>.description").innerHTML = `${value}`;
          }
          if (`${value}` == c.Genre) {
            document.querySelector("#Genre>.title").innerHTML = `${key}:`;
            document.querySelector("#Genre>.description").innerHTML = `${value}`;
          }
          if (`${value}` == c.imdbRating) {
            document.querySelector("#imdbRating>.title").innerHTML = `IMDB Rating:`;
            document.querySelector("#imdbRating>.description").innerHTML = `${value}`;
          }
          if (`${value}` == c.Plot) {
            document.querySelector("#Plot>.title").innerHTML = `${key}:`;
            document.querySelector("#Plot>.description").innerHTML = `${value}`;
          }
          if (`${value}` == c.Poster) {
            document.getElementById("movpos").src = `${value}`;
            document.getElementById("movpos").alt = `MoviePoster`;
            document.getElementById("movpos").style.height = "400px";
            document.getElementById("movpos").style.width = "300px"
          }

        }

        document.getElementById("moviesearch").style.top = "22%";
        document.getElementById("movieresults").style.top = "40%";
      }
    }

  }
}


