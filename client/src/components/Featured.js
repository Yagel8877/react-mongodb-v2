import axios from "axios";
import { Link } from "react-router-dom";

const { Component } = require("react");

class Featured extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
    }
    }
    componentDidMount(){
        axios.get('/api/featured').then(e=>{
            this.setState({data: e.data})
            // console.log(this.state.data)
            // console.log(e.data)
        
    })

    }
    


    render(){
        
        return(
            // <></>
            <>
            <div className="grid grid-cols-1 md:pb-[5vh] md:grid-cols-2 lg:grid-cols-4 md:pl-[10%] md:mr-[10%] lg:h-[84vh] gap-4 md:gap-2">
            {this.state?.data.map((data) => { 
                 if(data?.thumbnailSrc === undefined){
                    data.thumbnailSrc = 'undefined'
                }
                else if(data?.thumbnailSrc.includes('.jpeg') || data?.thumbnailSrc.includes('.png')){
                    console.log('valid src')
                }else{
                    data.thumbnailSrc = 'undefined'
                }  
                
                return(
                    <div className="pt-[10%]" key={data.vId} >
                    <Link to={`/video/`+ data.serialNum} >
                        {/* <div className='pt-[56.25%] text-red-400 transition border-2 border-white duration-150 bg-blue-600 hover:shadow-2xl hover:-translate-y-1 shadow-green-900'> */}

                            <img src={`/api/image/`+data?.thumbnailSrc} alt="fun nice" className=""></img>
                        {/* </div> */}
                    </Link>
                    <p className="font-bold overflow-hidden text-white text-lg">{(data?.vidTitle?.length > 50) ? `${data?.vidTitle.substring(0,50)}...` : data?.vidTitle}</p>
                    </div>
                    )
        })}
    
        </div> 
        </>
        )
    }
}
export default Featured;