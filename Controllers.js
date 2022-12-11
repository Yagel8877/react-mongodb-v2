const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./client/models/User');
const fs = require('fs');
const data = require('./client/src/data2.json');
const { randomUUID } = require('crypto');
const ViewedVideosSchema = require('./client/models/ViewedVideosSchema');
const FeaturedVideosSchema = require('./client/models/FeaturedVideosSchema');

const dbURI = "mongodb+srv://yagel:VDHcur2014@cluster0.gkqyy.mongodb.net/credentials?retryWrites=true&w=majority"
const dbURI2 = "mongodb+srv://yagel:VDHcur2014@cluster0.gkqyy.mongodb.net/VideoAlgorithm?retryWrites=true&w=majority"



const D = new Date()
const CreateToken= (userName, isAdmin, createdAt) =>{
  return token = jwt.sign({userName, isAdmin, createdAt},'secret', {expiresIn: "15m"})
}



// const DecodeJwt= async (JwtToken)=>{
//   if(jwt.verify(JwtToken, 'secret')){
//     let DecodedToken = jwt.decode(JwtToken)
//     return DecodedToken
//   }
// }

module.exports.postimg = (req, res) =>{
  console.log(req.file)
  res.status(200).send(req.file)
}



module.exports.Login = async (req, res) =>{
  console.time('loopLogin')
    if(mongoose.connection.readyState === 0) {mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {console.log('connection made to DB- searching user login')}).catch((err) => {res.status(400).send(err)})}

  

  const user = await User.findOne({userName: req.body.userName})
  try{ 
  if(await bcrypt.compare(req.body.password, user.password)){
      // const token = CreateToken(user.userName, user.isAdmin)
      const token = CreateToken(user.userName, user.isAdmin, user.createdAt)
      

      console.log('authenticated')
      // res.cookie('jwt', token, {maxAge: 1000*60*15})
      res.status(200).cookie('jwt', token, {maxAge: 1000*60*15}).send(user.userName)
      
      

     
    }
    else{
        res.status(401).send('not allowed')
        console.log('not allowed')
         
    }
  }
    catch{
        res.status(401).send("User doesn't exists")
        console.log('no such user or undefined values')
  }
  console.timeEnd('loopLogin')
}


module.exports.Search = (req, res)=>{
  console.log(req.body.data)
  let ndata = data.filter((e)=>{
    lcvt = e.vidTitle?.toLowerCase()
    if(lcvt?.includes(req?.body?.data.toLowerCase())){
      return true
    }else return false
    })
    console.log(ndata)
    res.send(ndata)
}

// Sign Up req:POST

module.exports.Signup = async (req,res) => {
    console.time('loop')
    if(mongoose.connection.readyState === 0)  {mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {console.log('connection made to DB')}).catch((err) => {res.status(400).send(err)})}

    // let conn = mongoose.createConnection(dbURI, {serverSelectionTimeoutMS: 1000, useNewUrlParser: true, useUnifiedTopology: true})
    // const UserConn = conn.model('Users', userSchema)

    const isExist = await User.findOne({userName: req.body.userName})
    
    if(isExist || req.body.userName.includes(" ") || req.body.password.includes(" ")){
      res.status(403).send('try another username')
    }
    else if(req.body.userName.length > 0 && req.body.password.length > 0){
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      console.log(hashedPassword)
      let NewUser = new User({userName: req.body.userName, password: hashedPassword, isAdmin: false})
      const token = CreateToken(NewUser.userName, NewUser.isAdmin, {maxAge: 1000*60*15})
      NewUser.save().then(res.cookie('jwt', token))
      .then(() => { console.log(`user: ${NewUser.userName} has been saved to db`)}).then()
      .catch(err=> {console.log(err)})
      res.status(201).send()
  }else{
    res.send('signup is faulty').status(401)
    console.log('aa')
  }
  console.timeEnd('loop')
}

