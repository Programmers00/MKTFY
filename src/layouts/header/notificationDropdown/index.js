import { useState, useEffect } from "react";
// scss
import styles from "./index.module.scss";
// component
import Dropdown from "../../../components/dropdown";
// svg icon
import {
  NotificationIcon,
  NotificationActiveIcon,
} from "../../../assets/svgIcons";

const WelcomeDropdown = ({ userName }) => {
  /** initialize */
  // trigger to close dropdown
  const [closeTrigger, setCloseTrigger] = useState(0);
  // check notification active
  const [isNotification, setIsNotification] = useState(false);
  /** data */
  // notification
  const notification = [
    {
      notifier: "MKTFY",
      summary: "Hey Pearl, welcome to MKTFY",
      date: "September 22 2023",
      isRead: false,
      key: 6,
    },
    {
      notifier: "MKTFY",
      summary: "Let's create your first offer!",
      date: "September 21 2023",
      isRead: false,
      key: 5,
    },
    {
      notifier: "MKTFY",
      summary: "Our Terms of Service has been updated!",
      date: "September 20 2023",
      isRead: true,
      key: 4,
    },
    {
      notifier: "MKTFY",
      summary: "Hey Pearl, welcome to MKTFY",
      date: "September 19 2023",
      isRead: true,
      key: 3,
    },
    {
      notifier: "MKTFY",
      summary: "Let's create your first offer!",
      date: "September 05 2023",
      isRead: true,
      key: 2,
    },
    {
      notifier: "MKTFY",
      summary: "Our Terms of Service has been updated!",
      date: "September 03 2023",
      isRead: false,
      key: 1,
    },
  ];
  /** useEffect */
  // notification check
  useEffect(() => {
    setIsNotification(
      notification.find((element) => element.isRead === true) !== undefined
    );
  }, []);

  /** functions */
  /** triger for close dropdown */
  const onCloseTrigger = () => {
    // always make new value => trigger
    setCloseTrigger(new Date());
  };

  return (
    <Dropdown isRightTail closeTrigger={closeTrigger}>
      {/* button */}
      <div className={styles.icon}>
        {isNotification ? <NotificationActiveIcon /> : <NotificationIcon />}
      </div>
      {/* content */}
      <div className={styles.notificationContentBox}>
        {/* new for you */}
        {isNotification && <span className={styles.title}>New for you</span>}
        {/* new items */}
        {notification.map((element) => {
          return (
            element.isRead && (
              <span
                key={element.key}
                className={styles.content}
                onClick={onCloseTrigger}
              >
                <div className={styles.circle}>{element.notifier}</div>
                <div className={styles.summaryBox}>
                  <span className={styles.summary}>{element.summary}</span>
                  <span className={styles.date}>{element.date}</span>
                </div>
              </span>
            )
          );
        })}
        {/* previously seen */}
        <span className={styles.title} style={{ paddingTop: "50px" }}>
          Previously seen
        </span>
        {/* prev items */}
        {notification.map((element) => {
          return (
            !element.isRead && (
              <span
                key={element.key}
                className={styles.content}
                onClick={onCloseTrigger}
              >
                <div className={styles.circle}>{element.notifier}</div>
                <div className={styles.summaryBox}>
                  <span className={styles.summary}>{element.summary}</span>
                  <span className={styles.date}>{element.date}</span>
                </div>
              </span>
            )
          );
        })}
      </div>
    </Dropdown>
  );
};

export default WelcomeDropdown;
