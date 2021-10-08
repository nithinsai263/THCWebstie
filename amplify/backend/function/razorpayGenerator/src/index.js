const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const Razorpay = require("razorpay");
const shortid = require("shortid");


exports.handler = async (event) => {
    
  const razorpay = new Razorpay({
    key_id: "rzp_test_tASNygvKTZLHX7",
    key_secret: "Bm7voUUuSuu963r1PxbqWIvH",
  });
  
  const getdata = async (table, var1, var2) => {
    const params = {
      TableName: table,
      KeyConditionExpression: `${var1}=:hkey`,
      ExpressionAttributeValues: {
        ":hkey": var2,
      },
    };
    const res = await docClient.query(params).promise();
    return res.Items || [];
  };
   var data = await getdata(process.env.USERTABLE, "id", event.requestContext.authorizer.claims.sub);
   var data2=await getdata(process.env.BILLTABLE, "id", data[0].userBillId );
   
  const payment_capture = 1;
  const amount = data2[0].total;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  const razorpayresponse = await razorpay.orders.create(options);
  const razorpayres = {
    id: razorpayresponse.id,
    currency: razorpayresponse.currency,
    amount: razorpayresponse.amount,
  };
  
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*"
    }, 
    body: JSON.stringify(razorpayres),
    };
    return response;
};


//Oct 15
//Roles.


//Dec End
//MVP

//Market research

//Touch Points
//Number of homechef in hyderabad
//If joining what they expect. if not why 
//Number of homechef ready to join

//Questionaries
//Bio Data
//Are you a homechef
//Cusines
//Number of items you can prepare per day
//Which area do you operate from
//if yes do you want your food to be featured by app
//if so what do you expect
//Would you be willing to signup on such an app and make it your daily business
//Do you think you would be able to prepare 50 portion a day
//Would you be willing to pay the company providing this serivce a small fee (Delivery, Q&A, Packaging)


//Questionaries Customer
//Bio Data
//How frequently do you order food online
//What Mobile App Services do you use for food delivery
//Would you like to order food cooked by homechefs. (Explain homechef)
//Would you be able to pay slightly higher fee for home cooked food
//What areas do you want this service to be active in (Pincode)
//What areas do you want this service to be active in (Area Name)

