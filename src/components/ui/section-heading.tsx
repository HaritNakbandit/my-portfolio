interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
}

const SectionHeading = ({ index, eyebrow, title }: SectionHeadingProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm font-semibold text-accent">{index}</span>
        <span className="h-px w-10 bg-accent/60" />
        <span className="text-xs font-semibold tracking-[0.25em] text-muted uppercase">
          {eyebrow}
        </span>
      </div>
      <h2 className="m-0 text-3xl font-bold tracking-tight text-ink md:text-4xl">{title}</h2>
    </div>
  );
};

export default SectionHeading;
