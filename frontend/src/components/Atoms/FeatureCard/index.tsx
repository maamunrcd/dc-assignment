interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <article className="flex min-h-[180px] flex-col justify-between rounded-2xl bg-surface p-6 text-primary-dark shadow-[0_4px_24px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 sm:min-h-[200px] sm:p-8">
    <h4 className="text-lg font-bold leading-snug sm:text-xl">{title}</h4>
    <p className="mt-4 text-sm leading-relaxed text-primary-dark/65 sm:text-base">
      {description}
    </p>
  </article>
);
