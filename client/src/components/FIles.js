const { Component } = require("react");

class Files extends Component{

    async Main(){
        console.time('a')
       let data = await fetch('/files').then(res=>res.json()).then(e=>console.log(e.slice(-1))).then(console.timeEnd('a'))

    }
    

    render(){
        this.Main()
        return(<p>a</p>)
    }
}

export default Files;