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

    


        if(!video.aboutVid){
            return <p className="text-white">no about</p>
        }
        return(
            <p className="text-white">{video.aboutVid}</p>


        )




}

export default VideoPage;