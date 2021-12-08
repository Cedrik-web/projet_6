
// gestion du film afficher en favori grand format ------------------------------------------------------------------------------------------------------------------------------------
function getBestTitles(movie, el) {
	var bestTitle = document.createElement("h4");
	bestTitle.setAttribute("id", "titre");
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

function AddElementBest(link) {
	var movies = document.getElementById('best_movie');
	console.log("link", link);
	fetch(link.url)
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

//best-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//best
function callBest() {
	var link = 	("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=9.4&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=");
	var cat = ("best");
	addElementDivBest(cat, link);	
}
//best favori
function callBestFavori() {
	var link = 	("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=9.4&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=");
	var cat = ("best");
	findTitleFavori(link);
	addElementDivBest(cat, link);	
}

//action ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//action
function callAction() {
	var cat = ("action");
	addElementDiv(cat);
}
//action favori
function callActionFavori() {
	var cat = ("action");
	addElementDivFavori(cat);
}

//adult ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//adult
function callAdult() {
	var cat = ("adult");
	addElementDiv(cat);
}
//adult favori
function callAdultFavori() {
	var cat = ("adult");
	addElementDivFavori(cat);
}

//adventure ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//adventue
function callAdventure() {
	var cat = ("adventure");
	addElementDiv(cat);
}
//adventue favori
function callAdventureFavori() {
	var cat = ("adventure");
	addElementDivFavori(cat);
}

//animation ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//animation
function callAnimation() {
	var cat = ("animation");
	addElementDiv(cat);
}
//animation favori
function callAnimationFavori() {
	var cat = ("animation");
	addElementDivFavori(cat);
}

//biography ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//biography
function callBiography() {
	var cat = ("biography");
	addElementDiv(cat);
}
//biography favori
function callBiographyFavori() {
	var cat = ("biography");
	addElementDivFavori(cat);
}

//comedy ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//comedy
function callComedy() {
	var cat = ("comedy");
	addElementDiv(cat);
}
//comedy favori
function callComedyFavori() {
	var cat = ("comedy");
	addElementDivFavori(cat);
}

//crime ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//crime
function callCrime() {
	var cat = ("crime");
	addElementDiv(cat);
}
//crime favori
function callCrimeFavori() {
	var cat = ("crime");
	addElementDivFavori(cat);
}

//documentary ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//documentary
function callDocumentary() {
	var cat = ("documentary");
	addElementDiv(cat);
}
//documentary favori
function callDocumentaryFavori() {
	var cat = ("documentary");
	addElementDivFavori(cat);
}

//drame ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//drame
function callDrama() {
	var cat = ("drama");
	addElementDiv(cat);
}
//drame favori
function callDramaFavori() {
	var cat = ("drama");
	addElementDivFavori(cat);
}

//familly ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//familly
function callFamilly() {
	var cat = ("familly");
	addElementDiv(cat);
}
//familly favori
function callFamillyFavori() {
	var cat = ("familly");
	addElementDivFavori(cat);
}

//fantasy ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//fantasy
function callFantasy() {
	var cat = ("fantasy");
	addElementDiv(cat);
}
//fantasy favori
function callFantasyFavori() {
	var cat = ("fantasy");
	addElementDivFavori(cat);
}

//film noir ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//film noir
function callFilmNoir() {
	var cat = ("film-noir");
	addElementDiv(cat);
}
//film noir favori
function callFilmNoirFavori() {
	var cat = ("film-noir");
	addElementDivFavori(cat);
}

//history ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//history
function callHistory() {
	var cat = ("history");
	addElementDiv(cat);
}
//history favori
function callHistoryFavori() {
	var cat = ("history");
	addElementDivFavori(cat);
}

//horror ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//horror
function callHorror() {
	var cat = ("horror");
	addElementDiv(cat);
}
//horror favori
function callHorrorFavori() {
	var cat = ("horror");
	addElementDivFavori(cat);
}

//music ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//music
function callMusic() {
	var cat = ("music");
	addElementDiv(cat);
}
//music favori
function callMusicFavori() {
	var cat = ("music");
	addElementDivFavori(cat);
}

//musical ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//musical
function callMusical() {
	var cat = ("musical");
	addElementDiv(cat);
}
//musical favori
function callMusicalFavori() {
	var cat = ("musical");
	addElementDivFavori(cat);
}

//mystery ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//mystery
function callMystery() {
	var cat = ("mystery");
	addElementDiv(cat);
}
//mystery favori
function callMysteryFavori() {
	var cat = ("mystery");
	addElementDivFavori(cat);
}

//news ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//news
function callNews() {
	var cat = ("news");
	addElementDiv(cat);
}
//news favori
function callNewsFavori() {
	var cat = ("news");
	addElementDivFavori(cat);
}

//reality-tv ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//reality-tv
function callRealityTv() {
	var cat = ("reality-tv");
	addElementDiv(cat);
}
//reality-tv favori
function callRealityTvFavori() {
	var cat = ("reality-tv");
	addElementDivFavori(cat);
}

//romance ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//romance
function callRomance() {
	var cat = ("romance");
	addElementDiv(cat);
}
//romance favori
function callRomanceFavori() {
	var cat = ("romance");
	addElementDivFavori(cat);
}

//science-fiction ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//science-fiction
function callScienceFiction() {
	var cat = ("sci-fi");
	addElementDiv(cat);
}
//science-fiction favori
function callScienceFictionFavori() {
	var cat = ("sci-fi");
	addElementDivFavori(cat);
}

//sport ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//sport
function callSport() {
	var cat = ("sport");
	addElementDiv(cat);
}
//sport favori
function callSportFavori() {
	var cat = ("sport");
	addElementDivFavori(cat);
}

//triller ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//triller
function callTriller() {
	var cat = ("triller");
	addElementDiv(cat);
}
//triller favori
function callTrillerFavori() {
	var cat = ("triller");
	addElementDivFavori(cat);
}

//war ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//war
function callWar() {
	var cat = ("war");
	addElementDiv(cat);
}
//war favori
function callWarFavori() {
	var cat = ("war");
	addElementDivFavori(cat);
}
//western ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//western
function callWestern() {
	var cat = ("western");
	addElementDiv(cat);
}
//western favori
function callWesternFavori() {
	var cat = ("western");
	addElementDivFavori(cat);
}

//gestion de l'affichage de la categorie demander et des fleches---------------------------------------------------------------------------------------------------------------------------
// gestion des appels de fonction pour les categories
function addElementDiv(cat) {
	var trigger = (cat);
	var movies = document.getElementById(trigger);
	var elementDiv = document.createElement("div");
	
	elementDiv.setAttribute("class", "categorie");
		getElementFlechePreviousDiv(elementDiv);
		AddElementCategory(elementDiv, cat);
		getElementFlecheNextDiv(elementDiv);
	movies.appendChild(elementDiv);
}

function addElementDivFavori(cat) {
	var trigger = (cat);
	var movies = document.getElementById(trigger);
	var elementDiv = document.createElement("div");
	
	elementDiv.setAttribute("class", "categorie");
		getElementFlechePreviousDiv(elementDiv);
		AddElementCategoryFavori(elementDiv, cat);
		getElementFlecheNextDiv(elementDiv);
	movies.appendChild(elementDiv);
}

// gestion des appels de fonction pour les meilleurs films
function addElementDivBest(cat, link) {
	var trigger = (cat);
	var movies = document.getElementById(trigger);
	var elementDiv = document.createElement("div");
	
	elementDiv.setAttribute("class", "categorie");
		getElementFlechePreviousDiv(elementDiv);
		AddElementCategoryBest(elementDiv, cat, link);
		getElementFlecheNextDiv(elementDiv);
	movies.appendChild(elementDiv);
}

// fonction de demande de requette à l'api pour les meilleur films
function AddElementCategoryBest(el, cat, link) {
	var ind = (cat);
	
	var movies = document.createElement("div");
	movies.setAttribute("class", "affichage");

	fetch(link)
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryBest = results.map((movie, index) => {
				
				var categoryImage = document.createElement("a");
				var id = (`${ind}${index}`);
				categoryImage.setAttribute("id", `btnBest${id}`);
				categoryImage.setAttribute("data-popup-trigger", `${movie.url}`);
				categoryImage.setAttribute("class", "boxing");
					getCategoryImage(movie, categoryImage, id);
					getElementDivModal(categoryImage, id);
				movies.appendChild(categoryImage);
			    myModal(movie.url, id);
			});
			categoryBest.forEach((movie) => movies.appendChild(movie));
		});	
	el.appendChild(movies);	
}

