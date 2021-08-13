import { bindActionCreators } from "redux";
import * as actions from '../action-creators/'
import { useDispatch } from "react-redux";

const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions,dispatch)
}

export default useAction
