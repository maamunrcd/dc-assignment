export const sortByOrder = <T extends { order: number }>(items: T[]): T[] =>
  [...items].sort((a, b) => a.order - b.order);

export const resolveDefaultId = <T extends { id: string }>(
  items: T[],
  defaultId: string
): string => {
  const hasDefault = items.some((item) => item.id === defaultId);
  return hasDefault ? defaultId : items[0]?.id ?? defaultId;
};
