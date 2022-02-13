const cookieParser = require('cookie-parser');
const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 
const path = require("path")
const { Login, Signup } = require('./Controllers');
const { Authenticate } = require('./Middleware/Authenticate');


let D = new Date;
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json())
app.use(express.static(path.join(__dirname, '/client/build')));
// app.use(cookieParser())

const dbURI = "mongodb+srv://yagel:VDHcur2014@cluster0.gkqyy.mongodb.net/credentials?retryWrites=true&w=majority"
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then((result) => {console.log('connection made to DB')})
//     .catch((err) => {console.log(err)})

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'/client/build/index.html'));
 });

 app.get('/page/*', function (req, res) {
   res.sendFile(path.join(__dirname,'/client/build/index.html'));
 });

app.get('/express_backend', (req,res) => {
  res.status(200).send({express: "Server's responding"})
})
app.get('/signup',Authenticate, (req,res) => {
  res.send({msg:'serv work signup'}).status(200)
})


app.post('/signup', Signup)

app.post('/login', Login)
