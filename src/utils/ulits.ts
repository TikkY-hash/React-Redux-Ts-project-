import {IInitialState,сomposeFuntions} from "../types/types-todo";

const compose = (...functions : сomposeFuntions[] )  => (state : IInitialState) : IInitialState => {
   return functions.reduceRight((prevResult,value) => value(prevResult),state)
}


export default  compose