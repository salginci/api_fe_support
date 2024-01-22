const db = require("../models");
 
const User = db.user; 
const Op = db.Sequelize.Op; 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require('crypto'); 
const axios = require("axios") ;
const http = require('http');
const https = require("https");


const { 
  v1: uuidv1,
  v4: uuidv4,
} = require('uuid');



exports.createFeedback = (req, res) => {

 
 
const messageTitle=req.body.messageTitle;
const messageBody=req.body.messageBody;
const messageEmail=req.body.messageEmail;
const messageSource=req.body.source;
const messageSenderID=req.body.senderID;
const messageTopic=req.body.topic;
const messageSenderName=req.body.senderName;
const messageSentToAdmin=0;
const messageSentToUser=0;
const messageRead=0;
const messageAnswered=0;
const senderIP=req.socket.remoteAddress;


 

  // Save Contact form  to Database . we do some db work here
  
  //const messageObject= await  CustomerMessage.create({
  //   mesageTitle: mesageTitle,
    

  //   mesageBody: mesageBody,
  //   mesageEmail: mesageEmail,
  //   messageSource: messageSource,
  //   messageSenderID : messageSenderID,
  //   messageTopic : messageTopic,
  //   messageSenderName: messageSenderName,
  //   messageSentToAdmin:messageSentToAdmin,
  //   messageSentToUser:messageSentToUser,
  //   messageRead:messageRead,
  //   senderIP:senderIP,
    
  //   messageAnswered:messageAnswered,
  //   createdAt: new Date(),
  
  // });

    
// Here we assume we saved all the informations to db and now we want to send the email to the user
// We will use the messageObject to send the email to the user
    
    const eventkey="MAIL_FEEDBACK";
    const dataid=feedback.id;
    const clientguid=req.client.clientguid;
    const secret=req.client.apisecret;

        
          

   
};

 


 
 
