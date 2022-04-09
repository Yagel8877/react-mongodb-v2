import { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component{
    state = {
        isAuth: false,
        isAdmin: false
    }

    logIn = () =>{

        this.setState({isAuth: true, isAdmin: false})
    }

    logOut= ()=>{

        this.setState({isAuth: false, isAdmin: false})

    }

    render(){
        return(
            <AuthContext.Provider value={{...this.state, logIn: this.logIn, logOut: this.logOut}}>
                {this.props.children}
            </AuthContext.Provider>


        )
    }
}
export default AuthContextProvider;