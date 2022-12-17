import { Link } from "react-router-dom";
import { Component } from "react";
import jwt_decode from "jwt-decode";
// import login from '../userlogin.svg';
// import logout from '../user-logout-3056.svg';

class NavBar extends Component{

    constructor(props){
        super(props);
        this.state = {isAuth: false, isAdmin: false}
    }
        

   componentDidMount(){
        console.log('navbar mounted')
        try{
            let iatNow = Math.floor(Date.now() / 1000)
            let decodedCookie = ''
            let jwtcookie
            if(document.cookie.split(';').find(row => row.startsWith('jwt='))){
                jwtcookie = document.cookie
                .split(';')
                .find(row => row.startsWith('jwt='))
                .split('=')[1];
            
                decodedCookie = jwt_decode(jwtcookie)
                if(decodedCookie?.exp > iatNow){
                    this.setState({isAuth: true, isAdmin: decodedCookie?.isAdmin})
                    // console.log('jwt is fine')
                }else{
                    this.setState({isAuth: false, isAdmin: false})
                    // console.log('jwt expired')
                }
            }
            
        }catch(err){
            console.log(err + " this an error")
        }

   }
 
      changeState(){
        
        const iatNow = Math.floor(Date.now() / 1000)
        let decodedCookie = ''
        let jwtcookie
        if(document.cookie.split(';').find(row => row.startsWith('jwt='))){
            jwtcookie = document.cookie
            .split(';')
            .find(row => row.startsWith('jwt='))
            .split('=')[1];
            
            decodedCookie = jwt_decode(jwtcookie)
            if(parseInt(decodedCookie.exp) > iatNow){
            this.setState({isAuth: true, isAdmin: decodedCookie.isAdmin})
            // console.log({decodedCookie})
            }else{
                this.setState({isAuth: false, isAdmin: false})
            }
            // console.log("nowIat" + Math.floor(Date.now() / 1000))
            // console.log("decIat" + decodedCookie.iat)
            // console.log(`time left for token is${parseInt(decodedCookie.exp) - iatNow }`)
             
           
    
    }
    }
    componentDidUpdate(prevProps, prevState){
        //checks if should update (if they're not the same)
        // console.log(prevState)
        // console.log(this.state)
        if(prevState.isAuth !== this.state.isAuth){
        console.log('updated navbar compdidupdate')
        this.changeState()
        }
    }
       
    
    render(){
        

        return(
    <div>

        <div className="flex gap-4 justify-start h-[10vh] md:justify-center  border-white border-b-2  ">
            <Link className="NavItem" to='/'>Home</Link>
        
            {this.state.isAuth ?
            <Link onClick={()=>{document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC;'";
            this.setState({isAuth: false, isAdmin: false});
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
        <Link className="NavItem" to='/featured'>Featured!</Link>
        </div>
        
        <div className="flex justify-end">
            {/* this is a navbar for mobile */}
            {/* {!this.state.isAuth ? 
            <><Link className="NavItem md:hidden" to='/page/1'>Videos</Link><Link to='login'><img src={login} alt='login' className="ImageNav"/></Link></> : <Link onClick={()=>{document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC;'";this.changeState();}
            }
             to='/login'><img src={logout} className='ImageNav' alt='logout'/>
            </Link>
            } */}
        </div>

        <div>

        </div>
        

     </div>
        )}
}
export default NavBar;