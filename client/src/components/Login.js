import { useState } from "react";
import axios from "axios";
// import { AuthContext } from "../context/AuthContext";


const Login = () => {
    
    // const authContext = useContext(AuthContext)

    const [Msg, setMsg] = useState(false)
   
    // const HandleClickAlertBox = () =>{
    //     let AlertBoxUI = document.getElementById('alertBox')
    //     if(AlertBoxUI.classList.contains('hidden')){
    //         AlertBoxUI.classList.remove('hidden')
    //     }else{
    //         AlertBoxUI.classList.add('hidden')
    //     }
    // }

    const HandleClickLogin = (e) => {
        e.preventDefault();

        const data = new FormData(document.querySelector("#login"));

        const username = data.get('userName')
        const pass = data.get('password')

        console.log(`${username} and ${pass}`)
        axios.post('/login', {
            userName: username,
            password: pass
        
        }).then((res)=>{
            if(res.status === 201){
                console.log('location changing because 200 status')
                window.location.href='/'
            }
            else{
            setMsg("Server's Error :( - try again later!")
        }
    })
        .catch(e=>{
                if(e.response.status === 400 || e.response.status === 401 || e.response.status === 404){
                setMsg(e.response.data)
                
            }
            else if(e.response.status === 500){
            setMsg("Server's Error - Try again shortly")
            }
                else{
                setMsg(`ERROR: status code ${e.response.status}`)
            }


    })
        
    }
    
    return( 
        <div className='bg-gray-800 h-[90vh]'>
            <div className="pt-[10vh]">
            <form id="login" className='grid grid-rows-4 ml-auto mr-auto border-2 mt-2  bg-gray-700 md:w-[30vw] md:h-[50vh] place-content-center border-black p-[5vh]'>
            {Msg ?
            <div id='alertBox' className=' h-1/2 rounded-xl border-2 border-black text-md'>
                <p><button className='mr-2 text-2xl hover:text-white' onClick={()=> {
                    setMsg(false);
                }}>X</button>{Msg}</p>
                
            </div>
            :
            <></>}
                <input placeholder='username'name="userName" className='border-[1px] text-white bg-transparent rounded-lg h-[40px]'/>
                <input placeholder='password'name='password' className='border-[1px] text-white bg-transparent border-white rounded-lg h-[40px]'/>
                <button className='hover:bg-gray-200 rounded-md border-2 border-black w-[25%] h-[50px]' onClick={(e) => {HandleClickLogin(e)}}>Login!</button>
                {/* <button onClick={()=>authContext.logIn()}>s</button> */}
            </form>
            </div>
            </div>
        
     );
}
 
export default Login;