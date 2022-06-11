import { Suspense } from "react";
import { useParams } from "react-router";
import data from "../data2.json";
import NavBar from "./NavBar";



const VideoPage = () => {
        const { slug } = useParams()
        const intSlug = parseInt(slug)
        let video = data.find((vid)=>{
            let intVidSN = parseInt(vid.serialNum)
            return intVidSN === intSlug
        })
        console.log(video)

    


        if(video === undefined){
            return <p>no such vid</p>
        }
        if(!video?.aboutVid){
            return <p className="text-white">no about</p>
        }
        if(!video?.vidSrc.includes('www')){
            return <p>f outta here no valid src</p>
        }
        return(
            <div>
                <p className="text-white">{video?.aboutVid}</p>
                <iframe src={video?.vidSrc} allowFullScreen={true} title={video.vidTitle}></iframe>

            </div>


        )




}

export default VideoPage;