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
import { requestCreateOffer } from "../../../../store/actions/createOffer";
/** create offer content : component for create offer */
const CreateOfferContent = () => {
  /** initialize */
  // router stuff
  const navigate = useNavigate();
  // redux stuffs
  const dispatch = useDispatch();
  const currentCreateOfferForm = useSelector(
    (state) => state.createOffer.createOfferForm
  );
  /** data */
  const [createOfferForm, setCreateOfferForm] = useState();
  /** real time update create offer form  */
  useEffect(() => {
    setCreateOfferForm(currentCreateOfferForm);
  }, [currentCreateOfferForm]);
  /** functions */
  /** request create offer to api */
  const handleRequestCreateOffer = async (event) => {
    event.preventDefault();
    try {
      const response = await dispatch(requestCreateOffer(createOfferForm));
      if (response.data.code === "SUCCESS") {
        // need success page before chaing page
        navigate("/myListings");
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
