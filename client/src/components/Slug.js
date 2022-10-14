import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom"
import data from '../data2.json';
import Pagination from "./Pagination";
// const Pagination = lazy(()=> import('./Pagination'))
// import SlugVideos from "./SlugVideos";
const SlugVideos = lazy(()=> import('./SlugVideos'));

function Slug(){
    let NumOfVids = 12
   let { slug } = useParams(); 
   let IntSlug = parseInt(slug)
   let Ldata = data.length
   let Nslug = slug - 1;
   let NLdata = Ldata - NumOfVids* Nslug;
//    console.log(IntSlug)
//    console.log(Ldata)
//    console.log(NLdata)
    if(isNaN(IntSlug)){
        return <p>404</p>
    }
   if(NLdata < 0){
    return <p>404</p>
   }
    else return(
        <div className="md:w-[80vw] md:ml-[10vw] md:border-l-2 md:border-r-2 border-gray-400  sm:w-auto sm:h-auto">
        
        <Suspense fallback={<div className="w-[10vw] h-[100vh]">loading...</div>}>
        <SlugVideos />
        </Suspense>
        <Pagination />
        </div>
        
    )
}
export default Slug;