// fonction de demande de requette à l'api pour les categories et pour la requette d'un objet aleatoire pour affichage baniere
function AddElementCategory(el, cat) {
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var ind = (cat);
	
	var movies = document.createElement("div");
	movies.setAttribute("class", "affichage");

	fetch(link)
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryBest = results.map((movie, index) => {
				
				var categoryImage = document.createElement("a");
				var id = (`${ind}${index}`);
				categoryImage.setAttribute("id", `btnBest${id}`);
				categoryImage.setAttribute("data-popup-trigger", `${movie.url}`);
				categoryImage.setAttribute("class", "boxing");
					getCategoryImage(movie, categoryImage, id);
					getElementDivModal(categoryImage, id);
				movies.appendChild(categoryImage);
			    myModal(movie.url, id);
			});
			categoryBest.forEach((movie) => movies.appendChild(movie));
		});	
	el.appendChild(movies);	
}

function AddElementCategoryFavori(el, cat) {
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var ind = (cat);
	findTitleFavori(link);
	var movies = document.createElement("div");
	movies.setAttribute("class", "affichage");

	fetch(link)
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryBest = results.map((movie, index) => {
				console.log("array:", categoryBest);
				
				var categoryImage = document.createElement("a");
				var id = (`${ind}${index}`);
				categoryImage.setAttribute("id", `btnBest${id}`);
				categoryImage.setAttribute("data-popup-trigger", `${movie.url}`);
				categoryImage.setAttribute("class", "boxing");
					getCategoryImage(movie, categoryImage, id);
					getElementDivModal(categoryImage, id);
				movies.appendChild(categoryImage);
			    myModal(movie.url, id);
			});
			categoryBest.forEach((movie) => movies.appendChild(movie));
		});	
	el.appendChild(movies);	
}

