import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'



const userFeedback = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}


const statesReducer = (state = userFeedback , action ) => {
    if (action.type === "FEELING") {
          {userFeedback.feeling = action.payload}; 
    } else if ( action.type === "UNDERSTAND") {
         {userFeedback.understanding = action.payload}; 
    } else if ( action.type === "SUPPORT" ) {
        { userFeedback.support = action.payload}; 
    } else if (action.type === "COMMENTS") { 
         {userFeedback.comments = action.payload};

    }
    return state
}


// const feedbackReducer = (state = {}, action ) => {
//     if (action.type === "USER_FEEDBACK") {
//         return action.payload
//     }
//     return state; 
// }

//
const storeInstance = createStore ( 
    combineReducers({
        // feedbackReducer, 
        statesReducer 
    }), 
    applyMiddleware(logger)
    
)

ReactDOM.render(<Provider  store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
