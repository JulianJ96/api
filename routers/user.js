const express = require('express');
const userRouter = express.Router();

const userCtrl = require('../controllers/userCtrl');

userRouter.post('/signup', userCtrl.signup);
userRouter.post('/login', userCtrl.login);

module.exports = userRouter;