// react
import { useState } from "react";
// scss
import styles from "./index.module.scss";
// component
import { DropdownArrowIcon } from "../../../../assets/svgIcons";

const FaqContent = () => {
  /** data */
  const data = [
    {
      title: "How MKTFY works?",
      description: `These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and [business entity name] (“we,” “us” or “our”), concerning your access to and use of the [website name.com] website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).

You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.

Supplemental Terms of Service or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason.

We will alert you about any changes by updating the “Last updated” date of these Terms of Service, and you waive any right to receive specific notice of each such change.

It is your responsibility to periodically review these Terms of Service to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Service by your continued use of the Site after the date such revised Terms of Service are posted.

The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.`,
    },
    {
      title: "How can I sell things on MKTFY",
      description: "How can I sell things on MKTFY",
    },
    {
      title: "Where the products come from?",
      description: "Where the products come from",
    },
    { title: "Can I have a refund?", description: "Can I have a refund?" },
    { title: "Where MKTFY is based?", description: "Where MKTFY is based?" },
  ];

  /** initialize */
  // selected item defalt data[0]
  const [selectedItem, setSelectedItem] = useState(data[0]);
  /** fuctions */
  /** selected item */
  const handleSelectionClick = (index) => {
    setSelectedItem(data[index]);
  };
  /** reder selection */
  const renderSelection = (index) => (
    <button
      key={index}
      className={styles.selection}
      disabled={selectedItem.title === data[index].title}
      onClick={() => handleSelectionClick(index)}
    >
      {data[index].title}
      <div className={styles.iconBox}>
        <DropdownArrowIcon />
      </div>
    </button>
  );

  return (
    <div className={styles.faqContentBox}>
      <div className={styles.selectionsBox}>
        <ul>{data.map((_, index) => renderSelection(index))}</ul>
      </div>
      <div className={styles.contentBox}>
        <span className={styles.contentTitle}>{selectedItem.title}</span>
        <div className={styles.contentDetail}>{selectedItem.description}</div>
      </div>
    </div>
  );
};

export default FaqContent;
