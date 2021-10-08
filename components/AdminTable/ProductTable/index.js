import React, { useEffect, useState } from "react";
import { FaEye, FaTrashAlt, FaPlus } from "react-icons/fa";
import { CSVLink } from "react-csv";
import { Storage } from "aws-amplify";
import { Radio } from "@material-ui/core";

import AdminPopup from "../../AdminPopup";
import styles from "./index.module.css";

function AdminTable({ flag, tablelabels, tablelist }) {
  const [activepage, setActivePage] = useState(1);
  const [trigger, settrigger] = useState(-1);
  const [deleteuser, setDeleteUser] = useState(null);
  const [reviveitem, setReviveItem] = useState(null);
  const [view, setViewUser] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [xsmall, setXsmall] = useState(false);
  const [small, setSmall] = useState(false);
  const [medium, setMedium] = useState(false);
  const [large, setLarge] = useState(false);
  const [xlarge, setXlarge] = useState(false);
  const [xxlarge, setXxlarge] = useState(false);

  useEffect(() => {}, []);

  const getImage = (p, index) => {
    Storage.get(p).then((res) => {
      if (index === 0) setImage1(res);
      if (index === 1) setImage2(res);
      if (index === 1) setImage3(res);
      return res;
    });
  };

  const handleUserGistView = (item) => {
    item.picture.items.map((p, index) => getImage(p.name, index));
    setXsmall(item.size.xsmall);
    setSmall(item.size.small);
    setMedium(item.size.medium);
    setLarge(item.size.large);
    setXlarge(item.size.xlarge);
    setXxlarge(item.size.xxlarge);
    setViewUser(item);
    settrigger(0);
  };

  const handleUserGistDelete = (item, checkflag) => { 
    if(checkflag){
      settrigger(1);
      setDeleteUser(item);
    }
    else{
      settrigger(2);
      setReviveItem(item)
    }
  };
  const deletecontact = (id) => {};
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
                        <td>{`${item.description.substring(0, 40)}...`}</td>
                        <td>₹ {item.price}</td>
                        <td>₹ {item.falseprice}</td>
                        <td>{item.stock}</td>
                        <td>{item.stock}</td>
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
                            { flag &&
                            <div
                              style={{ marginLeft: "10px", cursor: "pointer" }}
                              onClick={() => {
                                handleUserGistDelete(item, flag);
                              }}
                            >
                              <FaTrashAlt size={15} color="tomato" />
                            </div>
                            }
                            {!flag &&
                            <div
                              style={{ marginLeft: "10px", cursor: "pointer" }}
                              onClick={() => {
                                handleUserGistDelete(item, flag);
                              }}
                            >
                              <FaPlus size={15} color="tomato" />
                            </div>
                            }
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
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={image1}
                style={{ height: 100, width: 100, paddingRight: 10 }}
              />
              <img
                src={image2}
                style={{ height: 100, width: 100, paddingRight: 10 }}
              />
              <img
                src={image3}
                style={{ height: 100, width: 100, paddingRight: 10 }}
              />
            </div>
            <div style={{fontFamily:'Inter'}}>
              <h4 >Product Details</h4>
              <div style={{display:"flex", justifyContent:'space-between'}}>
                <div>
                  <p className={styles.popupMessage}>Name: {view.name}</p>
                  <p className={styles.popupMessage}>Stock: {view.stock}</p>
                  <p className={styles.popupMessage}>Orders: {view.orders} </p>
                </div>
                <div>
                  <p className={styles.popupMessage}>Description: {view.description} </p>
                  <p className={styles.popupMessage}>Price: Rs {view.price} </p>
                  <p className={styles.popupMessage}>False Price: Rs {view.falseprice} </p>
                </div>
              </div>
              <h4>Features</h4>
              <div >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{display:'flex', alignItems:'center', width:60}}>
                    <Radio
                      checked={xsmall}
                      onChange={(e) => {
                      console.log(xsmall);
                      setXsmall(!xsmall);
                      }}
                      value={xsmall}
                    />
                   <p style={{paddingTop:8}} className={styles.popupMessage}> XS</p>
                  </div>
                  <div style={{display:'flex', alignItems:'center', width:60}}>
                    <Radio
                      checked={small}
                      onChange={(e) => {
                      console.log(small);
                      setSmall(!small);
                      }}
                      value={small}
                    />
                    <p style={{paddingTop:8}} className={styles.popupMessage}> S </p>
                  </div>
                  <div style={{display:'flex', alignItems:'center',  width:60}}>
                    <Radio
                      checked={medium}
                      onChange={(e) => {
                      console.log(medium);
                      setMedium(!medium);
                      }}
                      value={medium}
                    />
                    <p style={{paddingTop:8}} className={styles.popupMessage}> M </p>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", paddingTop:10}}>
                  <div style={{display:'flex', alignItems:'center', width:60}}>
                    <Radio
                      checked={large}
                      onChange={(e) => {
                      console.log(large);
                      setLarge(!large);
                      }}
                      value={large}
                    />
                   <p style={{paddingTop:8}} className={styles.popupMessage}> L </p>
                  </div>
                  <div style={{display:'flex', alignItems:'center', width:60}}>
                    <Radio
                      checked={xlarge}
                      onChange={(e) => {
                      console.log(xlarge);
                      setXlarge(!xlarge);
                      }}
                      value={xlarge}
                    />
                    <p style={{paddingTop:8}} className={styles.popupMessage}> XL</p>
                  </div>
                  <div style={{display:'flex', alignItems:'center', width:60}}>
                    <Radio
                      checked={xxlarge}
                      onChange={(e) => {
                      console.log(xxlarge);
                      setXxlarge(!xxlarge);
                      }}
                      value={xxlarge}
                    />
                    <p style={{paddingTop:8}} className={styles.popupMessage}>XXL</p>
                  </div>
                </div>
              </div>
              <h4>Features</h4>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                  <p>{view.feature.featureone}</p>
                  <p>{view.feature.featuretwo}</p>
                  <p>{view.feature.featurethree}</p>
                  <p>{view.feature.featurefour}</p>
                </div>
              </div>
              <h4>Content</h4>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                  <p>{view.descriptionblock.descriptionblockone}</p>
                  <p>{view.descriptionblock.descriptionblocktwo}</p>
                </div>
              </div>
            </div>
          </div>
        </AdminPopup>
      )}
      {trigger === 1 && (
        <AdminPopup trigger={true} setTrigger={settrigger}>
          <h1 className={styles.popupTitle}>
            Are You sure you want to delete?
          </h1>
          <p className={styles.popupMessage}>{deleteuser.name} </p>
          <p className={styles.popupMessage}>{deleteuser.description} </p>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={() => {
                deletecontact(deleteuser.id);
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
              }}
            >
              Delete
            </button>
          </div>
        </AdminPopup>
      )}
       {trigger === 2 && (
        <AdminPopup trigger={true} setTrigger={settrigger}>
          <h1 className={styles.popupTitle}>
            Are You sure you want to reactivate this product?
          </h1>
          <p className={styles.popupMessage}>{reviveitem.name} </p>
          <p className={styles.popupMessage}>{reviveitem.description} </p>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
              }}
            >
              Activate
            </button>
          </div>
        </AdminPopup>
      )}
    </>
  );
}

export default AdminTable;
