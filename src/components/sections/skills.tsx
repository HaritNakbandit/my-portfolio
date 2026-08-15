import { Code2, Database } from "lucide-react";
import {
  SiAntdesign,
  SiCss,
  SiDart,
  SiFlutter,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMui,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import PageWrapper from "@/components/layout/page-wrapper";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { getSkills } from "@/lib/contentful";

const ICONS: Record<string, typeof SiReact> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Golang: SiGo,
  Dart: SiDart,
  CSS: SiCss,
  HTML: SiHtml5,
  PHP: SiPhp,
  SQL: Database,
  React: SiReact,
  "React Native": SiReact,
  Flutter: SiFlutter,
  Redux: SiRedux,
  MUI: SiMui,
  "Ant Design": SiAntdesign,
  Tailwind: SiTailwindcss,
  Laravel: SiLaravel,
  Vue: SiVuedotjs,
  "Vue.js": SiVuedotjs,
  "Next.js": SiNextdotjs,
};

const Skills = async () => {
  const data = await getSkills();

  return (
    <PageWrapper id="skills">
      <SectionHeading index="02" eyebrow="Technologies" title="Skills" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {data.map((group, index) => (
          <Reveal
            key={group.category}
            delayMs={index * 120}
            className="group rounded-xl border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Code2 size={16} />
                </span>
                <p className="m-0 text-sm font-semibold text-ink">{group.category}</p>
              </div>
              <span className="rounded-full border border-line px-2 py-0.5 text-xs font-medium text-muted">
                {group.items.length} {group.items.length === 1 ? "skill" : "skills"}
              </span>
            </div>
            <div className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-2.5">
              {group.items.map((item) => {
                const Icon = ICONS[item] ?? Code2;

                return (
                  <div
                    key={item}
                    className="group/item flex items-center gap-2.5 rounded-lg border border-transparent px-2.5 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-line hover:bg-surface"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent transition-colors duration-200 group-hover/item:bg-accent group-hover/item:text-white">
                      <Icon size={16} />
                    </span>
                    <span className="text-sm font-medium whitespace-nowrap text-ink">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Skills;
