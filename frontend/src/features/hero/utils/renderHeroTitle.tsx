import type { ReactNode } from 'react';

export const renderHeroTitle = (
  title: string,
  titleAccent: string
): ReactNode => {
  const accentStart = title.indexOf(titleAccent);

  if (accentStart === -1) {
    return title;
  }

  const before = title.slice(0, accentStart);
  const after = title.slice(accentStart + titleAccent.length);

  return (
    <>
      {before}
      <span className="text-accent">{titleAccent}</span>
      {after}
    </>
  );
};
