const jwt = require('jsonwebtoken')

const Authenticate = (req,res,next) =>{
    console.log('is called')
    if(req.cookies.jwt != undefined){
        jwt.verify(token, 'secret', (err, decodedToken) => {
            if(err){
            
               return res.redirect('/login')
            }
            else{
                console.log(decodedToken)
                next()
            }
        })
        }
        else{
            console.log('denied')
        }
    }

    
module.exports = { Authenticate }