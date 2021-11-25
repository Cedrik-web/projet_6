
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
	var index = ("best");
	var trigger = ("best");
	addElementDiv(link, index, trigger);	
}
//best favori
function callBestFavori() {
	var link = 	("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=9.4&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=");
	var index = ("best");
	var trigger = ("best");
	findTitleFavori(link);
	addElementDiv(link, index, trigger);	
}

//action ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//action
function callAction() {
	var cat = ("action");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//action favori
function callActionFavori() {
	var cat = ("action");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//adult ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//adult
function callAdult() {
	var cat = ("adult");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//adult favori
function callAdultFavori() {
	var cat = ("adult");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//adventure ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//adventue
function callAdventure() {
	var cat = ("adventure");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//adventue favori
function callAdventureFavori() {
	var cat = ("adventure");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//animation ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//animation
function callAnimation() {
	var cat = ("animation");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//animation favori
function callAnimationFavori() {
	var cat = ("animation");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//biography ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//biography
function callBiography() {
	var cat = ("biography");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//biography favori
function callBiographyFavori() {
	var cat = ("biography");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//comedy ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//comedy
function callComedy() {
	var cat = ("comedy");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//comedy favori
function callComedyFavori() {
	var cat = ("comedy");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//crime ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//crime
function callCrime() {
	var cat = ("crime");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//crime favori
function callCrimeFavori() {
	var cat = ("crime");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//documentary ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//documentary
function callDocumentary() {
	var cat = ("documentary");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//documentary favori
function callDocumentaryFavori() {
	var cat = ("documentary");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//drame ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//drame
function callDrama() {
	var cat = ("drama");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//drame favori
function callDramaFavori() {
	var cat = ("drama");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//familly ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//familly
function callFamilly() {
	var cat = ("familly");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//familly favori
function callFamillyFavori() {
	var cat = ("familly");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//fantasy ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//fantasy
function callFantasy() {
	var cat = ("fantasy");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//fantasy favori
function callFantasyFavori() {
	var cat = ("fantasy");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//film noir ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//film noir
function callFilmNoir() {
	var cat = ("film-noir");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//film noir favori
function callFilmNoirFavori() {
	var cat = ("film-noir");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//history ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//history
function callHistory() {
	var cat = ("history");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//history favori
function callHistoryFavori() {
	var cat = ("history");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//horror ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//horror
function callHorror() {
	var cat = ("horror");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//horror favori
function callHorrorFavori() {
	var cat = ("horror");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//music ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//music
function callMusic() {
	var cat = ("music");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//music favori
function callMusicFavori() {
	var cat = ("music");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//musical ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//musical
function callMusical() {
	var cat = ("musical");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//musical favori
function callMusicalFavori() {
	var cat = ("musical");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//mystery ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//mystery
function callMystery() {
	var cat = ("mystery");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//mystery favori
function callMysteryFavori() {
	var cat = ("mystery");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//news ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//news
function callNews() {
	var cat = ("news");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//news favori
function callNewsFavori() {
	var cat = ("news");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//reality-tv ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//reality-tv
function callRealityTv() {
	var cat = ("reality-tv");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//reality-tv favori
function callRealityTvFavori() {
	var cat = ("reality-tv");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//romance ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//romance
function callRomance() {
	var cat = ("romance");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//romance favori
function callRomanceFavori() {
	var cat = ("romance");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//science-fiction ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//science-fiction
function callScienceFiction() {
	var cat = ("sci-fi");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//science-fiction favori
function callScienceFictionFavori() {
	var cat = ("sci-fi");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//sport ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//sport
function callSport() {
	var cat = ("sport");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//sport favori
function callSportFavori() {
	var cat = ("sport");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//triller ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//triller
function callTriller() {
	var cat = ("triller");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//triller favori
function callTrillerFavori() {
	var cat = ("triller");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//war ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//war
function callWar() {
	var cat = ("war");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//war favori
function callWarFavori() {
	var cat = ("war");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}
//western ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//western
function callWestern() {
	var cat = ("western");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	addElementDiv(link, index, trigger);
}
//western favori
function callWesternFavori() {
	var cat = ("western");
	var link = (`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${cat}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`);
	var index = (cat);
	var trigger = (cat);
	findTitleFavori(link);
	addElementDiv(link, index, trigger);
}

//gestion de l'affichage de la categorie demander et des fleches---------------------------------------------------------------------------------------------------------------------------
function addElementDiv(link, index, trigger) {
	var movies = document.getElementById(trigger);
	var elementDiv = document.createElement("div");
	
	elementDiv.setAttribute("class", "categorie");
		getElementFlechePreviousDiv(elementDiv);
		AddElementCategory(elementDiv, link, index);
		getElementFlecheNextDiv(elementDiv);
	movies.appendChild(elementDiv);
}
function AddElementCategory(el, link, ind) {
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
		dataModal(movie, id);
	}

	span.onclick = function() {
		modal.style.display = "none";
        console.log(modal);
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
