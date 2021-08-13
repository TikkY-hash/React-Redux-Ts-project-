import React from 'react';
import HeaderTodoBlock from "../header-todo-block";
import TodoList from "../todo-list";
import useTypedSelector from "../../hooks/useTypedSelector";
import { useAction } from "../../hooks";
import BlockApp from "../block-app";

const UnCompleteBlock : React.FC = () => {
    const { toDo } = useTypedSelector(state => state.todoReducer)
    const {onAddTask} = useAction()

    const onAddNewTask = () => {
        if( toDo.length === 0 || toDo[toDo.length - 1].text !== '' ) {
            onAddTask('')
        }
    }

    const unCompletedTasks = toDo.filter((value) => !value.complete)

    return (
        <BlockApp>
            <HeaderTodoBlock
                onCreateAction = {onAddNewTask}
                firstTittle="TO DO"
                secondTittle="ADD"/>
            <TodoList onFilterValue ={ unCompletedTasks }/>
        </BlockApp>
    );
};





export default UnCompleteBlock;