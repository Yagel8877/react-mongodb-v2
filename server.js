const cookieParser = require('cookie-parser');
const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 
const path = require("path")
const jwt = require('jsonwebtoken')
const { Login, Signup } = require('./Controllers');


let D = new Date;
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json())
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(cookieParser())

const dbURI = "mongodb+srv://yagel:VDHcur2014@cluster0.gkqyy.mongodb.net/credentials?retryWrites=true&w=majority"
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then((result) => {console.log('connection made to DB')})
//     .catch((err) => {console.log(err)})

const jwtVerify = (req,res,next) =>{
  const jwtcookie = req.cookies.jwt

  jwt.verify(jwtcookie,'secret', (err,decoded)=>{
    if(err){
      console.log('failed auth')
    }else{
      console.log('success auth')
      console.log(decoded)
      next()
    }
  })
}


app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'/client/build/index.html'));
 });

 app.get('/page/*', function (req, res) {

   res.sendFile(path.join(__dirname,'/client/build/index.html'));
 });

app.get('/express_backend', (req,res) => {
  res.status(200).send({express: "Server's responding"})
  // if(isAuth){
  //   res.status(200).send({express: 'yayy'})
  // }else{
  //   res.status(400)
  // }
})
app.get('/signup', (req,res) => {
  res.send({msg:'serv work signup'}).status(200)
})

app.get('/jwtauth', jwtVerify, (req,res)=>{
  res.send('')
  // res.sendFile(path.join(__dirname,'/client/build/index.html'));
})


app.post('/signup', Signup)

app.post('/login', Login)
