/** Primary call-to-action: solid mint block, full width on phones. */
const CtaLink = ({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) => (
  <a
    href={href}
    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    className="block bg-accent px-4 py-4 text-center text-base font-bold text-background no-underline transition-colors hover:bg-bright hover:text-background md:inline-block md:px-6 md:py-3.5 md:text-[15px]"
  >
    {children}
  </a>
);

export default CtaLink;
