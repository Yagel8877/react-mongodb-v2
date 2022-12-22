import { Link } from "react-router-dom";


// class Featured extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             data: [],
//             isLoading: true
//     }
//     }
//     async componentDidMount(){
//             axios.get('/api/featured').then(e=>
//                 this.setState({data: e.data}))
//                 // .then(this.setState({isLoading:false})).then(localStorage.setItem('isLoading', 'false'))
            
        

//     }
    

// render(){

// export async function getFeaturedVideos(){
//     let response = await axios.get('/api/featured')
//         return response.data
//         }

function Featured({Data}){
//     const [Data, setData] = useState([{thumbnailSrc: './'}])
//     useEffect(()=>{

//         console.log(Data)
//         const LoadData = async() =>{
//             axios.get('/api/featured')
//             .then((e)=>setData({data: e.data}))
//         };
//         LoadData();

// }, [])
    // const loaderData = useLoaderData();
    return(
        
        <>
        <div className="grid grid-cols-1 md:pb-[5vh] md:grid-cols-2 lg:grid-cols-4 md:pl-[10%] md:mr-[10%] lg:h-[90vh] gap-4 md:gap-2">
        
        {/* {this.state.data.map((data) => {  */}
        {/* {Data.map((data) => { */}
        {/* {loaderData.map((data)=> { */}
        {Data.map((data)=>{
            if(data?.thumbnailSrc === undefined){
                data.thumbnailSrc = 'undefined'
            }
            else if(data?.thumbnailSrc?.includes('.jpeg') || data?.thumbnailSrc?.includes('.png')){
                console.log('valid src')
            }else{
                data.thumbnailSrc = 'undefined'
            }  
            
            return(
                <div className="pt-[10%]" key={data.vId} >
                <Link to={`/video/`+ data?.serialNum} >
                        <img className="skeleton lg:w-[320px] lg:h-[180px] md:w-[240px] md:h-[135px]" src={`/api/image/`+data?.thumbnailSrc} alt="fun nice"></img>
                </Link>
                <p className="font-bold overflow-hidden text-white text-lg">{(data?.vidTitle?.length > 50) ? `${data?.vidTitle.substring(0,50)}...` : data?.vidTitle}</p>
                </div>
                )
            })}
    </div> 
    </>
    )
    
}
        
//     }
// }

export default Featured;