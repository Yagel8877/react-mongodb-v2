import { Suspense, lazy, Component } from "react";
import Pagination from "./Pagination";
const  Featured  = lazy(()=> import('./Featured'))

function NewFile(){
    

        return(
            <div>
            <Suspense fallback={<div className="w-[100vw] h-[100vh]">dsadsad</div>}>
            <Featured />
            </Suspense>
            <Pagination />
            </div>
    )
    
}


export default NewFile;