 /**
  * initialisation des compteurs du ARRAY: catalogues et de la CONSTANTE nombre de cartes
  */
let catalogues = {action: [], adventure: [], comedy: [], drama:[]}
let yoann = {}
const NOMBRE_DE_CARTES = 5
let compteurs = {"best": 0, "action": 0, "adventure": 0, "comedy": 0, "drama":0}


/**
 * @param {fetch} link appelle des data
 * @param {string} cat categorie
 */

// fonction de requette pour le film mis en grand ecran
function AddElementBest(link) {
	var movies = document.getElementById('best_movie');

	movies.innerHTML = "";

	fetch(link.url)
		.then((res) => res.json())
		.then((data) => {
		
		var el = createDivWithId("bestDiv")
			addPlayBest(el)
			getBestTitles(data, el)
			getBestYears(data, el)
			getBestDescription(data, el)
			getBestImage(data, el)
		movies.appendChild(el)
		});		
}
// fonction de renvoie aleatoire d'un film grand ecran (link)
function findTitleFavori(results) {	
	const randomMovie = results[Math.floor(Math.random() * results.length)]
	AddElementBest(randomMovie)
}

// fonction de demande de requette à l'api pour les categories et les film BEST puis creation d'un array dict
function AddDataCategoryMovies(cat) {

	var link =  (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`)
	var link2 = (`http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=${cat}&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=`)
		
	fetch(link)
		.then((res) => res.json())
		.then((data) => {
			const { results } = data
			const dict = results

	fetch(link2)
		.then((res) => res.json())
		.then((data) => {
			const { results } = data
			const dict2 = results	
			//Array.prototype.push.apply(dict, dict2)
				
			catalogues[cat] = [...dict, ...dict2]	 	
		});	
	});
}
 async function AddDataBestMovies(cat, catalogues) {

	var link =  (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=9.3&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`)
	var link2 = (`http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=9.3&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=`)
	let objs = "toto"
	
	const data = await (await fetch(link)).json()
	console.log("data", data.results)
	catalogues[cat] = data.results
	yoann[cat] = data.results
	/**fetch(link)
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const dict = results

	fetch(link2)
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const dict2 = results	
			//Array.prototype.push.apply(dict, dict2)

		//	findTitleFavori(dict);
		//	setInterval(function() {
		//	findTitleFavori(dict);
	 	// 	}, 10000);

			catalogues[cat] = [...dict, ...dict2]	
			objs =  [...dict, ...dict2]   
			console.log("catalogues cat", catalogues[cat])  	
		});		
	});**/
	console.log("objs", objs)
}
// function passant les category pour les requette fecth
function callCategoryData() {
	AddDataBestMovies("best", catalogues)
	// AddDataCategoryMovies("action")
	// AddDataCategoryMovies("adventure")
	// AddDataCategoryMovies("comedy")
	// AddDataCategoryMovies("drama")
}


/**
 * 
 * @param {HTML} el Element Html 
 * @param {string} cat category demander
 * @param {Array} catalogue tableaux de 5 objets
 */
// fonction de demande de data et en sortie renvoie un catalogues de cartes par categorie
function AddElementCategory(el, cat) {
		
	var conteneurChild = createDivWithClass("child")
		var movies = createDivWithId(`${cat}`)
		movies.setAttribute("class", "affichage")

			console.log("le catalogues ", catalogues)
			const myBest = catalogues
			console.log("categorie demander :", cat)

			var prev = compteurs[cat]
			var next = prev + NOMBRE_DE_CARTES

			console.log("compteur", prev, next)

			var categoryData = myBest[cat]
			console.log("categoryData", yoann[cat])
			
			//var catalogue = categoryData.slice(prev, next)

			//displayCarte(el, cat,  catalogue)

	conteneurChild.appendChild(movies)
	el.appendChild(conteneurChild)
}

// fonction d'affichage des cartes demander
function displayCarte(el, cat,  catalogue) {

	el.innerHTML = "";
	
	catalogue.map(( movie, index) => {

		var id = (`${cat}${index}`)			
		var categoryImage = createDivWithId(`btnBest${id}`)
			categoryImage.setAttribute("class", "boxing carte")

				getCategoryImage(movie, categoryImage, id)
			
		el.appendChild(categoryImage)
		categoryImage.addEventListener("click", myModalOn(movie.url, id))
	});
}


/**
 * 
 * @param {string} cat 
 * @param {string} cat1 
 * @param {string} cat2 
 * @param {string} cat3 
 * @param {string} cat4 
 * @param {HTML} el element html 
 */

// function de creation de parent (conteneur) pour affichage des category demander en argument
function addCategory(cat, cat1, cat2, cat3, cat4) {	
	var movies = document.getElementById("category")
	var parentDiv = createDivWithId("first") 
	
		addBanderolle(cat, parentDiv)
	//	addBanderolle(cat1, parentDiv)
	//	addBanderolle(cat2, parentDiv)
	//	addBanderolle(cat3, parentDiv)
	//	addBanderolle(cat4, parentDiv)

	movies.appendChild(parentDiv)
}
// function d'affichage d'une categorie
function addBanderolle(cat, el) {
	addDivPresentation(cat, el)
	addElementDiv(cat, el)
}


/**
 * 
 * @param {} movie 
 * @param {*} id 
 */
// modal-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function myModalOn(movie, id) {
	
	var modal = document.getElementById(`myModal`)

	var span = document.getElementById(`close`)

    var onBouton = document.getElementById(`btnBest${id}`)

    onBouton.onclick = function() {
		modal.classList.add("is-visible")
        console.log(modal);
		console.log("ouverture modal")
		dataModal(movie, id)
	}
	span.addEventListener("click", myModalOff(modal, span))
} 
function myModalOff(modal, span) {

	span.onclick = function() {
		modal.classList.remove("is-visible")
        console.log("clické sur fermé")
	}

    window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none"
		}
	}
} 

