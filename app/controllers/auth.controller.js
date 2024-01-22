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

const fs = require('fs');
const path = require('path');

 

// This usage is for using key file from local file system
//const credentials = require('../../pub-publisher.json');


// This usage is for using key file from environment variable
const keyFilePath = '/secrets/key.json';
const keyFileContent = fs.readFileSync(keyFilePath, 'utf8');
// Assume 'base64String' contains your base64 encoded data
const decodedString = Buffer.from(keyFileContent, 'base64').toString('utf8');

const credentials = JSON.parse(decodedString);


const pubSubClient = new PubSub({ credentials });



const { 
  v1: uuidv1,
  v4: uuidv4,
} = require('uuid');



exports.createFeedback = (req, res) => {

 
 

   const topicNameOrId = process.env.PUBSUBTOPIC;
   const data = JSON.stringify({
    mail_to: 'mymail@gmail.com',
    messageTitle: "Your Message Received",
    messageBody: "Your Message Received. Our team will contact you soon.<br/>"+req.body.messageBody
    
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

 


 
 
