interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export const NavLink = ({ href, label, onClick }: NavLinkProps) => (
  <a
    href={href}
    onClick={onClick}
    className="relative text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full lg:text-[0.9375rem]"
  >
    {label}
  </a>
);
