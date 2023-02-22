import { useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import CategoryBar from "../../../components/categoryBar";
import CreateOfferContent from "./createOfferContent";

/** create offer page */
const CreateOffer = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [images, setImages] = useState([]);

  const functions = {
    setProductName,
    setDescription,
    setCategory,
    setCondition,
    setPrice,
    setAddress,
    setCity,
    setImages,
  };

  const createOfferForm = {
    productName,
    description,
    category,
    condition,
    price,
    address,
    city,
    images,
  };
  return (
    <div className={styles.mainBox}>
      <CategoryBar category={["Create offer"]} />
      <CreateOfferContent {...createOfferForm} {...functions} />
    </div>
  );
};
export default CreateOffer;
