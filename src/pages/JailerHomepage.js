import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./JailerHomepage.module.css";

const JailerHomepage = () => {
  const navigate = useNavigate();

  const onMaterialSymbolssearchClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/request-health-page");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/request-no-page");
  }, [navigate]);

  const onRectangleButton2Click = useCallback(() => {
    navigate("/requestcommunication-page");
  }, [navigate]);

  const onRectangleButton3Click = useCallback(() => {
    navigate("/request-no-page");
  }, [navigate]);

  const onRectangleButton4Click = useCallback(() => {
    navigate("/case-information-page");
  }, [navigate]);

  const onRectangleButton5Click = useCallback(() => {
    navigate("/document-page");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/scanninig-page");
  }, [navigate]);

  return (
    <div className={styles.jailerHomepage}>
      <img className={styles.startingIcon} alt="" src="/starting7@2x.png" />
      <img
        className={styles.fluentEmojiHighContrastcroIcon}
        alt=""
        src="/fluentemojihighcontrastcrossmarkbutton.svg"
      />
      <div className={styles.tryAgain}>Try again.</div>
      <img className={styles.jailer1Icon} alt="" src="/jailer-1@2x.png" />
      <img
        className={styles.jailEmbelem1}
        alt=""
        src="/jail-embelem-1@2x.png"
      />
      <div className={styles.jailerHomepageChild} />
      <button
        className={styles.materialSymbolssearch}
        onClick={onMaterialSymbolssearchClick}
      >
        <img className={styles.vectorIcon} alt="" src="/vector15.svg" />
      </button>
      <input className={styles.input} placeholder="0763" type="number" />
      <button
        className={styles.jailerHomepageItem}
        onClick={onRectangleButtonClick}
      />
      <button
        className={styles.jailerHomepageInner}
        onClick={onRectangleButton1Click}
      />
      <button
        className={styles.rectangleButton}
        onClick={onRectangleButton2Click}
      />
      <button
        className={styles.jailerHomepageChild1}
        onClick={onRectangleButton3Click}
      />
      <button
        className={styles.jailerHomepageChild2}
        onClick={onRectangleButton4Click}
      />
      <button
        className={styles.jailerHomepageChild3}
        onClick={onRectangleButton5Click}
      />
      <div className={styles.healthSupport}>Health Support</div>
      <div className={styles.lawyers}>Lawyers</div>
      <div className={styles.communication}>Communication</div>
      <div className={styles.skillDevelopment}>Skill Development</div>
      <div className={styles.caseInformation}>Case Information</div>
      <div className={styles.documents}>Documents</div>
      <img className={styles.mdinumber1Icon} alt="" src="/mdinumber1.svg" />
      <img className={styles.mdinumber1Icon1} alt="" src="/mdinumber1.svg" />
      <div className={styles.nameMrContainer}>
        <p className={styles.nameMrTanvirSingh}>
          <b className={styles.name}>
            <span className={styles.name1}>Name</span>
            <span className={styles.span}>{` `}</span>
          </b>
          <span>
            <span className={styles.span}>{`: `}</span>
          </span>
          <span>
            <span>Mr. Tanvir Singh</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <b className={styles.name}>Age</b>
            <span>{` : 55 Years `}</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <b className={styles.name}>Position</b>
            <span>{` :Superintendent `}</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <span> officer</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <b className={styles.name}>Aadhar Card</b>
            <span>{` : `}</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <span>8559-5555-1256</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <b className={styles.name}>Jail</b>
            <span> : Dasna Ghaziyabad Jail , Uttar Pradesh</span>
          </span>
        </p>
      </div>
      <div className={styles.nameMrContainer}>
        <p className={styles.nameMrTanvirSingh}>
          <b className={styles.name}>
            <span className={styles.name1}>Name</span>
            <span className={styles.span}>{` `}</span>
          </b>
          <span>
            <span className={styles.span}>{`: `}</span>
          </span>
          <span>
            <span>Mr. Tanvir Singh</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <b className={styles.name}>Age</b>
            <span>{` : 55 Years `}</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <b className={styles.name}>Position</b>
            <span>{` :Superintendent `}</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <span> officer</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <b className={styles.name}>Aadhar Card</b>
            <span>{` : `}</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <span>8559-5555-1256</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.nameMrTanvirSingh}>
          <span>
            <b className={styles.name}>Jail</b>
            <span> : Dasna Ghaziyabad Jail , Uttar Pradesh</span>
          </span>
        </p>
      </div>
      <button className={styles.vectorWrapper} onClick={onGroupButtonClick}>
        <img className={styles.vectorIcon1} alt="" src="/vector14.svg" />
      </button>
    </div>
  );
};

export default JailerHomepage;
