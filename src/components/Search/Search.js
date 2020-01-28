import React, { useState, useEffect } from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
const Search = ({fetchMovie}) => {
    const [searchValue, setSearchValue] = useState('');

    return(
        <div className="search-container">
            <div className="search-input-holder">
                <Input
                    placeholder={"Search Movies"}
                    getValue={(value)=>{setSearchValue(value)}}
                />
                </div>
            <div className="search-button-holder">
                <Button title="search" clickHandler={fetchMovie} query={searchValue}/>
                </div>
        </div>
    );
};

export default Search;
