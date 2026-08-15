import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { CONTACT } from "@/config/site";

const SOCIALS = [
  { label: "Email", href: `mailto:${CONTACT.email}`, icon: <Mail size={18} /> },
  {
    label: "LinkedIn",
    href: CONTACT.linkedin,
    icon: <LinkedinIcon size={18} />,
    external: true,
  },
  {
    label: "GitHub",
    href: CONTACT.github,
    icon: <GithubIcon size={18} />,
    external: true,
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="scroll-mt-16 border-t border-line bg-canvas py-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6">
        <div className="flex flex-col items-center gap-2">
          <p className="m-0 text-2xl font-bold tracking-tight text-ink">Let&apos;s connect</p>
          <p className="m-0 text-sm text-muted">Feel free to reach out for any opportunities.</p>
        </div>
        <div className="flex gap-3">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              {...(social.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-muted transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/20"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-center text-xs text-muted">
          © {new Date().getFullYear()} Harit Nakbandit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
