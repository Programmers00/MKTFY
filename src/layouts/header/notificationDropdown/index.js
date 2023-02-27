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
// user name from redux
import { useDispatch } from "react-redux";
import {
  getNotifications,
  readNotification,
} from "../../../store/actions/notifications";

const WelcomeDropdown = ({ userName }) => {
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

  /** request options */
  // get notifications
  const getNotificationsOptions = {
    url: "/api/user/notifications",
    params: {},
  };
  // read notificaion
  const readNotificationOptions = {
    url: "/api/user/notifications",
    params: { id: clickedNotificationId },
    method: "put",
  };

  /** useEffect */
  /** when mounting, closing dropdown => works(call api)*/
  useEffect(() => {
    const getData = async () => {
      try {
        /** redux request api*/
        // request notifications
        const responseNotifications = await dispatch(
          getNotifications(getNotificationsOptions)
        );

        /** set response data*/
        // set notifications
        setNotifications(responseNotifications.data.notifications);
      } catch (error) {}
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
    setClickedNotificationId(notificationId);
    try {
      /** redux request api*/
      // request read notification
      const responseReadNotification = await dispatch(
        readNotification(readNotificationOptions)
      );
      console.log("#responseReadNotification", responseReadNotification.data);
    } catch (error) {}
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
