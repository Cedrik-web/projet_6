

AddElementCategoryBest();

function getBestTitles(movie, el) {
	var bestTitle = document.createElement("h1");
	console.log("bestTitle",movie)
	bestTitle.innerText = movie.title;
	el.appendChild(bestTitle);	
}

function getBestYears(movie, el) {
	var bestYears = document.createElement("h2");
	bestYears.setAttribute("id", "years");
	bestYears.innerText = movie.year;
	el.appendChild(bestYears);	
}

function getBestDescription(movie, el) {
	var bestDescription = document.createElement("h2");
	bestDescription.setAttribute("id", "description");
	console.log("bestTitle",movie)
	bestDescription.innerText = movie.long_description;
	el.appendChild(bestDescription);	
}

function getBestImage(movie, el) {
	var bestImage = document.createElement("img");
	bestImage.setAttribute("id", "imageCouvBest");
	const image = movie.image_url;
	console.log("bestTitle",movie)
	bestImage.setAttribute("src", image);
	el.appendChild(bestImage);	
}

function AddElementBest() {
	var movies = document.getElementById('best_movie');

	fetch("http://localhost:8000/api/v1/titles/1508669")
		.then((res) => res.json())
		.then((data) => {
		
		var el = document.createElement("div");
		el.setAttribute("id", "bestDiv");
			getBestTitles(data, el);
			getBestYears(data, el);
			getBestDescription(data, el);
			getBestImage(data, el);
		movies.appendChild(el);
		});		
}

AddElementBest();

function AddElementCategoryBest() {
	var movies = document.getElementById("btnBest");

	fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=9&imdb_score_max=9.7&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryBest = results.map((movie, index) => {

				var categoryImage = document.createElement("div");
				var id = `box${index}`;
				categoryImage.setAttribute("class", "boxing");
					getCategoryBestImage(movie, categoryImage, id);
					myModal(movie.url , id);
				return categoryImage;
			});
			categoryBest.forEach((movie) => movies.appendChild(movie));
		});
}

function getCategoryBestImage(movie, el, id) {
	var bestImage = document.createElement("img");
	bestImage.setAttribute("id", id);
	const image = movie.image_url;
	bestImage.setAttribute("src", image);
	el.appendChild(bestImage);	
}

function myModal(movie, id) {
	var modal = document.getElementById("myModal");

	var onBouton = document.getElementById("btnBest");
	console.log("id", id);
	var span = document.getElementsByClassName("close") [0];

	onBouton.onclick = function() {
		modal.style.display = "block";
	}
	span.onclick = function() {
		modal.style.display = "none";
	}

	dataModal(movie);

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
} 

function getAddTitle(movie ,el){
	var addTitle = document.createElement("h2");
	console.log("addTitle",movie);
	addTitle.innerText = movie.title;
	el.appendChild(addTitle);
}

function getAddYear(movie , el){
	var addYears = document.createElement("p");
	addYears.innerText = movie.year;
	el.appendChild(addYears);
}

function getAddPic(movie, el) {
	var addPic = document.createElement("img");
	const image = movie.image_url;
	addPic.setAttribute("src", image);
	el.appendChild(addPic);
}


function dataModal(data) {
	var surveillance = document.getElementById("corpsModal");

	fetch(data)
		.then((res) => res.json())
		.then((movie) => {
		var elementsDiv = document.createElement("div");
		elementsDiv.setAttribute("id", "essaiDiv");
			getAddTitle(movie, elementsDiv);
			getAddYear(movie, elementsDiv);
			getAddPic(movie, elementsDiv);
		surveillance.appendChild(elementsDiv);		
	});	
}