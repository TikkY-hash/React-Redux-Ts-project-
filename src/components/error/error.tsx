import React from 'react';
import './error.scss'

const Error = ({ errorText } :  {errorText : string }) => {
    return (
        <div className="error__block">
            <h1>{errorText}</h1>
        </div>
    );
};

export default Error;