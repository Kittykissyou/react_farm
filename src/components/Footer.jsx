import Icon from './Iconset';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content ">
        <h1>Наши координаты</h1>
        <iframe
          className="footer__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21420.475411900545!2d113.42645291266165!3d52.01903059010836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5dca34fc32feabd9%3A0xc7da5b70bdf5f2e2!2z0YPQuy4g0JrRg9C50LHRi9GI0LXQstCwLCAzNywg0KfQuNGC0LAsINCX0LDQsdCw0LnQutCw0LvRjNGB0LrQuNC5INC60YDQsNC5LCA2NzIwNDA!5e0!3m2!1sru!2sru!4v1691223436823!5m2!1sru!2sru"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="footer__contacts contacts _container">
          <div className="contacts__left">
            <h2>Телефоны</h2>
            <div className="contacts__left-numbers">
              <a href="tel:+79141322440">+79141322440</a>
              <a href="tel:+79994109970">+79994109970</a>
              <a href="tel:+79148044212">+79148044212</a>
            </div>
          </div>
          <div className="contacts__mid">
            <h1>Контакты</h1>
            <div className="contacts__mid-content">
              <h2>
                Забайкальский край, г. Чита <br className="contacts-br-1" />
                ул. Куйбышева, д. 37 <br /> мкр. Гвардейский, д. 16
              </h2>
              <br />
              <h2> Режим работы:</h2>
              <br className="contacts-br-2" />
              <h3> понедельник-суббота с 10:00 - 19:00</h3>
              <br />
              <h3>
                Режим работы в воскресные дни, просим уточнять по нашим
                телефонам
              </h3>
            </div>
          </div>
          <div className="contacts__right">
            <h2>Социальные сети</h2>
            <div className="contacts__socnet">
              <a href="https://t.me/kurenkovdm">
                <Icon icon="telegram" />
              </a>
              <a href="https://instagram.com/korma.zasopka.chita?igshid=MzRlODBiNWFlZA==">
                <Icon icon="instagram" />
              </a>
              <a href="https://ok.ru/dk?st.cmd=altGroupMain&st.groupId=53990747078902&_prevCmd=userEvents&tkn=2587&_cl.id=1691905315482&_clickLog=%5B%7B%22notifLink%22%3A%22LINK_GROUP%22%7D%2C%7B%22seenNotifId%22%3A%22t11691502687349000_32_s%22%2C%22notifMarker%22%3A%2232_0_~_I_~_K5jcSAjcR0zcSwPdPgjeM03cvqe__581047036047%22%7D%2C%7B%22target%22%3A%22seenTrackEnabled%22%7D%5D&_cl.sID=userEvents">
                <Icon icon="ok" />
              </a>
              <a href="https://wa.me/79994109970">
                <Icon icon="whatsapp" />
              </a>
              <a href="https://invite.viber.com/?g2=AQBpzqk7fr6xDEyrl3SSi69QuXT3k0Fya3Y8aeABoTJjSGOgH0dO98tMIE2JKtff&lang=ru">
                <Icon icon="viber" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
/*
<a href="https://t.me/kurenkovdm">
                <Icon icon="telegram" />
              </a>
              <a href="https://t.me/kurenkovdm">
                <Icon icon="instagram" />
              </a>
              <a href="https://t.me/kurenkovdm">
                <Icon icon="ok" />
              </a>
              <a href="https://t.me/kurenkovdm">
                <Icon icon="whatsapp" />
              </a>
              <a href="https://t.me/kurenkovdm">
                <Icon icon="viber" />
              </a>
              */

/*
                <nav>
                <li>
                  <a href="https://t.me/kurenkovdm">
                    <Icon icon="telegram" />
                  </a>
                  <a href="https://t.me/kurenkovdm">
                    <Icon icon="instagram" />
                  </a>
                  <a href="https://t.me/kurenkovdm">
                    <Icon icon="ok" />
                  </a>
                  <a href="https://t.me/kurenkovdm">
                    <Icon icon="whatsapp" />
                  </a>
                  <a href="https://t.me/kurenkovdm">
                    <Icon icon="viber" />
                  </a>
                </li>
              </nav>
              */
