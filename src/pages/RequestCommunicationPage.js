import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RequestCommunicationPage.module.css";

const RequestCommunicationPage = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/jailer-homepage");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/jailer-homepage");
  }, [navigate]);

  const onAcceptClick = useCallback(() => {
    navigate("/jailer-homepage");
  }, [navigate]);

  const onDeclineClick = useCallback(() => {
    navigate("/jailer-homepage");
  }, [navigate]);

  return (
    <div className={styles.requestcommunicationPage}>
      <img
        className={styles.startingIcon}
        alt=""
        src="/scanninig-page@3x.png"
      />
      <b className={styles.request}>Request</b>
      <div className={styles.communication}>Communication</div>
      <div className={styles.prisonerIdContainer}>
        <b>{`Prisoner Id : `}</b>
        <i className={styles.i}>0763</i>
      </div>
      <b className={styles.thankYou}>{`Thank you. `}</b>
      <button className={styles.vectorWrapper} onClick={onGroupButtonClick}>
        <img className={styles.vectorIcon} alt="" src="/vector14.svg" />
      </button>
      <div
        className={styles.requestcommunicationPageInner}
        onClick={onGroupContainerClick}
      >
        <div className={styles.groupChild} />
      </div>
      <div className={styles.requestcommunicationPageChild}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.requestcommunicationPageItem} />
      <div className={styles.reasonEmotionalContainer}>
        <span className={styles.reason}>Reason</span>
        <span className={styles.span}>{` : `}</span>
        <i className={styles.i}>Emotional Support</i>
      </div>
      <div className={styles.lastTimeContainer}>
        <span className={styles.span}>{`Last Time : `}</span>
        <i className={styles.i}>12/12/23</i>
      </div>
      <button className={styles.accept} onClick={onAcceptClick}>
        Accept
      </button>
      <button className={styles.decline} onClick={onDeclineClick}>
        Decline
      </button>
    </div>
  );
};

export default RequestCommunicationPage;
