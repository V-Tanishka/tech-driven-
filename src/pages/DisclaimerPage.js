import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DisclaimerPage.module.css";

const DisclaimerPage = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/scanninig-page");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.disclaimerPage}>
      <img className={styles.startingIcon} alt="" src="/starting3@2x.png" />
      <div className={styles.introductionThisDisclaimerContainer}>
        <p className={styles.introductionThisDisclaimer}>
          <span>
            <span className={styles.introduction}>Introduction</span>
            <span className={styles.thisDisclaimerGoverns}>
              : This Disclaimer governs the use of the LibertyLoom website,
              applications, and any other related services. LibertyLoom is a
              technology-driven platform that aims to provide solutions for
              undertrial prisoners in India. Users are advised to carefully read
              and understand the terms outlined in this Disclaimer before using
              our services.
            </span>
          </span>
        </p>
        <p className={styles.introductionThisDisclaimer}>
          <span>
            <span className={styles.thisDisclaimerGoverns}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.introductionThisDisclaimer}>
          <span>
            <span className={styles.notLegalAdvice}>Not Legal Advice</span>
            <span className={styles.thisDisclaimerGoverns}>
              : The information provided by LibertyLoom is for general
              informational purposes only and should not be considered as legal
              advice. Users are encouraged to consult with qualified legal
              professionals for advice specific to their individual
              circumstances.
            </span>
          </span>
        </p>
        <p className={styles.introductionThisDisclaimer}>
          <span>
            <span className={styles.thisDisclaimerGoverns}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.introductionThisDisclaimer}>
          <span>
            <span className={styles.introduction}>Accuracy of Information</span>
            <span className={styles.thisDisclaimerGoverns}>
              : While we strive to provide accurate and up-to-date information,
              LibertyLoom makes no representations or warranties of any kind,
              express or implied, about the completeness, accuracy, reliability,
              suitability, or availability of the information contained on our
              platform. Users acknowledge that reliance on any information
              provided by LibertyLoom is at their own risk.
            </span>
          </span>
        </p>
        <p className={styles.introductionThisDisclaimer}>
          <span>
            <span className={styles.thisDisclaimerGoverns}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.introductionThisDisclaimer}>
          <span>
            <span className={styles.introduction}>No Endorsement</span>
            <span className={styles.thisDisclaimerGoverns}>
              : LibertyLoom may include links to external websites, services, or
              resources for the convenience of users. However, we do not endorse
              or take responsibility for the content, accuracy, or availability
              of these external sites. Users should exercise caution and use
              their discretion when accessing such links
            </span>
          </span>
        </p>
        <p className={styles.introductionThisDisclaimer}>
          <span>
            <span className={styles.thisDisclaimerGoverns}>.</span>
          </span>
        </p>
        <p className={styles.introductionThisDisclaimer}>
          <span>
            <span className={styles.introduction}>Technology Limitations</span>
            <span className={styles.thisDisclaimerGoverns}>
              : LibertyLoom utilizes technology to streamline processes and
              improve access to legal information. However, users acknowledge
              that the platform's effectiveness may be subject to technological
              limitations, and LibertyLoom does not guarantee uninterrupted,
              secure, or error-free operation of its services.
            </span>
          </span>
        </p>
        <p className={styles.introductionThisDisclaimer}>
          <span>
            <span className={styles.thisDisclaimerGoverns}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.introductionThisDisclaimer}>
          <span>
            <span className={styles.introduction}>User Responsibility</span>
            <span className={styles.thisDisclaimerGoverns}>
              : Users are responsible for ensuring the security of their login
              credentials and maintaining the confidentiality of their account
              information. LibertyLoom shall not be liable for any unauthorized
              access or use of user accounts.
            </span>
          </span>
        </p>
        <p className={styles.introductionThisDisclaimer}>
          <span>
            <span className={styles.thisDisclaimerGoverns}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.introductionThisDisclaimer}>
          <span>
            <span className={styles.introduction}>Changes to Disclaimer</span>
            <span className={styles.thisDisclaimerGoverns}>
              : LibertyLoom reserves the right to update or modify this
              Disclaimer at any time without prior notice. Users are encouraged
              to review this Disclaimer periodically for any changes.
            </span>
          </span>
        </p>
        <p className={styles.introductionThisDisclaimer}>
          <span>
            <span
              className={styles.thisDisclaimerGoverns}
            >{`Contact Information: For any questions or concerns regarding this Disclaimer or LibertyLoom's services, users can contact us at `}</span>
          </span>
          <span className={styles.thisDisclaimerGoverns}>
            <span className={styles.contactlibertyloomcom1}>
              contact@libertyloom.com
            </span>
            <span className={styles.span1}>.</span>
          </span>
        </p>
      </div>
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

export default DisclaimerPage;
