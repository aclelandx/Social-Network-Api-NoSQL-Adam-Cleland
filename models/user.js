// import the mongoose NPM package and store it in a constant variable called mongoose.
const mongoose = require(`mongoose`);
// import the validator npm package, specifically the isEmail function to use for the validation of an email address when it is inside of the document.
const { default: isEmail } = require("validator/lib/isEmail");
// import out thought
const Thought = require(`./thought`);

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
    // Thought will be populated from the controller as an array of the _id's of related thoughts.
    thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: `thought` }],
    // friends will be populated from the controller as an array of the _id's of the users friends
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: `user` }]
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// creates a virtual called friend count to return the number of friends that a user has.
userSchema.virtual(`friendCount`).get(function () { return this.friends.length; });

// defines User as a mongoose model that uses the schema created above.
const User = mongoose.model(`user`, userSchema);

// exports the user model to be utilized elsewhere
module.exports = User;

