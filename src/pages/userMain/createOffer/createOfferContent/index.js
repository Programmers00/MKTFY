import { useState, useEffect } from "react";
// navigate
import { useNavigate } from "react-router-dom";
// scss
import styles from "./index.module.scss";
// components
import ImageUploader from "./imageUploader";
import CreateOfferForm from "./createOfferForm";
// redux stuff
import { useDispatch, useSelector } from "react-redux";
// redux actions
import {
  requestCreateOffer,
  resetCreateOffer,
  setCreateOffer,
} from "../../../../store/actions/createOffer/createOffer";
import { requestUploadImages } from "../../../../store/actions/createOffer/uploadImage";
/** create offer content : component for create offer */
const CreateOfferContent = () => {
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
  /** data */
  const [params, setParams] = useState();
  /** real time update params  */
  useEffect(() => {
    setParams(currentParams);
  }, [currentParams]);
  /** functions */
  /** request create offer to api */
  const handleRequestCreateOffer = async (event) => {
    event.preventDefault();
    try {
      // request upload images api
      const responseUploadImages = await dispatch(
        requestUploadImages(currentSelectedImages)
      );
      if (
        // when request upload images success,
        responseUploadImages.data.code === "SUCCESS" ||
        responseUploadImages.data.uploadedFiles.length > 0
      ) {
        const newImagesId = [];
        responseUploadImages.data.uploadedFiles.forEach((uploadedFile) => {
          newImagesId.push(uploadedFile.fileId);
        });
        params.imagesId = newImagesId;

        dispatch(setCreateOffer(params));

        const responseCreateOffer = await dispatch(requestCreateOffer(params));
        if (responseCreateOffer.data.code === "SUCCESS") {
          // dispatch(resetCreateOffer());
          navigate("/");
        }
      }
    } catch (error) {
      console.log("#error", error);
    }
  };

  return (
    <div className={styles.createOfferContentBox}>
      <form
        className={styles.createOfferContentForm}
        onSubmit={handleRequestCreateOffer}
      >
        <ImageUploader />
        <CreateOfferForm />
      </form>
    </div>
  );
};

export default CreateOfferContent;
