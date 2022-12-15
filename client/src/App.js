import React, {Suspense, lazy} from 'react';
import './App.css';
import data from "./data2.json";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import Layout from './components/Layout';
import JwtAuth from './components/JwtAuth';

// import Login from "./components/Login"
// import SlugWrapper from"./components/SlugWrapper";
// import FeaturedWrapper from "./components/FeaturedWrapper";
// import { AnimatePresence, useReducedMotion } from 'framer-motion';
import logo from "../src/logo.svg";
// import SuspenseWrapper from './components/SuspenseWrapper';
const Featured = lazy(()=>import("./components/Featured"))
const PostImage = lazy(()=>import("./components/PostImage"))
const Files = lazy(()=>import("./components/Files"))
const VideoPage = lazy(()=>import("./components/VideoPage"))
const PostVideo = lazy(()=>import("./components/PostVideo"))
const Login = lazy(()=>import("./components/Login"))
const SignUp = lazy(()=>import("./components/SignUp"))
const Slug = lazy(()=>import("./components/Slug"))
const Home = lazy(()=>import("./components/Home"))
const NewFile = lazy(()=>import("./components/NewFile"))
const CheckServer = lazy(()=>import("./components/CheckServer"))
// import  AuthContextProvider  from './context/AuthContext';



// class App extends Component{
//     constructor(props){
//       super(props)

      
//     }



//     render(){
function App(){
      return (
        <HelmetProvider>

          <div className="app App bg-black">
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
            <Suspense fallback={<div className='w-[100vw] h-[100vh] align-middle items-center justify-center flex'>
              <img src={logo} className="App-logo" alt="logo"></img>
              </div>}>


            <Router  >
            <Layout>
            <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/page/:slug' element={<Slug />} />
            {/* <Route path='/page/:slug' element={<SlugWrapper />} /> */}
            <Route path='/checkserver' element={<CheckServer />}/>
            <Route path='/jwtauth' element={<JwtAuth />}/>
            <Route path='/postvideo' element={<PostVideo />}/>
            <Route path='/video/:slug' element={<VideoPage />}/>
            <Route path='/postimg' element={<PostImage />}/>
            <Route path='/files' element={<Files />}/>
            <Route path='/featured' element={<Featured />}/>
            {/* <Route path='/featured' element={<FeaturedWrapper />}/> */}
            <Route path='/featured1' element={<NewFile />}/>
            </Routes>
            </Layout>
          </Router> 
            </Suspense>
          </div>
        </HelmetProvider>
    );
    }
  
  


export default App;

