import { combineReducers, createStore } from 'redux';
import {dataReducer} from '../reducers/dataReducer'
import {authReducer} from '../reducers/authReducer'
import {actionTypes} from '../reducers/actionTypes'


const allCombinedReducers = combineReducers({dataReducer,authReducer,actionTypes});


export default function store() {
  return createStore(allCombinedReducers);
};