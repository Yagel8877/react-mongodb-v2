import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Slug from './components/Slug';


class App extends Component {
state = {
    data: null  
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express })) 
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
    

  render() {
    if(this.state.data === null){
      return(<p>cant get aaaa</p>)
    }
    else{
      return (
          <div className="app">        
            <p className='mb-6'>{this.state.data}</p>
          <Router >  
            <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/v/:slug' element={<Slug />}/>
            </Routes>
          </Router> 
          </div>
    );
    }
  }
}


export default App;

