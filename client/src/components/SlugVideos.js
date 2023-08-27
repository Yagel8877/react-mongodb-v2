import data from "../dbvideos.json"
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { PostVidClick } from "./PostVidClick";
// import { useState, useEffect } from "react";
// import useSWR from 'swr'
import SpinningLogo from "./SpinningLogo";


const SlugVideos = () => {
   
// const [data, setData] = useState(undefined)
    //NOW DATA IS BEING SIPHONED FROM LOCAL AND NOT API
    // const fetcher = (...args) => fetch(...args).then(res => res.json())
    // const { data, error, isLoading } = useSWR('/getvideos', fetcher)

    // const LoaderData = useLoaderData()
    // console.log(JSON.stringify(data))
    let NumOfVids = 12 
    let { slug } = useParams();
    let IntSlug = parseInt(slug)
    let Nslug = IntSlug - 1;
    // let Ldata = data?.length;
    // let NLdata = Ldata - NumOfVids* Nslug;
    let Ndata = NumOfVids*Nslug

    let SlicedData = data?.slice(Ndata,Ndata+NumOfVids);

    // console.log(Nslug)
    // console.log(NLdata)
    //SWR section for load and error
    // if(error) return <div>erorrrrr</div>
    // if(isLoading) return <SpinningLogo />      
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-[90%]  pt-[4vh] md:grid-cols-3 2xl:grid-cols-4 md:ml-[3vw] lg:h-[84vh] gap-4">
            {SlicedData.map((data) => {   
                if(data.thumbnailSrc === undefined){
                    data.thumbnailSrc = 'undefined'
                }
                else if(data.thumbnailSrc.includes('.jpeg') || data.thumbnailSrc.includes('.png')){
                    // console.log('valid src')
                }else{
                    data.thumbnailSrc = 'undefined'
                }   
                

                return(
                    <div className="Vid-Title-Skeleton" key={data.vId} onClick={()=>PostVidClick(data)}>
                    <Link to={`/video/`+ data.serialNum} >
                        {/* <div className='pt-[56.25%] text-red-400 transition border-2 border-white duration-150 bg-blue-600 hover:shadow-2xl hover:-translate-y-1 shadow-green-900'> */}

                            <img src={`/api/image/`+data?.thumbnailSrc} alt="fun nice" className="imageThumbnail"></img>
                        {/* </div> */}
                    </Link>
                    <p className="font-bold overflow-hidden text-white text-lg">{(data.vidTitle?.length > 50) ? `${data.vidTitle.substring(0,50)}...` : data.vidTitle}</p>
                    </div>
                    )
        })}
        </div> )
    }
export default SlugVideos;