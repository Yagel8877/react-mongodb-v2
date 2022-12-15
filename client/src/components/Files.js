const { Component } = require("react");

class Files extends Component{
    constructor(props){
        super(props)
        this.state = {
            Data: ""
        }
    }
    async componentDidMount(){
        console.time('a')
        let data = await fetch('/api/files').then(res=>res.json()).then(e=>console.log(e.slice(-1))).then(console.timeEnd('a'))
        this.setState({Data: data})

    }
    

    render(){
        return(<p>{this.state.Data !== "" ? this.state.Data : null} this a ph</p>)
    }
}

export default Files;