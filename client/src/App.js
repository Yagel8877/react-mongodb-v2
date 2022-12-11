import React, { Component, Suspense, lazy} from 'react';
import './App.css';
import data from "./data2.json";
// import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Helmet, HelmetProvider} from 'react-helmet-async';
// import SignUp from './components/SignUp';
// import Login from './components/Login';
// import Slug from './components/Slug';
import Layout from './components/Layout';
// import CheckServer from './components/CheckServer';
import JwtAuth from './components/JwtAuth';
// import NewFile from './components/NewFIle';
// import PostVideo from './components/PostVideo';
// import VideoPage from './components/VideoPage';
// import Files from './components/FIles';
// import PostImage from './components/PostImage';
// import Featured from './components/Featured';
const Featured = lazy(()=>import("./components/Featured"))
const PostImage = lazy(()=>import("./components/PostImage"))
const Files = lazy(()=>import("./components/FIles"))
const VideoPage = lazy(()=>import("./components/VideoPage"))
const PostVideo = lazy(()=>import("./components/PostVideo"))
const Login = lazy(()=>import("./components/Login"))
const SignUp = lazy(()=>import("./components/SignUp"))
const Slug = lazy(()=>import("./components/Slug"))
const Home = lazy(()=>import("./components/Home"))
const NewFile = lazy(()=>import("./components/NewFile"))
const CheckServer = lazy(()=>import("./components/CheckServer"))
// import  AuthContextProvider  from './context/AuthContext';



class App extends Component{
  


    render(){

      

      return (
        <HelmetProvider>

          <div className="app bg-black">
          <Helmet>
          <meta http-equiv="Content-Security-Policy"
          content="default-src 'self';"/>
            {data.map((d)=>{
              if(d.thumbnailSrc === undefined){
                d.thumbnailSrc = 'undefined'
            }
            else if(d.thumbnailSrc.includes('.jpeg') || d.thumbnailSrc.includes('.png')){
                console.log('valid src')
            }else{
                d.thumbnailSrc = 'undefined'
            }
              

              return(
            <link rel='preload' as='image' href={`/api/image/`+d.thumbnailSrc} key={d.vId}></link>)
            })
    }
            </Helmet>
            <Suspense fallback={<div className='h-[100vh] w-[100vw] bg-transparent opacity-25 transtition ease-in delay-1000'>hey</div>}>

            <Router >
            {/* <AuthContextProvider> */}
            <Layout>
            <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/page/:slug' element={<Slug />} />
            <Route path='/checkserver' element={<CheckServer />}/>
            <Route path='/jwtauth' element={<JwtAuth />}/>
            <Route path='/postvideo' element={<PostVideo />}/>
            <Route path='/video/:slug' element={<VideoPage />}/>
            <Route path='/postimg' element={<PostImage />}/>
            <Route path='/files' element={<Files />}/>
            <Route path='/featured' element={<Featured />}/>
            <Route path='/featured1' element={<NewFile />}/>
            </Routes>
            </Layout>
            {/* </AuthContextProvider> */}
          </Router> 
            </Suspense>
          </div>
        </HelmetProvider>
    );
    }
  
  }


export default App;

