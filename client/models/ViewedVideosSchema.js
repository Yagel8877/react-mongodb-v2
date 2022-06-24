const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const ViewedVideosSchema = new Schema({
        
    serialNum:{
        required: true,
        type: Number,
        },
    Viewed: {
            required: false,
            type: Number,
        },
    thumbnailSrc: {
        required: false,
        type: String
    },
    vidTitle:{
        required: false,
        type: String,
    },
    vId:{
        required: true,
        type: String,
    },
    aboutVid:{
        required:false,
        type:String,
    }
    }, {timestamps: true}
        
        
)






const ViewedVideos = mongoose.model('Viewedvideos', ViewedVideosSchema);
module.exports = ViewedVideos;
module.exports = ViewedVideosSchema;