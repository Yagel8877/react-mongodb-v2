import jwt_decode from 'jwt-decode';
import { Component } from 'react';


class Home extends Component{


    componentDidMount(){
        

        let decodedCookie
        let jwtcookie = ''
    
        if(document.cookie.split(';').find(row => row.startsWith('jwt='))){
        jwtcookie = document.cookie
            .split(';')
            .find(row => row.startsWith('jwt='))
            .split('=')[1];
        
        decodedCookie = jwt_decode(jwtcookie)
        console.log({decodedCookie})
    }}
    


    
    render(){
                
    return(
    <div className='h-[90vh]'>
    <p>Home page</p>
    {/* <p> hello {decodedCookie?.userName}</p> */}
    {/* <p>{isAuth ? <p>yes it works context</p> : <>nnn</>}</p> */}
    </div>



    )}
}


export default Home;