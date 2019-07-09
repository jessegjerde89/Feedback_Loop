import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button'


class ReviewComp extends Component {



// handle click on button 
// send post request to server 
// then send user to success page
handleClick = () =>{

    axios.post('/feedback', this.props.feedback )
      .then(response => {
        console.log( 'response in POST', response)
    }).catch(error => {
        console.log('error in post', error)
    })
    this.props.history.push('/success');
    
}

    
// handleClick = () =>{

//     this.props.history.push('/success'); 
// }

    render () {
        let displayButton = '' 
        console.log(this.props.feedback)

        // conditional used if all fields are filled or not
        // if all fields filled, button returns as not disabled
        // if all fields are not filled, button is disabled 

        if ( this.props.feedback.feeling === '' || 
            this.props.feedback.understanding === '' ||
            this.props.feedback.support === '' ||
            this.props.feedback.comments === '' ) {

            displayButton = 
            (<button variant="contained" color="primary" >
                <span >Incomplete</span> 
                </button>)
        } else {
            displayButton = 
            (<Button  onClick={this.handleClick}> 
                <span >Complete</span> 
                </Button>)
        }


             



        return (
        <div>
            {/* Displays all the users entered info from previous components */}
            <h1>Review Your Feedback</h1>
              <h3>Feelings: {this.props.feedback.feeling}</h3>
              <h3>Understanding: {this.props.feedback.understanding}</h3>
              <h3>Support: {this.props.feedback.support}</h3>
              <h3>Comments: {this.props.feedback.comments}</h3>

                {/* Button variable  */}
               {displayButton}
        </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
   
        feedback: reduxState.statesReducer

  });
  
  export default withRouter(connect(mapReduxStateToProps)(ReviewComp));