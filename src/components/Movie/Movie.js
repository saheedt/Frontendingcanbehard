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
        <div className="movie-container shadow">
            <div className="movie-poster-holder">
                <figure>
                    <img id="poster-canvas" className="movie-poster" src={poster.src} alt={title} />
                </figure>
            </div>
            <div className="movie-details-holder">
                <h2>{title} - {movieYear}</h2>
                <p>{overview}</p>{/**className="movie-summary" */}
            </div>
        </div>
    );
};

export default Movie;
