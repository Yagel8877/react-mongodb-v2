import { useParams } from "react-router";
import data from "../data2.json";



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
        if(!video?.aboutVid || !video?.vidSrc || !video?.vidTitle){
            return <p className="text-white">there's a missing data</p>
        }
       
        if(!video?.vidSrc.includes('www')){
            return <p>f outta here no valid src</p>
        }
        return(
            <div className="h-[90vh]">
                <p className="text-white">{video?.aboutVid}</p>
                <iframe src={video?.vidSrc} allowFullScreen={true} title={video.vidTitle}></iframe>

            </div>


        )




}

export default VideoPage;