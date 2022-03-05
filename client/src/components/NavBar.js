import { Link } from "react-router-dom";
import { Component } from "react";


class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {isAuth: false}    
    }

   async componentDidMount(){
        
        // setInterval(() => {
        //     this.changeState()
        // }, 200);
        console.log('mounted')
        try{
        let res = await fetch('/jwtauth')
        if(res.status === 200){
            this.setState({isAuth: true})

        }else{
            this.setState({isAuth:false})
        }
    }catch(err){
        console.log(err)
    }
    }
      changeState(){
        let a =  document.cookie.length
        console.log(a)
        if(a > 6){
        this.setState({isAuth: true})
        }
        else{
            this.setState({isAuth:false})
            console.log('uff')
        }
        console.log(`${this.state.isAuth} hey`)
        return 

    } 
    

    
    render(){
        return(
    <div>
        <div className="flex justify-center">
        <Link className="text-xl mr-2 border-4 border-yellow-400 p-2 bg-black text-white hover:bg-gray-900" to='/'>Home</Link>
        {this.state.isAuth ?
         <Link  onClick={()=>{document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path='/'";
            this.changeState()
        }
            } className="text-xl mr-2 border-4 border-yellow-400 p-2 bg-black text-white hover:bg-gray-900" to='/'>Sign out</Link>
         : 
         <Link className="text-xl mr-2 border-4 border-yellow-400 p-2 bg-black text-white hover:bg-gray-900" to='/login'>Login</Link>}
        <Link className="text-xl mr-2 border-4 border-yellow-400 p-2 bg-black text-white hover:bg-gray-900" to='/signup'>Sign Up!</Link>
        <Link className="text-xl mr-2 border-4 border-yellow-400 p-2 bg-black text-white hover:bg-gray-900" to='/page/1'>Videos</Link>
        </div>
    
        

     </div>
        )}
}
export default NavBar;