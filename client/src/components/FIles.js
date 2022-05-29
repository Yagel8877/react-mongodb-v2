import axios from "axios";

const Files = () =>{

    axios.get('/files').then((res)=>{
        console.log(res.data[1])
    })
    return(<p>a</p>)
}
export default Files;