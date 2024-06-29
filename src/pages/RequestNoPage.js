import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RequestNoPage.module.css";

const RequestNoPage = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/jailer-homepage");
  }, [navigate]);

  return (
    <div className={styles.requestNoPage}>
      <img
        className={styles.startingIcon}
        alt=""
        src="/scanninig-page@3x.png"
      />
      <b className={styles.request}>Request</b>
      <b className={styles.theirIsNo}>Their is no such request is made .</b>
      <b className={styles.thankYou}>{`Thank you. `}</b>
      <button className={styles.vectorWrapper} onClick={onGroupButtonClick}>
        <img className={styles.vectorIcon} alt="" src="/vector14.svg" />
      </button>
    </div>
  );
};

export default RequestNoPage;
