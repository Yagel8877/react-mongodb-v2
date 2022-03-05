import { Component } from "react";

class CheckServer extends Component{
    state = {
            data: null  
          }; 
        
          componentDidMount() {
            this.callBackendAPI()
              .then(res => this.setState({ data: res.express })) 
              .catch(err => console.log(err));
          }
          
            // fetching the GET route from the Express server which matches the GET route from server.js
          callBackendAPI = async () => {
            const response = await fetch('/express_backend');
            const body = await response.json();
        
            if (response.status !== 200) {
              throw Error(body.message) 
            }
            return body;
          };
        render(){
        if(this.state.data === null){
            return (<p>404</p>)
        }else{
            return(<p>works</p>)
        }
    }


}
export default CheckServer