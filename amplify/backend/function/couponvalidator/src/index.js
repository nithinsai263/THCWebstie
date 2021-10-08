const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
let date = new Date();

exports.handler = async (event) => {
    const resetBill= async()=>{
        var userparams={
        Key:{
            "id": event.queryStringParameters.bill,
        },
        UpdateExpression:`set discount=:discountValue, coupon=:couponValue, updatedAt=:timeStamp`,
        ExpressionAttributeValues:{
            ':discountValue':0,
            ':timeStamp':date.toISOString(),
            ':couponValue':''
        },
        TableName:process.env.BILLTABLE
        }
        try{
            const res=await docClient.update(userparams).promise();
            console.log('succesfully added in bill table');
        }catch(e){
            console.log("Error", e);
        }
    };
    
    const query = async (table, var1, var2) => {
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
    
    const getdata = async (table, var1, var2) => {
    const params = {
      TableName: table,
      FilterExpression: `#hkey=:hvalue`,
      ExpressionAttributeValues: {
        ":hvalue": var2,
      },
      ExpressionAttributeNames:{
        "#hkey":var1,
      },
    };
    const res = await docClient.scan(params).promise();
    return res.Items || [];
  };
  
   var data = await getdata(process.env.COUPONTABLE, "name", event.queryStringParameters.coupon);
   if(data.length===0){
     data={message:"Not a valid coupon"}
     resetBill();
   }
   else if(!data[0].active){
     data={message:"No longer active"};
     resetBill();
   }
   else{
    //var data3 = await query(process.env.USERTABLE, "id");
    var billdata=await query(process.env.BILLTABLE,"id",event.queryStringParameters.bill );
    var billtotal=parseFloat(billdata[0].total);
    var billdiscount=billtotal/parseFloat(data[0].discount);
    console.log("billdiscount:", parseFloat(data[0].discount));
    var newbilltotal= billtotal-billdiscount;
    
    var userparams={
        Key:{
            "id": event.queryStringParameters.bill,
        },
        UpdateExpression:`set discount=:discountValue, coupon=:couponValue,#ts=:totalValue, updatedAt=:timeStamp`,
        ExpressionAttributeValues:{
            ':discountValue':String(billdiscount),
            ':timeStamp':date.toISOString(),
            ':couponValue':event.queryStringParameters.coupon,
            ':totalValue':String(newbilltotal)
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
   }
    const response = {
      statusCode: 200,
      headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
      }, 
        body: JSON.stringify(data),
    };
    return response;
};
