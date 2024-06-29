import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SkillDevelopmentPage.module.css";

const SkillDevelopmentPage = () => {
  const navigate = useNavigate();

  const onPersonalityDevelopmentClick = useCallback(() => {
    window.location.href = "https://youtu.be/Z_AtrkeF_70?si=ASDA_H1TjivfHUDy";
  }, []);

  const onLearnMeditaionClick = useCallback(() => {
    window.location.href = "https://youtu.be/Z_AtrkeF_70?si=ASDA_H1TjivfHUDy";
  }, []);

  const onLearnYogaClick = useCallback(() => {
    window.location.href = "https://youtu.be/pQDr8v3YLPY?si=AE7jkiOzTgEAESpn";
  }, []);

  const onExerciseClick = useCallback(() => {
    window.location.href = "https://youtu.be/pQDr8v3YLPY?si=AE7jkiOzTgEAESpn";
  }, []);

  const onVocationalTrainingClick = useCallback(() => {
    window.location.href = "https://youtu.be/pQDr8v3YLPY?si=AE7jkiOzTgEAESpn";
  }, []);

  const onGroupButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.skillDevelopmentPage}>
      <img
        className={styles.startingIcon}
        alt=""
        src="/scanninig-page@3x.png"
      />
      <div className={styles.skillDevelopment}>Skill Development</div>
      <div className={styles.skillDevelopmentPageInner}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.skillDevelopmentPageChild}>
        <div className={styles.groupItem} />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupInner} />
      </div>
      <div className={styles.skillDevelopmentPageInner1}>
        <div className={styles.groupInner} />
      </div>
      <div className={styles.skillDevelopmentPageInner2}>
        <div className={styles.groupInner} />
      </div>
      <a
        className={styles.personalityDevelopment}
        href="https://youtu.be/Z_AtrkeF_70?si=ASDA_H1TjivfHUDy"
        target="_blank"
        onClick={onPersonalityDevelopmentClick}
      >{`Personality Development `}</a>
      <a
        className={styles.learnMeditaion}
        href="https://www.youtube.com/live/3fM5NOq1oM0?si=3GYpr45kYrO5itKQ"
        onClick={onLearnMeditaionClick}
      >{`Learn Meditaion  `}</a>
      <a
        className={styles.learnYoga}
        href="https://youtu.be/pQDr8v3YLPY?si=AE7jkiOzTgEAESpn"
        onClick={onLearnYogaClick}
      >
        Learn Yoga
      </a>
      <a
        className={styles.exercise}
        href="https://youtu.be/Sou12pLJFCc?si=6kuwjl5nTuQFFStx"
        onClick={onExerciseClick}
      >
        Exercise
      </a>
      <a
        className={styles.vocationalTraining}
        href="https://youtu.be/Sou12pLJFCc?si=6kuwjl5nTuQFFStx"
        onClick={onVocationalTrainingClick}
      >
        Vocational Training
      </a>
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

export default SkillDevelopmentPage;
