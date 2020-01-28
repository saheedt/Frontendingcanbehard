import React from 'react';


const Header = ({title, children}) => {
    return (
        <header className="main-header">
            <div className="header-container">
                <div className="header-title"><h2>{title}</h2></div>
                <div className="header-child">{children}</div>
            </div>
        </header>
    );
};

export default Header;
