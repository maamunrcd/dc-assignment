const HEADLINE =
  'Engineering business solutions through three strategic pillars';
const BODY =
  'AI powered delivery combining intelligent software engineering, data driven insight, and elite talent to accelerate scale, quality, and competitive advantage.';

export const SolutionsIntro = () => (
  <div className="flex flex-col gap-5 lg:grid lg:grid-cols-12 lg:gap-x-6 lg:gap-y-8">
    <p className="text-sm font-bold text-primary-dark lg:col-span-4 lg:font-medium lg:text-primary-dark/80">
      We Are /&gt;
    </p>

    <div className="flex flex-col gap-4 lg:col-span-6 lg:col-start-5 lg:gap-0">
      <h2 className="text-[1.65rem] font-bold leading-[1.15] tracking-tight text-primary-dark sm:text-3xl lg:hidden">
        {HEADLINE}
      </h2>
      <p className="text-sm leading-relaxed text-primary-dark sm:text-base lg:hidden">
        {BODY}
      </p>

      <p className="hidden text-[32px] leading-tight tracking-tight lg:block">
        <span className="font-bold">{HEADLINE}</span>{' '}
        <span className="font-normal">{BODY}</span>
      </p>
    </div>
  </div>
);
