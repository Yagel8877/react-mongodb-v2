import { Link } from "react-router-dom";

function home(){
    return(
    <div>

        <Link className="text-xl mr-2 border-4 border-yellow-400 p-2 bg-black text-white hover:bg-gray-900" to='/'>Home</Link>
        <Link className="text-xl mr-2 border-4 border-yellow-400 p-2 bg-black text-white hover:bg-gray-900" to='/login'>Login</Link>
        <Link className="text-xl mr-2 border-4 border-yellow-400 p-2 bg-black text-white hover:bg-gray-900" to='/signup'>Sign Up!</Link>
    
        

     </div>
    )
};

export default home;