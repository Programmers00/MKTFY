// scss
import styles from "./index.module.scss";
// components
import ImageUploader from "./imageUploader";
import CreateOfferForm from "./createOfferForm";
/** create offer content : component for create offer */
const CreateOfferContent = () => {
  return (
    <div className={styles.createOfferContentBox}>
      <form
        className={styles.createOfferContentForm}
        onSubmit={(e) => {
          e.preventDefault();
          // logic for api need
        }}
      >
        <ImageUploader />
        <CreateOfferForm />
      </form>
    </div>
  );
};

export default CreateOfferContent;
