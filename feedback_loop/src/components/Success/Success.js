import React, { Component } from 'react';
import { connect } from 'react-redux'


class Success extends Component {

    // handle submit on form 
    // send back to starting component
handleSubmit = (event) =>{
  event.preventDefault(); 
  this.props.history.push('/')
  
}


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <h2> Thank you for your submission !</h2>
          <button type='submit' > Leave New Feedback </button>
        <br/>
        </form>
      </div>
    );
  }
}


export default connect()(Success );