import {createStore,applyMiddleware,combineReducers} from "redux";
import {authReducer} from "../reducers/authReducer"
import {answerReducer} from "../reducers/answerReducer"
import {questionReducer} from "../reducers/questionReducer"
import thunk from "redux-thunk";
import logger from 'redux-logger'

export const configureStore=()=>{
    const store=createStore(combineReducers({authReducer,questionReducer,answerReducer}),applyMiddleware(thunk,logger))
    return store
}

