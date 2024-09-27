// API key from TMDB
const api = "a9a882972028574991331add201f6890";

// Base URL of the site
const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w500";

// Request for movies data
const requests = {
    fetchTrending: `${base_url}/trending/all/week?api_key=${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?api_key=${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?api_key=${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?api_key=${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?api_key=${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?api_key=${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?api_key=${api}&with_genres=99`,
};

// Used to truncate the string
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

// Banner
// Banner
fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results);

        // Safeguard in case results are empty or undefined
        if (!data.results || data.results.length === 0) {
            console.error("No movies found.");
            return;
        }

        // Every refresh, the movie will change
        const setMovie = data.results[Math.floor(Math.random() * data.results.length)];

        // Check if setMovie is valid and has a backdrop path
        if (!setMovie || !setMovie.backdrop_path) {
            console.error("Movie data is missing or incomplete.");
            return;
        }

        var banner = document.getElementById("banner");
        var banner_title = document.getElementById("banner_title");
        var banner_desc = document.getElementById("banner_description");

        // Correct backgroundImage formatting
        banner.style.backgroundImage = `url(${banner_url}${setMovie.backdrop_path})`;
        banner_desc.innerText = truncate(setMovie.overview, 150);
        banner_title.innerText = setMovie.name || setMovie.title; // Display either name or title
    })
    .catch((error) => {
        console.error("Error fetching Netflix Originals:", error);
    });


// Movies rows
fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row netflixrow";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "NETFLIX ORIGINALS";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";
            var s = movie.name.replace(/\s+/g, "");
            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

// Top rated
fetch(requests.fetchTrending)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Top Rated";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";
            poster.id = movie.id;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

// Action Movies
fetch(requests.fetchActionMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Action Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";
            poster.id = movie.id;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });

    // Comedy
fetch(requests.fetchComedyMovies)
.then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Comedy Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        poster.id = movie.id;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
});

// horror
fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "horror Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row__poster";
            poster.id = movie.id;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });


    // romance
fetch(requests.fetchRomanceMovies)
.then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Romance Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        poster.id = movie.id;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
});

// Documentaries
fetch(requests.fetchDocumentaries)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Documentaries";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row__poster";
            poster.id = movie.id;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });
    