import { useParams } from "react-router-dom"
import Pagination from "./Pagination";
import SlugVideos from "./SlugVideos";
import data from '../data2.json';

function Slug(){
   let { slug } = useParams(); 
   let IntSlug = parseInt(slug)
   let Ldata = data.length
   let Nslug = slug - 1;
   let NLdata = Ldata - 8* Nslug;
//    console.log(IntSlug)
//    console.log(Ldata)
//    console.log(NLdata)
    if(isNaN(IntSlug)){
        return <p>404</p>
    }
   if(NLdata < 1){
    return <p>404</p>
   }
    else return(
        <div className="md:w-[50vw] md:translate-x-[50%] sm:w-auto sm:h-auto">
        <SlugVideos />
        <Pagination />
        </div>
        
    )
}
export default Slug;