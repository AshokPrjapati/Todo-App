const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// controller function for user registeration
exports.signup = async (req, res) => {
    const payload = req.body;
    try {
        // Check if the user already exists
        let user = await UserModel.findOne({ email: payload.email });
        if (user) return res.status(409).send({ message: "User already exists" }); //   conflict in request

        // Hash the password
        const saltRounds = 5; // number of salt rounds for stronger encryption
        const hashedPassword = await bcrypt.hash(payload.pass, saltRounds);
        if (hashedPassword) payload.pass = hashedPassword;
        else return res.status(500).send({ message: "Something went wrong" });

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
                    // delete password before the user details in response
                    delete user.pass;
                    res.status(200).send({ message: "Login Success", token, user });
                } else {
                    res.status(401).send({ message: "Wrong Password" }); // unauthorized
                }
            });
        } else {
            res.status(401).send({ message: "Wrong Credentials" }); // unauthorized
        }
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: e.message });
    }
};
