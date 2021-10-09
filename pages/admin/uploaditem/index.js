import React, { useEffect, useState } from "react";
import Router from "next/router";
import { Storage, API, Auth, graphqlOperation } from "aws-amplify";
import {
  TextField,
  Button,
  TextareaAutosize,
  Radio,
  MenuItem,
} from "@material-ui/core";

import Footer from "../../../components/AdminFooter";
import Header from "../../../components/AdminHeader";
// import Sidebar from "../../../components/AdminSidebar";
import awsExports from "../../../src/aws-exports";
import {
  createPicture,
  updateProduct,
  createProduct,
} from "../../../src/graphql/mutations";
import {
  listProductCategorys
} from "../../../src/graphql/queries";

function UploadItem() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [trueprice, setTruePrice] = useState();
  const [featureOne, setFeatureOne] = useState();
  const [featureTwo, setFeatureTwo] = useState();
  const [featureThree, setFeatureThree] = useState();
  const [featureFour, setFeatureFour] = useState();
  const [falseprice, setFalsePrice] = useState();
  const [paragraphone, setParagraphOne] = useState();
  const [paragraphtwo, setParagraphTwo] = useState();
  const [check, setCheck] = useState(false);
  const [tempp, setTempp] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image1display, setImage1Display] = useState();
  const [image2display, setImage2Display] = useState();
  const [image3display, setImage3Display] = useState();
  const [xsmall, setXsmall] = useState(false);
  const [small, setSmall] = useState(false);
  const [medium, setMedium] = useState(false);
  const [large, setLarge] = useState(false);
  const [xlarge, setXlarge] = useState(false);
  const [xxlarge, setXxlarge] = useState(false);
  const [category, setCategory] = useState();
  const [listcategory, setListCategory] = useState();
  const [xsmallstock, setXSmallStock] = useState();
  const [smallstock, setSmallStock] = useState();
  const [mediumstock, setMediumStock] = useState();
  const [largestock, setLargeStock] = useState();
  const [xlargestock, setXLargeStock] = useState();
  const [xxlargestock, setXXLargeStock] = useState();
  const [twentysix, setTwentySix] = useState(false);
  const [twentyeight, setTwentyEight] = useState(false);
  const [thirty, setThirty] = useState(false);
  const [thirtytwo, setThirtyTwo] = useState(false);
  const [thirtyfour, setThirtyFour] = useState(false);
  const [thirtysix, setThirtySix] = useState(false);
  const [thirtyeight, setThirtyEight] = useState(false);
  const [fourty, setFourty] = useState(false);
  const [twentysixstock, setTwentySixStock] = useState();
  const [twentyeightstock, setTwentyEightStock] = useState();
  const [thirtystock, setThirtyStock] = useState();
  const [thirtytwostock, setThirtyTwoStock] = useState();
  const [thirtyfourstock, setThirtyFourStock] = useState();
  const [thirtysixstock, setThirtySixStock] = useState();
  const [thirtyeightstock, setThirtyEightStock] = useState();
  const [fourtystock, setFourtyStock] = useState();

  useEffect(() => {
    checkUser();
    fetchCategory();
  }, []);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const group = user.signInUserSession.idToken.payload["cognito:groups"];
      if (group.includes("admin")) {
        return;
      } else {
        Router.push("/");
        return;
      }
    } catch (err) {
      console.log(err);
      Router.push("/");
    }
  }

  async function fetchCategory() {
    const res = await API.graphql(graphqlOperation(listProductCategorys));
    console.log(res);
    setListCategory(res.data.listProductCategorys.items);
  }

  function uploadS3(file) {
    console.log(file);
    console.log(tempp);

    Storage.put(file.name, file, {
      contentType: "image/png",
    })
      .then(() => {
        const image = {
          name: file.name,
          productID: tempp.id,
          file: {
            bucket: awsExports.aws_user_files_s3_bucket,
            region: awsExports.aws_user_files_s3_bucket_region,
            key: file.name,
          },
        };
        addImageToDB(image);
        console.log("added completed");
      })
      .catch((err) => console.log(err));
  }

  const addImageToDB = async (image) => {
    console.log("addimage to db");
    try {
      const res = await API.graphql(
        graphqlOperation(createPicture, { input: image })
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const utilcreateProduct = async () => {
    try {
      let bottomsize;
      let topsize;
      let othersize;
      if(category.category.top){
        topsize={
          xsmall:xsmall,
          xsmallStock:parseInt(xsmallstock),
          xsmallAvailable:parseInt(xsmallstock),
          small:small,
          smallStock:parseInt(smallstock),
          smallAvailable:parseInt(smallstock),
          medium:medium,
          mediumStock:parseInt(mediumstock),
          mediumAvailable:parseInt(mediumstock),
          large:large,
          largeStock:parseInt(largestock),
          largeAvailable:parseInt(largestock),
          xlarge:xlarge,
          xlargeStock:parseInt(xlargestock),
          xxlargeAvailable:parseInt(xlargestock),
          xxlarge:xxlarge,
          xxlargeStock:parseInt(xxlargestock),
          xxlargeAvailable:parseInt(xxlargestock)
        }
      }
      else if(category.category.bottom){
        bottomsize={
          twentySix:twentysix,
          twentySixStock:twentysixstock,
          twentySixAvailable:twentysixstock,
          twentyEight:twentyeight,
          twentyEightStock:twentyeightstock,
          twentyEightAvailable:twentyeightstock,
          thirty:thirty,
          thirtyStock:thirtystock,
          thirtyAvailable:thirtystock,
          thirtyTwo:thirtytwo,
          thirtyTwoStock:thirtytwostock,
          thirtyTwoAvailable:thirtytwostock,
          thirtyFour:thirtyfour,
          thirtyFourStock:thirtyfourstock,
          thirtyFourAvailable:thirtyfourstock,
          thirtySix:thirtysix,
          thirtySixStock:thirtysixstock,
          thirtySixAvailable:thirtysixstock,
          thirtyEight:thirtyeight,
          thirtyEightStock:thirtyeightstock,
          thirtyEightAvailable:thirtyeightstock,
          fourty:fourty,
          fourtyStock:fourtystock,
          fourtyAvailable:fourtystock,
        }
      }
      const temp = {
        name: name,
        description: description,
        price: parseInt(price),
        falseprice: parseInt(falseprice),
        trueprice: parseInt(trueprice),
        ProductcategoryId:category.id,
        active: true,
        orders: 0,
        size: {
          topsize: topsize,
          bottomsize: bottomsize,
          othersize:othersize
        },
        feature: {
          featureone: featureOne,
          featuretwo: featureTwo,
          featurethree: featureThree,
          featurefour: featureFour,
        },
        descriptionblock: {
          descriptionblockone: paragraphone,
          descriptionblocktwo: paragraphtwo,
        },
      };
      const res = await API.graphql(
        graphqlOperation(createProduct, {
          input: temp,
        })
      );
      if (res) {
        console.log(res.data.createProduct);
        setTempp(res.data.createProduct);
        if (tempp) console.log(tempp);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div style={{ display: "flex" }}>

        <div style={{ width: "80vw" }}>
          <Header />
          <div style={{ minHeight: "100vh", backgroundColor: "#ebedef" }}>
            <div style={{ paddingTop: "50px" }}>
              {!tempp && (
                <>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="name"
                      label="Name"
                      variant="filled"
                      value={name}
                      placeholder="Name"
                      onChange={(evt) => setName(evt.target.value)}
                    />

                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="description"
                      label="Description"
                      variant="filled"
                      value={description}
                      placeholder="Description"
                      onChange={(evt) => setDescription(evt.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: 15,
                    }}
                  >
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="price"
                      label="Price"
                      variant="filled"
                      value={price}
                      placeholder="Price"
                      onChange={(evt) => setPrice(evt.target.value)}
                    />
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="falseprice"
                      label="False Price"
                      variant="filled"
                      value={falseprice}
                      placeholder="False Price"
                      onChange={(evt) => setFalsePrice(evt.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: 15,
                    }}
                  >       
                        <TextField
                          style={{ width: "25%" }}
                          required
                          name="true price"
                          label="True Price"
                          variant="filled"
                          value={trueprice}
                          placeholder="True Price"
                          onChange={(evt) => setTruePrice(evt.target.value)}
                        />
                        <TextField
                          style={{ width: "25%" }} 
                          id="select"
                          label="Category"
                          name="course_name_temp"
                          value={category}
                          onChange={(e) => {setCategory(e.target.value); console.log(e.target.value)}}
                          select
                        >
                        {listcategory && listcategory.map((l, index)=>
                          <MenuItem key={index} value={l}>{l.name}</MenuItem>
                        )
                        }
                        </TextField>
                   </div>
                   {category && category.category.bottom &&
                   <>
                   <div style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: 15,
                    }}>
                        <div style={{ display: "flex" }}>
                          <Radio
                            checked={twentysix}
                            onChange={(e) => {
                              setTwentySix(!twentysix);
                            }}
                            value={twentysix}
                          />
                          <p>26</p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Radio
                            checked={twentyeight}
                            onChange={(e) => {
                              setTwentyEight(!twentyeight);
                            }}
                            value={twentyeight}
                          />
                          <p>28</p>
                        </div>
                        
                        <div style={{ display: "flex" }}>
                          <Radio
                            checked={thirty}
                            onChange={(e) => {
                              setThirty(!thirty);
                            }}
                            value={thirty}
                          />
                          <p>30</p>
                        </div>
                        <div style={{ display: "flex" }}>
                          <Radio
                            checked={thirtytwo}
                            onChange={() => {
                              setThirtyTwo(!thirtytwo);
                            }}
                            value={thirtytwo}
                          />
                          <p>32</p>
                        </div>
            
                        <div style={{ display: "flex" }}>
                          <Radio
                            checked={thirtyfour}
                            onChange={(e) => {
                              setThirtyFour(!thirtyfour);
                            }}
                            value={thirtyfour}
                          />
                          <p>34</p>
                        </div>
                        <div style={{ display: "flex" }}>
                          <Radio
                            checked={thirtysix}
                            onChange={() => {
                              setThirtySix(!thirtysix);
                            }}
                            value={thirtysix}
                          />
                          <p>36</p>
                        </div>
                        <div style={{ display: "flex" }}>
                          <Radio
                            checked={thirtyeight}
                            onChange={() => {
                              setThirtyEight(!thirtyeight);
                            }}
                            value={thirtyeight}
                          />
                          <p>38</p>
                        </div>
                        <div style={{ display: "flex" }}>
                          <Radio
                            checked={fourty}
                            onChange={() => {
                              setFourty(!fourty);
                            }}
                            value={fourty}
                          />
                          <p>40</p>
                        </div>
                    </div>
                  <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: 15,
                    }}
                  >
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="26 Stock"
                      label="26 Stock"
                      variant="filled"
                      value={twentysixstock}
                      placeholder="26 Stock"
                      onChange={(evt) => {
                        setTwentySixStock(evt.target.value);
                      }}
                    />
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="28 Stock"
                      label="28 Stock"
                      variant="filled"
                      value={twentyeightstock}
                      placeholder="28 Stock"
                      onChange={(evt) => {
                        setTwentyEightStock(evt.target.value);
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: 15,
                    }}
                  >
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="30 Stock"
                      label="30 Stock"
                      variant="filled"
                      value={thirtystock}
                      placeholder="30 Stock"
                      onChange={(evt) => {
                        setThirtyStock(evt.target.value);
                      }}
                    />
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="32 Stock"
                      label="32 Stock"
                      variant="filled"
                      value={thirtytwostock}
                      placeholder="32 Stock"
                      onChange={(evt) => {
                        setThirtyTwoStock(evt.target.value);
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: 15,
                    }}
                  >
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="34 Stock"
                      label="34 Stock"
                      variant="filled"
                      value={thirtyfourstock}
                      placeholder="34 Stock"
                      onChange={(evt) => {
                        setThirtyFourStock(evt.target.value);
                      }}
                    />
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="36 Stock"
                      label="36 Stock"
                      variant="filled"
                      value={thirtysixstock}
                      placeholder="36 Stock"
                      onChange={(evt) => {
                        setThirtySixStock(evt.target.value);
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: 15,
                    }}
                  >
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="38 Stock"
                      label="38 Stock"
                      variant="filled"
                      value={thirtyeightstock}
                      placeholder="38 Stock"
                      onChange={(evt) => {
                        setThirtyEightStock(evt.target.value);
                      }}
                    />
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="40 Stock"
                      label="40 Stock"
                      variant="filled"
                      value={fourtystock}
                      placeholder="40 Stock"
                      onChange={(evt) => {
                        setFourtyStock(evt.target.value);
                      }}
                    />
                  </div>
                  </div>
                  </>
                   }
                   {category && category.category.top &&
                   <>
                   <div style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: 15,
                    }}>
                        <div style={{ display: "flex" }}>
                          <Radio
                            checked={xsmall}
                            onChange={(e) => {
                              console.log(xsmall);
                              setXsmall(!xsmall);
                            }}
                            value={xsmall}
                          />
                          <p>X Small</p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Radio
                            checked={small}
                            onChange={(e) => {
                              console.log(small);
                              setSmall(!small);
                            }}
                            value={small}
                          />
                          <p>Small</p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Radio
                            checked={medium}
                            onChange={(e) => {
                              console.log(medium);
                              setMedium(!medium);
                            }}
                            value={medium}
                          />
                          <p>Medium</p>
                        </div>
                        <div style={{ display: "flex" }}>
                          <Radio
                            checked={large}
                            onChange={() => {
                              setLarge(!large);
                            }}
                            value={large}
                          />
                          <p>Large</p>
                        </div>
            
                        <div style={{ display: "flex" }}>
                          <Radio
                            checked={xlarge}
                            onChange={(e) => {
                              setXlarge(!xlarge);
                            }}
                            value={xlarge}
                          />
                          <p>XL</p>
                        </div>
                        <div style={{ display: "flex" }}>
                          <Radio
                            checked={xxlarge}
                            onChange={() => {
                              setXxlarge(!xxlarge);
                            }}
                            value={xxlarge}
                          />
                          <p>XXL</p>
                        </div>
                    </div>
                  <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: 15,
                    }}
                  >
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="XSmall Stock"
                      label="XSmall Stock"
                      variant="filled"
                      value={xsmallstock}
                      placeholder="XSmall Stock"
                      onChange={(evt) => {
                        setXSmallStock(evt.target.value);
                      }}
                    />
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="Small Stock"
                      label="Small Stock"
                      variant="filled"
                      value={smallstock}
                      placeholder="Small Stock"
                      onChange={(evt) => {
                        setSmallStock(evt.target.value);
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: 15,
                    }}
                  >
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="Medium Stock"
                      label="Medium Stock"
                      variant="filled"
                      value={mediumstock}
                      placeholder="Medium Stock"
                      onChange={(evt) => {
                        setMediumStock(evt.target.value);
                      }}
                    />
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="Large Stock"
                      label="Large Stock"
                      variant="filled"
                      value={largestock}
                      placeholder="Large Stock"
                      onChange={(evt) => {
                        setLargeStock(evt.target.value);
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: 15,
                    }}
                  >
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="XLarge Stock"
                      label="XLarge Stock"
                      variant="filled"
                      value={xlargestock}
                      placeholder="XLarge Stock"
                      onChange={(evt) => {
                        setXLargeStock(evt.target.value);
                      }}
                    />
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="XXLarge Stock"
                      label="XXLarge Stock"
                      variant="filled"
                      value={xxlargestock}
                      placeholder="XXLarge Stock"
                      onChange={(evt) => {
                        setXXLargeStock(evt.target.value);
                      }}
                    />
                  </div>
                  </div>
                  </>
                  }
                  
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: 15,
                    }}
                  >
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="featureOne"
                      label="Feature 1"
                      variant="filled"
                      value={featureOne}
                      placeholder="Feature 1"
                      onChange={(evt) => {
                        setFeatureOne(evt.target.value);
                      }}
                    />
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="featureTwo"
                      label="Feature 2"
                      variant="filled"
                      value={featureTwo}
                      placeholder="Feature 2"
                      onChange={(evt) => {
                        setFeatureTwo(evt.target.value);
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: 15,
                    }}
                  >
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="featureThree"
                      label="Feature 3"
                      variant="filled"
                      value={featureThree}
                      placeholder="Feature 1"
                      onChange={(evt) => {
                        setFeatureThree(evt.target.value);
                      }}
                    />
                    <TextField
                      style={{ width: "25%" }}
                      required
                      name="featureFour"
                      label="Feature 4"
                      variant="filled"
                      value={featureFour}
                      placeholder="Feature 4"
                      onChange={(evt) => {
                        setFeatureFour(evt.target.value);
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: 15,
                    }}
                  >
                    <TextareaAutosize
                      style={{ width: "70%" }}
                      rowsMin="10"
                      required
                      name="paragraphone"
                      label="Paragraph One"
                      value={paragraphone}
                      placeholder="Paragraph One"
                      onChange={(e) => {
                        setParagraphOne(e.target.value);
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: 15,
                    }}
                  >
                    <TextareaAutosize
                      style={{ width: "70%", margin: "8px", height: "100px" }}
                      rowsMin="3"
                      required
                      name="paragraphtwo"
                      label="Paragraph Two"
                      value={paragraphtwo}
                      placeholder="Paragraph Two"
                      onChange={(e) => {
                        setParagraphTwo(e.target.value);
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingBottom: 15,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      onClick={() => {
                        utilcreateProduct();
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </>
              )}
              {tempp && (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <input
                      style={{
                        height: 150,
                        padding: "0px 15px",
                        opacity: 0.5,
                      }}
                      type="file"
                      onChange={(evt) => {
                        var currimage = URL.createObjectURL(
                          evt.target.files[0]
                        );
                        setImage1Display(currimage);
                        setImage1(evt.target.files[0]);
                      }}
                    />
                    <input
                      style={{
                        height: 150,
                        padding: "0px 15px",
                        opacity: 0.5,
                      }}
                      type="file"
                      onChange={(evt) => {
                         var currimage = URL.createObjectURL(
                          evt.target.files[0]
                        );
                        setImage2Display(currimage);
                        setImage2(evt.target.files[0]);
                      }}
                    />
                    <input
                      style={{
                        height: 150,
                        padding: "0px 15px",
                        opacity: 0.5,
                      }}
                      type="file"
                      onChange={(evt) => {
                         var currimage = URL.createObjectURL(
                          evt.target.files[0]
                        );
                        setImage3Display(currimage);
                        setImage3(evt.target.files[0]);
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    {image1display && (
                      <img src={image1display} style={{ height: 200, width: 200 }} />
                    )}
                    {image2display && (
                      <img src={image2display} style={{ height: 200, width: 200 }} />
                    )}
                    {image3display && (
                      <img src={image3display} style={{ height: 200, width: 200 }} />
                    )}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      paddingTop: 15,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      onClick={() => {
                       uploadS3(image1);
                      }}
                    >
                      Add Image 1
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      onClick={() => {
                       uploadS3(image2);
                      }}
                    >
                      Add Image 2
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      onClick={() => {
                       uploadS3(image3);
                      }}
                    >
                      Add Image 3
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default UploadItem;
