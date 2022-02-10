import data from "../data.json"
import { useParams } from "react-router";

const SlugVideos = () => {
    let { slug } = useParams();
    let Nslug = slug - 1;
    let IntSlug = parseInt(slug)
    let Ldata = data.length
    let NLdata = Ldata - 8* Nslug;
        console.log(NLdata)
    if(IntSlug === 1){
    return (
        
        <div className="grid grid-cols-2 bg-black border-[0.5vw] border-red-700 place-items-center justify-center ml-[20vw] mr-[20vw] h-[100vh] gap-2">
            {data.map((data) => {
            if(data.vid <= Ldata && data.vid >= Ldata - 7 ){
                return(    
                        <div key={data.vid} className='bg-yellow-200 w-[70%] h-[17vh]'>{data.vid}</div>
                )
            }
            else return undefined;
        })}
        </div>
        
    )
    }
    else 
    return(
        <div className="grid grid-cols-2 bg-black border-[0.5vw] border-red-700 place-items-center justify-center ml-[20vw] mr-[20vw] h-[100vh] gap-2">
            {data.map((data) => {
            if(data.vid <= NLdata && data.vid >= NLdata - 7){
                return(    
                        <div key={data.vid} className='bg-yellow-200 w-[70%] h-[17vh]'>{data.vid}</div>
                )
            }
            else return undefined;
        })}
        </div>
    )
    
}
export default SlugVideos;