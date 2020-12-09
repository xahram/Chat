const mongoose = require('mongoose');

const database_URL = 'mongodb://127.0.0.1:27017/chat';

const connectDB = async () => {
    mongoose.connection.once("open", () => {
        console.log(`${mongoose.connection.host}`);
    })
    mongoose.connection.on('error', () => {
        console.log('Something went wrong'.color.green(100).grayscale().lighten(0.6));
    });
    debugger;
     await mongoose.connect(database_URL, { useNewUrlParser: true, useUnifiedTopology: true });


}
module.exports = connectDB


