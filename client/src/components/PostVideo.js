import { Component } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

class PostVideo extends Component{
   state = {
       isAdmin: false
   }
   
//     async componentDidMount(){
//        let res = await fetch("/jwtauth")
//        console.log(res)
//        if(res.isAdmin){
//            this.setState({isAdmin: true})
//        }
//        else{
//            this.setState({isAdmin: false})
//        }
//    }
    componentDidMount(){
        console.log('mounted postVideo')
        this.verifyAdmin()
    }

   verifyAdmin(){
    let decodedCookie = ''
    let jwtcookie
    if(document.cookie.split(';').find(row => row.startsWith('jwt='))){

    jwtcookie = document.cookie
        .split(';')
        .find(row => row.startsWith('jwt='))
        .split('=')[1];
        
        decodedCookie = jwt_decode(jwtcookie)
        this.setState({isAdmin: decodedCookie.isAdmin})
    }
}
    handleClickPostVid(e){
        e.preventDefault();

        const data = new FormData(document.querySelector('#form'));

        const vidTitle = data.get('vidTitle');
        const aboutVid = data.get('aboutVid');

        axios.post('/postvideo', {
            vidTitle, aboutVid}
            ).then((res)=>{console.log(res.headers);if(res.status!==200){
            window.location.href='/jwtauth'}}).catch(e=>console.log(e))
    
}




   render(){
       return(
        <div>
           {this.state.isAdmin ? 
            <div>
                <p>allowed to post vids</p> 
                <div>
                    <form id="form" method='POST' action='/postvideo'>
                        <label>Video Title
                        <input className="text-black" name="vidTitle" />
                        </label>
                        <label>About video
                        <input className="text-black" name='aboutVid'/>    
                        </label>
                        <button onClick={(e) => {this.handleClickPostVid(e)}}>click me</button>
                    </form>
               </div>
            </div>
               : <p>not allowed to post vids</p>
               }
        </div>
        )}
}
export default PostVideo;