import ReactMarkdown, { type Components } from "react-markdown";

interface RoleDescriptionProps {
  text: string;
}

const components: Components = {
  p: ({ children }) => <p className="m-0">{children}</p>,
  ul: ({ children }) => (
    <ul className="m-0 flex list-disc flex-col gap-1 pl-5 marker:text-accent">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="m-0 flex list-decimal flex-col gap-1 pl-5 marker:text-accent">{children}</ol>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent underline underline-offset-2"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
};

const RoleDescription = ({ text }: RoleDescriptionProps) => (
  <div className="flex flex-col gap-1.5 text-sm leading-relaxed text-muted">
    <ReactMarkdown components={components}>{text}</ReactMarkdown>
  </div>
);

export default RoleDescription;
