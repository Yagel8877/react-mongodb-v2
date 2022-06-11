import { useParams } from "react-router";
import data from "../data2.json";
import { Link } from "react-router-dom";

const Pagination = () => {
    const NumOfVids = 12
    let { slug } = useParams();
    let IntSlug = parseInt(slug);
    let length = data.length
    let DividedLen = Math.ceil(length / NumOfVids)
    console.log(length)
    console.log(DividedLen)
    if(IntSlug === 1){
        return(
            <div className="PaginationDiv">
            <Link to={`/page/`+ IntSlug} className="w-[50px] h-[50px] border-2 bg-red-500 border-black">{IntSlug}</Link>
            <Link to={`/page/`+ (IntSlug + 1)} className="w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black">{IntSlug + 1}</Link>
            <Link to={`/page/`+ (IntSlug + 2)} className="w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black">{IntSlug + 2} </Link>
            <Link to={`/page/`+ (IntSlug + 3)} className="w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black">{IntSlug + 3}</Link>
            <Link to={`/page/`+ (IntSlug + 4)} className="w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black">{IntSlug + 4}</Link>
            </div>
        )
    }
    
    else if(IntSlug === 2){
        return(
            <div className="PaginationDiv">
            <Link className="w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black" to={`/page/`+(IntSlug-1)}>{IntSlug - 1}</Link>
            <Link className="w-[50px] h-[50px] border-2 bg-red-500 border-black" to={`/page/`+(IntSlug)}>{IntSlug}</Link>
            <Link className="w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black" to={`/page/`+(IntSlug+1)}>{IntSlug + 1}</Link>
            <Link className="w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black" to={`/page/`+(IntSlug+2)}>{IntSlug + 2} </Link>
            <Link className="w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black" to={`/page/`+(IntSlug+3)}>{IntSlug + 3} </Link>


            </div>
        )}
    else if(IntSlug === Math.ceil(length/NumOfVids)-1){
        return(
            <div className="PaginationDiv">
            <Link className="w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black"to={`/page/`+(IntSlug-1)}>{IntSlug - 1}</Link>
            <Link className="w-[50px] h-[50px] border-2 hover:bg-gray-400 bg-red-500 border-black"to={`/page/`+(IntSlug)}>{IntSlug}</Link>
            <Link className="w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black "to={`/page/`+(IntSlug+1)}>{IntSlug+1}</Link>
            </div>
        )

    }
    else if(IntSlug === Math.ceil(length/NumOfVids)){
        return(
            <div className="PaginationDiv">
            <Link className="w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black"to={`/page/`+(IntSlug-2)}>{IntSlug - 2}</Link>
            <Link className="w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black"to={`/page/`+(IntSlug-1)}>{IntSlug - 1}</Link>
            <Link className="w-[50px] h-[50px] border-2 bg-red-500 border-black "to={`/page/`+IntSlug}>{IntSlug}</Link>
            </div>
        )
    }
    else if(IntSlug > length/NumOfVids){
        return(
            <p className="hidden"></p>
        )
    }
    else return(
        <div className="PaginationDiv">
            <Link className="w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black" to={`/page/`+(IntSlug-2)}>{IntSlug - 2}</Link>
            <Link className="w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black" to={`/page/`+(IntSlug-1)}>{IntSlug - 1}</Link>
            <Link className="w-[50px] h-[50px] border-2 border-black bg-red-500" to={`/page/`+IntSlug}>{IntSlug}</Link>
            <Link className="w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black" to={`/page/`+(IntSlug+1)}>{IntSlug + 1}</Link>
            <Link className="w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black" to={`/page/`+(IntSlug+2)}>{IntSlug + 2} </Link>
            </div>
    )
    
        

    

}





export default Pagination;