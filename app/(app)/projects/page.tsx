import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FadeSection } from "@/components/ui/fade-section";
import { Heading } from "@/components/ui/heading";
import { NavLink } from "@/components/ui/nav-link";
import { SITE_CONFIG } from "@/config/site";
import { projectsSource } from "@/lib/source";
import { ogImage } from "@/utils/og-image";
import { ProjectCard } from "./_components/project-card";

export const generateMetadata = async (): Promise<Metadata> => {
  const projects = projectsSource.getPages();

  if (!projects.length) {
    notFound();
  }

  return {
    title: "Projects",
    openGraph: {
      title: "Projects",
      url: `${SITE_CONFIG.url}/projects`,
      images: [{ url: ogImage("Projects"), width: 1200, height: 630 }],
    },
  };
};

const ProjectsPage = () => {
  const projects = projectsSource.getPages();

  const publishedProjects = projects.filter(({ data }) => data.published);

  if (!publishedProjects.length) {
    notFound();
  }

  return (
    <div className="container">
      <FadeSection className="space-y-1">
        <Heading className="from-green-500 to-teal-500">Projects</Heading>

        <h2 className="text-lg text-muted-foreground">
          My open-source projects and contributions.
        </h2>
      </FadeSection>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {publishedProjects.map((project, index) => (
          <FadeSection blur delay={(index + 1) * 0.05} key={project.data.key}>
            <NavLink
              className="group block h-full rounded-2xl"
              href={project.data.website}
              isExternal
            >
              <ProjectCard data={{ ...project.data }} />
            </NavLink>
          </FadeSection>
        ))}
      </div>

      <FadeSection delay={(projects.length + 1) * 0.05}>
        <div className="mt-8 flex justify-end">
          <Button
            asChild
            className="opacity-64 hover:opacity-100"
            variant="ghost"
          >
            <NavLink
              href={`https://github.com/${SITE_CONFIG.github}?tab=repositories`}
              isExternal
            >
              Visit my GitHub
              <ExternalLink />
            </NavLink>
          </Button>
        </div>
      </FadeSection>
    </div>
  );
};

export default ProjectsPage;
