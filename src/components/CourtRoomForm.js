import { useCallback } from "react";
import styles from "./CourtRoomForm.module.css";

const CourtRoomForm = () => {
  const onFrame1Click = useCallback(() => {
    window.location.href = "https://meet.google.com/vwk-qobd-qkn";
  }, []);

  return (
    <div className={styles.frame}>
      <div className={styles.frame1}>
        <div className={styles.frame2}>
          <a className={styles.frame3}>
            <a
              className={styles.frame4}
              href="https://meet.google.com/vwk-qobd-qkn"
              onClick={onFrame1Click}
            >
              <div className={styles.frameChild} />
            </a>
            <div className={styles.frame5}>
              <a
                className={styles.courtRoom}
                href="https://meet.google.com/vwk-qobd-qkn"
                target="_blank"
              >
                Court Room
              </a>
            </div>
          </a>
          <img
            className={styles.octiconthumbsup16}
            alt=""
            src="/octiconthumbsup16.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CourtRoomForm;
