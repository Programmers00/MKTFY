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
  setProductImagesId,
} from "../../../../store/actions/product";
import { createUploadImages } from "../../../../store/actions/productUploadImages";

/** product content : component for product edit */
const ProductContent = () => {
  /** initialize */
  // router stuff
  const navigate = useNavigate();
  // redux dispatch
  const dispatch = useDispatch();
  // current selected images for redux
  const currentSelectedImages = useSelector((state) => {
    console.log(
      "##state.productUploadImages.selectedImages",
      state.productUploadImages.selectedImages
    );
    return state.productUploadImages.selectedImages;
  });
  // current params from redux
  const currentParams = useSelector((state) => {
    console.log("##state.product.params", state.product.params);
    return state.product.params;
  });

  /** functions */
  const update = async () => {
    // update product
    console.log("##currentParams", currentParams);
    const responseProduct = await dispatch(updateProduct(currentParams));

    if (responseProduct.data.code === "SUCCESS") {
      navigate("/myListings");
      dispatch(resetProduct());
    }
  };

  /** update product to api */
  const onUpdateProduct = async (event) => {
    event.preventDefault();
    try {
      // create upload images api: filtered format only => id from backend
      const responseUploadImages = await dispatch(
        createUploadImages(currentSelectedImages)
      );
      // filtered selected Images for params
      const existingSelectedImages = currentSelectedImages.filter(
        (image) => typeof image === "string"
      );
      // when create upload images success,
      if (
        responseUploadImages.data.code === "SUCCESS" ||
        responseUploadImages.data.uploadedFiles.length > 0
      ) {
        // new images id for params
        const imagesId = [];
        // existing selected images => add to new images id
        existingSelectedImages.forEach((existingSelectedImage) => {
          imagesId.push(existingSelectedImage);
        });
        // response uploaded images => add to new images id
        responseUploadImages.data.uploadedFiles.forEach((uploadedFile) => {
          imagesId.push(uploadedFile.fileId);
        });
        // set product with new params
        const response = dispatch(setProductImagesId(imagesId));
        console.log("##response", response);
      }
    } catch (error) {}
    update();
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
