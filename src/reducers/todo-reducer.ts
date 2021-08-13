import ActionTypes from "../action-types";
import {ActionType, IInitialState, IToDoType} from "../types/types-todo";
import compose from "../utils";

const getInitialState = () : IToDoType[] => JSON.parse(localStorage.getItem('toDo')!) ?? []

const initialState : IInitialState = {
    toDo : getInitialState()
}

const updateOldElement = (...args : [string,string?] ) => (id : number) => (state : IInitialState) : IInitialState  => {
    const { toDo } = state

    const oldElementId = toDo.findIndex(value => value.id === id)
    const oldElement = toDo[oldElementId]

    const newElement = createNewElement(oldElement, ...args)

    return {
        toDo : [
            ...toDo.slice(0,oldElementId),
            newElement,
            ...toDo.slice(oldElementId + 1)
        ]
    }
}

const createNewElement = (oldElement : IToDoType,...args : [string,string?]) => {
    const [element ,value = ''] = args

    if(element !== 'text') {
        return {...oldElement, [element] : !oldElement[element]}
    }

    return {...oldElement,[element] : value}
}

const todoReducer = (state = initialState,action : ActionType) : IInitialState  =>  {
    switch (action.type) {
        case ActionTypes.ADD_TO_TASKS:

            let idTask : number = 0

            if(state.toDo.length > 0) {
                idTask = state.toDo[state.toDo.length - 1].id + 1
            }

            return {
                toDo : [
                    ...state.toDo,
                    {complete : false, id : idTask,text : action.payload,hasHover : false}
                ]
            }
        case ActionTypes.DELETE_OF_TASKS:
            return {
                toDo : [
                    ...state.toDo.filter((value) => value.id !== action.payload)
                ]
            }
        case ActionTypes.TOGGLE_TASK:
            const id = action.payload

            return compose(
                updateOldElement('complete')(id),
                updateOldElement('hasHover')(id)
            )(state)

        case ActionTypes.EDIT_TASK :
            const newId = action.payload
            const value = action.text

            return updateOldElement('text',value)(newId)(state)

        case ActionTypes.HOVER_TASK :
            const hoverId = action.payload

            return updateOldElement('hasHover')(hoverId)(state)
        case ActionTypes.CLEAR_ALL_TASK :
            return {
                toDo : [
                    ...state.toDo.filter((value) => !value.complete)
                ]
            }
        default :
            return state
    }
}

export default todoReducer