// Post Video req:POST
module.exports.PostVid = (req, res) => {
  console.time('post a vid')
  // console.log(req)
  console.log(req.body)
  // console.log(req.headers)
  req.body.vId = randomUUID()
  req.body.serialNum = data.length + 1
  if(req.body.vidTitle === '') return;
  
  
  // check if the thumbnailsrc is a string and if doesnt have png/jpeg so change the thumnail srcc!


  
  let strsrc = req.body.vidSrc
  if(strsrc === undefined){
    console.log('undefined vidsrc')
  }
  else if(!strsrc.includes('.com'))  {
    console.log('not a valid source!! (not .com ending')
    return;
  };
  let obj = JSON.stringify(req.body)
  console.log(obj)
  
  const position = 1;
  const file_path = 'client/src/data2.json';
fs.readFile(file_path, function read(err, data) {
    if (err) {
        throw err;
    }
    const file_content = data.toString();
    let file_contentA = file_content.substring(position);
    const file = fs.openSync(file_path,'r+');
    const bufferedText = Buffer.from(obj+','+file_contentA);
    fs.writeSync(file, bufferedText, 0, bufferedText.length, position);
    fs.close(file);
});
console.timeEnd('post a vid')

} 


module.exports.VideosAlgorithm = async (req, res) => {
    console.log(" -> Posted to Viewedvideos")
    // mongoose.connect(dbURI2, { useNewUrlParser: true, useUnifiedTopology: true })
    // .then((result) => {console.log('connection made to DB - VideosAlgorithm')}).catch((err) => {res.status(400).send(err)})
    
    const conn = mongoose.createConnection(dbURI2, {serverSelectionTimeoutMS: 3000, useNewUrlParser: true, useUnifiedTopology: true});
    const ViewedVideosConn = conn.model('Viewedvideos', ViewedVideosSchema);

    // console.log(req.body + " sent to server")
    const options = { upsert: true, new: true}
    const update = {$inc: {'Viewed': 1},vId: req.body.vId, vidTitle: req.body.vidTitle, thumbnailSrc: req.body.thumbnailSrc}

      await ViewedVideosConn.findOneAndUpdate({serialNum: req.body.serialNum}, update, options).catch(e=>console.log(e))

      let list1 = await ViewedVideosConn.find()

      let B = list1.sort((a,b)=>{return b.Viewed-a.Viewed})
      let TwelveList = B.slice(0,11)
      
      //see the feaured videos, 12 in numbers
      // console.log(TwelveList)
    
    
    
}

module.exports.RenewFeatured = async() =>{
  console.log('called renewFeatured')
  // mongoose.connect(dbURI2, { useNewUrlParser: true, useUnifiedTopology: true })
  // .then((result) => {console.log("connection made to DB - GET '/featured'")}).catch((err) => {console.log(err)})
    
    const conn = mongoose.createConnection(dbURI2, {serverSelectionTimeoutMS: 3000, useNewUrlParser: true, useUnifiedTopology: true});
    const ViewedVideosConn = conn.model('Viewedvideos', ViewedVideosSchema);
    const FeaturedVideosConn = conn.model('Featuredvideos', FeaturedVideosSchema)

    let list1 = await ViewedVideosConn.find()


    let B = list1.sort((a,b)=>{return b.Viewed-a.Viewed})
    let TwelveList = B.slice(0,12)
    // console.log(TwelveList)
    if(TwelveList.length != 12){
      // res.status(500).send('not works')
      // console.log('not works - no twelvelist')
      console.log(TwelveList.length + "length of featured videos list")

    }else{
      // res.status(201).json(TwelveList)
      await FeaturedVideosConn.deleteMany({})
      await FeaturedVideosConn.insertMany([...TwelveList]).catch(e=>{console.log(e);return})
      await ViewedVideosConn.updateMany({}, { $set: { Viewed: 0 } });

    }
    // await ViewedVideosConn.updateMany({}, { $set: { Viewed: 0 } });


}