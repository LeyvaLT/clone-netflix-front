import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import React, { Component } from 'react';
import './App.css';
import Routes from './Routes'


//http://netflix-clone-b23.herokuapp.com/

class App extends Component {
  render() {
    return (
       <div className="cover">
           <Routes/>
       </div>
    );
  }
}

export default App;
