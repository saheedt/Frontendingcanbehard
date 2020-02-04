import React, { useState, useEffect } from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
const Search = ({fetchMovie}) => {
    const [searchValue, setSearchValue] = useState('');
    const baseUrl = process.env.APIBASEURL;
    const apiKey = process.env.APIKEY;
    const urlSearchPath = process.env.APIMOVESEARCHPATH;

    const onSubmit = (event) => {
        event.preventDefault();
        const isUserTriggered = true;
        fetchMovie(baseUrl, urlSearchPath, apiKey, searchValue, isUserTriggered);
    };

    return(
        <form className="search-container" onSubmit={onSubmit}>
            <div className="search-input-holder">
                <Input
                    placeholder={"Search Movies"}
                    label={"Search Movies"}
                    getValue={(value)=>{setSearchValue(value)}}
                />
            </div>
            <div className="search-button-holder">
                <Input
                    placeholder="Search"
                    label="Search Button"
                    type="submit"
                />
            </div>
        </form>
    );
};

export default Search;
