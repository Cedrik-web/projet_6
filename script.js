 /**
  * initialisation des compteurs du ARRAY: catalogues et de la CONSTANTE nombre de cartes
  */
let catalogues = {}
const NOMBRE_DE_CARTES = 5

const CAT1 = "best"
const CAT2 = "action"
const CAT3 = "adventure"
const CAT4 = "comedy"
const CAT5 = "drama"

let compteurs = {"best": 0, "CAT2": 0, "CAT3": 0, "CAT4": 0, "CAT5": 0}


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
async function AddDataCategoryMovies(cat) {

	var link =  (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`)
	
	const data = await (await fetch(link)).json()
	const dataNext = await (await fetch(data.next)).json()
			
	catalogues[cat] = [...data.results, ...dataNext.results]	 	
}

 async function AddDataBestMovies(cat) {

	var link =  (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=9.3&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`)
	
	const data = await (await fetch(link)).json()
	const dataNext = await (await fetch(data.next)).json()

	//	findTitleFavori(dict);
	//	setInterval(function() {
	//	findTitleFavori(dict);
	// 	}, 10000);

	catalogues[cat] = [...data.results, ...dataNext.results]		
}

// function passant les category pour les requette fecth
function callCategoryData(cat1, cat2, cat3, cat4, cat5) {
	AddDataBestMovies(cat1)
	AddDataCategoryMovies(cat2)
	AddDataCategoryMovies(cat3)
	AddDataCategoryMovies(cat4)
	AddDataCategoryMovies(cat5)
}

/**
 * 
 * @param {HTML} el Element Html 
 * @param {string} cat category demander
 * @param {Array} catalogue tableaux de 5 objets
 */
// fonction de demande de data et en sortie renvoie la selection de cartes demander
function AddElementCategory(el, cat) {
		
	var conteneurChild = createDivWithClass("child")
		var movies = createDivWithId(`${cat}`)
		movies.setAttribute("class", "affichage")

			console.log("le catalogues ", catalogues)
			console.log("categorie demander :", cat)

			var prev = compteurs[cat]
			var next = prev + NOMBRE_DE_CARTES

			console.log("compteur", prev, next)

			var categoryData = catalogues[cat]
			
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
function callAddCategory(cat, cat1, cat2, cat3, cat4) {	
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
 * @param {object} movie data de la carte demander
 * @param {string} id id de la carte demander
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

/**
 * 
 * @param {string} cat categorie demander
 * @param {HTMLElement}  el parent html
 * @param {string} index position de la carte 
 */
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

/**
 * function de surveillance de windows
 */
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

/**
 * 
 * @param {link} data url de l'objet carte
 */
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

/**
 * 
 * @param {string} categorie categorie demander
 * @param {HTMLElement} el div parent
 */
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

function getElementFlechePrevious(el, categorie) {
	var elementImg = createDivWithClass("flecheGauche")
	elementImg.onclick = function() {
		previous(categorie)
	}
	el.appendChild(elementImg)
}

function getElementFlecheNext(el, categorie) {
	var elementImg = createDivWithClass("flecheDroite")
	elementImg.onclick = function() {
		next(categorie)
	}
	el.appendChild(elementImg);
}

/**
 * 
 * @param {string} className 
 * @param {string} IDName
 * @returns HTMLElement
 */
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

/**
 * appel des fonctions
 */
// appel des fonctions---------------------------------------------------------------------------------------------------------------------------------------------------------------------
callCategoryData(CAT1, CAT2, CAT3, CAT4, CAT5)
callAddCategory(CAT1, CAT2, CAT3, CAT4, CAT5)
effetElementBest()


// essais retour console
console.log("affichage categorie :", CAT1)
console.log("affichage compteur intialiser :", compteurs)
console.log("affichage catalogues :", catalogues)
console.log("affichage d'un categorie :", catalogues.best)