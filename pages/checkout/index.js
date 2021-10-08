import React, { useState, useEffect } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";

import OrderDetails from "./orderdetails";
import Payment from "./payment";
import {getBill} from "../../src/graphql/queries";

export default function Checkout() {
  const [pagestate, setPageState] = useState("orderdetails");
  const [bill, setBill] = useState();
  const [paymentmethod, setPaymentMethod]=useState('online');
  const [couponerror, setCouponError]=useState(null);
  useEffect(() => {
  
    fetchBill();
  }, [paymentmethod]);

  async function fetchBill(){
      try{
        const user = await Auth.currentAuthenticatedUser();
        console.log(user)
        const token = user.signInUserSession.idToken.jwtToken;
        const requestData = {
          headers: {
            Authorization: token,
          },
          queryStringParameters: { 
            mode:paymentmethod,
          },
        };
        const data = await API.get("billgenerator", "/billgenerator", requestData);
        console.log(data);
        setBill(data);
      }
      catch(e){
        console.log(e)
      }
  }

  const couponChecker=async(couponname)=>{
    try{
        const user = await Auth.currentAuthenticatedUser();
        console.log(user)
        const token = user.signInUserSession.idToken.jwtToken;
        const requestData = {
          headers: {
            Authorization: token,
          },
          queryStringParameters: { 
            coupon:couponname,
            bill:bill.billid
          },
        };
        const data = await API.get("couponvalidator", "/couponvalidator", requestData);
        console.log(data);
        if(data.message){
          setCouponError(data.message);
        }
        else{
          const billdata = await API.graphql(
            graphqlOperation(getBill, { id: bill.billid })
          );
          console.log("refetched bill data",billdata.data.getBill);
          setBill(billdata.data.getBill);
        }
      }
      catch(e){
        console.log(e)
      }
  }

  return (
    <div>
      {pagestate === "orderdetails" && bill && <OrderDetails setPageState={setPageState} currbill={bill} couponChecker={couponChecker}/>}
      {pagestate === "payments" && bill && <Payment setPageState={setPageState} currbill={bill} setPaymentMethod={setPaymentMethod} couponChecker={couponChecker}/>}
    </div>
  );
}
// const AWS = require("aws-sdk");
// const docClient = new AWS.DynamoDB.DocumentClient();
// const Razorpay = require("razorpay");
// const shortid = require("shortid");


// exports.handler = async (event) => {
    
//   const razorpay = new Razorpay({
//     key_id: "rzp_test_tASNygvKTZLHX7",
//     key_secret: "Bm7voUUuSuu963r1PxbqWIvH",
//   });
  
//   const getdata = async (table, var1, var2) => {
//     const params = {
//       TableName: table,
//       KeyConditionExpression: `${var1}=:hkey`,
//       ExpressionAttributeValues: {
//         ":hkey": var2,
//       },
//     };
//     const res = await docClient.query(params).promise();
//     return res.Items || [];
//   };
//    var data = await getdata(process.env.USERTABLE, "id", '37c5166b-b0b2-4c5c-b772-0066636f28c5');
//    var data2=await getdata(process.env.BILLTABLE, "id", data[0].userBillId );
   
//   const payment_capture = 1;
//   const amount = data2[0].total;
//   const currency = "INR";

//   const options = {
//     amount: amount * 100,
//     currency,
//     receipt: shortid.generate(),
//     payment_capture,
//   };

//   const razorpayresponse = await razorpay.orders.create(options);
//   const razorpayres = {
//     id: razorpayresponse.id,
//     currency: razorpayresponse.currency,
//     amount: razorpayresponse.amount,
//   };
  
//   const response = {
//     statusCode: 200,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Headers": "*"
//     }, 
//     body: JSON.stringify(razorpayres),
//     };
//     return response;
// };

// {
//   name:'ankit',
//   phone:"snfkjdkjlf",

// },
// {
//   name:'haider',

// }