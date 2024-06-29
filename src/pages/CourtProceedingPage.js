import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CourtRoomForm from "../components/CourtRoomForm";
import styles from "./CourtProceedingPage.module.css";

const CourtProceedingPage = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.courtProceedingPage}>
      <div className={styles.frame}>
        <div className={styles.courtProceedings}>Court Proceedings</div>
      </div>
      <button className={styles.group} onClick={onGroupClick}>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
      </button>
      <div className={styles.frame1}>
        <div className={styles.frame2}>
          <div className={styles.frame3}>
            <div className={styles.frame3}>
              <div className={styles.inOurCommitmentContainer}>
                <p className={styles.inOurCommitment}>
                  In our commitment to ensuring accessible and efficient
                  justice, we have established this platform for virtual court
                  proceedings. Here, you'll find a seamless and secure space
                  where legal proceedings take place remotely, leveraging
                  technology to facilitate hearings, trials, and other judicial
                  processes. Our goal is to provide a convenient and reliable
                  channel for all parties involved in the legal system. Feel
                  free to navigate the page to access relevant information,
                  documents, and participate in virtual sessions. We value your
                  presence and cooperation as we strive to uphold justice in the
                  digital age.
                </p>
                <p className={styles.inOurCommitment}>&nbsp;</p>
                <p className={styles.userInstructions}>
                  <b>User Instructions:</b>
                </p>
                <p className={styles.userInstructions}>
                  <b>&nbsp;</b>
                </p>
                <p className={styles.userInstructions}>
                  <b>{`>   `}</b>
                  <span className={styles.firstYouHave}>
                    First, you have to calm yourself before entering into the
                    court room.
                  </span>
                </p>
                <p
                  className={styles.inOurCommitment}
                >{`>   Represent yourself properly without any hesitation.`}</p>
                <p
                  className={styles.inOurCommitment}
                >{`>   Incase of feeling nervous , have some glass of water `}</p>
                <p
                  className={styles.inOurCommitment}
                >{`>   You have to click on the button`}</p>
                <p
                  className={styles.inOurCommitment}
                >{`     by clicking on the button you will       Court room   be directed towards the `}</p>
                <p className={styles.inOurCommitment}> virtual court room.</p>
                <p
                  className={styles.inOurCommitment}
                >{`>   In case of any technical issue , team will be thier to resolve the issue as `}</p>
                <p className={styles.inOurCommitment}> soon as possible.</p>
                <p
                  className={styles.inOurCommitment}
                >{`>   after the ending of court hearing you will automaticaly directed towatds `}</p>
                <p className={styles.userInstructions}>
                  <span className={styles.firstYouHave}> the Homepage.</span>
                  <b>{` `}</b>
                </p>
                <p className={styles.userInstructions}>
                  <b>&nbsp;</b>
                </p>
                <p className={styles.userInstructions}>
                  <b>{`           `}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <CourtRoomForm />
      </div>
    </div>
  );
};

export default CourtProceedingPage;
