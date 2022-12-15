import { lazy, Suspense } from "react";
const Featured = lazy(()=>import("./Featured"));


const FeaturedWrapper = () =>{

    return(
        <div>
            <Suspense fallback={<p>loading...</p>}>
            <Featured />
            </Suspense>
        </div>
    )
}

export default FeaturedWrapper;