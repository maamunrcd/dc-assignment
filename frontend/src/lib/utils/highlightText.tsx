import type { ReactNode } from 'react';

export const highlightText = (
  title: string,
  highlights: string[],
  highlightClassName = 'text-accent'
): ReactNode => {
  if (!highlights.length) return title;

  const pattern = new RegExp(
    `(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'g'
  );

  const parts = title.split(pattern);

  return parts.map((part, index) =>
    highlights.includes(part) ? (
      <span key={index} className={highlightClassName}>
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  );
};
