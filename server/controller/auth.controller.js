const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// controller function for user registeration
exports.signup = async (req, res) => {
    const payload = req.body;
    try {
        // Check if the user already exists
        let user = await UserModel.findOne({ email: payload.email });
        if (user) return res.status(409).send({ error: "User already exists" }); //   conflict in request

        // Hash the password
        const saltRounds = 5; // number of salt rounds for stronger encryption
        const hashedPassword = await bcrypt.hash(payload.pass, saltRounds);
        if (hashedPassword) payload.pass = hashedPassword;
        else return res.status(500).send({ error: "Something went wrong" });

        // Create a new user with the hashed password
        let newUser = new UserModel(payload);
        await newUser.save();
        res.status(201).send({ message: "New user has been registered" }); //  resource created

    } catch (e) {
        console.log(e)
        res.status(500).send({ error: e.message });
    }
};

// controller function for user login
exports.signin = async (req, res) => {
    const { email, pass } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        // check if user is present in db or not
        if (user) {
            // passsword compare
            bcrypt.compare(pass, user.pass, (err, result) => {
                if (result) {
                    let token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
                    // Create a new object without the "pass" property
                    const userWithoutPassword = { ...user._doc };
                    delete userWithoutPassword.pass;
                    res.status(200).send({ message: "Login Success", token, user: userWithoutPassword });
                } else {
                    res.status(401).send({ error: "Wrong Password" }); // unauthorized
                }
            });
        } else {
            res.status(401).send({ error: "Wrong Credentials" }); // unauthorized
        }
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: e.message });
    }
};
