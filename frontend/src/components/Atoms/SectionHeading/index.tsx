interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeading = ({
  title,
  description,
  align = 'left',
}: SectionHeadingProps) => (
  <div
    className={`mb-10 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
  >
    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    {description ? (
      <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
        {description}
      </p>
    ) : null}
  </div>
);
