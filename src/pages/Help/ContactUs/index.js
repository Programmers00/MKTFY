// scss
import styles from "./index.module.scss";
// components
import CategoryBar from "../../../components/CategoryBar";
import ContactUsContent from "./ContactUsContent";

/** contact us page */
const ContactUs = () => {
  return (
    <div className={styles.mainBox}>
      <CategoryBar category={["Contact us"]} />
      <ContactUsContent />
    </div>
  );
};
export default ContactUs;
