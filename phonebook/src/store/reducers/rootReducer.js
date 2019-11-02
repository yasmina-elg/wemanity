import entryReducer from './entryReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    entry: entryReducer
})

export default rootReducer

