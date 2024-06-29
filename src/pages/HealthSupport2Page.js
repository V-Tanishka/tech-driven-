import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HealthSupport2Page.module.css";

const HealthSupport2Page = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/health-support-page");
  }, [navigate]);

  return (
    <div className={styles.healthSupport2Page}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <button className={styles.group} onClick={onGroupClick}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
          </button>
        </div>
        <img className={styles.frameIcon} alt="" src="/frame1.svg" />
      </div>
      <div className={styles.frame2}>
        <div className={styles.frame3}>
          <div className={styles.yourRequestHasContainer}>
            <i>{`Your request has been sent to the `}</i>
            <span className={styles.jailer}>JAILER</span>
            <i>{` of your `}</i>
            <span className={styles.jailer}>Ghaziabad Dasna district jail</span>
            <i>{` . You will be notified regarding `}</i>
            <span className={styles.jailer}>HEALTH SUPPORT</span>
            <i>. soon docter will be appointed to you.</i>
          </div>
          <i className={styles.thankYou}>{`Thank You `}</i>
        </div>
        <div className={styles.frame4}>
          <div className={styles.libertyloomAllRights}>
            © 2023, LibertyLoom. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthSupport2Page;
