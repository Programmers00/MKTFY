import { useEffect, useRef, useState } from "react";
// scss
import styles from "./index.module.scss";
// svg icons
import { ArrowIcon, CloseIcon, MagnifierIcon } from "../../assets/svgIcons";

/** select box: parameter => placeHolder, options, isMulti, isSearchable, onChange, isIcon */
const Select = ({
  placeHolder,
  options,
  isMulti,
  isSearchable,
  onChange,
  isLeftArrowIcon,
  isRightArrowIcon,
  closeTrigger,
}) => {
  /** data */
  const [isShowMenu, setIsShowMenu] = useState(false);
  // default select value is first value in list
  const [selectedValue, setSelectedValue] = useState(isMulti ? [] : options[0]);
  const [searchValue, setSearchValue] = useState("");
  /** refs */
  const searchRef = useRef();
  const inputRef = useRef();
  /**useEffect */
  // set search value
  useEffect(() => {
    setSearchValue("");
    if (isShowMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isShowMenu]);
  // select label in menu: when click the item in menu, close the menu
  useEffect(() => {
    const handler = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsShowMenu(false);
      }
    };
    // add click event
    window.addEventListener("click", handler);
    return () => {
      // remove click event
      window.removeEventListener("click", handler);
    };
  }, []);
  /** funcions */
  /** click select box: when click the select box, open or close the menu */
  const handleInputClick = (event) => {
    setIsShowMenu(!isShowMenu);
  };
  /** show select box label */
  const getDisplay = () => {
    // no selected value or place holder exist => show placeHolder
    if (!selectedValue || selectedValue.length === 0 || placeHolder) {
      return placeHolder;
    }
    // multi select is active => show selected items
    if (isMulti) {
      return (
        <div className={styles.selectTags}>
          {selectedValue.map((option) => (
            <div key={option.value} className={styles.selectTagsItem}>
              {option.label}
              <span
                onClick={(event) => onTagRemove(event, option)}
                className={styles.selectTagsClose}
              >
                <CloseIcon />
              </span>
            </div>
          ))}
        </div>
      );
    }
    return selectedValue.label;
  };
  /** filter clicked item is not equal with selected value => click to remove*/
  const removeOption = (option) => {
    return selectedValue.filter(
      (selectedItem) => selectedItem.value !== option.value
    );
  };
  /** remove item in box label */
  const onTagRemove = (event, option) => {
    event.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    onChange(newValue);
  };
  /** click the item in menu: remove item or add item to slected item*/
  const onItemClick = (option) => {
    let newValue;
    // multi select is active
    if (isMulti) {
      console.log(
        selectedValue.findIndex(
          (selectedItem) => selectedItem.value === option.value
        )
      );
      // when click the selected item, return selected items count(0 - 4).
      // when click the unselected item, reuturn -1.
      // remove item which you click and return new value
      if (
        selectedValue.findIndex(
          (selectedItem) => selectedItem.value === option.value
        ) >= 0
      ) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValue, option];
      }
    } else {
      newValue = option;
    }
    setSelectedValue(newValue);
    onChange(newValue);
  };
  /** check selected item exist: true or false for style*/
  const isSelected = (option) => {
    // check when multi select is active, same value count > 0 => true
    if (isMulti) {
      return (
        selectedValue.filter(
          (selectedItem) => selectedItem.value === option.value
        ).length > 0
      );
    }
    // no selected value =>  false
    if (!selectedValue) {
      return false;
    }
    // selected value equal to option value => true
    return selectedValue.value === option.value;
  };
  /** check search value */
  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };
  /** when typing search value, realtime check in options list */
  const getOptions = () => {
    if (!searchValue) {
      return options;
    }
    return options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    );
  };
  // trigger to close the dropdown
  useEffect(() => {
    setIsShowMenu(false);
  }, [closeTrigger]);

  return (
    <div
      className={styles.selectBox}
      onClick={(event) => event.stopPropagation()}
    >
      <div
        ref={inputRef}
        onClick={handleInputClick}
        className={styles.selectInput}
      >
        <div className={styles.selectTools}>
          <div className={styles.selectTool}>
            {isLeftArrowIcon && <ArrowIcon />}
          </div>
        </div>
        <div className={styles.selectSelectedValue}>{getDisplay()}</div>
        <div className={styles.selectTools}>
          <div className={styles.selectTool}>
            {isRightArrowIcon && <ArrowIcon />}
          </div>
        </div>
      </div>
      {isShowMenu && (
        <div className={styles.selectMenu}>
          {isSearchable && (
            <div className={styles.searchBox}>
              <span className={styles.magnifier}>
                <MagnifierIcon />
              </span>
              <input onChange={onSearch} value={searchValue} ref={searchRef} />
            </div>
          )}
          {getOptions().map((option) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.value}
              className={
                isSelected(option) ? styles.selected : styles.selectItem
              }
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
