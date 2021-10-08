const aws = require("aws-sdk");
var ddb = new aws.DynamoDB();
var cognitoIdentityServiceProvider = new aws.CognitoIdentityServiceProvider();
let date = new Date();
 
exports.handler = async (event, context, callback) => {
 
  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: "User" },
        email: { S: event.request.userAttributes.email },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
      },
      TableName: process.env.USERTABLE,
    };
 
    try {
      await ddb.putItem(params).promise();
      console.log("Success");
    } catch (err) {
      console.log("Error", err);
    }
 
    console.log("Success: Everything executed correctly");
  }
 
  var params = {
    GroupName: process.env.GROUP, //your confirmed user gets added to this group
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };
  cognitoIdentityServiceProvider.adminAddUserToGroup(
    params,
    function (err, data) {
      if (err) {
        callback(err); // uh oh, an error
      }
 
      callback(null, event); // yay! success
    }
  );
};
 
 
