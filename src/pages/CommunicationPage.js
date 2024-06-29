import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CommunicationPage.module.css";

const CommunicationPage = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/communication-2-page");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/communication-2-page");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.communicationPage}>
      <img className={styles.startingIcon} alt="" src="/starting1@2x.png" />
      <img className={styles.mdilocationIcon} alt="" src="/mdilocation.svg" />
      <div className={styles.requestForCommunication}>
        Request for Communication
      </div>
      <div className={styles.subjectRequestForContainer}>
        <p
          className={styles.subjectRequestFor}
        >{`Subject: Request for Virtual Communication `}</p>
        <p className={styles.vishnuTiwari}>
          <i>Vishnu Tiwari</i>
        </p>
        <p className={styles.vishnuTiwari}>
          <span className={styles.prisonerId}>Prisoner ID -</span>
          <i> 0763</i>
        </p>
        <p className={styles.vishnuTiwari}>
          <i>Ghaziabad Dasna district jail</i>
        </p>
        <p className={styles.vishnuTiwari}>
          <i>16-01-24</i>
        </p>
        <p className={styles.vishnuTiwari}>
          <i>Mr. Tanvir Singh</i>
        </p>
        <p className={styles.vishnuTiwari}>
          <i>Chief Executive Officer</i>
        </p>
        <p className={styles.vishnuTiwari}>
          <i>Dasna</i>
        </p>
        <p className={styles.subjectRequestFor}>{` `}</p>
        <p className={styles.vishnuTiwari}>
          <span className={styles.prisonerId}>{`Dear `}</span>
          <i className={styles.singh}>Singh</i>
          <span className={styles.span}>,</span>
        </p>
        <p className={styles.vishnuTiwari}>
          <span className={styles.span}>
            I hope this letter finds you well. My name is [
          </span>
          <i className={styles.singh}>Vishnu Tiwari</i>
          <span
            className={styles.prisonerId}
          >{`], and I am an undertrial prisoner currently incarcerated at `}</span>
          <i className={styles.singh}>Dasna</i>
          <span className={styles.span}>
            . I am writing to request permission for virtual communication with
            my family.
          </span>
        </p>
        <p className={styles.vishnuTiwari}>
          <span
            className={styles.span}
          >{`I understand the importance of maintaining the security and order within the facility, and I appreciate the measures in place to ensure the safety of all inmates and staff. However, I am seeking the opportunity to virtually connect with my family members, who are unable to visit in person due to `}</span>
          <i className={styles.singh}>Emotional Support</i>
          <span className={styles.span}>.</span>
        </p>
        <p className={styles.subjectRequestFor}>
          I believe that virtual communication will not only strengthen my ties
          with my family but also provide an additional means of support during
          my time in custody. I am committed to complying with all guidelines
          and regulations set forth by the prison administration for such
          communications.
        </p>
        <p className={styles.subjectRequestFor}>
          To facilitate this request, I propose the use of a secure video
          conferencing platform approved by the prison authorities. I am aware
          of the need for security and privacy during such interactions and
          assure you that I will adhere to all rules and protocols established
          for virtual communication.
        </p>
        <p className={styles.subjectRequestFor}>
          I kindly request your consideration of this matter and would be
          grateful for the opportunity to discuss this request further if
          needed. I am open to any conditions or guidelines that you may deem
          necessary to ensure the appropriateness and security of the virtual
          communication.
        </p>
        <p className={styles.subjectRequestFor}>
          Thank you for your time and consideration. I understand the challenges
          involved and appreciate your efforts in maintaining the facility's
          operations. I look forward to your positive response to this request.
        </p>
        <p className={styles.subjectRequestFor}>Sincerely,</p>
        <p className={styles.vishnuTiwari}>
          <i className={styles.singh}>Vishnu Tiwari</i>
          <span className={styles.span}>{` `}</span>
        </p>
        <p className={styles.vishnuTiwari}>
          <span className={styles.span}>{`Prisoner ID - `}</span>
          <i className={styles.singh}>{`0763 `}</i>
        </p>
        <p className={styles.subjectRequestFor}>{` `}</p>
      </div>
      <button
        className={styles.communicationPageInner}
        onClick={onGroupButtonClick}
      >
        <div
          className={styles.rectangleWrapper}
          onClick={onFrameContainerClick}
        >
          <div className={styles.frameChild} />
        </div>
      </button>
      <div className={styles.applyWrapper}>
        <div className={styles.apply}>Apply</div>
      </div>
      <button className={styles.group} onClick={onGroupClick}>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
      </button>
    </div>
  );
};

export default CommunicationPage;
