import React, {Suspense, lazy, useRef} from 'react';
import './App.css';
import data from "./data2.json";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import Layout from './components/Layout';
import JwtAuth from './components/JwtAuth';
// import { getFeaturedVideos } from './components/Featured';
import { FeaturedLoader } from './components/FeaturedPage';
import SpinningLogo from './components/SpinningLogo';
// import Login from "./components/Login"
// import SlugWrapper from"./components/SlugWrapper";
// import FeaturedWrapper from "./components/FeaturedWrapper";
// import { AnimatePresence, useReducedMotion } from 'framer-motion';
import FeaturedPage from './components/FeaturedPage';
// import SuspenseWrapper from './components/SuspenseWrapper';
// const Featured = lazy(()=>import("./components/Featured"))
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
const ErrorPage = lazy(()=>import("./components/ErrorPage"))

const RevalidateFeaturedLoad = () => {
  const ref = useRef()
  const firstRender = ref.current
  ref.current = false
  return firstRender
}
const router = createBrowserRouter(
  createRoutesFromElements(
          <Route errorElement={<ErrorPage />} path='/' element={<Layout />}>
          <Route exact path='/' element={<Home />}/>
          <Route path='signup' element={<SignUp />}/>
          <Route path='login' element={<Login />}/>
          <Route path='page/:slug' element={<Slug />} />
          <Route path='checkserver' element={<CheckServer />}/>
          <Route path='jwtauth' element={<JwtAuth />}/>
          <Route path='postvideo' element={<PostVideo />}/>
          <Route path='video/:slug' element={<VideoPage />}/>
          <Route path='postimg' element={<PostImage />}/>
          <Route path='files' element={<Files />}/>
          {/* <Route path='featured' element={<Featured />} loader={getFeaturedVideos}/> */}
          {/* <Route path='featured' element={<FeaturedPage />} loader={FeaturedLoader} shouldRevalidate={()=>{return true}}/> */}
          <Route path='featured' element={<FeaturedPage />} />

          <Route path='featured1' element={<NewFile />}/>
          </Route>

  )
  )

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
            <Suspense fallback={<SpinningLogo />}>
            {/* <Layout> */}
            <RouterProvider router={router} />
            {/* </Layout> */}
            {/* <Router  >
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
            <Route path='/featured' element={<FeaturedWrapper />}/>
            <Route path='/featured1' element={<NewFile />}/>
            </Routes>
            </Layout>
          </Router>  */}
            </Suspense>
          </div>
        </HelmetProvider>
    );
    }
  
  


export default App;

