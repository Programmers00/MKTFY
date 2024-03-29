import { useEffect, useState, useRef } from "react";
// scss
import styles from "./index.module.scss";
// scss style variabled for color red
import variabled from "../../../../styles/_variabled.scss";
// use navigate
import { useNavigate } from "react-router-dom";
// redux dispatch
import { useDispatch } from "react-redux";
// redux actions
import { updateCheckout } from "../../../../store/actions/detail";
// svg icon
import {
  LabelIcon,
  NewIcon,
  UsedIcon,
  UpIcon,
  DownIcon,
} from "../../../../assets/svgIcons";

const DetailContent = ({ item }) => {
  /** initialize */
  // navigate
  const navigate = useNavigate();
  // redux dispatch
  const dispacth = useDispatch();

  // image list's ref
  const imageRef = useRef([]);
  // selected image's index
  const [selectedIndex, setSelectedIndex] = useState(0);
  // selected image
  const [selectedImage, setSelectedImage] = useState(
    item.images[selectedIndex]
  );
  // scope 0 < selectedOrder < 2
  const [selectedOrder, setSelectedOrder] = useState(0);

  // detect selected image
  useEffect(() => {
    setSelectedImage(item.images[selectedIndex]);
  }, [selectedIndex]);

  /** move button ("up" or "down") */
  const onMove = (direction) => {
    // scope for selectedIndex (0 < selectedIndex < data.images.length -1)
    const MIN_INDEX = 0;
    const MAX_INDEX = item.images.length - 1;
    // scope for selectedOrder (0 < selectedOrder < 2)
    const MAX_ORDER = 2;
    // click up button and slected index is bigger than min index
    if (direction === "up" && selectedIndex > MIN_INDEX) {
      // change selected index -1
      setSelectedIndex((prev) => prev - 1);
      // selected index  is bigger than max order => do nothing
      if (selectedIndex > MAX_ORDER) return;
      // change order index -1
      setSelectedOrder((prev) => prev - 1);
      // css function
      console.log("##", imageRef.current, selectedIndex);
      imageRef.current.forEach(
        selectedIndex === 2
          ? (image) => (image.style.transform = `translateY(${-140}px)`)
          : (image) => (image.style.transform = `translateY(${0}px)`)
      );
    }
    // click down button
    if (direction === "down" && selectedIndex < MAX_INDEX) {
      setSelectedIndex((prev) => prev + 1);
      // selected index  is smaller than max order => do nothing
      if (selectedIndex < MAX_ORDER) return;
      // change order index +1
      setSelectedOrder((prev) => prev + 1);
      // css function
      imageRef.current.forEach(
        selectedIndex === 2
          ? (image) => (image.style.transform = `translateY(${-140}px)`)
          : (image) => (image.style.transform = `translateY(${-280}px)`)
      );
    }
  };

  /** params */
  const params = {
    id: item.id,
  };
  /** functions */
  const onSubmit = async () => {
    /** api */
    const response = await dispacth(updateCheckout(params));
    // if success, go to checkout
    if (response.status === 200) {
      navigate(`/checkout/${item.id}`, { state: { item } });
    }
  };

  return (
    <div className={styles.detailContentBox}>
      <div className={styles.imageBox}>
        <div className={styles.verticalImageBox}>
          <button className={styles.upButton} onClick={() => onMove("up")}>
            <UpIcon />
          </button>
          <div className={styles.images}>
            {item.images.map((image, index) => {
              return (
                <img
                  ref={(image) => (imageRef.current[index] = image)}
                  key={index}
                  onClick={() => {
                    setSelectedIndex(index);
                  }}
                  className={styles.image}
                  alt="img"
                  src={image}
                  style={
                    selectedIndex === index
                      ? { border: `solid 1px ${variabled.occasionalPurple}` }
                      : undefined
                  }
                ></img>
              );
            })}
          </div>
          <button className={styles.downButton} onClick={() => onMove("down")}>
            <DownIcon />
          </button>
        </div>
        {selectedImage ? (
          <img className={styles.showImage} alt="img" src={selectedImage}></img>
        ) : (
          <div className={styles.showImage}>
            <div className={styles.noImage}> No Image</div>
          </div>
        )}
      </div>
      <div className={styles.contentBox}>
        <span className={styles.itemTitle}>{item.title}</span>
        <div className={styles.itemPriceBox}>
          <span className={styles.price}>{`$${item.price}`}</span>
          <div className={styles.itemStatus}>
            {item.status === "new" ? <NewIcon /> : <UsedIcon />}
          </div>
        </div>
        <div className={styles.buttonBox}>
          <button className={styles.button} onClick={onSubmit}>
            I want this!
          </button>
        </div>
        <span className={styles.details}>Details</span>
        <div className={styles.description}>{item.description}</div>
        <div className={styles.sellerInfoBox}>
          <div className={styles.circle}>
            {item.sellerProfile?.lastName?.charAt(0)}
          </div>
          <div className={styles.sellerInfo}>
            <span className={styles.sellerName}>
              {item.sellerInfo?.userName}
            </span>
            <span className={styles.listingBox}>
              <LabelIcon />
              <span
                className={styles.sellerListingCount}
              >{`${item.sellerListingCount}`}</span>
              <span className={styles.listing}>listing</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
