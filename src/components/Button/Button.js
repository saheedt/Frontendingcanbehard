import React from 'react';

const Button = ({title, clickHandler, query, style}) => {
    return(
        <button className="button" onClick={()=>{
            const baseUrl = process.env.APIBASEURL;
            const apiKey = process.env.APIKEY;
            const urlSearchPath = process.env.APIMOVESEARCHPATH;
            clickHandler(baseUrl, urlSearchPath, apiKey, query);
            }} style={style}>
            {title}
        </button>
    );
};

export default Button;
