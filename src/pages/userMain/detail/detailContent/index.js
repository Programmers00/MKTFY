import { useEffect, useState, useRef } from "react";
// scss
import styles from "./index.module.scss";
// scss style variabled for color red
import variabled from "../../../../styles/_variabled.scss";
// components

// svg icon
import {
  LabelIcon,
  NewIcon,
  UsedIcon,
  UpIcon,
  DownIcon,
} from "../../../../assets/svgIcons";

const DetailContent = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(
    data.images[selectedIndex]
  );
  // only 0 - 2
  const [selectedOrder, setSelectedOrder] = useState(0);

  const imageRef = useRef([]);

  useEffect(() => {
    if (selectedOrder === 0 && 0 <= selectedIndex && 2 >= selectedIndex) {
      // change up
      imageRef.current.forEach(
        selectedIndex === 2
          ? (image) => (image.style.transform = `translateY(${-280}px)`)
          : selectedIndex === 1
          ? (image) => (image.style.transform = `translateY(${-140}px)`)
          : (image) => (image.style.transform = `translateY(${0}px)`)
      );
    }
    if (selectedOrder === 2 && selectedIndex < 5 && selectedIndex > 2) {
      imageRef.current.forEach(
        selectedIndex === 3
          ? (image) => (image.style.transform = `translateY(${-140}px)`)
          : (image) => (image.style.transform = `translateY(${-280}px)`)
      );
    }

    setSelectedImage(data.images[selectedIndex]);
    return window.addEventListener("click", (event) => {
      return;
    });
  }, [selectedIndex]);

  const onSelectImage = (direction) => {
    if (direction === "up" && selectedIndex > 0) {
      console.log("##up");
      setSelectedIndex((prevIndex) => prevIndex - 1);
      if (selectedIndex > 2) setSelectedOrder((prevOrder) => prevOrder - 1);
    }

    if (direction === "down" && data.images.length > selectedIndex + 1) {
      setSelectedIndex((prevIndex) => prevIndex + 1);
      if (selectedOrder < 2) setSelectedOrder((prevOrder) => prevOrder + 1);
    }
  };

  return (
    <div className={styles.detailContentBox}>
      <div className={styles.imageBox}>
        <div className={styles.verticalImageBox}>
          <button
            className={styles.upButton}
            onClick={() => onSelectImage("up")}
          >
            <UpIcon />
          </button>
          <div className={styles.images}>
            {data.images.map((image, index) => {
              return (
                <img
                  ref={(image) => (imageRef.current[index] = image)}
                  key={index}
                  onClick={() => {
                    // setSelectedIndex(index);
                  }}
                  className={styles.image}
                  alt="img"
                  src={require(`../../../../assets/images/${image}.png`)}
                  style={
                    selectedIndex === index
                      ? { border: `solid 1px ${variabled.purple}` }
                      : undefined
                  }
                ></img>
              );
            })}
          </div>
          <button
            className={styles.downButton}
            // onClick={() => {
            //   console.log("##log");
            //   // setSelectedIndex((prev) => prev + 1);
            // }}
            onClick={() => onSelectImage("down")}
          >
            <DownIcon />
          </button>
        </div>
        <img
          className={styles.showImage}
          alt="img"
          src={require(`../../../../assets/images/${selectedImage}.png`)}
        ></img>
      </div>
      <div className={styles.contentBox}>
        <span className={styles.itemTitle}>{data.title}</span>
        <div className={styles.itemPriceBox}>
          <span className={styles.price}>{`$${data.price}`}</span>
          <div className={styles.itemStatus}>
            {data.status === "new" ? <NewIcon /> : <UsedIcon />}
          </div>
        </div>
        <div className={styles.buttonBox}>
          <button className={styles.button}>I want this!</button>
        </div>
        <span className={styles.details}>Details</span>
        <div className={styles.description}>{data.description}</div>
        <div className={styles.sellerInfoBox}>
          <div className={styles.circle}>
            {data.sellerInfo?.name?.charAt(0)}
          </div>
          <div className={styles.sellerInfo}>
            <span className={styles.sellerName}>{data.sellerInfo?.name}</span>
            <span className={styles.listingBox}>
              <LabelIcon />
              <span
                className={styles.sellerListingCount}
              >{`${data.sellerInfo?.listingCount}`}</span>
              <span className={styles.listing}>listing</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
