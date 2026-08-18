import Image from "next/image";
import { Download, GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { CONTACT, RESUME_PATH, SITE_DESCRIPTION, SITE_JOB_TITLE, SITE_NAME } from "@/config/site";
import { getProfile } from "@/lib/contentful";
import HeroGrain from "@/components/ui/hero-grain";

const FALLBACK = {
  name: SITE_NAME,
  jobTitle: SITE_JOB_TITLE,
  bio: SITE_DESCRIPTION,
  resumeUrl: RESUME_PATH,
  photoUrl: "/assets/profile.jpg",
};

const AboutMe = async () => {
  const profile = await getProfile();

  const name = profile?.name ?? FALLBACK.name;
  const jobTitle = profile?.jobTitle ?? FALLBACK.jobTitle;
  const bio = profile?.bio ?? FALLBACK.bio;
  const resumeUrl = profile?.resumeUrl ?? FALLBACK.resumeUrl;
  const photoUrl = profile?.photoUrl ?? FALLBACK.photoUrl;

  const socials = [
    { label: "Email", href: `mailto:${CONTACT.email}`, icon: <Mail size={16} /> },
    {
      label: "LinkedIn",
      href: CONTACT.linkedin,
      icon: <LinkedinIcon size={16} />,
      external: true,
    },
    {
      label: "GitHub",
      href: CONTACT.github,
      icon: <GithubIcon size={16} />,
      external: true,
    },
  ];

  return (
    <div className="relative z-0 flex min-h-[calc(100vh-64px)] items-center overflow-hidden bg-canvas">
      <HeroGrain />
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="animate-pulse-glow pointer-events-none absolute -top-24 right-8 -z-10 h-72 w-72 rounded-full bg-accent/15 blur-[80px]" />
      <div className="animate-pulse-glow pointer-events-none absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-[90px]" />

      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-16">
          <div className="flex w-full flex-col items-start gap-6 md:w-7/12">
            <h1 className="animate-fade-in-up m-0 text-5xl font-bold leading-tight tracking-tight text-ink md:text-6xl">
              {name}
              <br />
              <span className="text-gradient">{jobTitle}</span>
            </h1>

            <p
              className="animate-fade-in-up m-0 max-w-md text-base leading-relaxed text-muted"
              style={{ animationDelay: "120ms" }}
            >
              {bio}
            </p>

            <div
              className="animate-fade-in-up flex flex-wrap items-center gap-3"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href={resumeUrl}
                download="resume_harit.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-max items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 active:translate-y-0"
              >
                Download Resume
                <Download
                  size={16}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>

              <div className="flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    {...(social.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up flex w-full items-center justify-center md:w-5/12">
            <div className="animate-float relative">
              <div className="absolute -inset-4 rounded-full bg-accent/20 blur-2xl" />
              <div className="relative rounded-full bg-gradient-to-tr from-accent/60 via-accent/20 to-transparent p-1.5">
                <Image
                  src={photoUrl}
                  alt={name}
                  width={256}
                  height={256}
                  className="h-50 w-50 rounded-full border-4 border-canvas object-cover transition-transform duration-500 hover:scale-105 md:h-64 md:w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
