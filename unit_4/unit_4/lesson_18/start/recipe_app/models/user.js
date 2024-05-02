const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        first: {
            type: String,
            trim: true
        },
        last: {
            type: String,
            trim: true
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    zipCode: {
        type: Number,
        min: [1000, "Zip code too short"],
        max: 99999
    },
    password: {
        type: String,
        required: true
    },
    courses: [{ type: mongoose.Types.ObjectId, ref: "Course" }],
    subscribedAccount: {
        type: mongoose.Types.ObjectId,
        ref: "Subscriber"
    }

},
    { timestamps: true });

userSchema.virtual('fullname')
    .get(() => {
        return `${name.first} ${name.last}`
    });

module.exports = mongoose.model('User', userSchema);