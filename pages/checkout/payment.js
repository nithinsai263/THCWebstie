import React, { useState } from "react";
import { API, Auth } from "aws-amplify";
import { Radio} from "@material-ui/core";
import Router from "next/router";

import Button from "../../components/Button";
import CheckoutCard from "../../components/CheckoutCard";
import styles from "./index.module.css";
import {loadScript} from "../../utilities/Razorpay";


export default function Payment({ setPageState, currbill, setPaymentMethod, couponChecker }) {
  const [cod, setCod] = useState(false);
  const [payment, setPayment] = useState(false);
  const [name, setName] = useState("Mehul");
  const [codpayment, setCodPayment]= useState(false);
  const [onlinepayment, setOnlinePayment]=useState(true);

  async function callcodapi(){
    const user=await Auth.currentAuthenticatedUser();
    const token= user.signInUserSession.idToken.jwtToken;
    const requestData = {
        headers: {
        Authorization: token,
      }
    };
    const data = await API.get("codorder", "/codorder", requestData);
    if(data){
       Router.push("/");
    }
  }

  async function displayrazorpay() {
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    const requestData = {
      headers: {
        Authorization: token,
      },
    };
    const data = await API.get("razorpaygenerator", "/razorpaygenerator", requestData);
    console.log(data);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_tASNygvKTZLHX7",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Donation",
      description: "Thank you for nothing. Please give us some money",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name,
        email: "sdfdsjfh2@ndsfdf.com",
        phone_number: "9899999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  
    const handleChange = (e) => {
    //for some reason working in reverse
    if(!codpayment){
      setPaymentMethod('cod');
    }
    else if(!onlinepayment){
      setPaymentMethod('online');
    }
  };

  return (
    <div className={styles.checkoutpaymentcontainer}>
      <div className={styles.checkoutpaymentleftcontainer}>
        <div style={{ display: "flex", justifyContent: "center", marginTop:-20 }}>
          <div style={{ textAlign: "center" }}>
            <img src={"/logo.png"} style={{ height: 60, width: 90 }} />
            <div
              style={{
                display: "flex",
                width: 200,
                justifyContent: "space-between",
              }}
            >
              <p style={{ cursor: "pointer", fontFamily:"Inter", fontSize:12 }}>Order Details</p>
              <p style={{ fontFamily:"Inter", fontSize:12}}>/</p>
              <p style={{ fontFamily:"Inter", fontSize:12}}>Payment</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20vh",
          }}
        >
          <div>
            <div style={{ display: "flex" }}>
              <Radio
              checked={codpayment}
              onChange={(e) => {
              setCodPayment(true);
              setOnlinePayment(false);
              handleChange();
              }}
              value={codpayment}
              />
              <p>Cash on Delivery</p>
            </div>
            <div style={{ display: "flex" }}>
              <Radio
              checked={onlinepayment}
              onChange={(e) => {
              setCodPayment(false);
              setOnlinePayment(true);
              handleChange();
              }}
              value={onlinepayment}
              />
              <p>Online Payment</p>
            </div>
          </div>
        </div>
        <div
          style={{ marginRight: "-20px" }}
          onClick={() => {
           if(onlinepayment){
              displayrazorpay();
           }
           else{
             callcodapi();
           }
          }}
        >
          <Button
            name={"Proceed"}
            backgroundColor={"#ff4d15"}
            borderRadius={"4px"}
          />
        </div>
      </div>

      <div className={styles.checkoutpaymentrightcontainer}>
      {currbill && couponChecker &&
        <CheckoutCard currbill={currbill} couponChecker={couponChecker}/>
      }
      </div>
    </div>
  );
}
