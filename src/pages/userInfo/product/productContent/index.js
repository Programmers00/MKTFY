import { useState, useEffect } from "react";
// navigate
import { useNavigate } from "react-router-dom";
// scss
import styles from "./index.module.scss";
// components
import ImageUploader from "./imageUploader";
import ProductForm from "./productForm";
// redux stuff
import { useDispatch, useSelector } from "react-redux";
// redux actions
import {
  createCreateOffer,
  setCreateOffer,
} from "../../../../store/actions/createOffer";
import { createUploadImages } from "../../../../store/actions/uploadImage";

/** product content : component for product edit */
const ProductContent = () => {
  /** initialize */
  // router stuff
  const navigate = useNavigate();
  // redux dispatch
  const dispatch = useDispatch();
  // current selected images for redux
  const currentSelectedImages = useSelector((state) => {
    return state.uploadImages.selectedImages;
  });
  // current params for redux
  const currentParams = useSelector((state) => {
    return state.createOffer.params;
  });
  /** functions */
  /** create create offer to api */
  const handleRequestCreateOffer = async (event) => {
    event.preventDefault();
    try {
      // create upload images api
      const responseUploadImages = await dispatch(
        createUploadImages(currentSelectedImages)
      );
      if (
        // when create upload images success,
        responseUploadImages.data.code === "SUCCESS" ||
        responseUploadImages.data.uploadedFiles.length > 0
      ) {
        // new params (copy from redux current params)
        const newParams = { ...currentParams };
        // add images id
        responseUploadImages.data.uploadedFiles.forEach((uploadedFile) => {
          newParams.imagesId.push(uploadedFile.fileId);
        });
        // set create offer with new params
        dispatch(setCreateOffer(newParams));
        // request create offer
        const responseCreateOffer = await dispatch(
          createCreateOffer(currentParams)
        );
        if (responseCreateOffer.data.code === "SUCCESS") {
          navigate("/");
        }
      }
    } catch (error) {}
  };
  return (
    <div className={styles.productContentBox}>
      <form
        className={styles.productContentForm}
        onSubmit={handleRequestCreateOffer}
      >
        <ImageUploader />
        <ProductForm />
      </form>
    </div>
  );
};

export default ProductContent;
