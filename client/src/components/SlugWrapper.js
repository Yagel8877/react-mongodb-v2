import { lazy, Suspense } from "react";
const Slug = lazy(()=>import("./Slug"));


const SlugWrapper = () =>{

    return(
        <div>
            <Suspense fallback={<div className="h-[90vh] w-[100vw] bg-yellow-300"><p>loading...</p></div>}>
            <Slug />
            </Suspense>
        </div>
    )
}

export default SlugWrapper;