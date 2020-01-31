import React, { useEffect, useState } from 'react';


const Movie = ({title, overview, year, posterPath, getPoster}) => {
    const defaultImg = 'https://carolinadojo.com/wp-content/uploads/2017/04/default-image-768x576.jpg'
    const [poster, setPoster] = useState('');
    useEffect(()=>{
        const imgBaseUrl = process.env.APIMOVIEPOSTERBASE;
        getPoster(imgBaseUrl, posterPath)
            .then((image)=> setPoster(image))
            .catch((error)=>{
                setPoster({src: defaultImg});
                console.error(error);
            })
    },[posterPath]);
    const movieYear = year.split('-')[0];

    return (
        <article className="movie-container shadow">
            <div className="movie-poster-holder">
                <img id="poster-canvas" className="movie-poster" src={poster.src} alt={`${title} poster`} />
            </div>
            <div className="movie-details-holder">
                <h3>{title} - {movieYear}</h3>
                <p>{overview}</p>
            </div>
        </article>
    );
};

export default Movie;
