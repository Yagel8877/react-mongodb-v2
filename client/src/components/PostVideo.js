import { Component } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

class PostVideo extends Component{
   state = {
       isAdmin: false, 
       Msg: false
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
        const vidSrc = data.get('vidSrc');
        const thumbnailSrc = data.get('thumbnailSrc')

        axios.post('/postvideo', {
            vidTitle, aboutVid, vidSrc, thumbnailSrc}
            ).then((res)=>{console.log(res.headers);if(res.status!==200){
            window.location.href='/jwtauth'}}).catch(e=>console.log(e))       
}

    handleClickPostImage(e){
        e.preventDefault();
        const data = new FormData(document.querySelector('#form2'));
        
        const image = data.get('thumbnail');

        axios.post('/postimg', image, {headers: {"content-type": "multipart/form-data"}}).then((res)=>{this.setState({...this.state, Msg: res})}).then(console.log(this.state.Msg))
        
    }
    
    
    



   render(){  
    
       return(
        <div>
           {this.state.isAdmin ? 
            <div>
                <p>allowed to post vids</p> 
                <div>
                    {/* <form id="form" method='POST' action='/postvideo'> */}
                    <form id="form">
                        <label>Video Title
                        <input className="text-black" name="vidTitle" />
                        </label>
                        <label>About video
                        <input className="text-black" name='aboutVid'/>    
                        </label>
                        <label>Video Source
                        <input className="text-black" name='vidSrc'/>
                        </label>
                         <label>Thumbnail Source
                            <input className="text-black" name='thumbnailSrc'/>
                        </label> 
                        <button onClick={(e) => {this.handleClickPostVid(e)}}>click me</button>
                    </form>
                    <form method='POST' action='/postimg' target="_blank" id='form2' encType="multipart/form-data">
                    {/* <form id='form2'> */}
                        <label>Thumbnail
                        <input name='thumbnail' type='file' formEncType="multipart/form-data"/>
                        </label>
                         {/* <button onClick={(e)=>{this.handleClickPostImage(e)}}>axios post</button>  */}
                        <button type='submit'>SUBMIT CLASSICAL</button> 
                     </form> 

               </div>
            </div>
               : <p>not allowed to post vids</p>
               }
        </div>
        )}
}
export default PostVideo;