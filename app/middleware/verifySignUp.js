const db = require("../models");
 
const User = db.user;
   
checkisValidClient = (req, res, next) => {
 // Here we assume that all the clients are valid and we will check the api key in the database
 // And also I want to prevent auto bots trigger this methods.
  var apikey=req.headers['client-auth-token']; 
  if(apikey==null)
{
  return res.status(403).send({ message: "Lost in rabbit hole!" });
}
next();
  
};
const verifySignUp = {
  checkisValidClient: checkisValidClient, 
};
module.exports = verifySignUp;