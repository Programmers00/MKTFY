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
  createCreateOffer,
  resetCreateOffer,
} from "../../../../store/actions/createOffer";
import { createUploadImages } from "../../../../store/actions/createOfferUploadImages";
/** create offer content : component for create offer */
const CreateOfferContent = () => {
  /** initialize */
  // router stuff
  const navigate = useNavigate();
  // redux dispatch
  const dispatch = useDispatch();
  // current selected images for redux
  const currentSelectedImages = useSelector((state) => {
    return state.createOfferUploadImages.selectedImages;
  });
  // current params for redux
  const currentParams = useSelector((state) => {
    return state.createOffer.params;
  });
  /** functions */
  /** request create offer to api */
  const onCreateOffer = async (event) => {
    event.preventDefault();
    try {
      // request upload images api
      const responseUploadImages = await dispatch(
        createUploadImages(currentSelectedImages)
      );
      if (
        // when request upload images success,
        responseUploadImages.data.code === "SUCCESS" ||
        responseUploadImages.data.uploadedFiles.length > 0
      ) {
        // new params (copy from redux current params)
        const newParams = JSON.parse(JSON.stringify(currentParams));
        // add images id
        responseUploadImages.data.uploadedFiles.forEach((uploadedFile) => {
          newParams.imagesId.push(uploadedFile.fileId);
        });
        // create create offer
        const responseCreateOffer = await dispatch(
          createCreateOffer(newParams)
        );
        // success =>
        if (responseCreateOffer.data.code === "SUCCESS") {
          navigate("/");
          dispatch(resetCreateOffer());
        }
      }
    } catch (error) {}
  };

  return (
    <div className={styles.createOfferContentBox}>
      <form className={styles.createOfferContentForm} onSubmit={onCreateOffer}>
        <ImageUploader />
        <DataForm />
      </form>
    </div>
  );
};

export default CreateOfferContent;
