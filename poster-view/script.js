// Lists/Arrays uses [] to declare.
var moviesURL = []
moviesURL.push("https://img.elo7.com.br/product/original/3B3CC4E/big-poster-filme-karate-kid-1984-lo001-tamanho-90x60-cm-karate-kid.jpg")
moviesURL.push("https://m.media-amazon.com/images/M/MV5BMTM1NjE0NDA0MV5BMl5BanBnXkFtZTcwODE4NDg1Mw@@._V1_.jpg")
moviesURL.push("https://i.pinimg.com/originals/81/ca/cf/81cacf597dd5d982d079191d71b20d7c.jpg")

var img = document.createElement("img");
var moviesDiv = document.getElementById("movies-poster");

for(var i = 0; i < moviesURL.length; i++){
    img.src = moviesURL[i];
    // moviesDiv.appendChild(img)
    // document.write("<img src="+ moviesURL[i] + ">")
    moviesDiv.innerHTML += "<img src=" + moviesURL[i] + ">";
}


// Add a new movie from input box.
var newMovieURL = document.getElementById("movie-url-input");
newMovieURL.addEventListener("keydown", function(e) {
    if(e.key === "Enter"){
        addMovie(e);
    }
});


function addMovie(newMovieURL){
    var newMovieURLLink = newMovieURL.target.value;
    
    console.log("newMovieURL: " + newMovieURL);
    console.log("newMovieURLLink" + newMovieURLLink);

    moviesDiv.innerHTML += "<img src=" + newMovieURLLink + ">";
}
