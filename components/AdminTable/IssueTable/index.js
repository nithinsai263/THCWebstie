import React, { useEffect, useState } from "react";
import { FaEye, FaTrashAlt, FaPlus, FaStop } from "react-icons/fa";
import { CSVLink } from "react-csv";
import { Storage } from "aws-amplify";
import { Radio, TextareaAutosize } from "@material-ui/core";

import PopupOrder from "../../PopupOrder";
import AdminPopup from "../../AdminPopup";
import styles from "./index.module.css";

function AdminTable({ flag, tablelabels, tablelist }) {
  const [activepage, setActivePage] = useState(1);
  const [trigger, settrigger] = useState(-1);
  const [view, setView] = useState(null);
  const [issue, setIssue]=useState(null);
  const [accepted, setAccepted] = useState(false);
  const [dispatched, setDispatched] = useState(false);
  const [delivered, setDelivered] = useState(false);
  const [sizeissue, setSizeIssue]=useState(false);
  const [productquality, setProductQuality]=useState(false);  
  const [anotherproduct,setAnotherProduct]=useState(false);
  const [issueraised, setIssueRaised] = useState(null);
  const [resorted, setResorted]=useState(null);
  const [paragraphtwo, setParagraphTwo] = useState();

  useEffect(() => {}, []);

  const handleUserGistView = (item) => {   
    setAccepted(false);
    setDispatched(false);
    setDelivered(false);
    setView(item)
    settrigger(0);
  };

  const handleIssue=(item)=>{
    setIssue(item)
    settrigger(2);
  };

  const firingSubCategory=()=>{
    alert("mc")
  
  }
  const numberofpages = Math.ceil(tablelist.length / 15);
  return (
    <>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "10px 5px ",
            }}
          >
            <CSVLink
              data={tablelist}
              style={{
                color: "white",
                textDecoration: "none",
                backgroundColor: "green",
                height: "30px",
                width: "100px",
                borderRadius: "7px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "sans-serif",
                fontSize: "12px",
              }}
            >
              Download csv
            </CSVLink>
          </div>
          <table
            id={styles["ctftable"]}
            style={{
              width: "100%",
              color: "#ffffff",
            }}
          >
            <tbody>
              <tr className={styles.tableHeader}>
                {tablelabels.map((label, index) => (
                  <td key={index}>{label}</td>
                ))}
              </tr>
              {tablelist
                .slice((activepage - 1) * 15, activepage * 15)
                .map((item) => {
                  return (
                    <>
                      <tr className={styles.tableData} key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name} </td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.payment}</td>
                        <td>₹ {item.amount}</td>
                        <td>{item.items}</td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginRight: "-15px",
                            }}
                          >
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                handleUserGistView(item);
                              }}
                            >
                              <FaEye size={15} color="green" />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "15px 10px 5px 10px",
            }}
          >
            {numberofpages === 1 && (
              <>
                <p className={styles.tablePageactive}>1</p>
              </>
            )}
            {numberofpages === 2 && (
              <>
                <p
                  onClick={() => {
                    setActivePage(1);
                  }}
                  className={
                    activepage === 1
                      ? styles.tablePageactive
                      : styles.tablePageunavailable
                  }
                >
                  1
                </p>
                <p
                  onClick={() => {
                    setActivePage(2);
                  }}
                  className={
                    activepage === 2
                      ? styles.tablePageactive
                      : styles.tablePageunavailable
                  }
                >
                  2
                </p>
              </>
            )}
            {numberofpages === 3 && (
              <>
                <p
                  onClick={() => {
                    setActivePage(activepage === 1 ? 1 : activepage - 1);
                  }}
                  className={
                    activepage === 1
                      ? styles.tablePageactive
                      : styles.tablePageunavailable
                  }
                >
                  {activepage === 1 ? 1 : activepage - 1}
                </p>
                <p
                  onClick={() => {
                    setActivePage(activepage === 1 ? 2 : activepage);
                  }}
                  className={
                    activepage === 1
                      ? styles.tablePageunavailable
                      : styles.tablePageactive
                  }
                >
                  {activepage === 1 ? 2 : activepage}
                </p>
                <p
                  onClick={() => {
                    setActivePage(
                      activepage === 1
                        ? 3
                        : activepage + 1 <= numberofpages
                        ? activepage + 1
                        : 1
                    );
                  }}
                  className={styles.tablePageunavailable}
                >
                  {activepage === 1
                    ? 3
                    : activepage + 1 <= numberofpages
                    ? activepage + 1
                    : 1}
                </p>
              </>
            )}
          </div>
        </div>

      {trigger === 0 && (
        <AdminPopup trigger={true} setTrigger={settrigger}>
          <div >    
            <div style={{fontFamily:'Inter'}}>
             <div style={{backgroundColor:"#ddd", display:'flex', justifyContent:'center', alignItems:"center"}}>
              <h4 >Order Details</h4>
             </div>
              <div style={{display:"flex", justifyContent:'space-between'}}>
                <div>
                  <p>Name: {view.name}</p>
                  <p>Email: {view.email}</p>
                  <p>Phone: {view.phone}</p>
                  <p>Ship To: {view.address}</p>
                  <p>Pincode: {view.pincode} </p>
                </div>
                <div>
                  <button
                    onClick={() => {
                    }}
                    style={{
                      color: "white",
                      backgroundColor: "tomato",
                      height: "30px",
                      width: "70px",
                      fontFamily: "sans-serif",
                      fontSize: "12px",
                      borderWidth: "0px",
                      borderRadius: "7px",
                      cursor: "pointer",
                      marginTop:10
                    }}
                  >
                   Invoice
                  </button>
                </div>
              </div>
              <div style={{backgroundColor:"#ddd", display:'flex', justifyContent:'center', alignItems:"center"}}>
                <h4>Status</h4>
              </div>
              <div >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{display:'flex', alignItems:'center', width:130}}>
                    <Radio
                      checked={accepted}
                      onChange={(e) => {
                      console.log(accepted);
                      setAccepted(!accepted);
                      }}
                      value={accepted}
                    />
                   <p style={{paddingTop:8}} className={styles.popupMessage}> Accepted</p>
                  </div>
                  <div style={{display:'flex', alignItems:'center', width:130}}>
                    <Radio
                      checked={dispatched}
                      onChange={(e) => {
                      console.log(dispatched);
                      setDispatched(!dispatched);
                      }}
                      value={dispatched}
                    />
                    <p style={{paddingTop:8}} className={styles.popupMessage}> Dispatched </p>
                  </div>
                  <div style={{display:'flex', alignItems:'center',  width:130}}>
                    <Radio
                      checked={delivered}
                      onChange={(e) => {
                      console.log(delivered);
                      setDelivered(!delivered);
                      }}
                      value={delivered}
                    />
                    <p style={{paddingTop:8}} className={styles.popupMessage}> Delivered </p>
                  </div>
                </div> 
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{display:'flex', alignItems:'center', width:160}}>
                    <Radio
                      checked={issueraised}
                      onChange={(e) => {
                      console.log(issueraised);
                      setIssueRaised(!issueraised);
                      }}
                      value={issueraised}
                    />
                   <p style={{paddingTop:8}} className={styles.popupMessage}>Issue Raised</p>
                  </div>
                  <div style={{display:'flex', alignItems:'center', width:130}}>
                    <Radio
                      checked={resorted}
                      onChange={(e) => {
                      console.log(resorted);
                      setResorted(!resorted);
                      }}
                      value={resorted}
                    />
                    <p style={{paddingTop:8}} className={styles.popupMessage}> Resorted </p>
                  </div>
                </div>           
              </div>
              <div style={{backgroundColor:"#ddd", display:'flex', justifyContent:'center', alignItems:"center"}}>
                <h4>Issue Closing Gist</h4>
              </div>
              <div
                style={{
                display: "flex",
                justifyContent: "center",
                margin: 15,
                }}
                >
                    <TextareaAutosize
                      style={{ width: "95%", margin: "8px", height: "100px" }}
                      rowsMin="3"
                      required
                      name="paragraphtwo"
                      label="Paragraph Two"
                      value={paragraphtwo}
                      placeholder="Provide the closing statement"
                      onChange={(e) => {
                        setParagraphTwo(e.target.value);
                      }}
                    />
                  </div>
              <div style={{backgroundColor:"#ddd", display:'flex', justifyContent:'center', alignItems:"center"}}>
                <h4>Ordered Items</h4>
              </div>
              <div>
                <PopupOrder/>
                <PopupOrder/>
              </div>
              <div style={{backgroundColor:"#ddd", display:'flex', justifyContent:'center', alignItems:"center"}}>
                <h4>Issue Items</h4>
              </div>
              <div>
                <PopupOrder/>
                <PopupOrder/>
              </div>
              <div style={{display:'flex', justifyContent:'center', marginTop:10}}>
                <button
                  onClick={() => {
                  }}
                  style={{
                    color: "white",
                    backgroundColor: "tomato",
                    height: "30px",
                    width: "70px",
                    fontFamily: "sans-serif",
                    fontSize: "12px",
                    borderWidth: "0px",
                    borderRadius: "7px",
                    cursor: "pointer",
                    margin:5
                  }}
                >
                  Update
                </button>
              </div>
            </div>   
          </div>
        </AdminPopup>
      )}
      
    </>
  );
}

export default AdminTable;
