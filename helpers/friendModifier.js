// helper function for adding / removing a friend from one another.

// import user model
const { User } = require("../models")

// create a custom helper function to add / remove target 1 to target 2 and add target 2 to target 1
async function friendModifier(action, target1, target2, res) {
    switch (action) {
        // add a friend
        case `add`:
            await User.findOneAndUpdate(
                { _id: target1 }, { $addToSet: { friends: target2 } }, { new: true, runValidators: true });
            await User.findOneAndUpdate(
                { _id: target2 }, { $addToSet: { friends: target1 } }, { new: true, runValidators: true });
            res.json({ message: `Friends have been added` })
            break;
        // remove a friend
        case `delete`:
            await User.findOneAndUpdate(
                { _id: target1 }, { $pull: { friends: target2 } }, { new: true, runValidators: true });

            await User.findOneAndUpdate(
                { _id: target2 }, { $pull: { friends: target1 } }, { new: true, runValidators: true });
            res.json({ message: `Friends have been removed` })
            break;
        // only will occur is the function is not called properly
        default: res.json({ message: `something went wrong` })
    }
}

module.exports = friendModifier