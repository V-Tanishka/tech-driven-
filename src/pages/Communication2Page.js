import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Communication2Page.module.css";

const Communication2Page = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.communication2Page}>
      <img
        className={styles.startingIcon}
        alt=""
        src="/scanninig-page@3x.png"
      />
      <i className={styles.yourRequestHasContainer}>
        <p className={styles.yourRequestHas}>Your request has been applied !</p>
      </i>
      <i className={styles.soonYouWill}>
        Soon you will be notified regarding the application,
      </i>
      <i className={styles.thankYou}>Thank you .</i>
      <div className={styles.libertyloomAllRights}>
        © 2023, LibertyLoom. All rights reserved.
      </div>
      <button className={styles.group} onClick={onGroupClick}>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
      </button>
    </div>
  );
};

export default Communication2Page;
