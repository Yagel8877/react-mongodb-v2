const jwt = require('jsonwebtoken');


module.exports.jwtVerify = (req,res,next) =>{
    const jwtcookie = req.cookies.jwt
    console.time('jwtverifyauthmiddleware')
    jwt.verify(jwtcookie,'secret', (err,decoded)=>{
      if(err){
        console.log('failed auth')
      }else{
        console.log('success auth')
        console.timeEnd('jwtverifyauthmiddleware')
        next()
      }
    })
}

//--------------------//

module.exports.jwtVerifyAdmin =(req,res,next)=>{
    const jwtCookie = req.cookies.jwt
    jwt.verify(jwtCookie, 'secret', (err, decodedToken)=>{
      if(err){
        console.log('failed simple verification')
        res.status(401)
      }
        let isAdmin = decodedToken?.isAdmin
        if(isAdmin){
          next()
        }
        
      
      
    })
  }