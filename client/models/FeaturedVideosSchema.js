const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const FeaturedVideosSchema = new Schema({
        
    serialNum:{
        required: true,
        type: Array,
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
        required: false,
        type: String,
    },
    aboutVid:{
        required:false,
        type:String,
    }
    }, {timestamps: true}
        
        
)






const FeaturedVideos = mongoose.model('FeaturedVideos', FeaturedVideosSchema);
module.exports = FeaturedVideos;