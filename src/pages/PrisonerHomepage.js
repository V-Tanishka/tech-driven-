import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PrisonerHomepage.module.css";

const PrisonerHomepage = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/scanninig-page");
  }, [navigate]);

  const onMenuClick = useCallback(() => {
    navigate("/scanninig-page");
  }, [navigate]);

  const onCaseInformation1Click = useCallback(() => {
    navigate("/case-information-page");
  }, [navigate]);

  const onClickHereClick = useCallback(() => {
    navigate("/case-information-page");
  }, [navigate]);

  const onFrameClick = useCallback(() => {
    navigate("/court-proceeding-page");
  }, [navigate]);

  const onCourtProceedingClick = useCallback(() => {
    navigate("/court-proceeding-page");
  }, [navigate]);

  const onSkillDevelopment1Click = useCallback(() => {
    navigate("/skill-development-page");
  }, [navigate]);

  const onSkillDevelopmentClick = useCallback(() => {
    navigate("/skill-development-page");
  }, [navigate]);

  const onFrame1Click = useCallback(() => {
    navigate("/lawyer-page");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/lawyer-page");
  }, [navigate]);

  const onLawyersTextClick = useCallback(() => {
    navigate("/lawyer-page");
  }, [navigate]);

  const onFrame2Click = useCallback(() => {
    navigate("/health-support-page");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/health-support-page");
  }, [navigate]);

  const onHealthSupportClick = useCallback(() => {
    navigate("/health-support-page");
  }, [navigate]);

  const onFrame3Click = useCallback(() => {
    navigate("/communication-page");
  }, [navigate]);

  const onCommunicationClick = useCallback(() => {
    navigate("/communication-page");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/document-page");
  }, [navigate]);

  const onDocuments1ContainerClick = useCallback(() => {
    navigate("/document-page");
  }, [navigate]);

  const onPrivacyPolicy1Click = useCallback(() => {
    navigate("/privacy-policy-page");
  }, [navigate]);

  const onTermsOfService1Click = useCallback(() => {
    navigate("/terms-of-service-page");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/disclaimer-page");
  }, [navigate]);

  const onDisclaimerTextClick = useCallback(() => {
    navigate("/disclaimer-page");
  }, [navigate]);

  return (
    <div className={styles.prisonerHomepage}>
      <button className={styles.menuWrapper} onClick={onFrameButtonClick}>
        <button className={styles.menu} onClick={onMenuClick}>
          <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
        </button>
      </button>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.frame2}>
            <div className={styles.frame3}>
              <img
                className={styles.vishnuKumar21}
                alt=""
                src="/vishnu-kumar-2-1@2x.png"
              />
              <div className={styles.name}>{`Name : `}</div>
              <i className={styles.vishnuTiwari}>{`Vishnu Tiwari `}</i>
              <div className={styles.sex}>
                <span className={styles.height}>Sex</span>
                <span className={styles.span}> :</span>
              </div>
              <i className={styles.male}>Male</i>
              <div className={styles.age}>Age :</div>
              <i className={styles.i}>41</i>
              <div className={styles.weight}>Weight :</div>
              <i className={styles.i1}>68</i>
              <div className={styles.height16948cmContainer}>
                <span className={styles.height}>Height :</span>
                <i className={styles.cm}> 169.48cm</i>
              </div>
              <div className={styles.aadharNoContainer}>
                <span className={styles.height}>Aadhar No. :</span>
                <i className={styles.cm}> 4704-5555-0127</i>
              </div>
              <div className={styles.healthClearContainer}>
                <p className={styles.healthClear}>
                  <span className={styles.height}>{`Health    :  `}</span>
                  <span className={styles.span1}>{` `}</span>
                  <i className={styles.clear}>Clear</i>
                </p>
                <p className={styles.condition}>{`condition `}</p>
              </div>
              <div className={styles.caseChargedContainer}>
                <span className={styles.height}>{`Case : `}</span>
                <i>Charged for Murder</i>
                <span className={styles.height}>{` `}</span>
              </div>
              <div className={styles.sectionIpcContainer}>
                <span className={styles.span}>{`Section : `}</span>
                <i>IPC Section 300 , IPC Section 302</i>
              </div>
              <div className={styles.completeCaseInformation}>
                Complete case information :
              </div>
              <button
                className={styles.caseInformation1}
                onClick={onCaseInformation1Click}
              />
              <button className={styles.clickHere} onClick={onClickHereClick}>
                Click here !
              </button>
            </div>
          </div>
          <div className={styles.frame4}>
            <div className={styles.frame5}>
              <div className={styles.frame6}>
                <button className={styles.frame7} onClick={onFrameClick}>
                  <div className={styles.courtProceedings1} />
                  <button
                    className={styles.courtProceeding}
                    onClick={onCourtProceedingClick}
                  >
                    Court Proceeding
                  </button>
                </button>
                <div className={styles.frame8}>
                  <div className={styles.frame9}>
                    <button
                      className={styles.skillDevelopment1}
                      onClick={onSkillDevelopment1Click}
                    />
                    <button
                      className={styles.skillDevelopment}
                      onClick={onSkillDevelopmentClick}
                    >
                      Skill Development
                    </button>
                  </div>
                  <button className={styles.frame10} onClick={onFrame1Click}>
                    <button
                      className={styles.lawyers1Wrapper}
                      onClick={onFrameButton1Click}
                    >
                      <div className={styles.courtProceedings1} />
                    </button>
                    <div
                      className={styles.lawyers}
                      onClick={onLawyersTextClick}
                    >
                      Lawyers
                    </div>
                  </button>
                  <button className={styles.frame11} onClick={onFrame2Click}>
                    <div
                      className={styles.healthSupport1Wrapper}
                      onClick={onFrameContainerClick}
                    >
                      <div className={styles.healthSupport1} />
                    </div>
                    <button
                      className={styles.healthSupport}
                      onClick={onHealthSupportClick}
                    >
                      <span className={styles.healthSupport2}>
                        Health Support
                      </span>
                      <i className={styles.i3}>{` `}</i>
                    </button>
                  </button>
                  <button className={styles.frame12} onClick={onFrame3Click}>
                    <div className={styles.courtProceedings1} />
                    <button
                      className={styles.communication}
                      onClick={onCommunicationClick}
                    >
                      Communication
                    </button>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.frame13}>
              <div className={styles.frame14}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/ellipse-1.svg"
                />
                <img className={styles.frameItem} alt="" src="/ellipse-2.svg" />
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/ellipse-4.svg"
                />
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="/ellipse-4.svg"
                />
                <div className={styles.lineDiv} />
                <div className={styles.frameChild1} />
                <div className={styles.frameChild2} />
                <div className={styles.firCopy}>FIR Copy</div>
                <div className={styles.application}>Application</div>
                <div className={styles.submission}>Submission</div>
                <div className={styles.hearing}>Hearing</div>
                <b className={styles.bailProcess}>Bail Process</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame15}>
        <div className={styles.frame16}>
          <div className={styles.libertyloomAllRights}>
            © 2023, LibertyLoom. All rights reserved.
          </div>
          <button
            className={styles.documents1Wrapper}
            onClick={onFrameButton2Click}
          >
            <div
              className={styles.documents1}
              onClick={onDocuments1ContainerClick}
            >
              <div className={styles.documents}> Documents</div>
            </div>
          </button>
          <button
            className={styles.privacyPolicy1}
            onClick={onPrivacyPolicy1Click}
          >
            <div className={styles.privacyPolicy}>Privacy policy</div>
          </button>
          <button
            className={styles.termsOfService1}
            onClick={onTermsOfService1Click}
          >
            <div className={styles.termsOfService}>{`Terms of service `}</div>
          </button>
          <div className={styles.div}>|</div>
          <div className={styles.div1}>|</div>
          <button
            className={styles.disclaimerWrapper}
            onClick={onFrameButton3Click}
          >
            <div
              className={styles.disclaimer}
              onClick={onDisclaimerTextClick}
            >{`Disclaimer `}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrisonerHomepage;
