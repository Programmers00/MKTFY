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
import { updateProduct, resetProduct } from "../../../../store/actions/product";
import { createUploadImages } from "../../../../store/actions/productUploadImages";
import { setLoadingTrue } from "../../../../store/actions/loading";
// envs for storage
import envs from "../../../../envs";
/** product content : component for product edit */
const ProductContent = () => {
  /** initialize */
  // router stuff
  const navigate = useNavigate();
  // redux dispatch
  const dispatch = useDispatch();
  // current selected images for redux
  const currentSelectedImages = useSelector((state) => {
    return state.productUploadImages.selectedImages;
  });
  // current params from redux
  const currentParams = useSelector((state) => {
    return state.product.params;
  });

  /** functions */
  /** update product to api */
  const onUpdateProduct = async (event) => {
    event.preventDefault();
    try {
      // create upload images api: filtered format only => id from backend
      const responseUploadImages = await dispatch(
        createUploadImages(currentSelectedImages)
      );
      // when create upload images success,
      if (
        responseUploadImages.status === 200 ||
        responseUploadImages.data.length > 0
      ) {
        // new images id for params
        const newParams = JSON.parse(JSON.stringify(currentParams));
        // existing selected images => add to new images id
        currentSelectedImages.forEach((existingSelectedImage) => {
          if (typeof existingSelectedImage === "string") {
            newParams.images.push(
              existingSelectedImage.replace(envs.storageUrl, "")
            );
          }
        });
        // response uploaded images => add to new images id
        responseUploadImages.data.forEach((uploadedFile) => {
          newParams.images.push(uploadedFile.id);
        });
        // update product
        const response = await dispatch(updateProduct(newParams));
        if (response.status === 200) {
          // reset product
          dispatch(resetProduct());
          // show loading
          dispatch(setLoadingTrue("Product Saved"));
          // navigate to "myListings"
          navigate("/myListings");
        }
      }
    } catch (error) {}
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
