import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TermsOfServicePage.module.css";

const TermsOfServicePage = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/scanninig-page");
  }, [navigate]);

  return (
    <div className={styles.termsOfServicePage}>
      <img className={styles.startingIcon} alt="" src="/starting5@2x.png" />
      <div className={styles.termsOfService}>Terms of Service</div>
      <div className={styles.lastUpdated10012024Container}>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>
              Last Updated: [10-01-2024]
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.changesToTerms}>
              1. Acceptance of Terms:
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>
              By accessing or using the services provided by LibertyLoom ("we,"
              "us," or "our"), you agree to comply with and be bound by these
              Terms of Service. If you do not agree with these terms, please
              refrain from using our website, applications, and related
              services.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.changesToTerms}>
              2. Description of Services:
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>
              LibertyLoom provides technology-driven solutions aimed at
              assisting undertrial prisoners in India. Our services may include
              but are not limited to legal information, communication tools, and
              case management features.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.changesToTerms}>3. User Eligibility:</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>
              You must be at least 18 years old to use LibertyLoom's services.
              By using our platform, you affirm that you are of legal age to
              enter into these Terms of Service.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.changesToTerms}>4. User Accounts:</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>
              To access certain features of LibertyLoom, users may need to
              create an account. Users are responsible for maintaining the
              confidentiality of their account information and ensuring its
              accuracy. Any use of the platform through a user's account is the
              user's responsibility.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.changesToTerms}>
              5. Prohibited Activities:
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>
              Users agree not to engage in any activities that may:
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>
              - Violate any applicable laws or regulations.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>
              - Infringe upon the rights of others.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>
              - Interfere with the proper functioning of LibertyLoom.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>
              - Transmit harmful code or interfere with the security of the
              platform.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.changesToTerms}>6. Privacy:</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>
              Our Privacy Policy governs the collection, use, and disclosure of
              user information. By using LibertyLoom's services, you consent to
              the terms outlined in our Privacy Policy.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.changesToTerms}>
              7. Intellectual Property:
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>
              The content, features, and functionality provided by LibertyLoom
              are protected by copyright, trademark, and other intellectual
              property laws. Users agree not to reproduce, distribute, or create
              derivative works based on our content without our explicit
              permission.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.changesToTerms}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.changesToTerms}>
              8. Modifications to Services:
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>
              LibertyLoom reserves the right to modify or discontinue any part
              of its services at any time without prior notice. We are not
              liable to users or any third party for such modifications.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.changesToTerms}>
              9. Limitation of Liability:
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>
              LibertyLoom is not liable for any direct, indirect, incidental,
              consequential, or punitive damages arising from the use of our
              services. Users acknowledge that the platform is provided "as is"
              and without warranties of any kind.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.changesToTerms}>10. Governing Law:</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>
              These Terms of Service are governed by the laws of [Applicable
              Jurisdiction]. Any disputes arising from or related to these terms
              shall be subject to the exclusive jurisdiction of the courts in
              [Applicable Jurisdiction].
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.changesToTerms}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.changesToTerms}>
              11. Changes to Terms of Service:
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>
              LibertyLoom may update these Terms of Service at any time without
              prior notice. Users are encouraged to review this document
              periodically for changes.
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.changesToTerms}>
              12. Contact Information:
            </span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.byAccessingOr}>
              For questions or concerns related to these Terms of Service or
              LibertyLoom's services, users can contact us at [
            </span>
          </span>
          <span className={styles.byAccessingOr}>
            <span className={styles.contactlibertyloomcom}>
              contact@libertyloom.com
            </span>
            <span className={styles.mailto}>](mailto:</span>
            <span className={styles.contactlibertyloomcom1}>
              contact@libertyloom.com
            </span>
            <span>).</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span className={styles.byAccessingOr}>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span className={styles.byAccessingOr}>
            <span>
              By using LibertyLoom's services, users acknowledge that they have
              read, understood, and agreed to the terms outlined in these Terms
              of Service.
            </span>
          </span>
        </p>
      </div>
      <button className={styles.groupWrapper} onClick={onGroupButtonClick}>
        <img className={styles.groupIcon} alt="" src="/group.svg" />
      </button>
    </div>
  );
};

export default TermsOfServicePage;
