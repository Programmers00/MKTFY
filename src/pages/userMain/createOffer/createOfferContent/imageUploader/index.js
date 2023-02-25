import { useEffect, useState, useRef } from "react";
// scss
import styles from "./index.module.scss";
// scss style variabled for color
import variabled from "../../../../../styles/_variabled.scss";
// svg icons
import { CameraIcon, XIcon } from "../../../../../assets/svgIcons";
// useDispatch for sending action to redux
import { useDispatch, useSelector } from "react-redux";
// redux actions
import { uploadImage } from "../../../../../store/actions/createOffer";

/** image uploader: parameter from images, setImages */
const ImageUploader = () => {
  /** initialize */
  // redux
  const dispatch = useDispatch();
  const currentCreateOfferForm = useSelector(
    (state) => state.createOffer.createOfferForm
  );
  // images from redux
  const images = currentCreateOfferForm.images;
  // input ref
  const inputRef = useRef(null);
  // drag active
  const [dragActive, setDragActive] = useState(false);
  // clicked image index
  const [clickedImage, setClickedImage] = useState(0);
  /** functions */
  /** set images */
  const handleFile = (files) => {
    // representing image
    if (clickedImage === 0) {
      // change
      dispatch(uploadImage(files));
      return;
    }
    // other image
    const newImages = [...images];
    newImages[clickedImage] = files[0];
    // setImages(newImages);
    dispatch(uploadImage(newImages));
  };
  /** trigger when drage files on the area */
  const handleDrag = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setDragActive(true);
    } else if (event.type === "dragleave") {
      setDragActive(false);
    }
  };
  // triggers when file is dropped
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      handleFile(event.dataTransfer.files);
    }
  };
  // triggers when file is selected with click
  const handleChange = (event) => {
    setClickedImage(0);
    event.preventDefault();
    if (event.target.files && event.target.files.length > 5) {
      alert("up to 5 photos");
      return;
    }
    if (event.target.files && event.target.files[0]) {
      handleFile(event.target.files);
    }
  };
  // triggers the input when the empty image is clicked
  const onClickEmptyImage = (index) => {
    setClickedImage(index);
    inputRef.current.click();
  };

  return (
    <div className={styles.contentBox}>
      <label
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={styles.dragDropContent}
        style={dragActive ? { backgroundColor: variabled.lightGray } : {}}
      >
        {!images[0] ? (
          <div className={styles.centerContent}>
            <div className={styles.iconBox}>
              <CameraIcon />
            </div>
            <p className={styles.text}>Choose or drag up to 5 photos</p>
          </div>
        ) : (
          <img
            alt="representingImg"
            className={styles.representingImage}
            src={URL.createObjectURL(images[0])}
          />
        )}
        <input
          onChange={handleChange}
          ref={inputRef}
          className={styles.hidingContent}
          type="file"
          multiple={true}
          accept=".jpg, .jpeg, .png"
        />
      </label>
      <div className={styles.images}>
        {[1, 2, 3, 4].map((index) => (
          <div className={styles.imageBox} key={index}>
            {images[index] ? (
              <>
                <img
                  alt="img"
                  className={styles.image}
                  src={URL.createObjectURL(images[index])}
                />
                <div className={styles.xIconBox}>
                  <div
                    className={styles.xIcon}
                    onClick={() => {
                      const newImages = [...images];
                      newImages[index] = null;
                      // setImages(newImages);
                      dispatch(uploadImage(newImages));
                    }}
                  >
                    <XIcon />
                  </div>
                </div>
              </>
            ) : (
              <div
                className={styles.emptyBox}
                onClick={() => onClickEmptyImage(index)}
              >
                <CameraIcon />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageUploader;
