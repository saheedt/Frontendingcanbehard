import React from 'react';

const Subcontainer = ({wrapper, title, children, style}) => {
    const wrapperTypes = { section: 'section', div: 'div' };
    const getTypeWrapper = (wrapper_obj, type)=>({type: wrapper_obj[type]});
    const selectedWrapper = getTypeWrapper(wrapperTypes, wrapper);

    return (
        <selectedWrapper.type className="sub-container" style={style}>
            <header className="sub-container-header">
                <h2><span>{title}</span></h2>
            </header>
            <div className="sub-container-child">
                {children}
            </div>
        </selectedWrapper.type>
    );

};

export default Subcontainer;
