import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";

import Footer from "../../../components/AdminFooter";
import Header from "../../../components/AdminHeader";
import Sidebar from "../../../components/AdminSideBar";
import AdminTable from "../../../components/AdminTable/CategoryTable";
import { listProductCategorys } from "../../../src/graphql/queries";

 function ActiveCoupons() {
  const [data, setData] = useState();
  const tablelabels = [
    "ID",
    "Name",
    "Top",
    "Bottom",
    "Other",
  ];

  useEffect(() => {
    fetchproducts();
  }, []);

  async function fetchproducts() {
    const res = await API.graphql(graphqlOperation(listProductCategorys));
     setData(res.data.listProductCategorys.items);
    console.log(res);
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar/>
      <div style={{ width: "100%" }}>
        <Header />
        <div style={{ minHeight: "100vh", backgroundColor: "#ebedef" }}>
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#fff",
            }}
          >
            {data && (
              <AdminTable
                tablelabels={tablelabels}
                tablelist={data}
              ></AdminTable>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ActiveCoupons;