'use client';

import { useEffect, useRef, useState } from 'react';
import { MAIN_PHONE, NAV, PHONES, URGENT_TEXT } from '@/lib/content';
import { CloseIcon, MenuIcon, PhoneIcon, PlusIcon } from './icons';

export default function Header() {
  const [open, setOpen] = useState<'' | 'urgent' | 'menu'>('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen('');
    const onClick = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(''); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onClick); };
  }, [open]);

  return (
    <header className="hd" ref={ref}>
      <div className="wrap hd-in">
        <a className="hd-logo" href="#top" aria-label="Sas Animal Service — на главную"><img src="/img/logo.svg" alt="Sas Animal Service" width="120" height="53" /></a>
        <nav className="hd-nav" aria-label="Разделы">{NAV.map(n => <a key={n.t} href={n.href}>{n.t}</a>)}</nav>
        <span className="sp" />
        <a className="hd-tel" href={`tel:${MAIN_PHONE.tel}`}><PhoneIcon size={17} />{MAIN_PHONE.value}</a>
        <button className="hd-sos" aria-expanded={open === 'urgent'} onClick={() => setOpen(open === 'urgent' ? '' : 'urgent')}>
          <span className="hd-sos-i"><PlusIcon size={10} /></span><span className="hd-sos-l">Срочная помощь</span><span className="hd-sos-s">Срочно</span>
        </button>
        <a className="hd-book" href="#book">Записаться</a>
        <button className="hd-menu" aria-label="Меню" aria-expanded={open === 'menu'} onClick={() => setOpen(open === 'menu' ? '' : 'menu')}>
          {open === 'menu' ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open === 'urgent' && (
        <div className="wrap hd-pop">
          <div className="sos" role="dialog" aria-label="Срочная помощь">
            <button className="sos-x" aria-label="Закрыть" onClick={() => setOpen('')}><CloseIcon size={18} /></button>
            <p className="sos-h">Звоните по номеру</p>
            <a className="sos-tel" href={`tel:${MAIN_PHONE.tel}`}>{MAIN_PHONE.value}</a>
            <p className="sos-t">{URGENT_TEXT}</p>
            <p className="sos-n">Работаем без выходных с 9:00 до 21:00, в среду — с 11:00.</p>
          </div>
        </div>
      )}

      {open === 'menu' && (
        <div className="hd-sheet">
          <nav aria-label="Меню">{NAV.map(n => <a key={n.t} href={n.href} onClick={() => setOpen('')}>{n.t}</a>)}</nav>
          <ul className="hd-sheet-tel">{PHONES.map(p => <li key={p.tel}><a href={`tel:${p.tel}`}>{p.value}</a><span>{p.label}</span></li>)}</ul>
        </div>
      )}
    </header>
  );
}
