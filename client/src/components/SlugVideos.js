import data from "../data2.json"
import { useParams } from "react-router";
import { Link } from "react-router-dom";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:pl-[10%] md:mr-[10%] lg:h-[84vh] gap-6 md:gap-2">
            {SlicedData.map((data) => {
                return(
                    <div className="md:mt-[9vh]" key={data.vId}>
                    <Link to={`/video/`+ data.serialNum}>
                        <div className='pt-[56.25%] transition border-2 border-white duration-150 bg-green-700 hover:shadow-2xl hover:-translate-y-1 shadow-green-900'>
                            {data.serialNum}
                        </div>
                    </Link>
                    <p className="font-bold overflow-hidden text-white text-lg">{(data.vidTitle?.length > 50) ? `${data.vidTitle.substring(0,50)}...` : data.vidTitle}</p>
                    </div>
                    )
        })}
        </div>   )
    }
export default SlugVideos;