// Режим работы клиники: без выходных 9:00–21:00, каждая среда 11:00–21:00
export const openFrom = (d: Date) => (d.getDay() === 3 ? 11 : 9);
export const CLOSE = 21;

export const isOpen = (d: Date) => d.getHours() >= openFrom(d) && d.getHours() < CLOSE;

export function opensAt(d: Date): string {
  if (d.getHours() < openFrom(d)) return `сегодня в ${openFrom(d)}:00`;
  const t = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
  return `завтра в ${openFrom(t)}:00`;
}
