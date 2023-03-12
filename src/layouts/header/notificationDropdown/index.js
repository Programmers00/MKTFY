import { useState, useEffect } from "react";
// scss
import styles from "./index.module.scss";
// component
import Dropdown from "../../../components/Dropdown";
// svg icon
import {
  NotificationIcon,
  NotificationActiveIcon,
} from "../../../assets/svgIcons";
// user name from redux
import { useDispatch } from "react-redux";
import {
  fetchNotifications,
  updateNotification,
} from "../../../store/actions/notifications";

const WelcomeDropdown = () => {
  /** initialize */
  // dispatch
  const dispatch = useDispatch();
  /** data */
  // trigger to close dropdown
  const [closeTrigger, setCloseTrigger] = useState(0);
  // check notification active
  const [isNotification, setIsNotification] = useState(false);
  // notifications
  const [notifications, setNotifications] = useState([]);
  // notification id
  const [clickedNotificationId, setClickedNotificationId] = useState("");

  /** params */
  const getParams = {}; // params for get notification
  const putParams = { id: clickedNotificationId }; // params for put notification

  /** get data: when mounting, closing dropdown => works(call api)*/
  useEffect(() => {
    const getData = async () => {
      /** api: get notification */
      const response = await dispatch(fetchNotifications(getParams));
      /** if success, set data */
      if (response.data.code === "SUCCESS") {
        setNotifications(response.data.notifications);
      }
    };
    getData();
    // when clicked notification, close and requset notifications!
  }, [closeTrigger]);

  // notifications check
  useEffect(() => {
    setIsNotification(
      notifications.find((element) => element.isRead === true) !== undefined
    );
  }, [notifications]);

  /** functions */
  /** click notification, triger for close dropdown */
  const onReadNotification = async (notificationId) => {
    // set clicked notification id for putParams
    setClickedNotificationId(notificationId);

    /** api: put notificaion, when read */
    const response = await dispatch(updateNotification(putParams));
    if (response.data.code === "SUCCESS") {
      console.log("#Success update notification");
    }
    // always make new value => trigger ==> request notifications trigger
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
        {notifications.map((element) => {
          return (
            element.isRead && (
              <span
                key={element.id}
                className={styles.content}
                onClick={() => onReadNotification(element.id)}
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
        {notifications.map((element) => {
          return (
            !element.isRead && (
              <span
                key={element.id}
                className={styles.content}
                // no function now, just close
                onClick={() => setCloseTrigger(new Date())}
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
