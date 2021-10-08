import React, { useEffect, useState } from "react";
import { FaEye, FaTrashAlt, FaPlus, FaStop } from "react-icons/fa";
import { CSVLink } from "react-csv";
import { Storage } from "aws-amplify";
import { Radio } from "@material-ui/core";

import AdminPopup from "../../AdminPopup";
import styles from "./index.module.css";

function AdminTable({ flag, tablelabels, tablelist }) {
  const [activepage, setActivePage] = useState(1);
  const [trigger, settrigger] = useState(-1);
  const [view, setView] = useState(null);
  const [deletecoupon, setDeleteCoupon]=useState(null);
  
  useEffect(() => {}, []);

  const handleDelete=(item)=>{
    setDeleteCoupon(item)
    settrigger(1);
  };

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
                        <td>{item.category.top ? <p>True</p>:<p>False</p>} </td>
                        <td>{item.category.bottom ? <p>True</p>: <p>False</p>} </td>
                        <td>{item.category.other ? <p>True</p> :<p>False</p>} </td>
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
       {trigger === 1 && (
        <AdminPopup trigger={true} setTrigger={settrigger}>
          <h1 className={styles.popupTitle}>
            Are You sure you want to delete?
          </h1>
          <p className={styles.popupMessage}>{deletecoupon.name} </p>
          <p className={styles.popupMessage}>{deletecoupon.discount} </p>
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
              Delete
            </button>
          </div>
        </AdminPopup>
      )}
    </>
  );
}

export default AdminTable;
