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
          
            const response = await fetch('/api/jwtauth');
            // const body = await response.json();
        
            if (response.status === 200) {
              this.setState({auth: true})
              console.log(this.state.auth)
            }else{
              console.log("err jwtauth")
            }
          };
        render(){
          
          return(
            <div>
              {this.state.auth ? <p>authed</p>: <p>not authed</p>}
              <p>heyyy</p>
            </div>

          )
        
    }


}
export default JwtAuth;