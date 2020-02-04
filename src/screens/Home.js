import React, { useState, useEffect } from 'react';

import Container from '../components/Container/Container';
import Subcontainer from '../components/Subcontainer/Subcontainer';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Movie from '../components/Movie/Movie';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isUserSearch, setIsUserSearch] = useState(true);

    const fetchMovie = (apiBaseUrl, searchPath, apiKey, query, isUserTriggered) => {
        const url = `${apiBaseUrl}/${searchPath}?api_key=${apiKey}&query=${query}`;
        setIsUserSearch(isUserTriggered);
        fetch(url)
            .then(response => response.json())
            .then((responseObject) => setMovies(responseObject.results))
            .catch(error => { console.error(error); });
    };
    const loadMoviePoster = async(moviePosterBaseUrl, path, imageSize='w342') => {
        const url = `${moviePosterBaseUrl}/${imageSize}${path}`;
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.addEventListener('load', ()=>{ resolve(image)})
            image.addEventListener('error', reject)
            image.src = url;
        })
    };

    const renderFetchedMovies = (movies) => {
        return movies.map((movie, index) => {
            return <Movie
                        key={`${index}__${movie.poster_path}`}
                        title={movie.title}
                        overview={movie.overview}
                        year={movie.release_date}
                        posterPath={movie.poster_path}
                        getPoster={loadMoviePoster}
                    />
        });
    };

    const renderSearchResultLabel = (movies, isUserTriggeredSearch) => {
        console.log(isUserTriggeredSearch)
        const message = isUserTriggeredSearch ?
            `Your search returned ${movies.length} movies`
            :
            `Preset search returned ${movies.length} movies`
        return <span className="label" role="status" aria-live="polite">{message}</span>;
    };

    useEffect(()=>{
        const movieList = ['Black gold', 'Police', 'Summer', 'Matrix', 'Bad boys'];
        const baseUrl = process.env.APIBASEURL;
        const urlSearchPath = process.env.APIMOVESEARCHPATH;
        const apiKey = process.env.APIKEY;
        const atRandom = Math.floor(Math.random() * movieList.length);
        const initialQuery = movieList[atRandom];
        const isUserTriggered = false;
        fetchMovie(baseUrl, urlSearchPath, apiKey, initialQuery, isUserTriggered);
    }, []);

    return(
        <Container>
            <Header title="MOVIES">
                <Search fetchMovie={fetchMovie} />
            </Header>
            <Subcontainer wrapper='section' title='RESULT'>
                {
                    movies && movies.length > 0 ?
                        <>
                        {renderSearchResultLabel(movies, isUserSearch)}
                        {renderFetchedMovies(movies)}
                        </>
                    :
                    <div>
                        <h2>No movies found..</h2>
                        <span className="label" role="status">Your search returned no movies..</span>
                    </div>
                }
            </Subcontainer>
        </Container>
    )
}

export default Home;
