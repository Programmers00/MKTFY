// react
import { useState, useEffect } from "react";
// scss
import styles from "./index.module.scss";

// svg icons
import { DropdownArrowIcon } from "../../../../assets/svgIcons";
// useDispatch for sending action to redux
import { useDispatch } from "react-redux";
import { fetchFaq } from "../../../../store/actions/faq";
/** decode to html and parse in dom */
// decode to html
import { decode } from "html-entities";
// parse
import parse from "html-react-parser";

const FaqContent = () => {
  /** initialize*/
  // redux
  const dispatch = useDispatch();

  /** data */
  // items
  const [items, setItems] = useState([]);
  // selected item defalt data[0]
  const [selectedItem, setSelectedItem] = useState({});

  /** get data from api */
  useEffect(() => {
    const fetchData = async () => {
      /** api */
      const response = await dispatch(fetchFaq());
      // if success, set data
      if (response.status === 200) {
        setItems(response.data);
        // default selected item
        setSelectedItem(response.data[0]);
      }
    };
    fetchData();
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
                disabled={selectedItem.question === items[index].question}
                onClick={() => handleSelectionClick(index)}
              >
                {items[index].question}
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
            <span className={styles.contentTitle}>{selectedItem.question}</span>
            {parse(decode(selectedItem.answer))}
          </>
        )}
      </div>
    </div>
  );
};

export default FaqContent;
