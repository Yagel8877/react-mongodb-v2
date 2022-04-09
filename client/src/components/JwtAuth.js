import { Component } from "react";

class JwtAuth extends Component{
    state = {
      auth: false
    };
        
          componentDidMount() {
            this.callBackendAPI()
              .catch(err => console.log(err));
          }
          
          
          callBackendAPI = async () => {
          
            const response = await fetch('/jwtauth');
            // const body = await response.json();
        
            if (response.status !== 200) {
              throw Error(response)
            }else{
              this.setState({auth: true})
              console.log(this.state.auth)
          
            }
          };
        render(){
        if(this.state.auth === true){
          return(<div>
            <p>authed</p>
            <p></p>
            </div>)
        }else{
          return(<div>not auth</div>)
        }
    }


}
export default JwtAuth;