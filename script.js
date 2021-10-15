AddElementBest();


AddElementCategoryBest();
AddElementCategoryAction();
AddElementCategoryAdulte();
AddElementCategoryAdventure();
AddElementCategoryAnimation();
AddElementCategoryBiography();
AddElementCategoryComedy();
AddElementCategoryCrime();
AddElementCategoryDocumentary();
AddElementCategoryDrama();
AddElementCategoryFamilly();


function AddElementBest() {
	var movies = document.getElementById('best_movie');

	fetch("http://localhost:8000/api/v1/titles/?year=2010&min_year=&max_year=&imdb_score=9.6&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryAction = results.map((movie) => {

				var bestTitle = document.createElement('h2');
				bestTitle.setAttribute("id", "titre");
				bestTitle.innerText = movie.title;
				
				return bestTitle;
			});
			categoryAction.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?year=2010&min_year=&max_year=&imdb_score=9.6&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
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


function AddElementCategoryBest() {
	var movies = document.getElementById("best");

	fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=9.6&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryBest = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryBest.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=&genre_contains=&imdb_score=&imdb_score_max=9.6&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryAction = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img2 = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img2}"></a>`;
				
				return categoryImage;
			});
			categoryAction.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=&genre_contains=&imdb_score=&imdb_score_max=9.6&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=3&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryAction = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img2 = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img2}"></a>`;
				
				return categoryImage;
			});
			categoryAction.forEach((movie) => movies.appendChild(movie));
		});	
}

function AddElementCategoryAction() {
	var movies = document.getElementById("action");

	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=action&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryAction = results.map((movie) => {

				var categoryActionImage = document.createElement("div");
				categoryActionImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryActionImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryActionImage;
			});
			categoryAction.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=action&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryAction = results.map((movie) => {

				var categoryActionImage = document.createElement("div");
				categoryActionImage.setAttribute("id", "box");
				const img2 = movie.image_url;
				categoryActionImage.innerHTML = `<a href="#"><img src="${img2}"></a>`;
				
				return categoryActionImage;
			});
			categoryAction.forEach((movie) => movies.appendChild(movie));
		});	
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=action&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=3&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryAction = results.map((movie) => {

				var categoryActionImage = document.createElement("div");
				categoryActionImage.setAttribute("id", "box");
				const img2 = movie.image_url;
				categoryActionImage.innerHTML = `<a href="#"><img src="${img2}"></a>`;
				
				return categoryActionImage;
			});
			categoryAction.forEach((movie) => movies.appendChild(movie));
		});	
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=action&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=4&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryAction = results.map((movie) => {

				var categoryActionImage = document.createElement("div");
				categoryActionImage.setAttribute("id", "box");
				const img2 = movie.image_url;
				categoryActionImage.innerHTML = `<a href="#"><img src="${img2}"></a>`;
				
				return categoryActionImage;
			});
			categoryAction.forEach((movie) => movies.appendChild(movie));
		});			
}

function AddElementCategoryAdulte() {
	var movies = document.getElementById("adulte");

	fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=adult&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryAdulte = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryAdulte.forEach((movie) => movies.appendChild(movie));
		});
}

function AddElementCategoryAdventure() {
	var movies = document.getElementById("adventure");

	fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=adventure&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryAdventure = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryAdventure.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=adventure&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryAdventure = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryAdventure.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=adventure&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=3&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryAdventure = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryAdventure.forEach((movie) => movies.appendChild(movie));
		});	
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=adventure&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=4&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryAdventure = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryAdventure.forEach((movie) => movies.appendChild(movie));
		});		
}

function AddElementCategoryAnimation() {
	var movies = document.getElementById("animation");

	fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=animation&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=animation&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=animation&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=3&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});	
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=animation&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=4&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});		
}

function AddElementCategoryBiography() {
	var movies = document.getElementById("biography");

	fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=biography&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=biography&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=biography&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=3&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=biography&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=4&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});		
}


function AddElementCategoryComedy() {
	var movies = document.getElementById("comedy");

	fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=comedy&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=comedy&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=comedy&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=3&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=biography&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=4&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});		
}

function AddElementCategoryCrime() {
	var movies = document.getElementById("crime");

	fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=crime&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&crime=comedy&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=crime&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=3&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=biography&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=4&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});		
}

function AddElementCategoryDocumentary() {
	var movies = document.getElementById("documentary");

	fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=documentary&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});	
}

function AddElementCategoryDrama() {
	var movies = document.getElementById("drama");

	fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=drama&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=drama&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=drama&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=3&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=biography&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=4&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});		
}

function AddElementCategoryFamilly() {
	var movies = document.getElementById("familly");

	fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=familly&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=familly&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=familly&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=3&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});
	fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=biography&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=4&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=")
		.then((res) => res.json())
		.then((data) => {
			const { results } = data;
			const categoryMovie = results.map((movie) => {

				var categoryImage = document.createElement("div");
				categoryImage.setAttribute("id", "box");
				const img = movie.image_url;
				categoryImage.innerHTML = `<a href="#"><img src="${img}"></a>`;
				
				return categoryImage;
			});
			categoryMovie.forEach((movie) => movies.appendChild(movie));
		});		
}