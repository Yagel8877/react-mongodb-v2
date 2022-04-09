import data from "../data2.json"
import { useParams } from "react-router";

const SlugVideos = () => {
    let { slug } = useParams();
    let IntSlug = parseInt(slug)
    let Nslug = IntSlug - 1;
    let Ldata = data.length;
    let NLdata = Ldata - 8* Nslug;
    let Ndata = 8*Nslug

    let SlicedData = data.slice(Ndata,Ndata+8);
    // console.log(Nslug)
    // console.log(NLdata)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:pl-[10%] border-[10px] md:border-red-700 gap-6 md:gap-2">
            {SlicedData.map((data) => {
                return(<div key={data.vId} className='h-[140px] transition border-2 border-black duration-150 bg-green-700 hover:shadow-2xl hover:-translate-y-1 shadow-green-900 md:w-[70%] md:h-[17vh]'>{data.serialNum}</div>)
        })}
        </div>   )
    }
export default SlugVideos;