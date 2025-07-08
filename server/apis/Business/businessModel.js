const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    email: {
        type: String,
        default:""
    },
    userType: {
        type: String,
        default:"business"
    },
    type: {
        type: String, //'hotel', 'restaurant', 'activity'
        default: ""
    },
    contact: {
        type: String,
        default: ""
    },
    location: {
        address: { type: String, default:"" },
        city: { type: String, default:"" },
        state: { type: String, default:"" },
        coordinates: {
        type: [Number], // [longitude, latitude]
        index: '2dsphere',
        default:""
        }
    },
    images: {
        type: [String], // URLs to images
        default: [],
    },
    price: {
        type: Number,
        required: true,
    },
    amenities: {
        type: [String], // ['wifi', 'ac', 'parking']
        default: [],
    },
    rating: {
        type: Number,
        default: 0
    },
    status: {
        type: String,//'pending', 'approved', 'rejected', 'inactive
        default: ""
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('businesses', businessSchema);
