const express = require("express");
const colors  = require('colors');
// const sessionHandler =  require('../cookies/sessionHandler');
const connectDB = require("../db/db");



//Export Routes
const authRouter = require('../routers/auth');

//Initializing Express app
const app = express();



//Middlewares
app.use(express.json())
// app.use(sessionHandler);

//Connecting To DataBase
connectDB();

//Mounting Routes
app.use('/api/v1', authRouter);

const port = process.env.PORT || 8000




app.listen(port, () => {
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
