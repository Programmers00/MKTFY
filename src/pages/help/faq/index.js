// scss
import styles from "./index.module.scss";
// components
import CategoryBar from "../../../components/categoryBar";
import FaqContent from "./faqContent";

/** faq page */
const FAQ = () => {
  return (
    <div className={styles.mainBox}>
      <CategoryBar category={["FAQ"]} />
      <FaqContent />
    </div>
  );
};
export default FAQ;
