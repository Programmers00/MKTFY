import { useEffect, useState, useRef } from "react";
// scss
import styles from "./index.module.scss";
// scss style variabled for color
import variabled from "../../../../../styles/_variabled.scss";
// svg icons
import { CameraIcon, XIcon } from "../../../../../assets/svgIcons";
// useDispatch for sending action to redux
import { useDispatch } from "react-redux";
// redux actions
import { setSelectedImages } from "../../../../../store/actions/createOfferUploadImages";

/** image uploader: parameter from images, setImages */
const ImageUploader = () => {
  /** initialize */
  // redux
  const dispatch = useDispatch();
  // input ref
  const inputRef = useRef(null);
  // drag active
  const [dragActive, setDragActive] = useState(false);
  // clicked image index
  const [clickedImage, setClickedImage] = useState(0);
  const [selectedImageList, setSelectedImageList] = useState([]);

  /** update data in redux */
  useEffect(() => {
    dispatch(setSelectedImages(selectedImageList));
    // console.log("##selectedImageList", selectedImageList);
  }, [selectedImageList]);

  /** functions */
  /** add images */
  const onAddImages = (selectedImages) => {
    // can't exceed more than 5 images
    if (selectedImageList.length > 4) return;
    setSelectedImageList([...selectedImageList, ...selectedImages]);
  };
  /** remove images  */
  const onRemoveImage = (index) => {
    const newImages = [...selectedImageList].filter(
      (item) => item !== [...selectedImageList][index]
    );
    setSelectedImageList(newImages);
  };

  /** trigger when drage files on the area */
  const onDrag = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setDragActive(true);
    } else if (event.type === "dragleave") {
      setDragActive(false);
    }
  };
  /** triggers when file is dropped */
  const onDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
    // can't exceed more than 5 images
    if (
      event.dataTransfer.files &&
      selectedImageList.length + event.dataTransfer.files.length > 5
    ) {
      alert("up to 5 photos");
      return;
    }
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      onAddImages(event.target.files);
    }
  };
  /** triggers when file is selected with click => issue: after I remove the image and add the same image, it is not working*/
  const onChange = (event) => {
    setClickedImage(0);
    event.preventDefault();
    // selected image list + new selected images is larger than 5, prevent do function
    if (
      event.target.files &&
      selectedImageList.length + event.target.files.length > 5
    ) {
      alert("up to 5 photos");
      return;
    }
    if (event.target.files && event.target.files[0]) {
      onAddImages(event.target.files);
    }
  };
  /** triggers the input when the empty image is clicked */
  const onClickEmptyImage = (index) => {
    setClickedImage(index);
    if (selectedImageList.length > 4) return;
    inputRef.current.click();
  };

  return (
    <div className={styles.contentBox}>
      <label
        onDragEnter={onDrag}
        onDragLeave={onDrag}
        onDragOver={onDrag}
        onDrop={onDrop}
        className={styles.dragDropContent}
        style={dragActive ? { backgroundColor: variabled.subtleGray } : {}}
      >
        {!selectedImageList[0] ? (
          <div className={styles.centerContent}>
            <div className={styles.iconBox}>
              <CameraIcon />
            </div>
            <p className={styles.text}>Choose or drag up to 5 photos</p>
          </div>
        ) : (
          <>
            <img
              alt="representingImg"
              className={styles.representingImage}
              src={URL.createObjectURL(selectedImageList[0])}
            />
            <div className={styles.xIconBox}>
              <div
                className={styles.xIcon}
                onClick={(e) => {
                  // remove image, prevent other function
                  e.preventDefault();
                  onRemoveImage(0);
                }}
              >
                <XIcon />
              </div>
            </div>
          </>
        )}
        <input
          onChange={onChange}
          ref={inputRef}
          className={styles.hidingContent}
          type="file"
          multiple={true}
          accept=".jpg, .jpeg, .png"
          disabled={selectedImageList.length > 4}
        />
      </label>
      <div className={styles.images}>
        {[1, 2, 3, 4].map((index) => (
          <div className={styles.imageBox} key={index}>
            {selectedImageList[index] ? (
              <>
                <img
                  alt="img"
                  className={styles.image}
                  src={URL.createObjectURL(selectedImageList[index])}
                />
                <div className={styles.xIconBox}>
                  <div
                    className={styles.xIcon}
                    onClick={() => onRemoveImage(index)}
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
