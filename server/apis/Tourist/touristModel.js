const mongoose = require('mongoose');

const touristSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    userType: {
        type: Number,
        default: 1
    },
    contact: {
        type: String,
        default: ''
    },
    profileImage: {
        type: String,
        default: ''
    },
    location: {
        type:String,
        default: ""
    },
    preferences: {
        interests: {
        type: [String],
        default: []
        },
        budgetRange: {
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 0
        }
        }
    },
    savedPlaces: {
        type: [mongoose.Schema.Types.ObjectId],
        default: []
    },
    status:{
        type:Boolean,
        default: true
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('tourists', touristSchema);