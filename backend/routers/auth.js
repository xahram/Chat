const express = require("express");
const { login, signup } = require('../controllers/auth');
const authRouter = express.Router();


authRouter.post("/sign-up",  signup);
authRouter.post("/login", login);



module.exports = authRouter;


