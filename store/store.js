import { createStore , combineReducers } from 'redux'

import Reducer from './reducer';


const rootReducer = combineReducers({
    mealsReducer : Reducer 
})
export default  Store = createStore(rootReducer);

