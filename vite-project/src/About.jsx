import "./about.css";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-img-container">
          <img
            className="about-img"
            src="https://github.com/BatiEng/borsatube-rep/blob/main/vite-project/public/borsatube-logo.png?raw=true"
            alt="person image"
          />
          <h1 className="about-author">Borsatube</h1>
        </div>
        <div className="about-desc">
          <h1 className="about-title">Hakkımda</h1>
          <p className="about-exp">
            Hakkında Merhaba! Ben Borsatube, profesyonel bir borsa eğitmeniyim.
            Finansal piyasalarda edindiğim yıllara dayanan tecrübemi, bilgi ve
            stratejilerimi sizlerle paylaşmak için buradayım. Amacım, borsa ve
            yatırım dünyasını anlamanızı kolaylaştırmak, bilinçli ve etkili
            kararlar almanıza yardımcı olmaktır. Eğitimlerimde, temel analizden
            teknik analize, risk yönetiminden yatırım psikolojisine kadar geniş
            bir yelpazede bilgi sunuyorum. Borsa yolculuğunuzda size rehberlik
            ederek hedeflerinize ulaşmanızı sağlamak için buradayım. Daha
            fazlasını öğrenmek için benimle iletişime geçebilir veya eğitim
            programlarıma göz atabilirsiniz. Başarıya giden yolda birlikte adım
            atalım!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
