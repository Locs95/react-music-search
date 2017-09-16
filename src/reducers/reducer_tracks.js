import { FETCH_TRACKS } from '../actions/index.js'


export default function (state = [], action) {
      switch(action.type){
      	  case FETCH_TRACKS:
      	     return [action.payload.data, ...state]
      }

      return state
}


