import axios from "axios";
import { Suspense, Component } from "react";

class SearchBar extends Component{
    
    constructor(props){
        super(props)
        this.state = {VidResults: [], SearchValue: '', HasValue: false}
    }   
    // const [results, setresults] = useState(false)
    // const [VidResults, setVidResults] = useState([]) // nedd to change to typescript and rechange the type
    // const [SearchValue, setSearchValue] = useState('')
    // const SendSearchValue = (e) => {
    //     let stdata = e.toString()
    //     axios.post('/search', stdata).then(console.log(stdata))
    // }
    async handsub(e){
        e.preventDefault()
        console.log(this.state.SearchValue)
        axios.post('/search', {data: this.state.SearchValue}).then(e=>{this.setState({VidResults: [...e.data], HasValue: true})})

    }
    render(){
    return(
        <div>
        <form className="text-black">
        {/* <input name='searchbar' onSubmit={e=>SendSearchValue(e.target)} /> */}
        <input onChange={e=>{this.setState({SearchValue: e.target.value})}}/>
        <input type="submit" onClick={e=>this.handsub(e)} />
        </form>
        {/* {this.state.VidResults ? */}

        <div>
        <Suspense fallback={<p className="text-lg text-green-400 bg-gray-200">Loading...</p>}>
            {this.state.HasValue ?
            this.state.VidResults.map((data)=>{           
                return(
                    <div key={data.serialNum}>
                        <p className="text-white">{data?.vidTitle}, {data?.serialNum}</p>
                    </div>
                )
            }) : <p></p>}
            </Suspense>
        </div>
    {/* : <></>}  */}
        </div>
    )
        }

}
export default SearchBar;