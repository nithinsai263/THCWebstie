import React, {useState, useEffect} from "react";
import { Radio } from "@material-ui/core";
import { useRouter } from "next/router";
import { API, Auth, graphqlOperation, Storage, Hub } from "aws-amplify";
import Router from "next/router";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import OrderNavigator from "../../components/OrderNavigator";
import InnerOrderCard from "../../components/InnerOrderCard";
import AdminPopup from "../../components/Popup";
import PopupOrder from "../../components/PopupOrder";
import Invoice from "../../components/Invoice";
import styles from "./index.module.css";
import {getUser, getOrder} from "../../src/graphql/queries";
import { createIssue, updateOrderItem } from "../../src/graphql/mutations";

const data = [
  {
    status: true,
    label: "Ordered",
    date: "26th Aug",
  },
  {
    status: false,
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
  const router = useRouter();
  const [trigger, settrigger] = useState(-1);
  const [sizeissue, setSizeIssue]=useState(false);
  const [productquality, setProductQuality]=useState(false);  
  const [anotherproduct,setAnotherProduct]=useState(false);
  const [exchange, setExchange]=useState(false);
  const [refund, setRefund]=useState(false);
  const [userData, setUserData] = useState(null);
  const [orderData, setOrderData]= useState(null);
  const [orderNavigationData, setOrderNavigationData]=useState([]);
  const [width, setWidth]=useState('0vw');
  const [index, setIndex]=useState(-1);
  const [issueorderitems, setIssueOrderItems]=useState([]);
  const [deliveredstatus, setDeliveredStatus]=useState();
  const [issueresortedstatus, setIssueResortedStatus]=useState();

  let date = new Date();
  useEffect(() => {
    if (router.asPath !== router.route) {
      async function fetchingOrderDetails(){
        const orderid=String(router.query.id);
        const ordertemp=await API.graphql(
            graphqlOperation(getOrder,{id:orderid})
          );
          console.log(ordertemp);
          setOrderData(ordertemp.data.getOrder);
          filterNavigatorData(ordertemp.data.getOrder);
          
        try{
          let user = await Auth.currentAuthenticatedUser();
          const userid = user.attributes.sub;
          console.log(user);

          const userdata = await API.graphql(
            graphqlOperation(getUser, { id: userid })
          );
          setUserData(userdata.data.getUser);
          console.log(userdata.data.getUser);
          const currorderindex=userdata.data.getUser.orders.items.findIndex((item) => item.id === router.query.id)
          setIndex(currorderindex);
          console.log(currorderindex);

          if(currorderindex===-1){
            throw new Error('No Order Found with this id')
          }
        }catch(e){
          Router.push("/")
        }
      }
      fetchingOrderDetails();
    }
    return function cleanup() {
      setOrderNavigationData([]);
    }
  }, [router]);


  // OrderNavigator Data Filtering
  function filterNavigatorData(order){
    var tempAccepted={
      status: order.orderstatus.accepted,
      label: "Ordered",
      date: order.orderstatus.accepted?order.orderstatus.dateaccepted.substring(0, 10):"---"
    };
    var tempDispatched={
      status: order.orderstatus.dispatched,
      label: "Dispatched",
      date: order.orderstatus.dispatched?order.orderstatus.datedispatched.substring(0, 10):"---"
    };
    var tempDelivered={
      status: order.orderstatus.delivered,
      label: "Delivered",
      date: order.orderstatus.delivered?order.orderstatus.datedelivered.substring(0, 10):"---"
    };
    //calculating width
    var width= order.orderstatus.accepted?order.orderstatus.dispatched?order.orderstatus.delivered?'100vw':'70vw':'25vw':'25vw';
    setWidth(width);
  
    //pushing data in array
    setOrderNavigationData(prevState => [...prevState, tempAccepted]);
    setOrderNavigationData(prevState => [...prevState, tempDispatched]);
    setOrderNavigationData(prevState => [...prevState, tempDelivered]);
    setDeliveredStatus(order.orderstatus.delivered);
    setIssueResortedStatus(false);
    var issue_items=order.list.items.filter((i)=>(i.issue!==null));
    if(issue_items.length>0){
      var tempRaised={
        status: issue_items[0].issue.status.issueraised,
        label:"Issue Raised",
        date: issue_items[0].issue.status.issueraised?issue_items[0].issue.status.dateissueraised.substring(0, 10):"---"
      }
      var tempResorted={
        status: issue_items[0].issue.status.issueresorted,
        label:"Resorted",
        date: issue_items[0].issue.status.issueresorted?issue_items[0].issue.status.dateissueresorted.substring(0, 10):"---"
      }
      setOrderNavigationData(prevState => [...prevState, tempRaised]);
      setOrderNavigationData(prevState => [...prevState, tempResorted]);
      setIssueResortedStatus(issue_items[0].issue.status.issueresorted);
    }    
  };


  async function handleSubmit(){
    var issue={
      category:sizeissue?"size":productquality?"quality":"another product",
      subcategory:exchange?"exchange":"refund",
      status:{
        issueraised:true,
        dateissueraised:date.toISOString(),
      }
    }

    const res = await API.graphql(
      graphqlOperation(createIssue, {
        input: issue,
      })
    );

    issueorderitems.map(async(id)=>{
      const updateOrderI={
        orderItemIssueId:res.data.createIssue.id,
        id: id
      }
      await API.graphql(
        graphqlOperation(updateOrderItem, { input: updateOrderI})
      );
    });
    settrigger(5);
  };

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
          {orderNavigationData &&
            <OrderNavigator data={orderNavigationData} width={width} />
          }
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
          {userData && index!==-1 &&
            <div>
              <p className={styles.thcmyorderdetailtext}>Order ID: {userData.orders.items[index].id}</p>
              <p className={styles.thcmyorderdetailtext}>Order Contact: {userData.orders.items[index].shipaddress.phonenumber}</p>
              <p className={styles.thcmyorderdetailtext}>Order Email: {userData.orders.items[index].shipaddress.email}</p>
              <p className={styles.thcmyorderdetailtext}>Shipped to: {userData.orders.items[index].shipaddress.address}</p>
              <p className={styles.thcmyorderdetailtext}>Pin : {userData.orders.items[index].shipaddress.pincode}</p>
            </div>
            }
            <div>  
            <Invoice>   
              <div className={styles.myorderdetailcardbutton}>
                <p>Invoice</p>
              </div>
             </Invoice> 
             {  !issueresortedstatus && deliveredstatus &&  
              <div onClick={()=>{settrigger(2)}}>
                  <div className={styles.myorderdetailcardbutton}>
                    <p>Issues</p>
                  </div>
              </div>
             }
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
        { userData && index!==-1 && userData.orders.items[0].list.items.map((oi, id)=>(
        <div key={id} style={{ display: "flex", justifyContent: "center" }}>
          <InnerOrderCard name={oi.product.name} size={oi.size} price={oi.price} quantity={oi.quantity} picture={oi.product.picture.items[0]}/>
        </div>
        ))}
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
        {userData && index!==-1 &&
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
                Rs {userData.orders.items[index].billdata.subTotal}
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
                Rs {userData.orders.items[index].billdata.deliverycharge}
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
                COD Charges
              </h4>
              <p
                style={{
                  margin: 0,
                  padding: 0,
                }}
              >
                Rs {userData.orders.items[index].billdata.codcharges}
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
                - Rs {userData.orders.items[index].billdata.discount!==''?userData.orders.items[index].billdata.discount:'0'}
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
                Rs {userData.orders.items[index].billdata.total}
              </p>
            </div>
          </div>
        </div>
        }
      </div>
      <Footer />
       {trigger === 2 && (
        <AdminPopup trigger={true} setTrigger={settrigger}>
          <div style={{color:"#fff", fontFamily:"Inter"}}>
            <div style={{backgroundColor:"#111", display:'flex', justifyContent:'center', alignItems:"center"}}>
                <h4>Ordered Items</h4>
            </div>
            { userData && index!==-1 && userData.orders.items[0].list.items.map((oi, id)=>(
              <PopupOrder key={id} name={oi.product.name} size={oi.size} price={oi.price} quantity={oi.quantity} picture={oi.product.picture.items[0]} user={true} flag={true} setIssueOrderItems={setIssueOrderItems} id={oi.id}/>
            ))}
            
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
      {trigger === 4 &&(
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
                      checked={exchange}
                      onChange={(e) => {
                      setRefund(false);
                      setExchange(!exchange);
                      }}
                        value={exchange}
                      />
                    <p style={{paddingTop:8}} className={styles.popupMessage}>Exchange</p>
                 </div>
                 <div style={{display:'flex', alignItems:'center',  width:200}}>
                    <Radio
                      style={{color:"#aaa", marginTop:7}}
                      checked={refund}
                      onChange={(e) => {
                        setRefund(!refund);
                        setExchange(false);
                      }}
                        value={refund}
                      />
                    <p style={{paddingTop:8}} className={styles.popupMessage}>Refund</p>
                 </div>
              </div>
            </div>
            <div style={{backgroundColor:"#000", display:'flex', justifyContent:'flex-end', alignItems:"center", borderTop:"1px solid #ddd"}}>
              <h4 style={{cursor:"pointer", marginRight:20}} onClick={()=>{settrigger(3)}}>Back</h4>
              <h4 style={{cursor:"pointer", marginRight:10}} onClick={()=>{handleSubmit()}}>Next</h4>
            </div>
          </div>
        </AdminPopup>
      )}
      {trigger === 5 &&(
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

