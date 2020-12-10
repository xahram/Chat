const socketio = require("socket.io")
const express = require("express");
const colors = require('colors');
const http = require("http")
const cors = require('cors')
// const sessionHandler =  require('../cookies/sessionHandler');
const connectDB = require("../db/db");

//Initializing Express app
const app = express();
const Server = http.createServer(app)

// Initialize IO Object
const io = socketio(Server, {
    cors: {
        origin: '*',
    }
})

//Middlewares
app.use(express.json())
app.use(cors())

//Export Routes
const authRouter = require('../routers/auth');
const searchRouter = require('../routers/search');


//Connecting To DataBase
connectDB();

//Mounting Routes
app.use('/api/v1', authRouter);
app.use('/api/v1', searchRouter);

let numberOfUsers = 0
let messages = []
io.on("connection", (socket) => {
    ++numberOfUsers
    console.log("new User")
    socket.emit("connection", { numberOfUsers })
    socket.on("new_message", (message) => {
        console.log("one ", message)
        messages = messages.concat({ username: message.username, message: message.message })
        socket.broadcast.emit('receive_messages', messages);
        console.log(messages);
    })
})


const port = process.env.PORT || 8000
Server.listen(port, () => {
    console.log(`Listening on port ${port}`.bgCyan.black)
})











// const data = {
//     x: 42,
//     getX: function () {
//         return this.x;
//     }
// };
// const boundGetx = data.getX.bind(data)
// const unboundGetX = data.getX
// console.log(unboundGetX())
// console.log(boundGetx())
