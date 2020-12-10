const User = require('../modals/User');

const searchUsers = async (req, res) => {
    const users = await User.find({ username: { $regex: new RegExp(req.params.username) } }, { email: 0, password: 0, dateCreated: 0, tokens: 0, _id: 0 }).lean()
    console.log(users)
    try {
        if (!users.length) {
            return res.status(404).send("Please use correct username")
        }
        res.status(200).send(users)
    } catch (error) {
        return res.status(404).send("No User Found")
    }
}
module.exports = searchUsers;