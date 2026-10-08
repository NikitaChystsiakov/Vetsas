'use client';

import { useEffect, useRef, useState } from 'react';
import { BANNERS } from '@/lib/content';
import { ArrowIcon, ChevronIcon } from './icons';

// Баннеры со слайдера vetsas.by: лента с прокруткой, стрелками и счётчиком
export default function Banners() {
  const row = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);

  useEffect(() => {
    const el = row.current;
    if (!el) return;
    const on = () => {
      const w = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 1;
      setI(Math.min(BANNERS.length - 1, Math.round(el.scrollLeft / (w + 16))));
    };
    el.addEventListener('scroll', on, { passive: true });
    return () => el.removeEventListener('scroll', on);
  }, []);

  const go = (d: number) => {
    const el = row.current;
    if (!el) return;
    const w = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 0;
    el.scrollBy({ left: d * (w + 16), behavior: 'smooth' });
  };

  return (
    <div className="bn">
      <div className="bn-row" ref={row}>
        {BANNERS.map(b => (
          <a key={b.id} className={`bn-card${b.promo ? ' is-promo' : ''}`} href={b.href}>
            <img src={`/img/banner/${b.id}.webp`} alt="" loading="lazy" width="1000" height="674" />
            <span className="bn-text">
              {b.promo && <span className="bn-flag">Акция</span>}
              <b>{b.t}</b>
              <span>{b.d}</span>
              <span className="bn-more">Подробнее <ArrowIcon size={16} /></span>
            </span>
          </a>
        ))}
      </div>
      <div className="bn-ctl">
        <span className="bn-count"><b>{String(i + 1).padStart(2, '0')}</b> / {String(BANNERS.length).padStart(2, '0')}</span>
        <button aria-label="Назад" onClick={() => go(-1)} disabled={i === 0}><ChevronIcon dir="left" /></button>
        <button aria-label="Вперёд" onClick={() => go(1)} disabled={i === BANNERS.length - 1}><ChevronIcon /></button>
      </div>
    </div>
  );
}
