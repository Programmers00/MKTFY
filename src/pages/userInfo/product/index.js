// scss
import styles from "./index.module.scss";
// components
import CategoryBar from "../../../components/categoryBar";
import ProductContent from "./productContent";

/** product page */
const Product = () => {
  return (
    <div className={styles.mainBox}>
      <CategoryBar category={["My Listings", "Product"]} />
      <ProductContent />
    </div>
  );
};
export default Product;
