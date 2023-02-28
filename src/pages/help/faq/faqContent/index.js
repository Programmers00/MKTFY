// react
import { useState, useEffect } from "react";
// scss
import styles from "./index.module.scss";
// svg icons
import { DropdownArrowIcon } from "../../../../assets/svgIcons";
// useDispatch for sending action to redux
import { useDispatch, useSelector } from "react-redux";
import { fetchFaq } from "../../../../store/actions/faq";

const FaqContent = () => {
  /** initialize*/
  // redux
  const dispatch = useDispatch();
  /** data */
  // items
  const [items, setItems] = useState([]);
  // selected item defalt data[0]
  const [selectedItem, setSelectedItem] = useState();

  /** request data options */
  // active options
  const fetchFaqOptions = {
    url: "/api/user/faq",
    params: {},
  };

  /** fetch data from api */
  useEffect(() => {
    const getData = async () => {
      // request fetch
      const response = await dispatch(fetchFaq(fetchFaqOptions));
      console.log("##response", response);
      if (response.data.code === "SUCCESS") {
        setItems(response.data.items);
        setSelectedItem(response.data.items[0]);
      }
    };
    getData();
  }, []);

  /** fuctions */
  /** selected item */
  const handleSelectionClick = (index) => {
    setSelectedItem(items[index]);
  };

  return (
    <div className={styles.faqContentBox}>
      <div className={styles.selectionsBox}>
        <ul>
          {items &&
            selectedItem &&
            items.map((_, index) => (
              <button
                key={index}
                className={styles.selection}
                disabled={selectedItem.title === items[index].title}
                onClick={() => handleSelectionClick(index)}
              >
                {items[index].title}
                <div className={styles.iconBox}>
                  <DropdownArrowIcon />
                </div>
              </button>
            ))}
        </ul>
      </div>
      <div className={styles.contentBox}>
        {selectedItem && (
          <>
            <span className={styles.contentTitle}>{selectedItem.title}</span>
            <div className={styles.contentDetail}>
              {selectedItem.description}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FaqContent;
