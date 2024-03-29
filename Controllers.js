const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const fs = require('fs');
// const data = require('./data2.json');
const { randomUUID } = require('crypto');
const ViewedVideosSchema = require('./models/ViewedVideosSchema');
const FeaturedVideosSchema = require('./models/FeaturedVideosSchema');
const Videos = require('./models/VideosSchema')

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
  // console.time('loopLogin')
    if(mongoose.connection.readyState === 0) {mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {console.log('connection made to DB- searching user login')}).catch((err) => {res.status(400).send(err)})}

  

  const user = await User.findOne({userName: req.body.userName})
  console.log(user)
  try{ 
  if(await bcrypt.compare(req.body.password, user.password)){
      // const token = CreateToken(user.userName, user.isAdmin)
      const token = CreateToken(user.userName, user.isAdmin, user.createdAt)
      

      console.log('authenticated')
      // res.cookie('jwt', token, {maxAge: 1000*60*15})
      res.status(201).cookie('jwt', token, {maxAge: 1000*60*15}).send(user.userName)     
    }
    else{
        res.status(401).send('not allowed')
        console.log('not allowed')
         
    }
  }
    catch(e){
        if(user === null){
        res.status(404).send("User doesn't exists")
        }
        console.log('no such user or undefined values')
  }
  // console.timeEnd('loopLogin')
}


module.exports.Search = (req, res)=>{
  console.log("searching -> " ,req.body.data)
  let ndata = data.filter((e)=>{
    lcvt = e.vidTitle?.toLowerCase()
    if(lcvt?.includes(req?.body?.data.toLowerCase())){
      return true
    }else return false
    })
    // console.log(ndata)
    res.send(ndata)
}

// Sign Up req:POST

module.exports.Signup = async (req,res) => {
    // console.time('loop')
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
  // console.timeEnd('loop')
}

// Post Video req:POST
module.exports.PostVid =  async(req, res) => {
//first checks if posted vid has src, and if doesnt have vidtitle
  let strsrc = req.body.vidSrc
  if(strsrc === undefined){
    console.log('undefined vidsrc, put vid src')
    return;
  }
  else if(!strsrc.includes('.com'))  {
    console.log('not a valid source!! (not .com ending')
    return;
  };

  if(req.body.vidTitle === ''){
    console.log('no vid title')
    return;
  }

  if(mongoose.connection.readyState === 0)  {mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {console.log('connection made to DB')}).catch((err) => {res.status(400).send(err)})}

  let LengthOfVideos = await Videos.countDocuments()
  console.log(req.body)
  console.log(LengthOfVideos)
  req.body.vId = randomUUID()
  req.body.serialNum = LengthOfVideos + 1

  let obj = JSON.stringify(req.body)

  let NewVideo = new Videos({vidTitle: req.body.vidTitle, aboutVid: req.body.aboutVid, vidSrc: req.body.vidSrc, thumbnailSrc: req.body.thumbnailSrc, vId: req.body.vId, serialNum: req.body.serialNum})
  
  //saving the new video to db, and then updates (or make new file ) 
  //numofvids.json to correspond to the new length of videos documents in db for pagination and slug-url

  NewVideo.save().then(console.log(`${req.body.serialNum} video id - has been saved!`)).then(fs.writeFile('./client/src/numofvids.json', `{"len": ${LengthOfVideos.toString()}}`, {flag: "w"}, (err)=>{
    if(err) throw new Error("number of videos haven't been updated in numofvids.json ");
    else console.log("numofvids.js has been updated")
  })).catch((e)=> {throw new Error(`bad vid saving, check if saved, error: ${e}`)})
  
  


  
  // check if the thumbnailsrc is a string and if doesnt have png/jpeg so change the thumnail srcc!
//   let strsrc = req.body.vidSrc
//   if(strsrc === undefined){
//     console.log('undefined vidsrc')
//   }
//   else if(!strsrc.includes('.com'))  {
//     console.log('not a valid source!! (not .com ending')
//     return;
//   };
//   let obj = JSON.stringify(req.body)
//   console.log(obj)
  
//   const position = 1;
//   const file_path = './data2.json';
// fs.readFile(file_path, function read(err, data) {
//     if (err) {
//         throw err;
//     }
//     const file_content = data.toString();
//     let file_contentA = file_content.substring(position);
//     const file = fs.openSync(file_path,'r+');
//     const bufferedText = Buffer.from(obj+','+file_contentA);
//     fs.writeSync(file, bufferedText, 0, bufferedText.length, position);
//     fs.close(file);
// });
// console.timeEnd('post a vid')

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

      // let B = list1.sort((a,b)=>{return b.Viewed-a.Viewed})
      // let TwelveList = B.slice(0,11)
      
      //see the feaured videos, 12 in numbers
      // console.log(TwelveList)
    
    
    
}

module.exports.RefreshFeatured = async() =>{
  console.log('called RefreshFeatured')
    
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
    conn.close().then(console.log('conn closed'))
    // await ViewedVideosConn.updateMany({}, { $set: { Viewed: 0 } });


}

// module.exports.getVideos = async(req, res) => {
//   if(mongoose.connection.readyState === 0)  {mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((result) => {console.log('connection made to DB')}).catch((err) => {res.status(400).send(err)})}

//   let data = await Videos.find()
//   // console.log(data)
//   //reversing the array so the newest video dont get moved from the first page
//   res.send(JSON.stringify(data.reverse()))
// } 

module.exports.writeVideosLocally = async(req,res)=>{

  if(mongoose.connection.readyState === 0)  {mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {console.log('connection made to DB')}).catch((err) => {res.status(400).send(err)})}

  let data = await Videos.find()
  // console.log(data)
  //reversing the array so the newest video dont get moved from the first page
  let reversedData = JSON.stringify(data.reverse())
  fs.writeFile('./client/src/dbvideos.json', reversedData, {flag: "w"}, (err)=>{
    if(err) {throw new Error('couldnt save new videos to local vid db')}else console.log('succes in saving to local db vid')
  } )
}