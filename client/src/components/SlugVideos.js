import data from "../data2.json"
import { useParams } from "react-router";

const SlugVideos = () => {
    let { slug } = useParams();
    let Nslug = slug - 1;
    let IntSlug = parseInt(slug)
    let Ldata = data.length
    let NLdata = Ldata - 8* Nslug;
        console.log(NLdata)
    // if(IntSlug === 1){
    // return (
    //     <div>

    //     <p>this is a navbar</p>
      
    //     {data.map((data) => {
    //         if(data.vid <= Ldata && data.vid >= Ldata - 8 ){
    //             return(
    //                 <div key={data.vid}>
    //                     <p>{data.vid}</p>
    //                     </div>
    //             )
    //         }
    //         else return undefined;
    //     }
        
    //     )}
    //     </div>
    // )
    // }
    // else 
    return(
        <div>
            {data.map((data) => {
            if((data.vid == Ldata && data.vid <= NLdata ) || (data.vid < NLdata && data.vid >= NLdata - 8)){
                return(
                    <div key={data.vid}>
                        <p>{data.vid}</p>
                        </div>
                )
            }
            else return undefined;
        })}
        </div>
    )
    
}
export default SlugVideos;