import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const onLoginPageContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFluentEmojiFlatcrossMarkBClick = useCallback(() => {
    navigate("/scanninig-page");
  }, [navigate]);

  return (
    <div className={styles.loginPage} onClick={onLoginPageContainerClick}>
      <img className={styles.startingIcon} alt="" src="/starting7@2x.png" />
      <div className={styles.loginPageChild} />
      <div className={styles.unauthorizedAccess}>{`Unauthorized access `}</div>
      <img
        className={styles.fluentEmojiHighContrastcroIcon}
        alt=""
        src="/fluentemojihighcontrastcrossmarkbutton.svg"
      />
      <div className={styles.tryAgain}>Try again.</div>
      <div className={styles.fluentEmojiFlatcrossMarkBWrapper}>
        <button
          className={styles.fluentEmojiFlatcrossMarkB}
          onClick={onFluentEmojiFlatcrossMarkBClick}
        >
          <img className={styles.groupIcon} alt="" src="/group1.svg" />
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
