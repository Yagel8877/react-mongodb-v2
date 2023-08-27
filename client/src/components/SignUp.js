import { useState } from 'react';

const axios = require('axios')

const SignUp = () => {
   
    const [Msg, setMsg] = useState(false)

    const handleClickSignUp = (e) => {
        e.preventDefault();

        const data = new FormData(document.querySelector('#form'));

        const username = data.get('userName');
        const pass = data.get('password');

        axios.post('/signup', {
            userName: username,
            password: pass
        }).then((res)=>{if(res.status!==200){
            window.location.href='/jwtauth'}}).catch(e=>{
                if(e.response.status === 403){
                    setMsg("Username's in use, Please pick other username")
                }else{
                    setMsg('Internal Error, try again later:)')
                }
            })
        
    }
 


        return(
        <div className='h-[70vh]'><form id="form" method='POST' action='/signup' className='mt-[20vh] ml-auto mr-auto gap-5 grid w-max border-2 boredr-white place-content-center'>
            {Msg ?
            <div id='alertBox' className='rounded-xl border-2 border-white text-md'>
                <p><button className='mr-2 text-2xl hover:text-white' onClick={()=> {
                    setMsg(false);
                }}>X</button>{Msg}</p>
                
            </div>
            :
            <></>}
            <label className='ml-4 mt-1'>Username</label>
            <input name="userName" pattern="[^\s]+" className='border-2 ml-4 mr-4 text-black border-green-600'/>
            <label className='ml-4'>Password</label>
            <input pattern="[^\s]+" name='password' className='ml-4 mr-4 text-black'/>
            <button onClick={(e) => {handleClickSignUp(e)}}>Sign up!</button>
            <p></p>
        </form>
        </div>
    

    

    );
};

export default SignUp;