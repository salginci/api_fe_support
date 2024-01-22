const jwt = require("jsonwebtoken");
 
const db = require("../models");

const bcrypt = require("bcryptjs");
const hashCode="My top secret Key";

const User = db.user;
const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }


  jwt.verify(token,  hashCode, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!" 
      });
    }

    req.userId = decoded.id; 
    req.token = decoded;
    next();
  });
};
  
const authJwt = {
  verifyToken: verifyToken,
  jwtHash: hashCode

};
module.exports = authJwt;   