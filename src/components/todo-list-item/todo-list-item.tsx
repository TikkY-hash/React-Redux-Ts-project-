import React from 'react';
import './todo-list-item.scss'
import { IToDoListItem } from "../../types/types-todo";
import { useAction } from "../../hooks/";

const TodoListItem = ({text,complete,hasHover,onUpdateTerm,onDeleteTask,onToggleTask} : IToDoListItem ) => {
    const { onAddTask } = useAction()

    let style : string = !complete ? "todo__form__active hide" : "todo__form__passive hide"

    if(hasHover) {
        style += " visible"
    }

    const onChangeToggle = () : void => {
        onToggleTask()
    }

    const onChangeText = (e : React.ChangeEvent<HTMLInputElement>) : void => {
        onUpdateTerm(e.target.value)
    }

    const onInputPress = (e : React.KeyboardEvent) : void => {
        if(e.key === 'Enter' && text !== '') {
            onAddTask('')
        }
    }

    const onBlurInput = (e : React.ChangeEvent <HTMLInputElement>) : void => {
        if(e.target.value.length === 0) {
            onDeleteTask()
        }
    }

    return (
        <div className={style}>
            <div className="input__position">
                <button onClick={onChangeToggle} style={{cursor : "pointer"}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                         className="bi bi-bookmark-plus" viewBox="0 0 16 16">
                        <path
                            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"/>
                    </svg>
                </button>
                <input
                    value = {text}
                    onInput={onChangeText}
                    onKeyPress={onInputPress}
                    onBlur={onBlurInput}
                    autoFocus
                    className="input__value"/>
            </div>
            <button style={{cursor : "pointer"}} onClick={onDeleteTask}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path
                        d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                </svg>
            </button>
        </div>
    );
};

export default TodoListItem;