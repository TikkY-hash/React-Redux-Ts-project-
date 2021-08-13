import React from 'react';
import HeaderTodoBlock from "../header-todo-block";
import TodoList from "../todo-list";
import useTypedSelector from "../../hooks/useTypedSelector";
import { useAction } from "../../hooks";

const CompleteBlock:  React.FC = () => {
    const { toDo } = useTypedSelector(state => state.todoReducer)
    const { onClearAllTask } = useAction()

    const completedTasks = toDo.filter((value) => value.complete)

    return (
        <div className="block__complete ">
            <HeaderTodoBlock
                onCreateAction = {onClearAllTask}
                firstTittle="COMPLETE"
                secondTittle="CLEAR"/>
            <TodoList onFilterValue ={ completedTasks }/>
        </div>
    );
};




export default CompleteBlock;

