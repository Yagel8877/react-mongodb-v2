import { lazy, Suspense } from "react";


const SuspenseWrapper = (path, component) =>{
    const LazyComponent = lazy(()=>import(path));
    
    return(
        <div>
            <Suspense fallback={<div className="h-[90vh] w-[100vw] bg-yellow-300"><p>loading...</p></div>}>
            <LazyComponent />
            </Suspense>
        </div>
    )
}

export default SuspenseWrapper;