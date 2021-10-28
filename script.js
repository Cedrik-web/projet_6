
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
	var movies = document.getElementById("aff");

	fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=9.4&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryBest = results.map((movie, index) => {

				var categoryImage = document.createElement("a");
				categoryImage.setAttribute("id", `btnBest${index}`);
				categoryImage.setAttribute("class", "boxing");
					getCategoryBestImage(movie, categoryImage, index);
					getElementDivModal(categoryImage, index);
				movies.appendChild(categoryImage);
				categoryImage.addEventListener("click", myModal(movie.url, index));
			});
			categoryBest.forEach((movie) => movies.appendChild(movie));
		});
}

AddElementCategoryBest();

function getCategoryBestImage(movie, el, index) {
	var bestImage = document.createElement("img");
	bestImage.setAttribute("id", `box${index}`);
	const image = movie.image_url;
	bestImage.setAttribute("src", image);
	el.appendChild(bestImage);	
}

// element creer pour la modal 
function getElementDivModal(el, index) {
	var elementDiv = document.createElement("div");
	elementDiv.setAttribute("id", `myModal${index}`);
	elementDiv.setAttribute("class", "boxing_movies modal");
		getElementDiv2Modal(elementDiv, index);
	el.appendChild(elementDiv);
}
function getElementDiv2Modal(el, index) {
	var elementDiv2 = document.createElement("div");
	elementDiv2.setAttribute("class", "modal-content");
		getElementDiv3Modal(elementDiv2);
		getElementDiv4Modal(elementDiv2, index);
		getElementDiv5Modal(elementDiv2);
	el.appendChild(elementDiv2);
}
function getElementDiv3Modal(el) {
	var elementDiv3 = document.createElement("div");
	elementDiv3.setAttribute("class", "modal-header");
		getElementSpanModal(elementDiv3);
		getElementH2Modal(elementDiv3)
	el.appendChild(elementDiv3);
}
function getElementSpanModal(el) {
	var elementSpan = document.createElement("span");
	elementSpan.setAttribute("class", "close");
	elementSpan.innerHTML = "&times";
	el.appendChild(elementSpan);
}
function getElementH2Modal(el) {
	var elementH2 = document.createElement("h2");
	elementH2.innerText = "JustStreamIt";
	el.appendChild(elementH2);
}
function getElementDiv4Modal(el, index) {
	var elementDiv4 = document.createElement("div");
	elementDiv4.setAttribute("id", `corpsModal${index}`);
	elementDiv4.setAttribute("class", "modal-body");
	el.appendChild(elementDiv4);
}
function getElementDiv5Modal(el) {
	var elementDiv5 = document.createElement("div");
	elementDiv5.setAttribute("class", "modal-footer");
		getElementH4Modal(elementDiv5);
	el.appendChild(elementDiv5);
}
function getElementH4Modal(el) {
	var elementH4 = document.createElement("h4");
	elementH4.innerText = "Projet6 Openclassrooms";
	el.appendChild(elementH4);
}

// modal
function myModal(movie, id) {
	
	var modal = document.getElementById(`myModal${id}`);

	var onBouton = document.getElementById(`btnBest${id}`);
	
	var span = document.getElementsByClassName("close") [0];

	onBouton.onclick = function() {
		modal.style.display = "block";
		dataModal(movie, id);
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
	addPic.setAttribute("class", "imageModal");
	const image = movie.image_url;
	addPic.setAttribute("src", image);
	el.appendChild(addPic);
}


function dataModal(data, index) {
	var surveillance = document.getElementById(`corpsModal${index}`);

	fetch(data)
		.then((res) => res.json())
		.then((movie) => {
		var elementsDiv = document.createElement("div");
		elementsDiv.setAttribute("class", "DivModal");
			getAddTitle(movie, elementsDiv);
			getAddYear(movie, elementsDiv);
			getAddPic(movie, elementsDiv);
		surveillance.appendChild(elementsDiv);		
	});	
}
