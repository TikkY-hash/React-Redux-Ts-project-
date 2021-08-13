import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from 'react-redux'
import { reducerType } from "../reducers/";

const useTypedSelector : TypedUseSelectorHook<reducerType> = useSelector

export default useTypedSelector