import { applyMiddleware, combineReducers, createStore } from 'redux'
import stateGame from './ducks/reducerGame'
import { createLogger } from 'redux-logger/src'
const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  stateGame,
})

export const store = createStore(rootReducer, applyMiddleware(logger));