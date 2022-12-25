// import { useLoaderData } from "react-router-dom"
import Featured from "./Featured";
import axios from "axios";
import useSWR from "swr";
import SpinningLogo from "./SpinningLogo";

const FeaturedPage = () =>{
    
    const fetcher = (...args) => fetch(...args).then(res => res.json())

    // const LoaderData = useLoaderData()
    const { data, error, isLoading } = useSWR('/api/featured', fetcher)

    if(error) return <div>erorrrrr</div>
    if(isLoading) return <SpinningLogo />      
    return <Featured Data={data}/>
    // return(
    //     <>
    //     {/* <Suspense fallback={<SpinningLogo />}>
    //         <Await resolve={LoaderData.data} errorElement={<p>error fetching data rrd</p>}>
    //             {(LoadedComponent)=> <Featured Data={LoadedComponent}/>}
    //         </Await>
    //     </Suspense> */}
    //     {/* <FeaturedCopy /> */}
    //     {/* <Featured Data={LoaderData}/> */}
        
    //     </>

    // )
}

export default FeaturedPage;

export async function getFeaturedVideos(){
    console.log('getFeaturedVideos being called!')
    let response = await axios.get('/api/featured')
        return response.data
        }

export async function FeaturedLoader(){
    // return defer({data: getFeaturedVideos()})
    return getFeaturedVideos();
}