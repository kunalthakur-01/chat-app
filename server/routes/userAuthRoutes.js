const express = require('express');
const User = require('../models/userModel');
const httpError = require('../models/httpErrorModel');

const router = express.Router();

router.post('/login', async (req, res, next) => {
    const {userName, email, image, password} = req.body;
    let existingUser;

    try{
        existingUser = User.find({email});
    } catch(err) {
        const error = new HttpError('Login failed!', 500);
        return next(error);
    }

    if(!existingUser) {
        const error = new httpError("User does'nt exist, create an account", 401);
        return next(error);
    }

    if(existingUser.password !== password){
        const error = new httpError("Invalid credentials!", 401);
        return next(error);
    }
});

router.post('/signup', async (req, res, next) => {

});

module.exports = router;