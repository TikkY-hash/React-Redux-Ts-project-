import React from 'react';
import './todo-list.scss'
import TodoListItem from "../todo-list-item";
import {useAction} from "../../hooks/";
import {IFilteredData} from "../../types/types-todo";

const TodoList = ({onFilterValue} : IFilteredData) => {
    const { onEditTask,onDeleteTask,onHoverTask,onToggleTask } = useAction()

    return (
        <div className="list">
            <ul className="list__complete">
                {
                    onFilterValue.map((value) => {
                        const { id } = value

                        return (
                            <li className = "list__item__complete"
                                key = {id}
                                onMouseEnter={() => onHoverTask(id)}
                                onMouseLeave={() => onHoverTask(id)}>
                                <TodoListItem
                                    {...value}
                                    onUpdateTerm={(content) => onEditTask(id,content)}
                                    onDeleteTask={() => onDeleteTask(id)}
                                    onToggleTask = {() => onToggleTask(id)}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default TodoList;