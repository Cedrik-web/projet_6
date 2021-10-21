AddElementBest();

AddElementCategoryBest();

AddElementCategoryAdventure();
AddElementCategoryAction();
AddElementCategoryComedy();

function getBestTitles(movies) {
	
	fetch("http://localhost:8000/api/v1/titles/1508669")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryAction = results((movie) => {

					var bestTitle = document.createElement('h2');
					bestTitle.setAttribute("id", "titre");
					bestTitle.innerText = movie.title;
				return bestTitle	
				});	
		categoryAction.bestTitle((movie) => movies.appendChild(movie));
		});		
}

function getBestYears(movies) {

	fetch("http://localhost:8000/api/v1/titles/?year=2010&min_year=&max_year=&imdb_score=9.6&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
	.then((res) => res.json())
	.then((data) => {
		const { results } = data;
		const categoryAction = results.map((movie) => {
					var bestYears = document.createElement("h2");
					bestYears.setAttribute("id", "years");
					bestYears.innerText = movie.year;
				return bestYears;
				});
		categoryAction.forEach((movie) => movies.appendChild(movie));
		});	
}

function getBestDescription(movies) {

	fetch("http://localhost:8000/api/v1/titles/?year=2010&min_year=&max_year=&imdb_score=9.6&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
	.then((res) => res.json())
	.then((data) => {
		const { results } = data;
		const categoryAction = results.map((movie) => {
					var bestDescription = document.createElement("h2");
					bestDescription.setAttribute("id", "description");
					bestDescription.innerText = movie.actors;
				return bestDescription;
				});
		categoryAction.forEach((movie) => movies.appendChild(movie));
		});		
}

function getBestImage(movies) {

	fetch("http://localhost:8000/api/v1/titles/?year=2010&min_year=&max_year=&imdb_score=9.6&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
	.then((res) => res.json())
	.then((data) => {
		const { results } = data;
		const categoryAction = results.map((movie) => {
					var bestImage = document.createElement("img");
					bestImage.setAttribute("id", "imageCouvBest");
					const image = movie.image_url;
					bestImage.setAttribute("src", image );
				return bestImage;
				});
		categoryAction.forEach((movie) => movies.appendChild(movie));
		});	
}

function AddElementBest() {
	var movies = document.getElementById('best_movie');

	var el = document.createElement("div");
	el.setAttribute("id", "bestDiv");
		getBestTitles(movies);
		getBestYears(movies);
		getBestDescription(movies);
		getBestImage(movies);
	return el;		
}

function AddElementCategoryBest() {
	var movies = document.getElementById("btnBest");

	fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=9&imdb_score_max=9.7&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryBest = results.map((movie, index) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", `box${index}`);
				categoryImage.setAttribute("class", "boxing");
				const img = movie.image_url;
				categoryImage.innerHTML = `<img src="${img}">`;
				myModal();
				return categoryImage;
			});
			categoryBest.forEach((movie) => movies.appendChild(movie));
		});
}

function AddElementCategoryAction() {
	var movies = document.getElementById("btnAction");

	fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=action&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryAction = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("class", "boxing");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				myModalAction();
				return categoryImage;
			});
			categoryAction.forEach((movie) => movies.appendChild(movie));
		});
}

function AddElementCategoryAdventure() {
	var movies = document.getElementById("btnAdventure");

	fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=adventure&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryAdventure = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("class", "boxing");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				myModalAdventure();
				return categoryImage;
			});
			categoryAdventure.forEach((movie) => movies.appendChild(movie));
		});
}

function AddElementCategoryComedy() {
	var movies = document.getElementById("btnComedy");

	fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=comedy&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("class", "boxing");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				myModalComedy();
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});	
}


function myModal() {
	var modal = document.getElementById("myModal");

	var onBouton = document.getElementById("btnBest");

	var span = document.getElementsByClassName("close") [0];

	onBouton.onclick = function() {
		modal.style.display = "block";
	}
	span.onclick = function() {
		modal.style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}

function myModalComedy() {
	var modal = document.getElementById("myModal");

	var onBouton = document.getElementById("btnComedy");

	var span = document.getElementsByClassName("close") [0];

	onBouton.onclick = function() {
		modal.style.display = "block";
	}
	span.onclick = function() {
		modal.style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}
function myModalAction() {
	var modal = document.getElementById("myModal");

	var onBouton = document.getElementById("btnAction");

	var span = document.getElementsByClassName("close") [0];

	onBouton.onclick = function() {
		modal.style.display = "block";
	}
	span.onclick = function() {
		modal.style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}
function myModalAdventure() {
	var modal = document.getElementById("myModal");

	var onBouton = document.getElementById("btnAdventure");

	var span = document.getElementsByClassName("close") [0];

	onBouton.onclick = function() {
		modal.style.display = "block";
	}
	span.onclick = function() {
		modal.style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}
function getAddTitle(){
	var addTitle = document.createElement("h2");
	addTitle.innerText = "titre test";
	return addTitle;
}

function getAddYear(){
	var addYears = document.createElement("p");
	addYears.innerText = "paragraphe test";
	return addYears;
}

function getAddPic() {
	var addPic = document.createElement("img");
	addPic.innerHTML = movie.image_url;
	return addPic;
}


function dataModal() {
	var surveillance = document.getElementById("corpsModal");

	var elementsDiv = document.createElement("div");
	elementsDiv.setAttribute("id", "essaiDiv");
		getAddTitle(surveillance);
		getAddYear(surveillance);
		getAddPic(surveillance);
	surveillance.appendChild(elementsDiv);		

	document.body.insertBefore(elementsDiv, surveillance);
}