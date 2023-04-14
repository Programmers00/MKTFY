// navigate
import { useNavigate } from "react-router-dom";
// scss
import styles from "./index.module.scss";
// components
import ImageUploader from "./ImageUploader";
import DataForm from "./DataForm";
// redux stuff
import { useDispatch, useSelector } from "react-redux";
// redux actions
import {
  createCreateOffer,
  resetCreateOffer,
} from "../../../../store/actions/createOffer";
import { createUploadImages } from "../../../../store/actions/createOfferUploadImages";
import { setLoadingTrue } from "../../../../store/actions/loading";
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
      const response = await dispatch(
        createUploadImages(currentSelectedImages)
      );
      if (
        // when request upload images success,
        response.status === 200
        // &&response.data.length > 0
      ) {
        // new params (copy from redux current params)
        const newParams = JSON.parse(JSON.stringify(currentParams));
        // add images id
        response.data.forEach((uploadedFile) => {
          newParams.images.push(uploadedFile.id);
        });
        // create create offer
        const responseCreateOffer = await dispatch(
          createCreateOffer(newParams)
        );
        // success =>
        if (responseCreateOffer.status === 200) {
          // reset create offer data
          dispatch(resetCreateOffer());
          // show loading
          dispatch(setLoadingTrue("Product Posted!"));
          // navigate "/"
          navigate("/");
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
