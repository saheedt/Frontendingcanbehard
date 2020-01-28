import React, { useState, useEffect } from 'react';

import Container from '../components/Container/Container';
import Subcontainer from '../components/Subcontainer/Subcontainer';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Movie from '../components/Movie/Movie';

const Home = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovie = async (apiBaseUrl, searchPath, apiKey, query) => {
        const url = `${apiBaseUrl}/${searchPath}?api_key=${apiKey}&query=${query}`;
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

    useEffect(()=>{
        const baseUrl = process.env.APIBASEURL;
        const urlSearchPath = process.env.APIMOVESEARCHPATH;
        const apiKey = process.env.APIKEY;
        const initialQuery = 'Black gold';
        fetchMovie(baseUrl, urlSearchPath, apiKey, initialQuery);
    }, []);

    return(
        <Container>
            <Header title="MOVIES">
                <Search fetchMovie={fetchMovie} />
            </Header>
            <Subcontainer wrapper='section' title='RESULT'>
                {
                    movies && movies.length > 0 ?
                        renderFetchedMovies(movies)
                    :
                    <div><h3>No movies found..</h3></div>
                }
            </Subcontainer>
        </Container>
    )
}

export default Home;
