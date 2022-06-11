const axios = require('axios')

const SignUp = () => {
   
    const handleClickSignUp = (e) => {
        e.preventDefault();

        const data = new FormData(document.querySelector('#form'));

        const username = data.get('userName');
        const pass = data.get('password');

        axios.post('/signup', {
            userName: username,
            password: pass
        }).then((res)=>{if(res.status!==200){
            window.location.href='/jwtauth'}}).catch(e=>console.log('try another username'))
        
    }
 


        return(
        <div className='h-[70vh]'><form id="form" method='POST' action='/signup' className='mt-[20vh] ml-auto mr-auto gap-5 grid w-max border-2 boredr-white place-content-center'>
            <label className='ml-4 mt-1'>Username</label>
            <input name="userName" className='border-2 ml-4 mr-4 text-black border-green-600'/>
            <label className='ml-4'>Password</label>
            <input name='password' className='ml-4 mr-4 text-black'/>
            <button onClick={(e) => {handleClickSignUp(e)}}>Sign up!</button>
            <p></p>
        </form>
        </div>
    

    

    );
};

export default SignUp;