// Modification du DOM pour l affichage des categories
function addElementDiv(cat, el) {
	
	var elementDiv = createDivWithClass("categorie")
		getElementFlechePrevious(elementDiv, cat)
		AddElementCategory(elementDiv, cat)
		getElementFlecheNext(elementDiv, cat)
	el.appendChild(elementDiv)
}

function addDivPresentation(cat, el) {
	var conteneur = createDivWithClass("presentation")
		addTitreCat(cat, conteneur)
	el.appendChild(conteneur)
}
function addTitreCat(cat, el) {
	var texteCategory = document.createElement("h3")
	texteCategory.innerText= `Catégorie ${cat}`
	el.appendChild(texteCategory)
}

// information Data carte -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function getCategoryImage(movie, el, index) {
	var bestImage = document.createElement("img")
	bestImage.setAttribute("id", `box${index}`)
	const image = movie.image_url
	bestImage.setAttribute("src", image)
	el.appendChild(bestImage)	
}

// information Data du film afficher grand format ----------------------------------------------------------------------------------------------------------------------------------------
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
	var elementDiv = createDivWithId("overflow")
		var baliseA = document.createElement("a");
		baliseA.setAttribute("href", "#");
			var baliseImg = document.createElement("img");
			baliseImg.setAttribute("id", "play");
			baliseImg.setAttribute("src", "image/—Pngtree—metallic luster ring player_5554124.png");
			baliseA.appendChild(baliseImg);
		elementDiv.appendChild(baliseA);	
	el.appendChild(elementDiv);	
}

// informations data modal----------------------------------------------------------------------------------------------------------------------------------------------------------------
function getAddTitle(movie ,el){
	var addTitle = document.createElement("h2")
	addTitle.setAttribute("class", "titleModal")
	addTitle.innerText = movie.title
	el.appendChild(addTitle)
}

function getAddYear(movie , el){
	var addYears = document.createElement("p")
	addYears.setAttribute("class", "texteModal")
	var years = movie.year;
	addYears.innerText = `année de sortie du film : ${years} `
	el.appendChild(addYears);
}

function getAddDescription(movie , el){
	var addDescription = document.createElement("p");
	addDescription.setAttribute("class", "texteModal");
	var description = movie.long_description;
	addDescription.innerText = `Synopsis :  ${description}`
	el.appendChild(addDescription);
}

function getAddPic(movie, el) {
	var addPic = document.createElement("img")
	addPic.setAttribute("class", "imageModal")
	const image = movie.image_url
	addPic.setAttribute("src", image)
	el.appendChild(addPic)
}

function getConteneurLeft(movie, el) {
	var addDiv = createDivWithClass("divModalLeft")

		getAddPic(movie, addDiv)

	el.appendChild(addDiv)
}

function getConteneurRight(movie, el) {
	var addDiv = createDivWithClass("divModalRight")

		getAddTitle(movie, addDiv)
		getAddYear(movie, addDiv)
		getAddDescription(movie, addDiv)

	el.appendChild(addDiv)	
}

// surveillance de l'apparition du film mise en avant dans l'ecran et declenchement de l'affichage-----------------------------------------------------------------------------------------
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

// function de gestion data de la modal----------------------------------------------------------------------------------------------------------------------------------------------------
function dataModal(data) {
	var surveillance = document.getElementById(`corpsModal`)
	surveillance.innerHTML = ""
	fetch(data)
		.then((res) => res.json())
		.then((movie) => {
		var elementsDiv = createDivWithClass("DivModal")

				getConteneurLeft(movie, elementsDiv)
				getConteneurRight(movie, elementsDiv)

		surveillance.appendChild(elementsDiv);		
	});	
}

// element fleches-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function previous(categorie) {

	if (compteurs[categorie] > 0) {
		compteurs[categorie] = compteurs[categorie] - 1
		var previous = compteurs[categorie] - 1
		var next = previous + NOMBRE_DE_CARTES
		console.log(`previous compteur ${categorie} :`, previous , next)
	} 
}

function next(categorie) {

	if ( compteurs[categorie] <= 10)
	compteurs[categorie] = compteurs[categorie] + 1
	var previous = compteurs[categorie] + 1
	var next = previous + NOMBRE_DE_CARTES
	console.log(`next compteur ${categorie} :`, previous , next)
}

function getElementFlechePrevious(el, cat) {
	var elementImg = createDivWithClass("flecheGauche")
	elementImg.onclick = function() {
		previous(cat)
	}
	el.appendChild(elementImg)
}

function getElementFlecheNext(el, cat) {
	var elementImg = createDivWithClass("flecheDroite")
	elementImg.onclick = function() {
		next(cat)
	}
	el.appendChild(elementImg);
}

// function generique pour modification du DOM
function createDivWithClass(className) {

	var div = document.createElement("div")
	div.setAttribute("class", className)
	return div
}

function createDivWithId(IDName) {

	var div = document.createElement("div")
	div.setAttribute("id", IDName)
	return div

}

// function de gestion d'appel de fonctions
function callDisplayCarteCategory(cat , cat1, cat2, cat3, cat4) {
	addCategory(cat, cat1, cat2, cat3, cat4)
}


// appel des fonctions---------------------------------------------------------------------------------------------------------------------------------------------------------------------
callCategoryData()
callDisplayCarteCategory("best", "adventure", "action", "comedy", "drama")
effetElementBest()


// essais retour console
console.log(" essais compteur :", compteurs)
console.log("essais de recuperation de categorie", catalogues)