import "./kvkkPolicy.css";
const PrivacyAndCookiePolicy = () => {
  return (
    <div className="kvkk-container">
      <h2 className="kvkk-title">Gizlilik Politikası</h2>

      <h3 className="kvkk-sub-title">Gizlilik Taahhüdümüz</h3>
      <p className="kvkk-text">
        Bu politika, kullanıcılarımızın kişisel bilgilerinin nasıl toplandığını,
        kullanıldığını ve korunduğunu açıklamaktadır. Web sitemizi veya
        uygulamamızı kullandığınızda, bilgilerinizin aşağıda açıklanan şekilde
        işlenmesini kabul etmiş olursunuz.
      </p>

      <h3 className="kvkk-sub-title">Toplanan Bilgiler</h3>
      <ul className="kvkk-text">
        <li>Ad, e-posta adresi ve iletişim bilgileri gibi kişisel bilgiler.</li>
        <li>
          Web sitesi kullanımı sırasında toplanan tarayıcı bilgileri ve IP
          adresi gibi teknik bilgiler.
        </li>
        <li>Kullanıcı davranışları ve tercihlerine dair veriler.</li>
      </ul>

      <h3 className="kvkk-sub-title">Bilgilerin Kullanımı</h3>
      <p className="kvkk-text">
        Toplanan bilgiler, aşağıdaki amaçlarla kullanılabilir:
        <ul className="kvkk-text">
          <li>Hizmetlerin sağlanması ve kişiselleştirilmesi.</li>
          <li>Kullanıcı deneyiminin iyileştirilmesi.</li>
          <li>Gerekli durumlarda kullanıcılarla iletişim kurulması.</li>
        </ul>
      </p>

      <h3 className="kvkk-sub-title">Bilgi Paylaşımı</h3>
      <p className="kvkk-text">
        Kullanıcı bilgileri, izniniz olmaksızın üçüncü taraflarla paylaşılmaz.
        Ancak yasal gereklilik durumunda veya hizmet sağlayıcılar ile sınırlı
        işbirliklerinde paylaşılabilir.
      </p>

      <h2 className="kvkk-title">Çerez Politikası</h2>

      <h3 className="kvkk-sub-title">Çerezler Hakkında</h3>
      <p className="kvkk-text">
        Çerezler, cihazınıza depolanan ve tarayıcılarınız üzerinden kullanılan
        küçük veri dosyalarıdır. Web sitemizi veya uygulamamızı kullandığınızda,
        çerezlerin kullanılmasını kabul etmiş olursunuz.
      </p>

      <h3 className="kvkk-sub-title">Çerez Türleri</h3>
      <ul className="kvkk-text">
        <li>
          <strong>Zorunlu Çerezler:</strong> Web sitesinin temel işlevlerini
          yerine getirmesi için gereklidir.
        </li>
        <li>
          <strong>Performans Çerezleri:</strong> Kullanıcı davranışlarını analiz
          ederek hizmetlerin geliştirilmesine yardımcı olur.
        </li>
        <li>
          <strong>Hedefleme Çerezleri:</strong> İlgi alanlarınıza göre
          kişiselleştirilmiş içerikler sunar.
        </li>
      </ul>

      <h3 className="kvkk-sub-title">Çerezleri Yönetme</h3>
      <p className="kvkk-text">
        Tarayıcı ayarlarını değiştirerek çerez kullanımını reddedebilir veya
        çerez tercihlerinizi yönetebilirsiniz. Ancak, bu durumda bazı
        hizmetlerimizden tam anlamıyla faydalanamayabilirsiniz.
      </p>

      <h3 className="kvkk-sub-title">Çerez Verilerinin Saklanması</h3>
      <p className="kvkk-text">
        Çerezler aracılığıyla toplanan veriler, gizlilik politikamıza uygun
        şekilde korunur ve yalnızca belirtilen amaçlarla kullanılır.
      </p>
    </div>
  );
};

export default PrivacyAndCookiePolicy;
