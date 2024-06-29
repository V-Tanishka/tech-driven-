import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CaseInformationPage.module.css";

const CaseInformationPage = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.caseInformationPage}>
      <img className={styles.startingIcon} alt="" src="/starting6@2x.png" />
      <div className={styles.caseInformationCaseContainer}>
        <p className={styles.caseInformation}>
          <b>{`                                                              `}</b>
          <span className={styles.case}>Case</span>
          <b className={styles.b}>{` `}</b>
          <span className={styles.case}>Information</span>
          <b>:</b>
        </p>
        <p className={styles.caseInformation}>
          <b></b>
        </p>
        <p className={styles.caseNumber159}>
          <span className={styles.caseNumber}>Case Number:</span>
          <span>
            <b className={styles.ramPrakash}>{` `}</b>
            <i className={styles.i}>159</i>
            <b></b>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span>
            <b></b>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span className={styles.court}>Court:</span>
          <i className={styles.allahabadHighCourt}> Allahabad High Court</i>
        </p>
        <p className={styles.caseInformation}>
          <i className={styles.allahabadHighCourt}></i>
        </p>
        <p className={styles.caseNumber159}>
          <span className={styles.caseNumber}>Date of Incident</span>
          <span>
            <b className={styles.ramPrakash}>{`: `}</b>
            <i className={styles.i}>{`09/12/23 `}</i>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span>
            <b></b>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span className={styles.court}>{`Accused: `}</span>
          <span>
            <i className={styles.allahabadHighCourt}>Vishnu Tiwari</i>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span>
            <b></b>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span className={styles.court}>{`Victim: `}</span>
          <span>
            <i className={styles.allahabadHighCourt}>Ram Prakash (Deceased)</i>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span>
            <b></b>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span className={styles.court}>{`Charges: `}</span>
          <span>
            <i className={styles.allahabadHighCourt}>Murder</i>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span>
            <b></b>
          </span>
        </p>
        <p className={styles.briefOverview}>Brief Overview:</p>
        <p className={styles.caseInformation}>
          <span>
            <i className={styles.i}>On</i>
            <b className={styles.ramPrakash}>{` 08/12/23, Vishnu Tiwari `}</b>
            <i className={styles.allahabadHighCourt}>
              was involved in an incident resulting in the death of
            </i>
            <b className={styles.ramPrakash}>{` Ram Prakash, `}</b>
            <i className={styles.i}>a</i>
            <b className={styles.ramPrakash}>{` 55-year-old `}</b>
            <i className={styles.i}>resident of</i>
            <b className={styles.ramPrakash}>{` [nayi chowk,meerut]. `}</b>
            <i className={styles.i}>The</i>
            <b className={styles.ramPrakash}> accused, Vishnu Tiwari,</b>
            <i
              className={styles.i}
            >{` has been charged with the offense of murder under `}</i>
            <b className={styles.ramPrakash}>[</b>
            <i className={styles.ramPrakash}>
              PC Section 300 , IPC Section 302
            </i>
            <b>].</b>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span>
            <b></b>
          </span>
        </p>
        <p className={styles.briefOverview}>Incident Details:</p>
        <p className={styles.caseInformation}>
          <span>
            <i className={styles.i}>The incident took place at</i>
            <b className={styles.ramPrakash}> [Meerut, Uttar Pradesh],</b>
            <i className={styles.allahabadHighCourt}>
              {" "}
              where Vishnu Tiwari allegedly engaged in a physical altercation
              with Ram Prakash, leading to fatal injuries. The prosecution
              contends that the accused, with the intention of causing harm,
              unlawfully caused the death of Ram Prakash.
            </i>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span>
            <b></b>
          </span>
        </p>
        <p className={styles.briefOverview}>Investigation:</p>
        <p className={styles.caseInformation}>
          <span>
            <i className={styles.allahabadHighCourt}>
              Law enforcement authorities conducted a thorough investigation
              into the circumstances surrounding the incident. The investigation
              involved gathering witness statements, forensic analysis, and
              examination of the crime scene. The evidence collected during the
              investigation forms the basis for the charges brought against
            </i>
            <b className={styles.ramPrakash}>{` `}</b>
            <i className={styles.i}>Vishnu Tiwari.</i>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span>
            <b></b>
          </span>
        </p>
        <p className={styles.briefOverview}>Legal Proceedings:</p>
        <p className={styles.caseInformation}>
          <span>
            <i className={styles.i}>
              Vishnu Tiwari has been formally charged with murder, and legal
              proceedings have commenced at
            </i>
            <b className={styles.ramPrakash}>{` [Allahabad High Court]. `}</b>
            <i className={styles.allahabadHighCourt}>
              The prosecution will present its case, including witness
              testimonies and collected evidence, to establish the guilt of the
              accused. The defense will have the opportunity to present its case
              and challenge the evidence put forth by the prosecution.
            </i>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span>
            <b></b>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span className={styles.court}>Upcoming Court Dates</span>
          <span>
            <b>:</b>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span>
            <b>{`1. [15/01/24]: `}</b>
            <i className={styles.allahabadHighCourt}>Preliminary Hearing</i>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span>
            <b className={styles.ramPrakash}>{`2. [18/01/24]: `}</b>
            <i className={styles.allahabadHighCourt}>Trial Commencement</i>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span>
            <b></b>
          </span>
        </p>
        <p className={styles.briefOverview}>Legal Representation:</p>
        <p className={styles.caseInformation}>
          <span>
            <i className={styles.i}>Vishnu Tiwari is represented by</i>
            <b
              className={styles.ramPrakash}
            >{` [ Advocate Anil Kumar Srivastav], `}</b>
            <i className={styles.i}>{`while the State is represented by `}</i>
            <b className={styles.ramPrakash}>[Advocate Rajesh Gupta].</b>
            <i className={styles.allahabadHighCourt}>
              {" "}
              Both legal representatives will present their arguments and
              evidence during the trial proceedings.
            </i>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span>
            <i className={styles.allahabadHighCourt}></i>
          </span>
        </p>
        <p className={styles.briefOverview}>Status of the Accused:</p>
        <p className={styles.caseInformation}>
          <span>
            <i className={styles.allahabadHighCourt}>
              Vishnu Tiwari is currently in custody awaiting trial. The court
              has determined bail conditions, and the accused is being held in
            </i>
            <b> [Jail].</b>
          </span>
        </p>
        <p className={styles.caseInformation}>
          <span>
            <b></b>
          </span>
        </p>
        <p className={styles.briefOverview}>Note:</p>
        <p className={styles.caseInformation}>
          <i className={styles.allahabadHighCourt}>
            The information provided here is a general outline of the case based
            on available details. The case may undergo updates and changes as
            the legal proceedings unfold, and additional information becomes
            available.
          </i>
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

export default CaseInformationPage;
