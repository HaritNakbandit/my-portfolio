import PageWrapper from "@/components/layout/page-wrapper";
import OverviewTabs from "@/components/sections/overview-tabs";
import SectionHeading from "@/components/ui/section-heading";
import { getEducationTimeline, getWorkTimeline } from "@/lib/get-timeline-data";

const Overview = async () => {
  const [experience, education] = await Promise.all([
    getWorkTimeline(),
    getEducationTimeline(),
  ]);

  return (
    <PageWrapper id="overview">
      <SectionHeading index="01" eyebrow="Career" title="Overview" />
      <OverviewTabs experience={experience} education={education} />
    </PageWrapper>
  );
};

export default Overview;
