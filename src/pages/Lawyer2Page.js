import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Lawyer2Page.module.css";

const Lawyer2Page = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/lawyer-page");
  }, [navigate]);

  return (
    <div className={styles.lawyer2Page}>
      <img
        className={styles.startingIcon}
        alt=""
        src="/scanninig-page@3x.png"
      />
      <div className={styles.libertyloomAllRights}>
        © 2023, LibertyLoom. All rights reserved.
      </div>
      <div className={styles.yourRequestHasContainer}>
        <p className={styles.yourRequestHasBeenSentTo}>
          <i
            className={styles.yourRequestHas}
          >{`Your request has been sent to the `}</i>
          <span className={styles.jailer}>JAILER</span>
          <i className={styles.yourRequestHas}>{` of your `}</i>
          <span className={styles.jailer}>Ghaziabad Dasna district jail</span>
          <i>{` . Soon you will be notified regarding your new `}</i>
          <b className={styles.yourRequestHas}>Lawyer</b>
          <i>{` who `}</i>
        </p>
        <p className={styles.yourRequestHasBeenSentTo}>
          <i>will be appointed to you.</i>
        </p>
      </div>
      <i className={styles.thankYou}>{`Thank You `}</i>
      <img className={styles.vectorIcon} alt="" src="/vector9.svg" />
      <button className={styles.groupWrapper} onClick={onGroupButtonClick}>
        <img
          className={styles.groupIcon}
          alt=""
          src="/group.svg"
          onClick={onGroupClick}
        />
      </button>
    </div>
  );
};

export default Lawyer2Page;
