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
  // const [isNotification, setIsNotification] = useState(false);
  // new notifications
  const [newNotifications, setNewNotifications] = useState([]);
  // seen notifications
  const [seenNotifications, setSeenNotifications] = useState([]);
  // notification id
  // const [clickedNotificationId, setClickedNotificationId] = useState("");

  /** params */
  // const putParams = { id: clickedNotificationId }; // params for put notification

  /** get data: when mounting, closing dropdown => works(call api)*/
  useEffect(() => {
    const getData = async () => {
      /** api: get notification */
      const response = await dispatch(fetchNotifications());
      /** if success, set data */
      if (response.status === 200) {
        setNewNotifications(response.data.new);
        setSeenNotifications(response.data.seen);
      }
    };
    getData();
    // when clicked notification, close and requset notifications!
  }, [closeTrigger]);

  /** functions */
  /** click notification, triger for close dropdown */
  // const onReadNotification = async (notificationId) => {
  // console.log("#no function yet");
  // // set clicked notification id for putParams
  // setClickedNotificationId(notificationId);

  // /** api: put notificaion, when read */
  // const response = await dispatch(updateNotification(putParams));
  // if (response.data.code === "SUCCESS") {
  //   console.log("#Success update notification");
  // }

  // always make new value => trigger ==> request notifications trigger
  //   setCloseTrigger(new Date());
  // };

  /** function */
  /** date converter */
  const dateConverter = (date) => {
    const convertedDate = new Date(date);
    const month = convertedDate.toLocaleString("default", { month: "long" }); //month short to long
    const day = date.slice(8, 10);
    const year = date.slice(0, 4);
    return month + " " + day + " " + year;
  };

  return (
    <Dropdown isRightTail closeTrigger={closeTrigger}>
      {/* button */}
      <div className={styles.icon}>
        {newNotifications.length > 0 ? (
          <NotificationActiveIcon />
        ) : (
          <NotificationIcon />
        )}
      </div>
      {/* content */}
      <div className={styles.notificationContentBox}>
        {/* new for you */}
        {newNotifications.length > 0 && (
          <span className={styles.title}>New for you</span>
        )}
        {/* new items */}
        {newNotifications.map((newNotification) => {
          return (
            newNotification && (
              <span
                key={newNotification.id}
                className={styles.content}
                // onClick={() => onReadNotification(newNotification.id)}
                // no function now, just close
                onClick={() => setCloseTrigger(new Date())}
              >
                <div className={styles.circle}>
                  {newNotification.notifier
                    ? newNotification.notifier
                    : "MKTFY"}
                </div>
                <div className={styles.summaryBox}>
                  <span className={styles.summary}>
                    {newNotification.message}
                  </span>
                  <span className={styles.date}>
                    {dateConverter(newNotification.created)}
                  </span>
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
        {seenNotifications.map((seenNotification) => {
          return (
            seenNotification && (
              <span
                key={seenNotification.id}
                className={styles.content}
                // no function now, just close
                onClick={() => setCloseTrigger(new Date())}
              >
                <div className={styles.circle}>
                  {seenNotification.notifier
                    ? seenNotification.notifier
                    : "MKTFY"}
                </div>
                <div className={styles.summaryBox}>
                  <span className={styles.summary}>
                    {seenNotification.message}
                  </span>
                  <span className={styles.date}>
                    {dateConverter(seenNotification.created)}
                  </span>
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
