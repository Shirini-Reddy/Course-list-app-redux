import { combineReducers } from "redux";
import films from './courseDataReducer';


////declare all reducers
const rootReducer = combineReducers({
    films
})

export default rootReducer