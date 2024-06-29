import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DocumentPage.module.css";

const DocumentPage = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.documentPage}>
      <img className={styles.startingIcon} alt="" src="/starting2@2x.png" />
      <div className={styles.legalDocuments}>{`Legal Documents `}</div>
      <div className={styles.fir}>{`   FIR `}</div>
      <div className={styles.application}>Application</div>
      <div className={styles.warrent}>{`Warrent `}</div>
      <div className={styles.aadharCard}>
        <p className={styles.aadharCard1}>Aadhar Card</p>
      </div>
      <img className={styles.fir1Icon} alt="" src="/fir-1@2x.png" />
      <img
        className={styles.application1Icon}
        alt=""
        src="/application-1@2x.png"
      />
      <img className={styles.warrent11} alt="" src="/warrent-1-1@2x.png" />
      <img
        className={styles.aadharCardVishal1}
        alt=""
        src="/aadhar-card-vishal-1@2x.png"
      />
      <button className={styles.group} onClick={onGroupClick}>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
      </button>
    </div>
  );
};

export default DocumentPage;
