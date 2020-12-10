const User = require('../modals/User');

const login = async (req, res, next) => {
    console.log(req.body)
    const { username, password } = req.body;
    const user = await User.findOne({ username: username })
    try {
        if (!user) {
            throw new Error('Please Enter Right Email or Password')
        }
        if (user.password === password) {
            
            const token = await user.generateAuthToken()

            const updatedUser = {
                _id: user._id,
                username: user.username,
                token: token
            }
            res.status(200).send(updatedUser)
        }
        else {
            throw new Error('Please Enter Right Email or Password')
        }
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
}


// Signing A new User
const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    // console.log(req.body)
    const newUser = new User({ username: username, email: email, password: password });
    try {
        await newUser.save();
        const token = await newUser.generateAuthToken()
        const updatedUser = {
            _id: newUser._id,
            username: newUser.username,
            token: token
        }
        res.status(200).send(updatedUser);
    } catch (error) {
        console.log(error)
        res.status(400).send({ status: 400, ErrorMessage: "Coudln\'t save the User.." })
    }
    console.log("works")
};




module.exports = { login, signup }