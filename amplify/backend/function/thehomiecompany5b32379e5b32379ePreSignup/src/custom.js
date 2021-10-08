const aws = require("aws-sdk");
var cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider();
exports.handler = (event, context, callback) => {
    var userPools=[ // input for this trigger
    {
      pool:process.env.USERPOOLID,
      error:"Generic Account Exists",
    }, 
  ];
   var userEmail = event.request.userAttributes.email;
   //var userEmail="ankitkumarak901@gmail.com";
  function Driver(poolid, errorMessage)
  {
    var params = {
      UserPoolId: poolid,
    };
    cognitoidentityserviceprovider.listUsers(params, function(err, data) {
      if (err)  // an error occurred
      {
        console.log(err, err.stack); 
      }
      else // successful response
      {    
        console.log('data: ',data.Users[0].Attributes)
        data.Users.map((d)=>{
          d.Attributes.map((att)=>{
            if(att.Name==='email' && att.Value===userEmail){
                console.log("inside email")
                var error = new Error(errorMessage);
                callback(error, event)
            }});
        });
         callback(null, event)
      }           
    });
  }
  userPools.map((userpool)=>(Driver(userpool.pool, userpool.error)))
};
