import React, { Component } from 'react';
import { connect } from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


class CommentsComp extends Component {

state = { 
  comments: ''
}

// handle input change
handleChange = (event) => {
  this.setState({
      comments: event.target.value
   })
 }

// handle submit on form
handleSubmit = (event) =>{
  event.preventDefault(); 
  this.props.dispatch({ 
    type: 'COMMENTS', payload: this.state.comments }); 
    this.props.history.push('/review'); 
 
}


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <h2> Any comments you want to leave? </h2>
          <TextField placeholder='Comments' type="text" onChange={this.handleChange}  />
      <Button type="submit" variant="outlined" color="primary"> Submit </Button>
        <br/>
        </form>
      </div>
    );
  }
}

// map through redux state
const mapToReduxState = (reduxState) => {
  return {
     reduxState
  }
}
export default connect(mapToReduxState)(CommentsComp);