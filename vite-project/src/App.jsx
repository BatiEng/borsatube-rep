import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Analysis from "./Analysis";
import Tutorials from "./Tutorials";
import Activity from "./Activity";
import TradingviewWidget from "./TradingviewWidget";
import TutorialDetail from "./TutorialDetail";
import AnalysisDetail from "./AnalysisDetail";
import NewsDetail from "./NewsDetail";
import News from "./News";
import Login from "./Login";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";
import KVKKPolicy from "./KVKKPolicy";
import PrivacyAndCookiePolicy from "./PrivacyAndCookiePolicy";

function App() {
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      console.log(e.target.className);
    });
  }, []);

  return (
    <div className="all-elements">
      <TradingviewWidget />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/analizler" element={<Analysis />} />
        <Route path="/egitimler" element={<Tutorials />} />
        <Route path="/etkinlikler" element={<Activity />} />
        <Route path="/haberler" element={<News />} />
        <Route path="/giris-yap" element={<Login />} />
        <Route path="/egitimler/:id" element={<TutorialDetail />} />
        <Route path="/analizler/:id" element={<AnalysisDetail />} />
        <Route path="/haberler/:id" element={<NewsDetail />} />
        <Route path="/kvkk" element={<KVKKPolicy />} />
        <Route
          path="/gizlilik-ve-cerez-politikasi"
          element={<PrivacyAndCookiePolicy />}
        />
      </Routes>
      <div className="whatsapp-support-link-container">
        <div className="whatsapp-support-link-sub">
          <FaWhatsapp className="fixed-support-link-icon" />
          <a
            href="https://api.whatsapp.com/send/?phone=%2B905054949418&text&type=phone_number&app_absent=0"
            target="_blank"
            className="fixed-support-link-link"
          >
            Whatsapp
          </a>
        </div>
        <p className="fixed-support-link-text">bize ulaşın</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
