import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';

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
      <div>

        <p></p>
        
        <Router >  
          <div className="app">
            <p className='mb-6'>{this.state.data}</p>
            <Switch>
            <Route exact path='/'>
            <Home />
            </Route>
            <Route path='/signup'>
            <SignUp />
            </Route>
            <Route path='/login'>
            <Login />
            </Route>
            </Switch>
          </div>
      </Router>
    </div>
    );
    }
  }
}

export default App;

