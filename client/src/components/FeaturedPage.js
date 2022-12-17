import { useLoaderData } from "react-router-dom"
import Featured from "./Featured";
import axios from "axios";

const FeaturedPage = () =>{

    const LoaderData = useLoaderData()


    return(
        <>
        <p>hey</p>
        {/* <Suspense fallback={<SpinningLogo />}>
            <Await resolve={LoaderData.data} errorElement={<p>error fetching data rrd</p>}>
                {(LoadedComponent)=> <Featured Data={LoadedComponent}/>}
            </Await>
        </Suspense> */}
        {/* <FeaturedCopy /> */}
        <Featured Data={LoaderData}/>
        
        </>

    )
}

export default FeaturedPage;

export async function getFeaturedVideos(){
    let response = await axios.get('/api/featured')
        return response.data
        }

export async function FeaturedLoader(){
    // return defer({data: getFeaturedVideos()})
    return getFeaturedVideos();
}