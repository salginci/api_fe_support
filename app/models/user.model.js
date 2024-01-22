module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("ClientMember", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    
    photo: {
      type: Sequelize.STRING
    },
    fullName: {
      type: Sequelize.STRING
    },
    firstName: {
      type: Sequelize.STRING
    },
    
    lastName: {
      type: Sequelize.STRING
    },
    memberCode:{
      type: Sequelize.STRING
    },
    
    birthDate:{
      type: Sequelize.DATE
    },
    jobStartDate:{
      type: Sequelize.DATE
    },
   
    mobile: {
      type: Sequelize.STRING
    },
    mobileVerified: {
      type: Sequelize.BOOLEAN
    },
    emailVerified: {
      type: Sequelize.BOOLEAN
    },
     
    mobileVerifiedAt: {
      type: Sequelize.DATE},
    emailVerifiedAt: {
      type: Sequelize.DATE},
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    },
    deletedAt: {
      type: Sequelize.DATE
    },
    deleted: {
      type: Sequelize.BOOLEAN
    },
    status: {
      type: Sequelize.STRING
    },
    reportsToId: {
      type: Sequelize.STRING
    },
   
    reportsToName: {
      type: Sequelize.STRING
    },
    
    
    lastLogin: {
      type: Sequelize.DATE
    },
    lastLoginIp: {
      type: Sequelize.STRING
    },
    lastLoginDevice: {
      type: Sequelize.STRING
    },
    lastLoginDeviceType: {
      type: Sequelize.STRING
    },
    userGuid: {
      type: Sequelize.STRING
    },
    additionalInfo: {
      type: Sequelize.JSON,
      
    },      
    
  });
  return User;
};