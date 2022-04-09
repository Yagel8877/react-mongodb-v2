const cookieParser = require('cookie-parser');
const express = require('express'); 
const app = express(); 
const path = require("path")
const jwt = require('jsonwebtoken')
const { Login, Signup, PostVid } = require('./Controllers');
const { jwtVerify, jwtVerifyAdmin} = require('./Middleware');
const port = process.env.PORT || 5000; 


let D = new Date;
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json())
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(cookieParser())

const dbURI = "mongodb+srv://yagel:VDHcur2014@cluster0.gkqyy.mongodb.net/credentials?retryWrites=true&w=majority"


app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'/client/build/index.html'));
 });

 app.get('/page/*', function (req, res) {

   res.sendFile(path.join(__dirname,'/client/build/index.html'));
 });

app.get('/express_backend', (req,res) => {
  res.status(200).send({express: "Server's responding"})
})

app.get('/signup', (req,res) => {
  res.send({msg:'serv work signup'}).status(200)
})

app.get('/jwtauth', jwtVerify, (req,res)=>{
  res.status(200).send('')
})


app.post('/signup', Signup)

app.post('/login', Login)

app.post('/postvideo', jwtVerifyAdmin, PostVid)
