import { useEffect } from "react";
import "./kvkkPolicy.css";
const KVKKPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="kvkk-container">
      <h1 className="kvkk-title">
        Kişisel Verilerin Korunması ve İşlenmesi Politikası
      </h1>

      <h2 className="kvkk-sub-title">1. Giriş</h2>
      <p className="kvkk-text">
        Borsatube olarak, kullanıcılarımızın gizliliğine ve kişisel verilerinin
        korunmasına büyük önem vermekteyiz. Bu doğrultuda, 6698 sayılı Kişisel
        Verilerin Korunması Kanunu ("KVKK") ve ilgili mevzuat kapsamında kişisel
        verilerin işlenmesine ve korunmasına ilişkin temel esasları belirlemek
        amacıyla bu politikayı hazırladık.
      </p>

      <h2 className="kvkk-sub-title">2. Kişisel Verilerin İşlenme Amaçları</h2>
      <p className="kvkk-text">
        Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenebilir:
      </p>
      <ul className="kvkk-text">
        <li>Hizmetlerimizin sunulması ve iyileştirilmesi,</li>
        <li>Müşteri memnuniyetinin sağlanması,</li>
        <li>Kanuni yükümlülüklerin yerine getirilmesi,</li>
        <li>Kullanıcı deneyiminin geliştirilmesi,</li>
        <li>Pazarlama faaliyetlerinin yürütülmesi (onayınız dahilinde).</li>
      </ul>

      <h2 className="kvkk-sub-title">3. Toplanan Kişisel Veriler</h2>
      <p className="kvkk-text">İşlenen kişisel veriler şunları içerebilir:</p>
      <ul className="kvkk-text">
        <li>Ad, soyad, e-posta adresi, telefon numarası,</li>
        <li>IP adresi, çerez verileri,</li>
        <li>Kullanıcı işlemleri ve tercih bilgileri.</li>
      </ul>

      <h2 className="kvkk-sub-title">4. Kişisel Verilerin Aktarılması</h2>
      <p className="kvkk-text">
        Kişisel verileriniz, yalnızca KVKK’nın 8. ve 9. maddelerine uygun olarak
        ve yasal sınırlar çerçevesinde iş ortaklarımız, tedarikçilerimiz, yasal
        merciler veya açık rızanıza bağlı olarak üçüncü taraflarla
        paylaşılabilir.
      </p>

      <h2 className="kvkk-sub-title">5. Kişisel Verilerin Korunması</h2>
      <p className="kvkk-text">
        Borsatube, kişisel verilerinizi yetkisiz erişime, kayba, yanlış
        kullanıma, ifşaya ve değiştirmeye karşı korumak için gerekli teknik ve
        idari tedbirleri alır.
      </p>

      <h2 className="kvkk-sub-title">6. Kişisel Veri Sahibinin Hakları</h2>
      <p className="kvkk-text">
        KVKK’nın 11. maddesi gereği veri sahipleri, aşağıdaki haklara sahiptir:
      </p>
      <ul className="kvkk-text">
        <li>Kişisel verilerinin işlenip işlenmediğini öğrenme,</li>
        <li>İşlenmişse bilgi talep etme,</li>
        <li>İşlenme amacını öğrenme,</li>
        <li>Verilerin düzeltilmesini veya silinmesini talep etme,</li>
        <li>Verilerin aktarılmış olduğu üçüncü kişileri öğrenme.</li>
      </ul>
      <p className="kvkk-text">
        Bu haklarınızı kullanmak için bize{" "}
        <a href="mailto:borsatube@gmail.com">
          <b>borsatube@gmail.com</b>
        </a>{" "}
        üzerinden ulaşabilirsiniz.
      </p>

      <h2 className="kvkk-sub-title">7. Çerezler (Cookies)</h2>
      <p className="kvkk-text">
        Sitemizde kullanıcı deneyimini geliştirmek amacıyla çerezler
        kullanılmaktadır. Çerez politikamız hakkında daha fazla bilgi için
        [Çerez Politikası] bağlantısını ziyaret edebilirsiniz.
      </p>
    </div>
  );
};

export default KVKKPolicy;
