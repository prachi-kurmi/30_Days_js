document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const searchInput = document.querySelector('.search-input');
    const imageContainer = document.querySelector('.image-container');
    const apiKey = ''; // Replace with your OMDb API key
    const searchUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=`;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();

        if (query) {
            try {
                const response = await fetch(`${searchUrl}${encodeURIComponent(query)}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch movie search results');
                }
                const data = await response.json();
                displayMovies(data.Search);
            } catch (error) {
                console.error('Error fetching movie search results:', error);
                imageContainer.innerHTML = '<p>Failed to load search results. Please try again later.</p>';
            }
        }
    });

    // Function to Display movies
    async function displayMovies(movies) {
        imageContainer.innerHTML = '';
        if (!movies || movies.length === 0) {
            imageContainer.innerHTML = '<p>No movies found</p>';
            return;
        }

        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}">
                <div class="movie-footer">
                    <p class="movie-title">${movie.Title}</p>
                    <p class="movie-year">${movie.Year}</p>
                </div>
                <button class="more-info">More Info</button>
                <div class="movie-details" id="details-${movie.imdbID}"></div>
            `;

            movieElement.querySelector('.more-info').addEventListener('click', async () => {
                const detailsContainer = document.getElementById(`details-${movie.imdbID}`);
                
                if (detailsContainer.innerHTML) {
                    detailsContainer.classList.toggle('show');
                    return;
                }

                // Fetching movies details
                try {
                    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch movie details');
                    }
                    const data = await response.json();
                    detailsContainer.innerHTML = `
                        <p><strong>Director:</strong> ${data.Director || 'N/A'}</p>
                        <p><strong>Cast:</strong> ${data.Actors || 'N/A'}</p>
                        <p><strong>Plot:</strong> ${data.Plot || 'No description available'}</p>
                        <p><strong>Genres:</strong> ${data.Genre || 'N/A'}</p>
                    `;
                    detailsContainer.classList.add('show');
                } catch (error) {
                    console.error('Error fetching movie details:', error);
                    detailsContainer.innerHTML = '<p>Failed to load movie details. Please try again later.</p>';
                }
            });

        
            movieElement.addEventListener('mouseleave', () => {
                const detailsContainer = document.getElementById(`details-${movie.imdbID}`);
                detailsContainer.classList.remove('show');
            });

            imageContainer.appendChild(movieElement);
        });
    }
});
