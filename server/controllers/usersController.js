const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../models/user');

//Defined API endpoints to manage users

async function signup(req, res) {
    try {

        //get the email and password off req body
        const { email, password, userType } = req.body;

        //hash password
        const hashedPassword = bcrypt.hashSync(password, 8);

        //create a user with the data
        await User.create({ email, password: hashedPassword, userType });

        //respond
        res.sendStatus(200);

    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }

}

async function login(req, res) {
    try {
        //get the email and password off req body
        const { email, password, userType } = req.body;

        //find the user with request email
        const user = await User.findOne({ email });
        if (!user) return res.sendStatus(400);

        //compare sent in password with found user password hash
        const passwordMatch = bcrypt.compareSync(password, user.password);
        if (!passwordMatch) return res.sendStatus(400);

        //create a jwt token
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
        const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);

        //set the cookie
        res.cookie("Authorization", token, {
            expires: new Date(exp),
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === "production",
        });

        //send it
        res.status(200).json({ userType: user.userType });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

function logout(req, res) {
    try {
        res.clearCookie('Authorization');
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }

}

function checkAuth(req, res) {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(400);
    }

}

module.exports = {
    signup,
    login,
    logout,
    checkAuth,
};