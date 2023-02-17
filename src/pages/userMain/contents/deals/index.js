// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/contentCard";

const Deals = () => {
  /** data: need to get this data from api */
  const deals = {
    id: "deals",
    title: "Deals",
    items: [
      {
        id: "cat1",
        title: "Pearl The cat: Donut edtion",
        img: "cat",
        price: "500",
      },
      {
        id: "cat2",
        title: "Pearl The cat: Monster edtion",
        img: "cat2",
        price: "500",
      },
      {
        id: "cat3",
        title: "Pearl The cat: Christmas edtion",
        img: "cat3",
        price: "500",
      },
      {
        id: "cat4",
        title: "Pearl The cat: Halloween edtion",
        img: "cat4",
        price: "500",
      },
      {
        id: "cat5",
        title:
          "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
        img: "cat",
        price: "500",
      },
      {
        id: "cat6",
        title: "Pearl The cat: Donut edtion",
        img: "cat",
        price: "500",
      },
      {
        id: "cat7",
        title: "Pearl The cat: Monster edtion",
        img: "cat2",
        price: "500",
      },
      {
        id: "cat8",
        title: "Pearl The cat: Christmas edtion",
        img: "cat3",
        price: "500",
      },
      {
        id: "cat9",
        title: "Pearl The cat: Halloween edtion",
        img: "cat4",
        price: "500",
      },
      {
        id: "cat10",
        title:
          "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
        img: "cat",
        price: "500",
      },
    ],
  };
  const carsVehicles = {
    id: "carsVehicles",
    title: "CarsVehicles",
    items: [
      {
        id: "cat",
        title: "Pearl The cat: Donut edtion",
        img: "cat2",
        price: "500",
      },
      {
        id: "cat2",
        title: "Pearl The cat: Monster edtion",
        img: "cat2",
        price: "500",
      },
      {
        id: "cat3",
        title: "Pearl The cat: Christmas edtion",
        img: "cat2",
        price: "500",
      },
      {
        id: "cat4",
        title: "Pearl The cat: Halloween edtion",
        img: "cat2",
        price: "500",
      },
      {
        id: "cat5",
        title:
          "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
        img: "cat2",
        price: "500",
      },
    ],
  };
  const furniture = {
    id: "furniture",
    title: "Furniture",
    items: [
      {
        id: "cat",
        title: "Pearl The cat: Donut edtion",
        img: "cat3",
        price: "500",
      },
      {
        id: "cat2",
        title: "Pearl The cat: Monster edtion",
        img: "cat3",
        price: "500",
      },
      {
        id: "cat3",
        title: "Pearl The cat: Christmas edtion",
        img: "cat3",
        price: "500",
      },
      {
        id: "cat4",
        title: "Pearl The cat: Halloween edtion",
        img: "cat3",
        price: "500",
      },
      {
        id: "cat5",
        title:
          "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
        img: "cat3",
        price: "500",
      },
    ],
  };
  const electronics = {
    id: "electronics",
    title: "Electronics",
    items: [
      {
        id: "cat",
        title: "Pearl The cat: Donut edtion",
        img: "cat4",
        price: "500",
      },
      {
        id: "cat2",
        title: "Pearl The cat: Monster edtion",
        img: "cat4",
        price: "500",
      },
      {
        id: "cat3",
        title: "Pearl The cat: Christmas edtion",
        img: "cat4",
        price: "500",
      },
      {
        id: "cat4",
        title: "Pearl The cat: Halloween edtion",
        img: "cat4",
        price: "500",
      },
      {
        id: "cat5",
        title:
          "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
        img: "cat4",
        price: "500",
      },
    ],
  };
  const realEstate = {
    id: "realEstate",
    title: "RealEstate",
    items: [
      {
        id: "cat",
        title: "Pearl The cat: Donut edtion",
        img: "cat",
        price: "500",
      },
      {
        id: "cat2",
        title: "Pearl The cat: Monster edtion",
        img: "cat",
        price: "500",
      },
      {
        id: "cat3",
        title: "Pearl The cat: Christmas edtion",
        img: "cat",
        price: "500",
      },
      {
        id: "cat4",
        title: "Pearl The cat: Halloween edtion",
        img: "cat",
        price: "500",
      },
      {
        id: "cat5",
        title:
          "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
        img: "cat",
        price: "500",
      },
    ],
  };

  return (
    <div className={styles.mainBox}>
      <ContentCard content={deals} />
      <div className={styles.half}>
        <ContentCard content={carsVehicles} isWidthHalf isNavigate />
        <ContentCard content={furniture} isWidthHalf isNavigate />
      </div>
      <div className={styles.half}>
        <ContentCard content={electronics} isWidthHalf isNavigate />
        <ContentCard content={realEstate} isWidthHalf isNavigate />
      </div>
    </div>
  );
};
export default Deals;
