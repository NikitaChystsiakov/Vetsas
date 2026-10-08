'use client';

import { useState } from 'react';
import { LINKS } from '@/lib/content';

// Форма «Запись на приём» — те же поля, что на vetsas.by: имя, e-mail, телефон*, комментарий, согласие.
// Администратор перезванивает и подбирает время; выбора слотов на сайте у клиники сейчас нет.
export default function RequestForm() {
  const [sent, setSent] = useState(false);
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);
  const ok = phone.replace(/\D/g, '').length >= 9 && agree;

  if (sent) {
    return (
      <div className="rf rf-done" aria-live="polite">
        <p className="rf-ok" aria-hidden="true">✓</p>
        <h3>Ваша заявка отправлена</h3>
        <p>В ближайшее время мы с вами свяжемся.</p>
        <p className="rf-note">Это прототип — заявка никуда не отправляется.</p>
        <button className="rf-again" onClick={() => setSent(false)}>Отправить ещё одну</button>
      </div>
    );
  }

  return (
    <form className="rf" onSubmit={e => { e.preventDefault(); if (ok) setSent(true); }}>
      <div className="rf-2">
        <label><span>Представьтесь</span><input name="name" autoComplete="name" /></label>
        <label><span>Телефон*</span><input name="phone" type="tel" inputMode="tel" placeholder="+375 __ ___-__-__" autoComplete="tel" required value={phone} onChange={e => setPhone(e.target.value)} /></label>
      </div>
      <label><span>E-mail</span><input name="email" type="email" autoComplete="email" /></label>
      <label><span>Комментарий</span><textarea name="comment" rows={3} placeholder="Кто питомец и что беспокоит, к какому врачу хотите попасть" /></label>
      <label className="rf-check">
        <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} />
        <span>Я ознакомился и согласен с <a href={LINKS.privacy}>условиями по обработке персональных данных</a></span>
      </label>
      <button className="rf-go" type="submit" disabled={!ok}>Записаться на приём</button>
    </form>
  );
}
