import React, {useState} from "react";
import { Radio } from "@material-ui/core";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import OrderNavigator from "../../components/OrderNavigator";
import InnerOrderCard from "../../components/InnerOrderCard";
import AdminPopup from "../../components/Popup";
import PopupOrder from "../../components/PopupOrder";
import Invoice from "../../components/Invoice";
import styles from "./index.module.css";
const data = [
  {
    status: true,
    label: "Ordered",
    date: "26th Aug",
  },
  {
    status: true,
    label: "Dispatched",
    date: "27th Aug",
  },
  {
    status: false,
    label: "Delivered",
    date: "28th Aug",
  },
];
function MyOrdersId() {
  const [trigger, settrigger] = useState(-1);
  const [sizeissue, setSizeIssue]=useState(false);
  const [productquality, setProductQuality]=useState(false);  
  const [anotherproduct,setAnotherProduct]=useState(false);
  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#000",
          paddingTop: "10vh",
          color: "#fff",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <div style={{ width: "90vw" }}></div>
        <div
          style={{
            backgroundColor: "#111",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <h4 style={{ margin: 6 }}> Order Timeline</h4>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <OrderNavigator data={data} width={"70vw"} />
        </div>
        <div
          style={{
            backgroundColor: "#111",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <h4 style={{ margin: 6 }}> Ordered Details</h4>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "90vw",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p className={styles.thcmyorderdetailtext}>Order ID: 1234567</p>
              <p className={styles.thcmyorderdetailtext}>Order Contact: +91 8686959744</p>
              <p className={styles.thcmyorderdetailtext}>Order Email: ankitkumarak901@gmail.com</p>
              <p className={styles.thcmyorderdetailtext}>
                Shipped to: Flat: 102, Plot: 53, Rishabh Residency, Kalyan Nagar
                Phase 3, Hyderabad
              </p>
              <p className={styles.thcmyorderdetailtext}>Pin : 500018</p>
            </div>
            <div>  
            <Invoice>   
              <div className={styles.myorderdetailcardbutton}>
                <p>Invoice</p>
              </div>
             </Invoice> 
              <div onClick={()=>{settrigger(2)}}>
                  <div className={styles.myorderdetailcardbutton}>
                    <p>Issues</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "#111",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <h4 style={{ margin: 6 }}> Ordered Items</h4>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <InnerOrderCard />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <InnerOrderCard />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <InnerOrderCard />
        </div>
        <div
          style={{
            backgroundColor: "#111",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <h4 style={{ margin: 6 }}> Price Breakdown</h4>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "90vw" }}>
            <div className={styles.myorderdetailbillrow}>
              <h4
                style={{
                  margin: 0,
                  padding: 0,
                  width: 125,
                }}
              >
                Sub Total
              </h4>
              <p
                style={{
                  margin: 0,
                  padding: 0,
                }}
              >
                Rs 290
              </p>
            </div>
            <div className={styles.myorderdetailbillrow}>
              <h4
                style={{
                  margin: 0,
                  padding: 0,
                  width: 125,
                }}
              >
                Delivery Fees
              </h4>
              <p
                style={{
                  margin: 0,
                  padding: 0,
                }}
              >
                Rs 125
              </p>
            </div>
            <div className={styles.myorderdetailbillrow}>
              <h4
                style={{
                  margin: 0,
                  padding: 0,
                  width: 125,
                }}
              >
                Discount
              </h4>
              <p
                style={{
                  margin: 0,
                  padding: 0,
                }}
              >
                - Rs 0
              </p>
            </div>
            <div className={styles.myorderdetailbillrow}>
              <h4
                style={{
                  margin: 0,
                  padding: 0,
                  width: 125,
                }}
              >
                Grand Total
              </h4>
              <p
                style={{
                  margin: 0,
                  padding: 0,
                }}
              >
                Rs 390
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
       {trigger === 2 && (
        <AdminPopup trigger={true} setTrigger={settrigger}>
          <div style={{color:"#fff", fontFamily:"Inter"}}>
            <div style={{backgroundColor:"#111", display:'flex', justifyContent:'center', alignItems:"center"}}>
                <h4>Ordered Items</h4>
            </div>
            <PopupOrder user={true} flag={true}/>
            <PopupOrder user={true} flag={true}/>
            <div style={{backgroundColor:"#000", display:'flex', justifyContent:'flex-end', alignItems:"center", borderTop:"1px solid #ddd"}}>
              <h4 onClick={()=>{settrigger(3)}} style={{cursor:"pointer"}}>Raise Issue</h4>
            </div>
          </div>
        </AdminPopup>
      )}
      {trigger === 3 && (
        <AdminPopup trigger={true} setTrigger={settrigger}>
          <div style={{color:"#fff"}}>
            <div style={{backgroundColor:"#111", display:'flex', justifyContent:'center', alignItems:"center"}}>
                <h4>Category</h4>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
              <div>
                <div style={{display:'flex', alignItems:'center',  width:200}}>
                    <Radio
                      style={{color:"#aaa", marginTop:7}}
                      checked={sizeissue}
                      onChange={(e) => {
                      setAnotherProduct(false);
                      setProductQuality(false);
                      setSizeIssue(!sizeissue);
                      }}
                        value={sizeissue}
                      />
                    <p style={{paddingTop:8}} className={styles.popupMessage}>Size Issue</p>
                 </div>
                 <div style={{display:'flex', alignItems:'center',  width:200}}>
                    <Radio
                      style={{color:"#aaa", marginTop:7}}
                      checked={productquality}
                      onChange={(e) => {
                      setSizeIssue(false);
                      setAnotherProduct(false);
                      setProductQuality(!productquality);
                      }}
                        value={productquality}
                      />
                    <p style={{paddingTop:8}} className={styles.popupMessage}>Product Quality</p>
                 </div>
                 <div style={{display:'flex', alignItems:'center',  width:200}}>
                    <Radio
                     style={{color:"#aaa", marginTop:7}}
                      checked={anotherproduct}
                      onChange={(e) => {
                      setSizeIssue(false);
                      setProductQuality(false);
                      setAnotherProduct(!anotherproduct);
                      }}
                        value={anotherproduct}
                      />
                    <p style={{paddingTop:8}} className={styles.popupMessage}>Got Another Product</p>
                </div>
              </div>
            </div>
            <div style={{backgroundColor:"#000", display:'flex', justifyContent:'flex-end', alignItems:"center", borderTop:"1px solid #ddd"}}>
              <h4 style={{cursor:"pointer", marginRight:20}} onClick={()=>{settrigger(2)}}>Back</h4>
              <h4 style={{cursor:"pointer", marginRight:10}} onClick={()=>{settrigger(4)}}>Next</h4>
            </div>
          </div>
        </AdminPopup>
      )}
      {trigger===4 &&(
     <AdminPopup trigger={true} setTrigger={settrigger}>
          <div style={{color:"#fff"}}>
            <div style={{backgroundColor:"#111", display:'flex', justifyContent:'center', alignItems:"center"}}>
                <h4>Sub Category</h4>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
              <div>
                <div style={{display:'flex', alignItems:'center',  width:200}}>
                    <Radio
                      style={{color:"#aaa", marginTop:7}}
                      checked={sizeissue}
                      onChange={(e) => {
                      setAnotherProduct(false);
                      setProductQuality(false);
                      setSizeIssue(!sizeissue);
                      }}
                        value={sizeissue}
                      />
                    <p style={{paddingTop:8}} className={styles.popupMessage}>Exchange</p>
                 </div>
                 <div style={{display:'flex', alignItems:'center',  width:200}}>
                    <Radio
                      style={{color:"#aaa", marginTop:7}}
                      checked={productquality}
                      onChange={(e) => {
                      setSizeIssue(false);
                      setAnotherProduct(false);
                      setProductQuality(!productquality);
                      }}
                        value={productquality}
                      />
                    <p style={{paddingTop:8}} className={styles.popupMessage}>Refund</p>
                 </div>
              </div>
            </div>
            <div style={{backgroundColor:"#000", display:'flex', justifyContent:'flex-end', alignItems:"center", borderTop:"1px solid #ddd"}}>
              <h4 style={{cursor:"pointer", marginRight:20}} onClick={()=>{settrigger(3)}}>Back</h4>
              <h4 style={{cursor:"pointer", marginRight:10}} onClick={()=>{settrigger(5)}}>Next</h4>
            </div>
          </div>
        </AdminPopup>
      )}
      {trigger===5 &&(
     <AdminPopup trigger={true} setTrigger={settrigger}>
          <div style={{color:"#fff"}}>
            <div style={{display:"flex", justifyContent:"center"}}>
              <div style={{textAlign:"center"}}>
                <img src={"/tik.png"} style={{height:90, margin:10}}/>
                <p>We have recieved your issue. and will do the needfull</p>
             </div>
            </div>
            <div onClick={()=>{settrigger(-1)}} style={{backgroundColor:"#111", display:'flex', justifyContent:'center', alignItems:"center", borderBottom:"1px solid #ddd", cursor:"pointer"}}>
              <h4 style={{cursor:"pointer", marginRight:10}} >OK</h4>
            </div>
          </div>
        </AdminPopup>
      )}
    </>
  );
}

export default MyOrdersId;
