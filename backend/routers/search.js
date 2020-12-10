const express = require("express");
const searchUsers = require('../controllers/search');
const searchRouter = express.Router();


searchRouter.get("/searchUser/:username",  searchUsers);


module.exports = searchRouter;


