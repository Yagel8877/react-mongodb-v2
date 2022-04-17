import { Link } from "react-router-dom";
import { Component } from "react";
import jwt_decode from "jwt-decode";
import login from '../userlogin.svg';
import logout from '../logout.png'
// import { AuthContext } from "../context/AuthContext";


class NavBar extends Component{

    constructor(props){
        super(props);
        this.state = {isAuth: false, isAdmin: false}
    }

    // static contextType = AuthContext;

        

   async componentDidMount(){
        
        console.log('mounted navBar')
        try{
        let res = await fetch('/jwtauth')
        console.log(res)
        if(res.status === 200){
            this.setState({isAuth: true, isAdmin: false})
            this.changeState()
        }else{
            this.setState({isAuth:false, isAdmin: false})
        }
    }catch(err){
        console.log(err)
    }
    }
      changeState(){
        // let a =  document.cookie.length
        // console.log(a)
        // if(a > 6){
        // this.setState({isAuth: true})
        // this.forceUpdate()
        // }
        // else{
        //     this.setState({isAuth:false})
        //     console.log('uff')
        // }
        // console.log(`${this.state.isAuth} hey`)
        // return 

        let decodedCookie = ''
        let jwtcookie
        this.setState({isAuth: false, isAdmin: false})
        if(document.cookie.split(';').find(row => row.startsWith('jwt='))){
            jwtcookie = document.cookie
            .split(';')
            .find(row => row.startsWith('jwt='))
            .split('=')[1];
            
            decodedCookie = jwt_decode(jwtcookie)
            this.setState({isAuth: true, isAdmin: decodedCookie.isAdmin})
            console.log({decodedCookie})
    
    }
    // this.forceUpdate() 
    }
       
    
    render(){
        
        return(
    <div>

        <div className="hidden md:flex gap-2 justify-start h-[10vh] md:justify-center  border-white border-b-2  ">
            <Link className="NavItem" to='/'>Home</Link>
        
            {this.state.isAuth ?
            <Link onClick={()=>{document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC;'";
            this.changeState();
         
            }
        } className="NavItem" to='/login'>Log out</Link>
        : 
        <Link className="NavItem" to='/login'>Login</Link>}
            {this.state.isAuth ? <></>:
        <Link className="NavItem" to='/signup'>Sign Up!</Link>
        }
        <Link className="NavItem" to='/page/1'>Videos</Link>
        {this.state.isAdmin ? 
            <Link className="NavItem" to='/postvideo'>Post Videos</Link>
            :
            <></>
        }
        {this.state.isAuth ? <div></div> : <></>}
        </div>
        
        <div className="flex justify-end">
            
            {!this.state.isAuth ? 
            <Link to='login'><img src={login} alt='login' className="ImageNav"/></Link> : <Link onClick={()=>{document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC;'";this.changeState();}
            }
             to='/login'><img src={logout} className='ImageNav' alt='logout'/>
            </Link>
            }
        </div>

        <div>

        </div>
        

     </div>
        )}
}
export default NavBar;