import { useState } from 'react';
const axios = require('axios');


const Login = () => {
    
   

    const [Msg, setMsg] = useState('')
    const HandleClickLogin = (e) => {
        e.preventDefault();
          
        const data = new FormData(document.querySelector("#login"));

        const username = data.get('userName')
        const pass = data.get('password')

        console.log(`${username} and ${pass}`)


        axios.post('/login', {
            userName: username,
            password: pass
        
        }).then(res => setMsg(res.data)).then(setTimeout( () => 
            document.getElementById('container').classList.remove('hidden'), 2500)
         ).catch(err => console.log(err))
        
    }
      
       
    
    
    return ( 
        <div className='bg-yellow-100 h-[100vh]'>
            <div className='flex justify-center text-center pt-[15vh]'>
            <form id="login" method='GET' action='/login' className='grid grid-rows-3 border-2 w-[30vw] h-[50vh]  place-content-center border-black p-[50px] bg-green-100'>
                <input placeholder='username'name="userName" className='border border-black rounded-lg h-[40px] w-[90%]'/>
                <input placeholder='password'name='password' className='border border-black rounded-lg h-[40px]'/>
                <div className='flex gap-[5vw] h-[45%] w-[80%]'>
                <button className='rounded-md border-2 border-black w-[25%] h-[50px]' onClick={(e) => {HandleClickLogin(e)}}>Login!</button>   
                <p id='container' className='text-[1em] first-line:capitalize text-red-900 border-2 border-black hidden '>{Msg}</p>
                </div>

            </form>
            </div>
            </div>
     );
}
 
export default Login;