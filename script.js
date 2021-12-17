let catalogues = {}
const NOMBRE_DE_CARTES = 5
let compteurs = {"best": 0, "action": 0, "adventure": 0, "comedy": 0, "drama":0}

// gestion du film afficher en favori grand format ----------------------------------------------------------------------------------------------------------------------------------------
function getBestTitles(movie, el) {
	var bestTitle = document.createElement("h4");
	bestTitle.setAttribute("id", "titre");
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
	bestDescription.innerText = movie.long_description;
	el.appendChild(bestDescription);	
}
function getBestImage(movie, el) {
	var bestImage = document.createElement("img");
	bestImage.setAttribute("id", "imageCouvBest");
	const image = movie.image_url;
	bestImage.setAttribute("src", image);
	el.appendChild(bestImage);	
}
function addPlayBest(el) {
	var elementDiv = document.createElement("div");
	elementDiv.setAttribute("id", "overFlow");
		var baliseA = document.createElement("a");
		baliseA.setAttribute("href", "#");
			var baliseImg = document.createElement("img");
			baliseImg.setAttribute("id", "play");
			baliseImg.setAttribute("src", "image/—Pngtree—metallic luster ring player_5554124.png");
			baliseA.appendChild(baliseImg);
		elementDiv.appendChild(baliseA);	
	el.appendChild(elementDiv);	
}
function AddElementBest(link) {
	var movies = document.getElementById('best_movie');

	movies.innerHTML = "";

	fetch(link.url)
		.then((res) => res.json())
		.then((data) => {
		
		var el = document.createElement("div");
		el.setAttribute("id", "bestDiv");
			addPlayBest(el);
			getBestTitles(data, el);
			getBestYears(data, el);
			getBestDescription(data, el);
			getBestImage(data, el);
		movies.appendChild(el);
		});		
}
// souveillance de l'apparition du film mise en avant dans l'ecran et declenchement de l'affichage-----------------------------------------------------------------------------------------
function effetElementBest() {
	
	const ratio = 0.2
	const options = {
		root: null,
		rootMargin: "0px",
		threshold: ratio
	}

	const handleIntersect = function(entries, observer) {
		entries.forEach(function (entry) {
			if (entry.intersectionRatio > ratio) {
				entry.target.classList.add("reveal-visible")
				
			} else {
				entry.target.classList.remove("reveal-visible")
			}
		})
	}
	const observer = new IntersectionObserver(handleIntersect, options)
	observer.observe(document.querySelector(".reveal"))
}

//gestion de l'affichage de la categorie demander et des fleches---------------------------------------------------------------------------------------------------------------------------
function addElementDiv(cat, el) {
	
	var elementDiv = document.createElement("div");
	elementDiv.setAttribute("class", "categorie");
		getElementFlechePreviousDiv(elementDiv);
		AddElementCategory(elementDiv, cat);
		getElementFlecheNextDiv(elementDiv);
	el.appendChild(elementDiv);
}

//gestion des affichages de l ensemble div fleches et categories---------------------------------------------------------------------------------------------------------------------------
function addCategory(cat) {
	
	var movies = document.getElementById("category");
	var parentDiv = document.createElement("div");
	parentDiv.setAttribute("id", "first");

		addBanderolle(cat, parentDiv);
	//	addBanderolle(data, parentDiv);	
	//	addBanderolle(data("adventure"), parentDiv);
	//	addBanderolle(data("comedy"), parentDiv);
	//	addBanderolle(data("drama"), parentDiv);

	movies.appendChild(parentDiv);
}
function addBanderolle(cat, el) {
	addDivPresentation(cat, el);
	addElementDiv(cat, el);
}

function addDivPresentation(cat, el) {
	var conteneur = document.createElement("div");
	conteneur.setAttribute("class", "presentation");
		addTitreCat(cat, conteneur);
	el.appendChild(conteneur);
}
function addTitreCat(cat, el) {
	var texteCategory = document.createElement("h3");
	texteCategory.innerText= `Catégorie ${cat}`;
	el.appendChild(texteCategory);
}

// fonction de demande de requette à l'api pour les categories et pour la requette d'un objet aleatoire pour affichage baniere
function AddDataCategoryMovies(cat) {

	var link =  (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`)
	var link2 = (`http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=${cat}&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=`)
		
	fetch(link)
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const dict = results;

	fetch(link2)
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const dict2 = results;	
			Array.prototype.push.apply(dict, dict2);
				
			catalogues[cat] = dict;	 	
		});	
	});
}

// fonction de demande de requete pour les meilleurs films
function AddElementCategory(el, cat) {
		
	var conteneurChild = document.createElement("div")
	conteneurChild.setAttribute("class", "child")
		var movies = document.createElement("div")
		movies.setAttribute("id", `${cat}`)
		movies.setAttribute("class", "affichage")

			console.log("le catalogues ", catalogues)
			console.log("categorie demander :", cat)

			var prev = compteurs[cat]
			var next = prev + NOMBRE_DE_CARTES
			
			//var catalogue = categoryData.slice(prev, next)

			console.log("catalogue", catalogues[cat])
			
			//displayCarte(el, cat,  catalogue)

	conteneurChild.appendChild(movies)
	el.appendChild(conteneurChild)

}

function AddDataBestMovies(cat) {

	var link =  (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=9.3&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`)
	var link2 = (`http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=9.3&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=`)
		
	fetch(link)
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const dict = results;

	fetch(link2)
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const dict2 = results;	
			Array.prototype.push.apply(dict, dict2);

		//	findTitleFavori(dict);
		//	setInterval(function() {
		//	findTitleFavori(dict);
	 	// 	}, 10000);

			catalogues[cat] = dict;	     	
		});		
	});
}

