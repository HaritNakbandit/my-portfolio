import Image from "next/image";
import { ArrowUpRight, Folder } from "lucide-react";
import PageWrapper from "@/components/layout/page-wrapper";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { getProjects } from "@/lib/contentful";

const Project = async () => {
  const data = await getProjects();

  return (
    <PageWrapper id="project">
      <SectionHeading index="03" eyebrow="Selected work" title="Project" />
      <div className="mt-8 flex flex-col gap-6">
        {data.map((item, index) => (
          <Reveal key={item.title} delayMs={index * 100}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-5 rounded-2xl border border-line p-5 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 sm:flex-row"
            >
              {item.imageUrl && (
                <div className="relative overflow-hidden rounded-lg sm:w-62.5">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={480}
                    height={360}
                    className="h-45 w-full shrink-0 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              )}
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Folder size={15} />
                    </span>
                    <p className="m-0 text-xl font-semibold text-ink transition-colors group-hover:text-accent">
                      {item.title}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="w-max rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                    {item.year}
                  </span>
                  <span className="text-sm font-medium text-muted">{item.tools}</span>
                </div>
                <p className="m-0 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Project;
