  const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

//Global Variables
let date = new Date();
var finalresult = 0;
var cod=0;
var delivery=0;
var tot=0;

exports.handler = async (event) => {
  if(event.queryStringParameters.mode==='cod'){
    cod=100;
  }
  else if(event.queryStringParameters.mode==='online'){
    cod=0;
  }
  
  const getdata = async (table, var1, var2) => {
        const params = {
        TableName: table,
        KeyConditionExpression: `${var1}=:hkey`,
        ExpressionAttributeValues: {
          ":hkey": var2,
        },
      };
    const res = await docClient.query(params).promise();
    return res || []; 
  };
  const query = async (table, var1) => {
    const params = {
      TableName: table,
      FilterExpression: `${var1} = :hkey`,
      ExpressionAttributeValues: {
         ":hkey": event.requestContext.authorizer.claims.sub,
        // ":hkey": '37c5166b-b0b2-4c5c-b772-0066636f28c5',
      },
    };
    const res = await docClient.scan(params).promise();
    return res.Items || [];
  };
  
  var data = await query(process.env.CARTTABLE, "userID");
  for (var i = 0; i < data.length; i++) {
    var data2 = await getdata(
      process.env.PRODUCTTABLE,
      "id",
      data[i].cartItemProductId
    );
    finalresult = data2.Items[0].price * data[i].quantity + finalresult;
  }

  var data3 = await query(process.env.USERTABLE, "id");
  
  
  delivery=finalresult>499 ? 40: 100;
  tot=finalresult+cod+delivery;
  
  const jsonresponse={
    subTotal:String(finalresult),
    codcharges:String(cod),
    deliverycharge:String(delivery),
    total: String(tot),
    discount:String(0),
    coupon:'',
    billid:String(data3[0].userBillId)
  }

  var userparams={
    Key:{
      "id": String(data3[0].userBillId),
    },
    UpdateExpression:`set subTotal=:subTotalValue, coupon=:couponValue, discount=:discountValue, codcharges=:codchargesValue, deliverycharge=:deliverychargeValue, #ts=:totalValue, updatedAt=:timeStamp`,
    ExpressionAttributeValues:{
      ':subTotalValue':String(finalresult),
      ':codchargesValue':String(cod),
      ':deliverychargeValue':String(delivery),
      ':totalValue':String(tot),
      ':timeStamp':date.toISOString(),
      ':couponValue':'',
      ':discountValue':'',
    },
    ExpressionAttributeNames:{
    "#ts": "total"
    },
    TableName:process.env.BILLTABLE
  }
  try{
    const res2=await docClient.update(userparams).promise();
    console.log('succesfully added in bill table');
  }catch(e){
    console.log("Error", e);
  }
  
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(jsonresponse),
  };
  finalresult = 0;
  return response;
};
