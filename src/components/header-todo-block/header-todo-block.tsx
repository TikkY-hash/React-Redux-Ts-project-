import React from 'react';
import './header.scss'
import { IHeaderBlock } from "../../types/types-todo";

const HeaderTodoBlock = ({ onCreateAction,firstTittle,secondTittle } : IHeaderBlock) => {

    const styles : {[key : string] : string} = {
        "TO DO" : "header",
        "COMPLETE" : "header__complete"
    }

    const classStyle =  styles[firstTittle]

    return (
        <div className={classStyle}>
            <div className="text__style">
                <h3>{firstTittle}</h3>
                <h3 style={{cursor : "pointer"}} onClick={onCreateAction}> {secondTittle} </h3>
            </div>
        </div>
    );
};

export default HeaderTodoBlock;