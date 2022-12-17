import logo from "../logo.svg"

function SpinningLogo(){
    return(
        <div className='w-[100vw] h-[100vh] align-middle items-center justify-center flex'>
              <img src={logo} className="App-logo" alt="logo"></img>
        </div>
    )
}

export default SpinningLogo;