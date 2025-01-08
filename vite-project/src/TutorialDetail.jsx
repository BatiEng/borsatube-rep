import "./tutorialDetail.css";
import TutorialsCard from "./TutorialCard";
import { useParams } from "react-router";
import allData from "./allData/TutorialData";
import { useEffect } from "react";

function TutorialDetail() {
  const { id } = useParams();
  const data = allData.filter((d) => d.id === id * 1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="tutorials-detail-container">
        <div className="course-desc">
          <div className="tutorials-detail-title">
            <h1 className="tutorials-detail-title-main">{data[0].title}</h1>
            <hr className="tutorials-detail-hr" />
          </div>

          <p className="tutorials-detail-description">{data[0].description}</p>
          <div className="tutorials-detail-description">
            <h2 className="tutorilas-detail-list-title">Ders içeriği</h2>
            <ul className="tutorials-detail-list">
              {data[0].detailFeatures.map((e) => (
                <>
                  <li key={e}>
                    <p>-{e}</p>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
        <div className="tutorials-detail-card">
          <TutorialsCard
            isBtn={false}
            title={data[0].title}
            img={data[0].img}
            features={data[0].features}
            fakePrice={data[0].fakePrice}
            price={data[0].price}
          />
          <div className="tutorials-detail-support">
            <p className="tutorials-detail-support-text">
              Detaylı bilgi ve satin almak için:
            </p>
            <a
              className="tutorials-detail-support-link"
              href="https://api.whatsapp.com/send/?phone=%2B905054949418&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// TutorialDetail.prototype = {
//   tutorialName: PropTypes.string,
//   tutorialAuthor: PropTypes.string,
//   tutorialDescription: PropTypes.string,
//   tutorialContents: PropTypes.array,
// };
// TutorialDetail.defaultProps = {
//   tutorialName: "Temel Borsa Eğitimi: Yatırım Dünyasına İlk Adım",
//   tutorialAuthor: "Gökhan Kozak",
//   tutorialDescription:
//     "Borsa dünyasına merakla bakıyor ama nereden başlayacağınızıbilemiyor musunuz? Temel Borsa Eğitimi tam size göre! Bu eğitim,yatırım yapmanın temellerini öğrenmek isteyen yeni başlayanlar içinözenle hazırlanmıştır. Borsa kavramlarından hisse senetlerininmantığına, piyasa dinamiklerinden alım-satım süreçlerine kadar herdetayı en sade ve anlaşılır şekilde öğreneceksiniz. Bu eğitimlefinansal özgürlüğünüzün ilk adımını atarken, piyasanın karmaşıkgörünen yüzünü bir rehber eşliğinde keşfedin. Artık borsa sizin içinbir muamma değil; fırsatlarla dolu bir dünya olacak!",
//   tutorialContents: [
//     {
//       title: "Borsa Nedir?",
//       desc: "-Borsanın tarihçesi ve işleyiş prensipleri Hisse senedi, tahvil, bono gibi temel finansal araçlar",
//     },
//     {
//       title: "Borsa Terminolojisi",
//       desc: "-Emir tipleri, spread, volatilite gibi kavramlar",
//     },
//     {
//       title: "Yatırım Araçları",
//       desc: "-Hangi yatırım araçları neden tercih edilir? Yatırım hesaplarının açılması ve kullanımı",
//     },
//     {
//       title: "Risk ve Getiri İlişkisi",
//       desc: "-Borsada risklerin tanımı ve yönetimi",
//     },
//     {
//       title: "Temel Analiz Giriş",
//       desc: "-Şirketlerin mali tabloları ve temel göstergeler",
//     },
//     {
//       title: "Pratik Alım-Satım İşlemleri",
//       desc: "-Simülasyonlarla borsa deneyimi",
//     },
//   ],
// };

export default TutorialDetail;
