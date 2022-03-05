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
            window.location.href='/jwtauth'}}).catch((err)=> {console.log(err)})
        
    }
 


        return(
        <div><form id="form" method='POST' action='/signup'>
            <input name="userName" />
            <input name='password'/>
            <button onClick={(e) => {handleClickSignUp(e)}}>click me</button>
            <p></p>
        </form>
        </div>
    

    

    );
};

export default SignUp;