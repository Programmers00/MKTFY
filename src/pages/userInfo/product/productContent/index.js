// scss
import styles from "./index.module.scss";
// components
import ImageUploader from "./imageUploader";
import ProductForm from "./productForm";
/** product content : component for product edit */
const ProductContent = () => {
  return (
    <div className={styles.productContentBox}>
      <form
        className={styles.productContentForm}
        onSubmit={(e) => {
          e.preventDefault();
          // logic for api need
        }}
      >
        <ImageUploader />
        <ProductForm />
      </form>
    </div>
  );
};

export default ProductContent;
