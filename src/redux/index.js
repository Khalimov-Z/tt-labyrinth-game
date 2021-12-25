import { applyMiddleware, combineReducers, createStore } from 'redux'
import stateGame from './ducks/reducerGame'
import logger from 'redux-logger'


const rootReducer = combineReducers({
  stateGame,
})

export const store = createStore(rootReducer, applyMiddleware(logger));