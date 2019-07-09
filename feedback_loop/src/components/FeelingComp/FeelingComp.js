import React, { Component } from 'react';

import { connect } from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// import LinkButton from '../LinkButton' 

class FeelingComp extends Component {

state = {
    feeling: ''
  }


// handle input change on form
handleChange = ( event) => {
  this.setState({
      feeling: event.target.value
    
   })
 }
// handle submit on form 
handleSubmit = (event) => {
  event.preventDefault(); 
  this.props.dispatch({type: 'FEELING', payload: this.state.feeling})
  this.props.history.push('/understanding')
}

// sendToReview = (student) => {
// let rating = {
//   feeling: student.feeling
// }

    render() {


      // const ranges = [
      //   { value: '0-1',label: '0 to 20' },
      //   { value: '0-20',label: '0 to 20' },
      //   { value: '0-20',label: '0 to 20' },
      //   { value: '0-20',label: '0 to 20' },
      //   { value: '0-20',label: '0 to 20' },

        return (
          <div>
           
            <form onSubmit={this.handleSubmit} >
            <h2>How are you feeling today ?</h2>
            <TextField className="feeling" type="number" min='1' max='5' onChange={this.handleChange} />
            {/* <input className="feeling" type="number" onChange={(e) => this.handleChange(e)} /> */}
            {/* <Link to='/understanding'><button type="submit" >Submit</button> </Link> */}
            <Button variant="outlined" color="blue" type="submit" >Submit</Button>
           


{/* 
            <TextField
          select
          label="With Select"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.range}
          onChange={this.handleChange('range')}
          InputProps={{
            startAdornment: <InputAdornment position="start">Feeling</InputAdornment>,
          }}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem> */}


            <br/>
            </form>
          </div>
        );
      }
    }
    

 
  export default connect()(FeelingComp);