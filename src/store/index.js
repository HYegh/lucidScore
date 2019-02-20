import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import lScoreReducer from './reducers/lScoreReducer'

const reducer = combineReducers({ lScore: lScoreReducer })

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)