// fonction de requette sur Array pour en extraire un objet
function findTitleFavori(links) {
	console.log("link1", links);
	fetch(links)
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			console.log("tab", results);
			const randomMovie = results[Math.floor(Math.random() * results.length)];
			AddElementBest(randomMovie);
		});
}

// element carte -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function getCategoryImage(movie, el, index) {
	var bestImage = document.createElement("img");
	bestImage.setAttribute("id", `box${index}`);
	const image = movie.image_url;
	bestImage.setAttribute("src", image);
	el.appendChild(bestImage);	
}
// element creer pour la modal ----------------------------------------------------------------------------------------------------------------------------------------------------------
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
		getElementDiv3Modal(elementDiv2, index);
		getElementDiv4Modal(elementDiv2, index);
		getElementDiv5Modal(elementDiv2);
	el.appendChild(elementDiv2);
}
function getElementDiv3Modal(el, index) {
	var elementDiv3 = document.createElement("div");
	elementDiv3.setAttribute("class", "modal-header");
		getElementSpanModal(elementDiv3, index);
		getElementH2Modal(elementDiv3)
	el.appendChild(elementDiv3);
}
function getElementSpanModal(el, index) {
	var elementSpan = document.createElement("span")
    elementSpan.setAttribute("id", `close${index}`);
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

// modal-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function myModal(movie, id) {
	
	var modal = document.getElementById(`myModal${id}`);

    var onBouton = document.getElementById(`btnBest${id}`);

    var span = document.getElementById(`close${id}`);

    onBouton.onclick = function() {
		modal.classList.add("is-visible");
        console.log(modal);
		console.log("ouverture modal");
	//	dataModal(movie, id);
	}

	span.onclick = function() {
//		modal.style.display = "none";
        console.log("clické sur fermé");
	}

    window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
} 

// informations data modal----------------------------------------------------------------------------------------------------------------------------------------------------------------
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

// function de gestion data de la modal----------------------------------------------------------------------------------------------------------------------------------------------------
function dataModal(data, index) {
	var surveillance = document.getElementById(`corpsModal${index}`);

	fetch(data)
		.then((res) => res.json())
		.then((movie) => {
		var elementsDiv = document.createElement("div");
		elementsDiv.setAttribute("class", "DivModal");
			getAddPic(movie, elementsDiv);
			getAddTitle(movie, elementsDiv);
			getAddYear(movie, elementsDiv);
		surveillance.appendChild(elementsDiv);		
	});	
}

// element fleches-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function getElementFlechePreviousDiv(el, data) {
	var elementDiv = document.createElement("div");
	elementDiv.setAttribute("class", "fleche");
		getElementFlechePreviousImg(elementDiv);
		//getDisplayPrevious(elementDiv, data);
	el.appendChild(elementDiv);
}

function getElementFlechePreviousImg(el) {
	var elementImg = document.createElement("img");
	elementImg.setAttribute("id", "flecheBestPrevious");
	elementImg.setAttribute("class", "flecheGauche");
	elementImg.src = "image/fleche_inox_gauche.png";
	el.appendChild(elementImg);
}

function getElementFlecheNextDiv(el, data) {
	var elementDiv2 = document.createElement("div");
	elementDiv2.setAttribute("class", "fleche");
		getElementFlecheNextImg(elementDiv2);
	el.appendChild(elementDiv2);
}

function getElementFlecheNextImg(el) {
	var elementImg2 = document.createElement("img");
	elementImg2.setAttribute("id", "flecheBestNext");
	elementImg2.setAttribute("class", "flecheDroite");
	elementImg2.src = "image/fleche_inox_droite.png";
	el.appendChild(elementImg2);
}

// gestion des fleches---------------------------------------------------------------------------------------------------------------------------------------------------------------------
function getDisplayPrevious(el, data) {
	var playPrevious = document.getElementById("flecheBestPrevious");
	var previous = data.next;
	console.log("previous", previous);
		if (!previous){
			console.log("previous");
			playPrevious.style.display = "none";
			el.appendChild(playPrevious);
		}	
}

// appel des fonctions---------------------------------------------------------------------------------------------------------------------------------------------------------------------
 (setTimeout(function() {
	callBestFavori();
	console.log("reload");
//	location.reload();
  }, 3000))()
  callAction();
  callAdventure();
  callComedy();
  callCrime();