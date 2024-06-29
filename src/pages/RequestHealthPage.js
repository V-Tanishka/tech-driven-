import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RequestHealthPage.module.css";

const RequestHealthPage = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/jailer-homepage");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/health-support-2-page");
  }, [navigate]);

  const onRequestText1Click = useCallback(() => {
    navigate("/jailer-homepage");
  }, [navigate]);

  return (
    <div className={styles.requestHealthPage}>
      <img
        className={styles.startingIcon}
        alt=""
        src="/scanninig-page@3x.png"
      />
      <b className={styles.request}>Request</b>
      <div className={styles.healthSupport}>Health Support</div>
      <div className={styles.prisonerIdContainer}>
        <b>{`Prisoner Id : `}</b>
        <i className={styles.i}>0763</i>
      </div>
      <b className={styles.thankYou}>{`Thank you. `}</b>
      <button className={styles.vectorWrapper} onClick={onGroupButtonClick}>
        <img className={styles.vectorIcon} alt="" src="/vector14.svg" />
      </button>
      <img
        className={styles.drBrajNandanPathak2Icon}
        alt=""
        src="/drbrajnandanpathak-2@2x.png"
      />
      <div className={styles.drBrajNandan}>Dr. Braj Nandan Pathak</div>
      <div className={styles.vaishaliGhaziabad}>Vaishali, Ghaziabad</div>
      <div className={styles.yearsExperience}>37 years Experience</div>
      <button
        className={styles.requestHealthPageInner}
        onClick={onGroupButton1Click}
      >
        <div className={styles.groupChild} />
      </button>
      <div className={styles.request1} onClick={onRequestText1Click}>
        Request
      </div>
      <div className={styles.requestHealthPageChild} />
    </div>
  );
};

export default RequestHealthPage;
