import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { connect } from 'react-redux'; 
import Header from '../Header/Header'; 
import {HashRouter as Router, Route, } from 'react-router-dom';
import FeelingComp from '../FeelingComp/FeelingComp'; 
import UnderComp from '../UnderComp/UnderComp'; 
import SupportComp from '../SupportComp/SupportComp'; 
import CommentsComp from '../CommentsComp/CommentsComp'; 
import ReviewComp from '../ReviewComp/ReviewComp'; 
import Success from '../Success/Success'; 
import Admin from '../Admin/Admin'; 


class App extends Component {
  render() {
    return (
     <Router>
      
      <div className="App">
        <Header /> 
        {/* <input className="feeling" type="number" />
        <button>Submit</button>  */}
        <br/>


      {/* All the routes used  */}
      <Route exact path='/' component={FeelingComp} />
      <Route exact path='/understanding' component={UnderComp} />
      <Route exact path='/supported' component={SupportComp} />
      <Route exact path='/comments' component={CommentsComp} />
      <Route exact path='/review' component={ReviewComp} />
      <Route exact path='/success' component= {Success} />
      <Route exact path='/admin' component ={Admin} />

      </div>
    </Router> 
    );
  }
}

export default connect ()(App);
