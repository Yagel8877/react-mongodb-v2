import { useParams } from "react-router";
import data from "../data2.json";

const Pagination = () => {
    let { slug } = useParams();
    let IntSlug = parseInt(slug);
    let length = data.length
    // console.log(length)
    if(IntSlug === 1){
        return(
            <div className="flex">
            <p>{IntSlug}</p>
            <p>{IntSlug + 1}</p>
            <p>{IntSlug + 2} </p>
            <p>{IntSlug + 3}</p>
            <p>{IntSlug + 4}</p>
            </div>
        )
    }
    else if(IntSlug === 2){
        return(
            <div className="flex">
            <p>{IntSlug - 1}</p>
            <p>{IntSlug}</p>
            <p>{IntSlug + 1}</p>
            <p>{IntSlug + 2} </p>


            </div>
        )}
    else if(IntSlug === Math.ceil(length/5)){
        return(
            <div className="flex">
            <p>{IntSlug - 2}</p>
            <p>{IntSlug - 1}</p>
            <p>{IntSlug}</p>
            </div>
        )
    }
    else if(IntSlug > length/5){
        return(
            <p className="hidden"></p>
        )
    }
    else return(
        <div className="flex">
            <p>{IntSlug - 2}</p>
            <p>{IntSlug - 1}</p>
            <p>{IntSlug}</p>
            <p>{IntSlug + 1}</p>
            <p>{IntSlug + 2} </p>
            </div>
    )





}
export default Pagination;