const { v4: uuidv4 } = require('uuid');
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
var ddb = new AWS.DynamoDB();
let date = new Date();


exports.handler = async (event) => {
    const initializeBill= async()=>{
        const id=uuidv4();
        var params={
            Item:{
                id:{S:id},
                __typename: { S: "Bill" },
                subTotal:{S:'0'},
                codcharges:{S:'0'},
                deliverycharge:{S:'0'},
                coupon:{S:''},
                Total:{S:'0'},
                discount:{S:'0'},
                createdAt: { S: date.toISOString() },
                updatedAt: { S: date.toISOString() },
            },
            TableName:process.env.BILLTABLE
        }
              // Call DynamoDB
        try {
            const res=await ddb.putItem(params).promise();
            console.log('succesfully added in bill table');
            var userparams={
                Key:{
                "id": event.requestContext.authorizer.claims.sub,
                },
                UpdateExpression:`set userBillId=:updateValue, updatedAt=:timeStamp`,
                ExpressionAttributeValues:{
                    ':updateValue':id,
                    ':timeStamp':date.toISOString()
                },
                TableName:process.env.USERTABLE
            }
            try{
                const res2=await docClient.update(userparams).promise();
                console.log('succesfully added in user table');
            }catch(e){
                console.log("Error", e);
            }
            
        } catch (err) {
            console.log("Error", err);
        }

        console.log("Success: Everything executed correctly");
    }
    const query = async (table, var1) => {
    const params = {
      TableName: table,
      FilterExpression: `${var1} = :hkey`,
      ExpressionAttributeValues: {
        ":hkey":event.requestContext.authorizer.claims.sub ,
      },
    };

    const res = await docClient.scan(params).promise();
    return res || [];
    };

    var data = await query(process.env.USERTABLE, "id");
   
    if(! data.Items.userBillId ){
        await initializeBill(); 
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
 