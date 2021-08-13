import React,{FC} from 'react';

const BlockMarkup : FC = ({children}) => {
    return (
        <div className="todo__block">
            {children}
        </div>
    );
};

export default BlockMarkup;