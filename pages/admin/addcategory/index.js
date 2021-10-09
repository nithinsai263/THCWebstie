import React, {useState} from 'react'
import { TextField, Button, TextareaAutosize, Radio } from "@material-ui/core";
import {  API, graphqlOperation } from "aws-amplify";

import Footer from "../../../components/AdminFooter";
import Header from "../../../components/AdminHeader";
import Sidebar from "../../../components/AdminSideBar";
import {createProductCategory} from "../../../src/graphql/mutations";

export default function AddCategory() {
    const [name, setName] = useState();
    const [top, setTop] = useState(false);
    const [bottom, setBottom] = useState(false);
    const [other, setOther] = useState(false);

    const utilcreateCategory = async () => {
      const temp={
        name:name,
        category:{
          top:top,
          bottom:bottom,
          other:other
        }
      }
      const res = await API.graphql(
        graphqlOperation(createProductCategory, {
          input: temp,
        })
      );
      console.log(res)
    }
    return (
      <div style={{ display: "flex" }}>
        <Sidebar/>
         <div style={{ width: "100%" }}>
          <Header />
          <div style={{ minHeight: "100vh", backgroundColor: "#ebedef",display:'flex', justifyContent:'center' }}>
            <div>
              <TextField
              style={{margin:10}}
              required
              name="name"
              label="Name"
              variant="filled"
              value={name}
              placeholder="Name"
              onChange={(evt) => setName(evt.target.value)}
              />
              <div style={{display:'flex', justifyContent:'center'}}>
                <div style={{ display: "flex", margin:10 }}>
                  <Radio
                    checked={top}
                    onChange={(e) => {
                    setTop(!top);
                    setBottom(false);
                    setOther(false);
                    }}
                    value={top}
                    />
                    <p>Top</p>
                  </div>
                  <div style={{ display: "flex", margin:10 }}>
                  <Radio
                    checked={bottom}
                    onChange={(e) => {
                    setBottom(!bottom);
                    setTop(false);
                    setOther(false);
                    }}
                    value={bottom}
                    />
                    <p>Bottom</p>
                  </div>
                  <div style={{ display: "flex", margin:10 }}>
                  <Radio
                    checked={other}
                    onChange={(e) => {
                    setOther(!other);
                    setBottom(false);
                    setTop(false);
                    }}
                    value={other}
                    />
                    <p>Other</p>
                  </div>
              </div>
              <div style={{display:'flex', justifyContent:'center'}}>
              <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={() => {
                utilcreateCategory();
              }}
              >
              Add
              </Button>
            </div>
          </div>
         </div>
          <Footer />
        </div>
        
    </div>
    )
}
