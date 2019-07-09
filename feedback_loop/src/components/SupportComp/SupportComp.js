import React, { Component } from 'react';
import { connect } from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


class SupportComp extends Component {

  state = { 
      support: ''
  }
  
// handle change on input value on form
  handleChange = (event) => {
    this.setState({
      support : event.target.value
    })
  }
  
  // handle submit on form 
  handleSubmit = (event) => {
    event.preventDefault(); 
    this.props.dispatch({ type: 'SUPPORT', payload: this.state.support})
    this.props.history.push('/comments')
  }
  
  // sendToReview = (student) => {
  //   let choice = {
  //     understand: student.support
  //   }
  //   this.props.dispatch({ type: 'SUPPORT', payload: choice})
  // }




  render() {
    return (
      <div >
       <form onSubmit={this.handleSubmit}>
        <h2>How well are you being supported ?</h2>
        <TextField className='support' type="number" 
            min='1' max='5' onChange={this.handleChange} />
        <Button type="submit" varient="outlined" >Submit</Button>
        <br/>
       </form>
      </div>
    );
  }
}



export default connect()(SupportComp);