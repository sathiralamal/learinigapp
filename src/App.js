import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch ,Redirect,BrowserRouter as Router} from 'react-router-dom';

//Student ID :IT18045840
//Student Name :S.D.S.L Dissanayake


import DefaultHeader from './components/Layoute/Header';
import DefaultFooter from './components/Layoute/Footer';
import Register from './components/Registation/Register';
import Home from './components/Home/Home';
import LectureDashbord from './components/LectureDashbord/LectureDashbord';
import Classview from './components/ClassManage/Classview';


class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">

        <DefaultHeader/>
          <Switch>

            <Route path="/" exact component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/dashbord" component={LectureDashbord}/>
            <Route path="/classpage" component={Classview} />
  
          </Switch> 
          
          <DefaultFooter/>
          </div>
      </Router>
    );
  }
  
}

export default App;
