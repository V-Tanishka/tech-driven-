import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PrivacyPolicyPage.module.css";

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/scanninig-page");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.privacyPolicyPage}>
      <img className={styles.startingIcon} alt="" src="/starting4@2x.png" />
      <div className={styles.privacyPolicy}>Privacy Policy</div>
      <div className={styles.lastUpdated10012024Container}>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              Last Updated: [10-01-2024]
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.howWeUse}>Introduction:</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              LibertyLoom ("we," "us," or "our") is committed to safeguarding
              the privacy of users who access our website, applications, and
              related services. This Privacy Policy outlines how we collect,
              use, disclose, and protect the personal information of individuals
              using our technology-driven solutions for undertrial prisoners in
              India.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.howWeUse}>1. Information We Collect:</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              We may collect the following types of information from users:
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              - Personal Information: This includes, but is not limited to,
              names, contact information, and other identifying details provided
              by users during registration or through the use of our services.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              - User Activity: We may collect information about users'
              interactions with our platform, including login details, usage
              patterns, and other relevant activities.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              Device Information: We may gather information about the devices
              used to access LibertyLoom, such as device type, operating system,
              and browser details.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.howWeUse}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.howWeUse}>
              2. How We Use Collected Information:
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              We use the collected information for the following purposes:
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              - To provide and improve our services, including personalized user
              experiences.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              - To communicate with users, respond to inquiries, and provide
              support.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              - To enhance the security and functionality of our platform.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              - To analyze usage patterns and improve the overall performance of
              LibertyLoom.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              - To comply with legal obligations and regulations.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.howWeUse}>
              3. Data Sharing and Disclosure:
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              We may share or disclose personal information under the following
              circumstances:
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              - With Consent: We may share information when users provide
              explicit consent for such disclosure.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              - Service Providers: We may engage third-party service providers
              to assist with various aspects of our operations, and they may
              have access to personal information for these purposes.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              - Legal Compliance: We may disclose information when required by
              law or in response to legal processes, such as court orders or
              government requests.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.howWeUse}>4. Security Measures:</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              We implement industry-standard security measures to protect the
              confidentiality and integrity of users' personal information.
              However, users should be aware that no online platform can
              guarantee absolute security.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.howWeUse}>5. Your Choices:</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              Users have the right to access, correct, or delete their personal
              information. They can also choose to opt-out of certain
              communications. For such requests or for additional information
              about privacy practices, users can contact us at
              [privacy@libertyloom.com](mailto:privacy@libertyloom.com).
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.howWeUse}>
              6. Changes to Privacy Policy:
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              LibertyLoom reserves the right to update or modify this Privacy
              Policy. Any changes will be effective upon posting on our website.
              Users are encouraged to review this policy periodically.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.howWeUse}>7. Contact Information:</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.libertyloomWeUs}>
              For questions or concerns related to this Privacy Policy or
              LibertyLoom's privacy practices, users can contact us at [
            </span>
          </span>
          <span className={styles.libertyloomWeUs}>
            <span className={styles.contactlibertyloomcom}>
              contact@libertyloom.com
            </span>
            <span className={styles.mailto}>](mailto:</span>
            <span className={styles.contactlibertyloomcom}>
              contact@libertyloom.com
            </span>
            <span>).</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span className={styles.libertyloomWeUs}>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span className={styles.libertyloomWeUs}>
            <span>
              By using LibertyLoom's services, users acknowledge that they have
              read, understood, and agreed to the terms outlined in this Privacy
              Policy.
            </span>
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

export default PrivacyPolicyPage;
