import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";

import Footer from "../../../components/AdminFooter";
import Header from "../../../components/AdminHeader";
import Sidebar from "../../../components/AdminSidebar";
import AdminTable from "../../../components/AdminTable/ProductTable";
import { listProducts } from "../../../src/graphql/queries";

 function PassiveProducts() {
  const [data, setData] = useState(null);
  const tablelabels = [
    "ID",
    "Name",
    "Description",
    "Price",
    "False Price",
    "Stock",
    "Orders",
    "More",
  ];

  useEffect(() => {
    fetchproducts();
  }, []);

  async function fetchproducts() {
    const res = await API.graphql(graphqlOperation(listProducts));
    setData(res.data.listProducts.items);
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
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
                flag={false}
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

export default PassiveProducts;