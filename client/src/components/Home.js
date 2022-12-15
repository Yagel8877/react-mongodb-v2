import jwt_decode from 'jwt-decode';
import { Component, lazy } from 'react';
import {motion} from 'framer-motion';
// import SearchBar from './SearchBar.js'
const SearchBar = lazy(()=>import("./SearchBar"))


class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Guest'
        }
    }

    componentDidMount(){
        

        let decodedCookie
        let jwtcookie = ''
    
        if(document.cookie.split(';').find(row => row.startsWith('jwt='))){
        jwtcookie = document.cookie
            .split(';')
            .find(row => row.startsWith('jwt='))
            .split('=')[1];
        
        decodedCookie = jwt_decode(jwtcookie)
        // console.log({decodedCookie})
        this.setState({name: decodedCookie?.userName})

    }}
    
    componentDidUpdate(prevProps, prevState){   
        // console.log(prevState.name, this.state.name)
        if(prevState.name !== this.state.name){
            let decodedCookie
            let jwtcookie = ''
    
            if(document.cookie.split(';').find(row => row.startsWith('jwt='))){
            jwtcookie = document.cookie
                .split(';')
                .find(row => row.startsWith('jwt='))
                .split('=')[1];
        
            decodedCookie = jwt_decode(jwtcookie)
            this.setState({name: decodedCookie?.userName})
            console.log('updated home didupdate')
        }
        }
    }


    
    render(){
                
    return(

    <div className='h-[90vh]'>
    <p>Home page</p>
    <p>hello {this.state.name}</p>
        {/* <p> hello {decodedCookie?.userName}</p> */}
        {/* <p>{isAuth ? <p>yes it works context</p> : <>nnn</>}</p> */}
        <SearchBar />
    </div>
    



    )}
}


export default Home;