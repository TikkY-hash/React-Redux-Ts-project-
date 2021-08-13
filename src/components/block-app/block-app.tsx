import React,{ FC } from 'react';

const BlockApp : FC = ({children}) => {
    return (
        <div className="block">
            {children}
        </div>
    );
};

export default BlockApp;