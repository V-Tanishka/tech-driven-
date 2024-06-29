import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PrisonerHomepage from "./pages/PrisonerHomepage";
import LoginPage from "./pages/LoginPage";
import JailerHomepage from "./pages/JailerHomepage";
import RequestNoPage from "./pages/RequestNoPage";
import RequestHealthPage from "./pages/RequestHealthPage";
import RequestCommunicationPage from "./pages/RequestCommunicationPage";
import SkillDevelopmentPage from "./pages/SkillDevelopmentPage";
import CaseInformationPage from "./pages/CaseInformationPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import DocumentPage from "./pages/DocumentPage";
import CommunicationPage from "./pages/CommunicationPage";
import Communication2Page from "./pages/Communication2Page";
import LawyerPage from "./pages/LawyerPage";
import Lawyer2Page from "./pages/Lawyer2Page";
import HealthSupportPage from "./pages/HealthSupportPage";
import HealthSupport2Page from "./pages/HealthSupport2Page";
import CourtProceedingPage from "./pages/CourtProceedingPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/jailer-homepage":
        title = "";
        metaDescription = "";
        break;
      case "/request-no-page":
        title = "";
        metaDescription = "";
        break;
      case "/request-health-page":
        title = "";
        metaDescription = "";
        break;
      case "/requestcommunication-page":
        title = "";
        metaDescription = "";
        break;
      case "/skill-development-page":
        title = "";
        metaDescription = "";
        break;
      case "/case-information-page":
        title = "";
        metaDescription = "";
        break;
      case "/terms-of-service-page":
        title = "";
        metaDescription = "";
        break;
      case "/privacy-policy-page":
        title = "";
        metaDescription = "";
        break;
      case "/disclaimer-page":
        title = "";
        metaDescription = "";
        break;
      case "/document-page":
        title = "";
        metaDescription = "";
        break;
      case "/communication-page":
        title = "";
        metaDescription = "";
        break;
      case "/communication-2-page":
        title = "";
        metaDescription = "";
        break;
      case "/lawyer-page":
        title = "";
        metaDescription = "";
        break;
      case "/lawyer-2-page":
        title = "";
        metaDescription = "";
        break;
      case "/health-support-page":
        title = "";
        metaDescription = "";
        break;
      case "/health-support-2-page":
        title = "";
        metaDescription = "";
        break;
      case "/court-proceeding-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PrisonerHomepage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/jailer-homepage" element={<JailerHomepage />} />
      <Route path="/request-no-page" element={<RequestNoPage />} />
      <Route path="/request-health-page" element={<RequestHealthPage />} />
      <Route
        path="/requestcommunication-page"
        element={<RequestCommunicationPage />}
      />
      <Route
        path="/skill-development-page"
        element={<SkillDevelopmentPage />}
      />
      <Route path="/case-information-page" element={<CaseInformationPage />} />
      <Route path="/terms-of-service-page" element={<TermsOfServicePage />} />
      <Route path="/privacy-policy-page" element={<PrivacyPolicyPage />} />
      <Route path="/disclaimer-page" element={<DisclaimerPage />} />
      <Route path="/document-page" element={<DocumentPage />} />
      <Route path="/communication-page" element={<CommunicationPage />} />
      <Route path="/communication-2-page" element={<Communication2Page />} />
      <Route path="/lawyer-page" element={<LawyerPage />} />
      <Route path="/lawyer-2-page" element={<Lawyer2Page />} />
      <Route path="/health-support-page" element={<HealthSupportPage />} />
      <Route path="/health-support-2-page" element={<HealthSupport2Page />} />
      <Route path="/court-proceeding-page" element={<CourtProceedingPage />} />
    </Routes>
  );
}
export default App;
