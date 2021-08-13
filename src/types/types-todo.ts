import ActionTypes from "../action-types/";

export interface IToDoType {
    complete : boolean,
    text : string,
    id : number,
    hasHover : boolean,
    [key: string]: number | string | boolean
}

interface IPayloadType {
    payload : number
}

export interface IAddToTasks {
    type : ActionTypes.ADD_TO_TASKS,
    payload : string
}

export interface IEditTask extends  IPayloadType{
    type : ActionTypes.EDIT_TASK,
    text : string
}

export interface IToggleTask extends IPayloadType{
    type : ActionTypes.TOGGLE_TASK,
}

export interface IDeleteTask extends  IPayloadType{
    type : ActionTypes.DELETE_OF_TASKS,
}

export interface IInitialState {
    toDo : IToDoType[] | [],
}

export interface IHoverTask extends IPayloadType{
    type : ActionTypes.HOVER_TASK,
}

type updateTask = () => void

export interface IToDoListItem {
    text : string,
    complete : boolean,
    hasHover : boolean
    onUpdateTerm : (id : string) => void,
    onDeleteTask : updateTask,
    onToggleTask : updateTask,
}

export interface IHeaderBlock {
    onCreateAction? : updateTask,
    onClearTask? : updateTask,
    firstTittle : string,
    secondTittle : string
}

export interface IFilteredData {
    onFilterValue : IToDoType[]
}

export interface IClearAllTask {
    type : ActionTypes.CLEAR_ALL_TASK
}

export interface IToDoBlock {
    className : string,
    firstTittle : string,
    secondTittle : string,
    onCreateAction: updateTask,
    onFilterValue : IToDoType[]
}

export type сomposeFuntions = (state : IInitialState) => IInitialState

export type ActionType = IAddToTasks | IDeleteTask | IEditTask | IToggleTask | IHoverTask | IClearAllTask