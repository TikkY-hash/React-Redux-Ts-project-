import React from 'react';
import HeaderTodoBlock from "../header-todo-block";
import TodoList from "../todo-list";
import {IToDoBlock} from "../../types/types-todo";

const TodoBlock = ( { onFilterValue, firstTittle,secondTittle,onCreateAction,className } : IToDoBlock)  => {
    return (
        <div className={className}>
            <HeaderTodoBlock
                onCreateAction = {onCreateAction}
                firstTittle={firstTittle}
                secondTittle={secondTittle}/>
            <TodoList onFilterValue = { onFilterValue }/>
        </div>
    );
};


export default TodoBlock;