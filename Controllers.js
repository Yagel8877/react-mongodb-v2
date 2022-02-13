const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./client/models/User');
const dbURI = "mongodb+srv://yagel:VDHcur2014@cluster0.gkqyy.mongodb.net/credentials?retryWrites=true&w=majority"

const D = new Date()

module.exports.Login = async (req, res) =>{
    if(mongoose.connection.readyState === 0) {mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {console.log('connection made to DB- searching user login')}).catch((err) => {res.status(400).send(err)})}

    const CreateToken= (id) =>{
        return token = jwt.sign({id},'secret')
      }

  const user = await User.findOne({userName: req.body.userName})
  try{ 
  if(await bcrypt.compare(req.body.password, user.password)){
      const token = CreateToken(user._id)
      console.log('authenticated')
      res.cookie('jwt', token, { httpOnly: true, maxAge: 14*466})
      res.send(`${user.userName} has logged in at ` + D.getMinutes())

     
    }
    else{
        res.send('not allowed')
        
         
    }
  }
    catch{
        res.send('username doesnt exists or othrt')
  }
}

module.exports.Signup = async (req,res) => {
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {console.log('connection made to DB')}).catch((err) => {res.status(400).send(err)})

    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    console.log(hashedPassword)
    const user = new User({userName: req.body.userName, password: hashedPassword})
    const isExist = await User.exists({userName: user.userName})
    
    if(isExist){
      res.status(401).send('try another username')
    }
    else{
    user.save()
    .then((result) => { console.log(`user: ${user.userName} has been saved to db`)})
    .catch(err=> {console.log(err)})
    
    res.status(201).send()
  }}
