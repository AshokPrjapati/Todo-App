const jwt = require("jsonwebtoken");
require("dotenv").config();

// Middleware function for authenticating requests
const authenticate = (req, res, next) => {
    // Extracting the token from the Authorization header
    let token = req.headers.authorization?.split(" ")[1];

    // Checking if a token exists
    if (token) {
        // Verifying the token using the provided secret key from environment variables
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (decoded) {
                // If the token is valid, adding the decoded user ID to the request body
                req.body.user = decoded.userId;
                next();
            } else {
                // If the token is invalid, sending a 401 Unauthorized response 
                res.status(401).send({ error: "Invalid token" });
            }
        });
    } else {
        // If no token is provided, sending a 401 Unauthorized response 
        res.status(401).send({ error: "Authorization token missing" });
    }
};

module.exports = authenticate;