function displayCarte(el, cat,  catalogue) {

	el.innerHTML = "";
	
	catalogue.map(( movie, index) => {
					
		var categoryImage = document.createElement("a");
		
		var id = (`${cat}${index}`);
			categoryImage.setAttribute("id", `btnBest${id}`);
			categoryImage.setAttribute("class", "boxing carte");
				getCategoryImage(movie, categoryImage, id);
			
		el.appendChild(categoryImage);
		categoryImage.addEventListener("click", myModalOn(movie.url, id));
	});
}

// fonction de requette sur Array pour en extraire un objet
function findTitleFavori(results) {
		
		const randomMovie = results[Math.floor(Math.random() * results.length)];
		AddElementBest(randomMovie);
}

// element carte -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function getCategoryImage(movie, el, index) {
	var bestImage = document.createElement("img");
	bestImage.setAttribute("id", `box${index}`);
	const image = movie.image_url;
	bestImage.setAttribute("src", image);
	el.appendChild(bestImage);	
}

// modal-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function myModalOn(movie, id) {
	
	var modal = document.getElementById(`myModal`);

	var span = document.getElementById(`close`);

    var onBouton = document.getElementById(`btnBest${id}`);

    onBouton.onclick = function() {
		modal.classList.add("is-visible");
        console.log(modal);
		console.log("ouverture modal");
		dataModal(movie, id);
	}
	span.addEventListener("click", myModalOff(modal, span));
} 
function myModalOff(modal, span) {

	span.onclick = function() {
		modal.classList.remove("is-visible");
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
	addTitle.setAttribute("class", "titleModal");
	addTitle.innerText = movie.title;
	el.appendChild(addTitle);
}

function getAddYear(movie , el){
	var addYears = document.createElement("p");
	addYears.setAttribute("class", "texteModal");
	var years = movie.year;
	addYears.innerText = `année de sortie du film : ${years} `;
	el.appendChild(addYears);
}

function getAddDescription(movie , el){
	var addDescription = document.createElement("p");
	addDescription.setAttribute("class", "texteModal");
	var description = movie.long_description;
	addDescription.innerText = `Synopsis :  ${description}`;
	el.appendChild(addDescription);
}

function getAddPic(movie, el) {
	var addPic = document.createElement("img");
	addPic.setAttribute("class", "imageModal");
	const image = movie.image_url;
	addPic.setAttribute("src", image);
	el.appendChild(addPic);
}

function getConteneurLeft(movie, el) {
	var addDiv = document.createElement("div");
	addDiv.setAttribute("class", "divModalLeft");
		getAddPic(movie, addDiv);
	el.appendChild(addDiv);	
}

function getConteneurRight(movie, el) {
	var addDiv = document.createElement("div");
	addDiv.setAttribute("class", "divModalRight");
		getAddTitle(movie, addDiv);
		getAddYear(movie, addDiv);
		getAddDescription(movie, addDiv);
	el.appendChild(addDiv);	
}

// function de gestion data de la modal----------------------------------------------------------------------------------------------------------------------------------------------------
function dataModal(data) {
	var surveillance = document.getElementById(`corpsModal`);
	surveillance.innerHTML = "";
	fetch(data)
		.then((res) => res.json())
		.then((movie) => {
		var elementsDiv = document.createElement("div");
		elementsDiv.setAttribute("class", "DivModal");
				getConteneurLeft(movie, elementsDiv);
				getConteneurRight(movie, elementsDiv);
		surveillance.appendChild(elementsDiv);		
	});	
}

// element fleches-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function callCategoryData() {
	AddDataBestMovies("best")
	AddDataCategoryMovies("action")
	AddDataCategoryMovies("adventure")
	AddDataCategoryMovies("comedy")
	AddDataCategoryMovies("drama")
}

function callDisplayCarteCategory(category) {
	addCategory(category)
}

function previous(categorie) {

	if (compteurs[categorie] > 0) {
		compteurs[categorie] = compteurs[categorie] - 1
		var previous = compteurs[categorie] - 1
		var next = previous + NOMBRE_DE_CARTES
	} 
}

function next(categorie) {

	if ( compteurs[categorie] <= 10)
	compteurs[categorie] = compteurs[categorie] + 1
	var previous = compteurs[categorie] + 1
	var next = previous + NOMBRE_DE_CARTES
}

function getElementFlechePreviousDiv(el, data) {
	var elementDiv = document.createElement("div");
	elementDiv.setAttribute("class", "fleche");
		getElementFlechePreviousImg(elementDiv);
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

// appel des fonctions---------------------------------------------------------------------------------------------------------------------------------------------------------------------

callCategoryData()
callDisplayCarteCategory("best")
effetElementBest()
console.log("essais de recuperatiion de categorie", catalogues["action"])