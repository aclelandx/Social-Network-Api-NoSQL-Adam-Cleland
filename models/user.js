// import the mongoose NPM package and store it in a constant variable called mongoose.
const mongoose = require(`mongoose`);
const thought = require(`./thought`);


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // This Custom validator was found on the mongoose js docs to ensure that the information that was provided is an email address
        validate: {
            validator: () => Promise.resolve(false),
            message: `please provide a proper email address`
        }
    },
    thoughts: [thought]
})

const User = db.model(`User`, userSchema);
const user = new User();

