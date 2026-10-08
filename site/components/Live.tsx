'use client';

import { isOpen, opensAt } from '@/lib/hours';
import { useNow } from './useNow';

// «Сейчас открыто, до 21:00» / «Сейчас закрыто, откроемся завтра в 9:00»
export function OpenStatus({ className }: { className?: string }) {
  const now = useNow();
  if (!now) return <span className={className}>&nbsp;</span>;
  const open = isOpen(now);
  return (
    <span className={`${className ?? ''}${open ? '' : ' is-closed'}`}>
      <i aria-hidden="true" />{open ? 'Сейчас открыто, до 21:00' : `Сейчас закрыто, откроемся ${opensAt(now)}`}
    </span>
  );
}
