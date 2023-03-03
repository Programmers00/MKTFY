import { useState, useEffect } from "react";
// navigate
import { useNavigate } from "react-router-dom";
// scss
import styles from "./index.module.scss";
// components
import ImageUploader from "./imageUploader";
import DataForm from "./dataForm";
// redux stuff
import { useDispatch, useSelector } from "react-redux";
// redux actions
import {
  updateProduct,
  resetProduct,
  setProduct,
} from "../../../../store/actions/product";
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
  // current params from redux
  const currentParams = useSelector((state) => {
    return state.product.params;
  });
  /** functions */
  /** update product to api */
  const onUpdateProduct = async (event) => {
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
        // set product with new params
        dispatch(setProduct(newParams));
        // update product
        const responseProduct = await dispatch(updateProduct(currentParams));
        if (responseProduct.data.code === "SUCCESS") {
          navigate("/myListings");
          dispatch(resetProduct());
        }
      }
    } catch (error) {}
  };
  return (
    <div className={styles.productContentBox}>
      <form className={styles.productContentForm} onSubmit={onUpdateProduct}>
        <ImageUploader />
        <DataForm />
      </form>
    </div>
  );
};

export default ProductContent;
