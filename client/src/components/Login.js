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
        <div><form id="login" method='GET' action='/login'>
        <input name="userName" />
        <input name='password'/>
        <button onClick={(e) => {HandleClickLogin(e)}}>click me</button>
    </form>
    <div className='flex '>
    <p id='container' className='text-lg mt-6 first-line:capitalize text-red-900 border-2 border-black p-4 hidden '>{Msg}</p>
    </div>
    </div>

     );
}
 
export default Login;