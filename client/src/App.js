import React, { Component} from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Slug from './components/Slug';
import Layout from './components/Layout';
import CheckServer from './components/CheckServer';
import JwtAuth from './components/JwtAuth';
import PostVideo from './components/PostVideo';
// import  AuthContextProvider  from './context/AuthContext';



class App extends Component{
  


    render(){
      return (
          <div className="app bg-blue-100">        
          <Router >
            {/* <AuthContextProvider> */}
            <Layout>
            <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/page/:slug' element={<Slug />}/>
            <Route path='/checkserver' element={<CheckServer />}/>
            <Route path='/jwtauth' element={<JwtAuth />}/>
            <Route path='/postvideo' element={<PostVideo />}/>
            </Routes>
            </Layout>
            {/* </AuthContextProvider> */}
          </Router> 
          </div>
    );
    }
  
  }


export default App;

