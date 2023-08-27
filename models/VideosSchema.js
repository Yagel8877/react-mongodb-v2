const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const VideosSchema = new Schema({ 
        vidTitle: {
            required: true,
            type: String,
    },
        aboutVid: {
            required: true,
            type: String,

    },
        vidSrc: {
            required: true,    
            type: String,
    },
        thumbnailSrc: {
            required: false,
            type: String,
    },
        vId: {
            required: true,
            type: String,
    },
        serialNum: {
            required: true,
            type: Number,
    }   

}, {timestamps: true});

const Videos = mongoose.model('Videos', VideosSchema);
module.exports = Videos;
