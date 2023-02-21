// scss
import styles from "./index.module.scss";
// components
import CategoryBar from "../../../components/categoryBar";
import DetailContent from "./detailContent";

/** detail page */
const Detail = () => {
  const data = {
    id: "cat",
    images: ["cat", "cat", "cat2", "cat3", "cat4"],
    title: "Pearl The Cat: Toy edition",
    price: "340.00",
    status: "new",
    description:
      "The world's most beautiful cat. Pearl The Cat is a pretty cat who is grey with black stripes on top and spots on the belly. She likes catching flies and eating beef jerky as well as yogurt. This edition of Pearl The Cat includes toys for maximum Pearl enjoyment. (Batteries not included)",
    sellerInfo: {
      name: "Matt Smith",
      contact: "+1 825-999-9999",
      listingCount: 2,
    },
  };
  return (
    <div className={styles.mainBox}>
      <CategoryBar category={["Product Listing"]} />
      <DetailContent data={data} />
    </div>
  );
};
export default Detail;
