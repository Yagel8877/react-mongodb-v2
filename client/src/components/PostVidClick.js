const { default: axios } = require("axios")

module.exports.PostVidClick = (data) =>{
    console.log(data)

    axios.post('/viewedvideos', data)
    
}