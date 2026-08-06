const ImpactBlock = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full bg-primary py-16 md:py-20 px-6 my-8 md:my-12">
    <div className="container mx-auto">
      {/* Rendered as <p>: this is a pull-quote, not a heading (keeps heading order h1 -> h2) */}
      <p className="text-3xl md:text-6xl font-display font-black uppercase tracking-tighter text-on-primary leading-none text-center md:text-left">
        {children}
      </p>
    </div>
  </div>
);

export default ImpactBlock;
