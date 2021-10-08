import React, { useState, useEffect } from "react";
import ReactImageZoom from "react-image-zoom";
import MediaQuery from "react-responsive";
import { Storage } from "aws-amplify";

export default function CustomImage({ images, prodimages }) {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [prodimage1, setProdImage1] = useState(null);
  const [prodimage2, setProdImage2] = useState(null);
  const [prodimage3, setProdImage3] = useState(null);

  useEffect(() => {
    if (prodimages) {
      prodimages.map((p, index) => getImage(p.name, index));
    }
  }, []);

  const getImage = async (picture, index) => {
    Storage.get(picture).then((res) => {
      if (index === 0) {
        setCurrentImage(res);
        setProdImage1(res);
      }
      if (index === 1) setProdImage2(res);
      if (index === 2) setProdImage3(res);
    });
  };

  let props = {
    width: 600,
    height: 600,
    zoomWidth: 300,
    offset: { horizontal: 20 },
    zoomPosition: "right",
    zoomLensStyle: "opacity: 0.4;background-color: gray;",
    img: currentImage,
  };

  return (
    <div>
      <MediaQuery minWidth={900}>
        <ReactImageZoom {...props} />
      </MediaQuery>
      <MediaQuery maxWidth={900} minWidth={600}>
        <img src={currentImage} style={{ height: 400, width: 400 }} />
      </MediaQuery>
      <MediaQuery maxWidth={600}>
        <img src={currentImage} style={{ height: 300, width: 300 }} />
      </MediaQuery>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          onClick={() => {
            setCurrentImage(prodimage1);
          }}
          style={{ margin: 5, cursor: "pointer" }}
          src={prodimage1}
          height={60}
          width={60}
          alt="image"
        />

        <img
          onClick={() => {
            setCurrentImage(prodimage2);
          }}
          style={{ margin: 5, cursor: "pointer" }}
          src={prodimage2}
          height={60}
          width={60}
          alt="image"
        />

        <img
          onClick={() => {
            setCurrentImage(prodimage3);
          }}
          style={{ margin: 5, cursor: "pointer" }}
          src={prodimage3}
          height={60}
          width={60}
          alt="image"
        />
      </div>
    </div>
  );
}
