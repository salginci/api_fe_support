const db = require("../models");
 
const User = db.user; 
const Op = db.Sequelize.Op; 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require('crypto'); 
const axios = require("axios") ;
const http = require('http');
const https = require("https");
const {PubSub} = require('@google-cloud/pubsub');
 
const credentials = require('../../pub-publisher.json');

const pubSubClient = new PubSub({ credentials });


const { 
  v1: uuidv1,
  v4: uuidv4,
} = require('uuid');



exports.createFeedback = (req, res) => {

 console.log(credentials);
 
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

    
 


   const topicNameOrId = process.env.PUBSUBTOPIC;
   const data = JSON.stringify({
    mail_to: 'salginci@gmail.com',
    messageTitle: "Your Message Received",
    messageBody: "Your Message Received. Our team will contact you soon.",
    
  });

        
  sendMessage(topicNameOrId, data).then(()=>{
    res.status(200).send({success:100});
  }).catch(err => {
      console.error(err.message);
      process.exitCode = 1;
    });

   
};

async function sendMessage (topicNameOrId , data)   {
  const dataBuffer = Buffer.from(data);
  console.log(topicNameOrId)

  try {
    const messageId = await pubSubClient
      .topic(topicNameOrId)
      .publishMessage({data: dataBuffer});
    console.log(`Message ${messageId} published.`);
  } catch (error) {
    console.error(`Received error while publishing: ${error.message}`);
    process.exitCode = 1;
  }

}

 


 
 
