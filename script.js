AddElementBest();

AddElementMovies();
AddElementMovies2();
AddElementMovies3();
AddElementMovies4();


function AddElementBest() {
	var movies = document.getElementById('best_movie');

	var bestMoviesTitle = document.createElement('h2');
	bestMoviesTitle.setAttribute("id", "titre");
	bestMoviesTitle.innerText = "titre ";
	movies.appendChild(bestMoviesTitle);

	var bestMoviesYears = document.createElement("h2");
	bestMoviesYears.setAttribute("id", "years");
	bestMoviesYears.innerText = "année de sortie";
	movies.appendChild(bestMoviesYears);

	var bestMoviesDescription = document.createElement("h2");
	bestMoviesDescription.setAttribute("id", "description");
	bestMoviesDescription.innerText = "description du film";
	movies.appendChild(bestMoviesDescription);
}



function AddElementMovies() {
	var displayPrevious = document.getElementById('boxing_movies');
	
	var createDiv = document.createElement("div");
	createDiv.innerHTML = "<div class='box'></div>"
	displayPrevious.appendChild(createDiv);
}

function AddElementMovies2() {
	var displayPrevious = document.getElementById('boxing_movies2');
	
	var createDiv = document.createElement("div");
	createDiv.innerHTML = "<div class='box'></div>"
	displayPrevious.appendChild(createDiv);
}

function AddElementMovies3() {
	var displayPrevious = document.getElementById('boxing_movies3');
	
	var createDiv = document.createElement("div");
	createDiv.innerHTML = "<div class='box'></div>"
	displayPrevious.appendChild(createDiv);
}

function AddElementMovies4() {
	var displayPrevious = document.getElementById('boxing_movies4');
	
	var createDiv = document.createElement("div");
	createDiv.innerHTML = "<div class='box'></div>"
	displayPrevious.appendChild(createDiv);
}
