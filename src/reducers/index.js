import { combineReducers } from 'redux'
import TracksReducer from './reducer_tracks'


const rootReducer = combineReducers({
     tracks: TracksReducer
})

export default rootReducer