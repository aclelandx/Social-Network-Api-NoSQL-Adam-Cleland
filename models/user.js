// import the mongoose NPM package and store it in a constant variable called mongoose.
const mongoose = require(`mongoose`);
// import the validator npm package, specifically the isEmail function to use for the validation of an email address when it is inside of the document.
const { default: isEmail } = require("validator/lib/isEmail");
// import out thought
const thought = require(`./thought`);

// create the schema for the users.
const userSchema = new mongoose.Schema({
    // username has to exist, must be unique, and is a string.
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    // email has to exist, must be unique, is a string, and must be an email through the validate.
    email: {
        type: String,
        required: true,
        unique: true,
        // run the isEmail function from validator to ensure the section is an email address. if ti comes back as false then the message is given instead
        validate: [isEmail, `Please provide a valid email address.`]
    },
    thoughts: [thought]
})

const User = db.model(`User`, userSchema);
const user = new User();

