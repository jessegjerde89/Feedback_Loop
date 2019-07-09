import React, { Component } from 'react';

import { connect } from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


class UnderComp extends Component {

state = {
    understanding: ''
  
}

// handle change on form input 
handleChange = ( event) => {
  this.setState({
    understanding : event.target.value
  })
}

// handle submit on form 
handleSubmit = (event) => {
  event.preventDefault(); 
 
  this.props.dispatch({ type: 'UNDERSTAND', payload: this.state.understanding})
  this.props.history.push('/supported'); 
}

// sendToReview = (student) => {
//   let view = {
//     understand: student.understand
//   }
//   this.props.dispatch({ type: 'UNDERSTAND', payload: view})
// }




  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit} >
        <h2>How well are you understanding the content ?</h2>
        <TextField className='understand' type="number" min="1" max="5" onChange={this.handleChange} />
        <Button variant="outlined" type="submit" >Submit</Button>
        <br/>
        </form>
      </div>
    );
  }
}


export default connect()(UnderComp);