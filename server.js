const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000; 
const User = require('./client/models/User');
const { EILSEQ } = require('constants');
const path = require("path")


let D = new Date;
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json())
app.use(express.static(path.join(__dirname, '/client/build')));

const dbURI = "mongodb+srv://yagel:VDHcur2014@cluster0.gkqyy.mongodb.net/credentials?retryWrites=true&w=majority"
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then((result) => {console.log('connection made to DB')})
//     .catch((err) => {console.log(err)})

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'/client/build/index.html'));
 });

app.get('/express_backend', (req,res) => {
  res.status(200).send({express: "Server's responding"})
})
app.get('/signup', (req,res) => {
  res.send({msg:'serv work signup'}).status(200)
})


app.post('/signup', async (req,res) => {
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {console.log('connection made to DB')}).catch((err) => {res.status(400).send(err)})

    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    console.log(hashedPassword)
    const user = new User({userName: req.body.userName, password: hashedPassword})
    const isExist = await User.exists({userName: user.userName})
    
    if(isExist){
      res.status(400).send('try another username')
    }
    else{
    user.save()
    .then((result) => { console.log(`user: ${user.userName} has been saved to db`)})
    // .then(mongoose.disconnect).then((result) => {console.log('connection has been closed')})
    .catch(err=> {console.log(err)})
    
    res.status(201).send()
  }}
)

app.post('/login', async (req,res)=>{
  if(mongoose.connection.readyState === 0) {mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {console.log('connection made to DB- searching user login')}).catch((err) => {res.status(400).send(err)})}

  const user = await User.findOne({userName: req.body.userName})
  try{ 
  if(await bcrypt.compare(req.body.password, user.password)){
      res.send(`${user.userName} has logged in at ` + D.getMinutes())
      // mongoose.disconnect().then(
        // console.log('disconnected')
        // )
    
    }
    else{
      // mongoose.disconnect().then(
        res.send('not allowed')
        
        // ).then(console.log('disco1')
        // )
      
    }
  }
    catch{
      // mongoose.disconnect().then(
        res.send('username doesnt exists or othrt')
        // ).then(console.log('disco2'))
  }

})
