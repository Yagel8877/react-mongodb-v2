const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')
const crypto = require('crypto');
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const express = require('express'); 
const app = express(); 
const path = require("path")
const jwt = require('jsonwebtoken')
const methodOverride = require('method-override');
const { Login, Signup, PostVid, postimg, VideosAlgorithm, RenewFeatured } = require('./Controllers');
const { jwtVerify, jwtVerifyAdmin} = require('./Middleware');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000; 
const ViewedVideos = require('./client/models/ViewedVideosSchema');
const Compression = require("compression");
const cron = require('node-cron');
const apicache = require('apicache');
const FeaturedVideos = require('./client/models/FeaturedVideosSchema');
const FeaturedVideosSchema = require('./client/models/FeaturedVideosSchema');


let D = new Date;
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json())
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(cookieParser())
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(Compression())


const cache = apicache.middleware

const dbURI = "mongodb+srv://yagel:VDHcur2014@cluster0.gkqyy.mongodb.net/credentials?retryWrites=true&w=majority"
const dbURI2 = "mongodb+srv://yagel:VDHcur2014@cluster0.gkqyy.mongodb.net/VideoAlgorithm?retryWrites=true&w=majority"


cron.schedule('0 1 * * 1,2,3,4,5,6,7', () => {
  RenewFeatured()
});

// cron.schedule('* * * * *', () => {
//   RenewFeatured()
// });


app.get('/',cache('1 day') , function (req, res) {
   res.sendFile(path.join(__dirname,'/client/build/index.html'));
 });

 app.get('/featured', function (req, res) {
  res.sendFile(path.join(__dirname,'/client/build/index.html'));
});

app.get('/jwtauth', function (req, res) {
  res.sendFile(path.join(__dirname,'/client/build/index.html'));
});

 app.get('/page/*', function (req, res) {
   res.sendFile(path.join(__dirname,'/client/build/index.html'));
 });

app.get('/express_backend', (req,res) => {
  res.status(200).send({express: "Server's responding"})
})

app.get('/signup', (req,res) => {
  // res.send({msg:'serv work signup'}).status(200)
  res.sendFile(path.join(__dirname,'/client/build/index.html'));
})

app.get('/api/jwtauth', jwtVerify, (req,res)=>{
  res.status(200).sendFile(path.join(__dirname,'/client/build/index.html'));
  // res.status(200)

})
app.get('/login', (req, res)=>{
  res.sendFile(path.join(__dirname,'/client/build/index.html'));
})


app.post('/signup', Signup)

app.post('/login', Login)

app.post('/postvideo', jwtVerifyAdmin, PostVid)

app.post('/viewedvideos', jwtVerify, VideosAlgorithm)







const conn = mongoose.createConnection(dbURI)

let gfs, gridfsBucket;

conn.once('open', ()=>{
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'uploads'
  })
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
})

const storage = new GridFsStorage({
  url: dbURI,
  file: (req, file) => {
  if(file.mimetype == 'image/png' || file.mimetype == 'image/jpeg'){
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
  console.log(file.mimetype)
}
  
});
const upload = multer({ storage });

app.post('/postimg', upload.single('thumbnail'), postimg)



app.get('/api/files', (req,res)=>{
gfs?.files?.find().toArray((err,file)=>{
    if(!file || file.length === 0){
      return res.status(404).json({err: 'no files!'}) 
    }
    return res.status(200).json(file)
  })
})

app.get('/api/image/:filename', cache('1 day'), (req,res)=>{
  // console.time('findshowimage')
  // console.log(req.params.filename)
  if(req.params.filename === 'undefined'){
    const readstreamUndefined = gridfsBucket.openDownloadStreamByName('f25abf8ea6b43a22d28b34ffd41a05a0.jpeg')
    readstreamUndefined.pipe(res)
    return
  }
  gfs?.files?.findOne({filename: req.params.filename}, (err, file)=>{
    if(!file || file.length === 0 || err){
      // console.log(req.params.filename)
      // console.log(err)
      return res.status(404).json({err: 'no files!'})
    }
    if(file.contentType === 'image/jpeg'|| file.contentType === 'image/png'){
      // const readstream = gfs.createReadStream(file.filename)
      
      const readstream = gridfsBucket.openDownloadStreamByName(req.params.filename)
      readstream.pipe(res)
      

    }else{
      res.status(404).json({err: 'not an image'})
    }
    // console.timeEnd('findshowimage')
  })
    })
  
app.get('/api/featured', cache('1 day') ,async(req,res)=>{
    console.log(req.body + " -> GET '/featured'")
    console.log('called /featured')
    // mongoose.connect(dbURI2, { useNewUrlParser: true, useUnifiedTopology: true })
    // .then((result) => {console.log("connection made to DB - GET '/featured'")}).catch((err) => {console.log(err)})

    const conn = mongoose.createConnection(dbURI2, {serverSelectionTimeoutMS: 10000, useNewUrlParser: true, useUnifiedTopology: true});
    const FeaturedVideosConn = conn.model('Featuredvideos', FeaturedVideosSchema)

    //this is automated every day
    // RenewFeatured().then(console.log('renewed featured!'))
    
    let data = await FeaturedVideosConn.find()
    res.status(201).json(data)

    })