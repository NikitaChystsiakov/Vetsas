import Banners from '@/components/Banners';
import Header from '@/components/Header';
import { OpenStatus } from '@/components/Live';
import RequestForm from '@/components/RequestForm';
import { ArrowIcon, BoardIcon, CardIcon, ClockIcon, DropIcon, ParkingIcon, PhoneIcon, PinIcon, PlusIcon, StarIcon } from '@/components/icons';
import { ARTICLES, BOARD, CLINIC, EMAIL, FIRSTS, HOURS, LINKS, MAIN_PHONE, MILESTONES, PHONES, RATING, REVIEWS, SPECIALITIES, STEPS, TEAM, TEAM_NOTES, URGENT_TEXT } from '@/lib/content';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* 1. Синий первый экран: заголовок, план клиники как табличка у них на ресепшене, фото */}
        <section className="top">
          <div className="wrap">
            <div className="top-head">
              <h1>Берёмся за&nbsp;самых сложных пациентов</h1>
              <div className="top-side">
                <p>Ветеринарный центр Sas Animal Service в&nbsp;центре Минска. Диагностика от&nbsp;анализов крови до&nbsp;КТ и&nbsp;МРТ, операции любой сложности и&nbsp;стационар — в&nbsp;одном здании.</p>
                <div className="top-act">
                  <a className="btn btn-white" href="#book">Записаться на приём</a>
                  <a className="top-tel" href={`tel:${MAIN_PHONE.tel}`}><PhoneIcon />{MAIN_PHONE.value}</a>
                </div>
              </div>
            </div>
            <div className="top-grid">
              <figure className="top-photo">
                <img src="/img/hero-doctor-dog.webp" alt="Ветеринарный врач с большой собакой в стационаре клиники" width="1200" height="738" fetchPriority="high" />
              </figure>
              <aside className="board" aria-label="План клиники">
                <div className="board-h"><img src="/img/mark-white.svg" alt="" width="18" height="27" /><span>План клиники</span></div>
                <ul>
                  {BOARD.map(b => <li key={b.t}><a href={b.href}><span className="board-i"><BoardIcon name={b.icon} /></span>{b.t}<ArrowIcon size={16} /></a></li>)}
                </ul>
                <div className="board-f">
                  <OpenStatus className="board-open" />
                  <span><PinIcon size={16} />Минск, {CLINIC.addr}</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* 2. Баннеры со слайдера их сайта */}
        <section className="sec" aria-labelledby="nowH">
          <div className="wrap">
            <h2 className="h2" id="nowH">Сейчас в клинике</h2>
            <Banners />
          </div>
        </section>

        {/* 3. Комплексное лечение — 4 шага, как на их главной */}
        <section className="sec steps-sec" aria-labelledby="stepsH">
          <div className="wrap">
            <h2 className="h2" id="stepsH">Комплексное лечение</h2>
            <p className="lead">Всё, что нужно питомцу, — в одном здании на Козлова, 27а. Ехать на дополнительные обследования в другие места не придётся.</p>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <li key={s.t}>
                  <a href={s.href}>
                    <span className="steps-n">{i + 1}</span>
                    <img src={s.img} alt="" loading="lazy" />
                    <b>{s.t}</b>
                    <span>{s.d}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4. Специализация — таблички, как на дверях кабинетов */}
        <section className="sec" id="services" aria-labelledby="specH">
          <div className="wrap">
            <h2 className="h2" id="specH">Специализация клиники</h2>
            <ul className="plates">
              {SPECIALITIES.map(s => (
                <li key={s.t}><a href={s.href}><b>{s.t}</b>{s.p && <span>{s.p}</span>}</a></li>
              ))}
              <li className="pl-all"><a href={LINKS.prices}><b>Все услуги и цены <ArrowIcon size={18} /></b></a></li>
            </ul>
          </div>
        </section>

        {/* 5. История: с 2012 года и что сделали первыми */}
        <section className="sec" aria-labelledby="histH">
          <div className="wrap hist">
            <div className="hist-text">
              <h2 className="h2" id="histH">Sas Animal Service — стремление к&nbsp;лучшему</h2>
              <ol className="years">
                {MILESTONES.map(m => <li key={m.y}><span>{m.y}</span><p>{m.t}</p></li>)}
              </ol>
              <ul className="firsts">{FIRSTS.map(f => <li key={f}><PlusIcon size={10} />{f}</li>)}</ul>
              <a className="more" href={LINKS.about}>О клинике <ArrowIcon size={16} /></a>
            </div>
            <div className="hist-photos">
              <figure className="hp-a"><img src="/img/surgery.webp" alt="Хирурги во время операции" loading="lazy" /></figure>
              <figure className="hp-b"><img src="/img/ct.webp" alt="Компьютерный томограф клиники" loading="lazy" /></figure>
              <figure className="hp-c"><img src="/img/xray.webp" alt="Врач изучает рентгеновский снимок" loading="lazy" /></figure>
            </div>
          </div>
        </section>

        {/* 6. Руководители отделений */}
        <section className="sec team-sec" aria-labelledby="teamH">
          <div className="wrap">
            <div className="sec-head"><h2 className="h2" id="teamH">Кто, если не мы</h2><a className="more" href={LINKS.doctors}>Все врачи клиники <ArrowIcon size={16} /></a></div>
            <p className="lead">Каждый в нашей команде пытается помочь всем пациентам. Мы берёмся за самые сложные случаи, боремся за жизнь и побеждаем.</p>
            <div className="team">
              {TEAM.map(t => (
                <a className="tm" key={t.name} href={LINKS.doctors}>
                  <span className="tm-ph"><img src={t.img} alt={t.name} loading="lazy" width="304" height="456" /></span>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </a>
              ))}
            </div>
            <div className="team-notes">{TEAM_NOTES.map(n => <p key={n.t}><b>{n.t}.</b> {n.d}</p>)}</div>
          </div>
        </section>

        {/* 7. Отзывы */}
        <section className="sec" id="reviews" aria-labelledby="reviewsH">
          <div className="wrap rv-in">
            <div className="rv-score">
              <h2 className="h2" id="reviewsH">Отзывы</h2>
              <a className="rt" href={RATING.href}>
                <b>{RATING.value}</b>
                <span className="stars" aria-hidden="true"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></span>
                <span className="rt-src">на Яндекс Картах<small>{RATING.count}, {RATING.reviews}</small></span>
              </a>
              <div className="rv-act">
                <a className="btn btn-line" href={LINKS.reviews}>Оставить отзыв</a>
                <a className="more" href={LINKS.reviews}>Все отзывы <ArrowIcon size={16} /></a>
              </div>
            </div>
            <div className="rv-list">
              {REVIEWS.map(r => (
                <blockquote className="rv" key={r.author + r.pet}>
                  <p>{r.text}</p>
                  <footer><b>{r.author}</b>, питомец {r.pet} · {r.date}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Запись и контакты */}
        <section className="sec" id="contacts" aria-labelledby="bookH">
          <div className="wrap">
            <div className="ct" id="book">
              <div className="ct-form">
                <h2 className="h2" id="bookH">Запись на приём</h2>
                <p className="ct-lead">Оставьте заявку — администратор перезвонит и подберёт удобное время. Или позвоните сами: <a href={`tel:${MAIN_PHONE.tel}`}>{MAIN_PHONE.value}</a>.</p>
                <RequestForm />
              </div>
              <div className="ct-info">
                <img className="ct-photo" src="/img/building-wide.webp" alt="Здание ветеринарного центра на ул. Козлова, 27а" loading="lazy" />
                <div className="ct-body">
                  <OpenStatus className="ct-open" />
                  <h3>Минск, {CLINIC.addr}</h3>
                  <ul className="ct-facts">
                    <li><ClockIcon /><span>{HOURS.map(([d, t]) => <span key={d}>{d} <b>{t}</b><br /></span>)}</span></li>
                    <li><ParkingIcon /><span>В центре Минска, со своей большой парковкой и садом</span></li>
                    <li><CardIcon /><span>Оплата по карте «Халва» и «Карте покупок» — рассрочка 2 месяца</span></li>
                  </ul>
                  <ul className="ct-tel">
                    {PHONES.map(p => <li key={p.tel}><a href={`tel:${p.tel}`}>{p.value}</a><span>{p.label}</span></li>)}
                    <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a><span>E-mail</span></li>
                  </ul>
                  <a className="btn btn-line" href={CLINIC.route}><PinIcon size={17} />Маршрут в Яндекс Картах</a>
                </div>
              </div>
            </div>
            <div className="ct-strip">
              <div className="ct-sos"><span className="ct-sos-i"><PlusIcon size={12} /></span><p><b>Экстренных пациентов принимаем вне очереди.</b> {URGENT_TEXT.split('. ').slice(1).join('. ')}</p></div>
              <a className="ct-donor" href={LINKS.donor}><DropIcon /><span><b>Стань донором в нашем банке крови</b>Узнать подробнее</span><ArrowIcon size={16} /></a>
            </div>
          </div>
        </section>

        {/* 9. База знаний */}
        <section className="sec" aria-labelledby="baseH">
          <div className="wrap">
            <div className="sec-head"><h2 className="h2" id="baseH">Делимся знаниями и&nbsp;победами</h2><a className="more" href={LINKS.base}>База знаний <ArrowIcon size={16} /></a></div>
            <div className="ar">
              {ARTICLES.map(a => (
                <a className="ar-card" key={a.t} href={a.href}>
                  <img src={a.img} alt="" loading="lazy" />
                  <span className="ar-meta">{a.tag} · {a.date}</span>
                  <b>{a.t}</b>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="ft">
        <div className="wrap ft-in">
          <div className="ft-brand">
            <img src="/img/logo.svg" alt="Sas Animal Service" width="120" height="53" />
            <p>ООО «Сас Энимал Сервис»<br />Минск, {CLINIC.addr}</p>
          </div>
          <ul className="ft-list">
            <li><a href={LINKS.prices}>Услуги и цены</a></li><li><a href={LINKS.doctors}>Наши врачи</a></li><li><a href={LINKS.reviews}>Отзывы</a></li><li><a href={LINKS.about}>О клинике</a></li><li><a href={LINKS.vacancies}>Вакансии</a></li>
          </ul>
          <ul className="ft-list">
            <li><a href={LINKS.order}>Порядок оказания услуг</a></li><li><a href={LINKS.offer}>Публичная оферта</a></li><li><a href={LINKS.director}>График приёма руководителя</a></li><li><a href={LINKS.privacy}>Политика по обработке персональных данных</a></li>
          </ul>
          <div className="ft-tel">
            {PHONES.map(p => <a key={p.tel} href={`tel:${p.tel}`}>{p.value}</a>)}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
        <div className="wrap ft-legal">
          <span>УНП 191758730 · директор Сас Алексей Сергеевич</span>
          <span>Прототип главной страницы для vetsas.by — форма записи никуда не отправляет данные.</span>
        </div>
      </footer>
    </>
  );
}
