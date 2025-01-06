import "./support.css";
import { FaWhatsapp } from "react-icons/fa";

function Support() {
  return (
    <>
      <div className="support-container">
        <p className="support-icon">
          <FaWhatsapp />
        </p>
        <div className="support-desc">
          <h1 className="support-title">Whatsapp Destek Hatti</h1>
          <p className="support-description">
            Herhangi bir konuda sorularınız varsa, WhatsApp destek hattımız
            aracılığıyla bizimle iletişime geçebilir ve detaylı bilgi
            alabilirsiniz.
          </p>
          <p className="support-number">0505 494 9418</p>
        </div>
        <a
          className="support-contact"
          href="https://api.whatsapp.com/send/?phone=%2B905054949418&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          Bize Ulaşın
        </a>
      </div>
    </>
  );
}

export default Support;
