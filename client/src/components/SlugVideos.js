import data from "../data.json"
import { useParams } from "react-router";

const SlugVideos = () => {
    let { slug } = useParams();
    let IntSlug = parseInt(slug)
    let Nslug = IntSlug - 1;
    let Ldata = data.length
    let NLdata = Ldata - 8* Nslug;
    let SlicedData = data.slice(Nslug,Nslug+8)
    console.log(NLdata)
    return (
        <div className="grid grid-cols-2 bg-black border-[0.5vw] border-red-700 place-items-center justify-center ml-[20vw] mr-[20vw] h-[100vh] gap-2">
            {SlicedData.map((data) => {
                return(<div key={data.vid} className='bg-yellow-200 w-[70%] h-[17vh]'>{data.vid}</div>)
        })}
        </div>
    )
    }
export default SlugVideos;