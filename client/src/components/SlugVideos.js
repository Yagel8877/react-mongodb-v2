import data from "../data2.json"
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { PostVidClick } from "./PostVidClick";


const SlugVideos = () => {
    let NumOfVids = 12 
    let { slug } = useParams();
    let IntSlug = parseInt(slug)
    let Nslug = IntSlug - 1;
    let Ldata = data.length;
    let NLdata = Ldata - NumOfVids* Nslug;
    let Ndata = NumOfVids*Nslug

    let SlicedData = data.slice(Ndata,Ndata+NumOfVids);

    // console.log(Nslug)
    // console.log(NLdata)
    return (
        <div className="grid grid-cols-1 md:pb-[5vh] md:grid-cols-2 lg:grid-cols-4 md:pl-[10%] md:mr-[10%] lg:h-[84vh] gap-4 md:gap-2">
            {SlicedData.map((data) => {   
                if(data.thumbnailSrc === undefined){
                    data.thumbnailSrc = 'undefined'
                }
                else if(data.thumbnailSrc.includes('.jpeg') || data.thumbnailSrc.includes('.png')){
                    console.log('valid src')
                }else{
                    data.thumbnailSrc = 'undefined'
                }
                

                return(
                    <div className="pt-[10%]" key={data.vId} onClick={()=>PostVidClick(data)}>
                    <Link to={`/video/`+ data.serialNum} >
                        {/* <div className='pt-[56.25%] text-red-400 transition border-2 border-white duration-150 bg-blue-600 hover:shadow-2xl hover:-translate-y-1 shadow-green-900'> */}

                            <img src={`/api/image/`+data?.thumbnailSrc} alt="fun nice" className=""></img>
                        {/* </div> */}
                    </Link>
                    <p className="font-bold overflow-hidden text-white text-lg">{(data.vidTitle?.length > 50) ? `${data.vidTitle.substring(0,50)}...` : data.vidTitle}</p>
                    </div>
                    )
        })}
        </div>   )
    }
export default SlugVideos;