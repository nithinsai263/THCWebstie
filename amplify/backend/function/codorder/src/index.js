const { v4: uuidv4 } = require('uuid');
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
var ddb = new AWS.DynamoDB();
let date = new Date();

const orderid=uuidv4();

exports.handler = async (event) => {
  
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
  
  const query = async (table, var1) => {
    const params = {
      TableName: table,
      FilterExpression: `${var1} = :hkey`,
      ExpressionAttributeValues: {
        ":hkey":"37c5166b-b0b2-4c5c-b772-0066636f28c5",
        // ":hkey": event.requestContext.authorizer.claims.sub,
      },
    };
    const res = await docClient.scan(params).promise();
    return res.Items || [];
  };
  
  const createItem=async (params)=>{
     try {
        const res=await ddb.putItem(params).promise();
        console.log("SUUUUUUUUUUUCCCCCCEEEEESSSSS", params)
        return true;
     }catch(e){
       console.log(e, params);
       return false;
     }
  }
  
  //driver
  var userdata = await query(process.env.USERTABLE, "id");
  var billdata =await getdata(process.env.BILLTABLE, "id", userdata[0].userBillId);
  var addressdata=await getdata(process.env.ADDRESSTABLE, "id", userdata[0].userShipaddressId);

  var addressdata2={
     firstname: {S:addressdata[0].firstname},
     lastname: {S:addressdata[0].lastname},
     email: {S:addressdata[0].email},
     address: {S:addressdata[0].address},
     city: {S:addressdata[0].city},
     state:  {S:addressdata[0].state},
     pincode:  {S:addressdata[0].pincode},
     phonenumber:  {S:addressdata[0].phonenumber}
  };
  
  var billdata2={
    subTotal:{S:billdata[0].subTotal},
    codcharges:{S:billdata[0].codcharges},
    deliverycharge:{S:billdata[0].deliverycharge},
    discount:{S:billdata[0].discount},
    coupon:{S:billdata[0].coupon},
    total:{S:billdata[0].total} 
  };
  
  var orderstatusdata={
    accepted:{BOOL:true},
    dateaccepted:{ S: date.toISOString() },
    dispatched:{BOOL:false},
    datedispatched:{S:'1'},
    delivered:{BOOL:false},
    datedelivered:{S:'1'},
  };
  
  var orderparams={
    Item:{
      id:{S:orderid},
      __typename: { S: "Order" },
      userID:{S:"37c5166b-b0b2-4c5c-b772-0066636f28c5"},
      orderstatus:{M: orderstatusdata},
      billdata:{M:billdata2},
      shipaddress:{M:addressdata2},
      paymentmethod:{S:"cod"},
      createdAt: { S: date.toISOString() },
      updatedAt: { S: date.toISOString() },
    },
    TableName:process.env.ORDERTABLE,
    }
  
  await createItem(orderparams);
  
  var cartdata = await query(process.env.CARTTABLE, "userID");
  for (var i = 0; i < cartdata.length; i++) {
    var productdata = await getdata(
      process.env.PRODUCTTABLE,
      "id",
      cartdata[i].cartItemProductId
    );
    const orderitemid=uuidv4();
    var orderitemdata={
      Item:{
        id: {S:orderitemid},
        userID: {S:"37c5166b-b0b2-4c5c-b772-0066636f28c5"},
        orderID: {S:orderid},
        quantity: {N:String(cartdata[i].quantity)},
        price: {N:String(productdata[0].price)},
        size: {S:cartdata[i].size},
        orderItemProductId:{S:productdata[0].id},
      },
      TableName:process.env.ORDERITEMTABLE,
    }
     await createItem(orderitemdata);
  }
  const response = {
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
    }, 
    body: JSON.stringify('njjn'),
  };
    return response;
};
