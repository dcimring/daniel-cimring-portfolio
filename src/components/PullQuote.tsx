/** Rendered as a <p>, not a heading, so the document outline stays h1 → h2. */
const PullQuote = ({ quote }: { quote: string }) => {
  const split = quote.lastIndexOf(": ") + 2;
  return (
    <section aria-label="About" className="pb-12 md:pb-20">
      <p className="max-w-260 text-xl leading-[1.4] font-medium text-bright md:text-[clamp(1.25rem,2.2vw,1.875rem)]">
        <span className="text-muted"># </span>
        {quote.slice(0, split)}
        <span className="text-accent">{quote.slice(split)}</span>
      </p>
    </section>
  );
};

export default PullQuote;
