import { useParams } from "react-router-dom"
import Pagination from "./Pagination";
import SlugVideos from "./SlugVideos";
import data from '../data2.json';

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
        <div className="md:w-[65vw] md:ml-[17.5vw] border-l-2 border-r-2 border-gray-400  sm:w-auto sm:h-auto">
        <SlugVideos />
        <Pagination />
        </div>
        
    )
}
export default Slug;