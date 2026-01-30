import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/cn";
import { Icons } from "@/lib/icons";
import type { ProjectType } from "@/types/project";

interface ProjectCardProps extends React.ComponentProps<"article"> {
  /**
   * The data of the project
   */
  data: ProjectType;
}

const PROJECT_CARD_CLASSES: Record<ProjectType["key"], string> = {
  eletrohits: "",
  os: "text-blue-500",
  apphub: "text-emerald-500",
  books: "text-pink-500",
  clock: "text-yellow-500",
  idleval: "text-orange-500",
  optimizer: "text-purple-500",
  date: "text-indigo-500",
  fit: "text-green-500",
};

export const ProjectCard = (props: ProjectCardProps) => {
  const { data, className, ...rest } = props;

  const Icon = Icons[data.key as keyof typeof Icons];

  const projectClasses = PROJECT_CARD_CLASSES[data.key];

  return (
    <article
      className={cn(
        "relative flex h-full flex-col items-center gap-2 rounded-lg border border-foreground/5 bg-card p-4 drop-shadow-lg transition hover:border-foreground/10",
        className
      )}
      {...rest}
    >
      {Icon && (
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-md border bg-foreground/5",
            projectClasses
          )}
        >
          <Icon className="h-5 w-5 stroke-1" />
        </div>
      )}

      <div className="text-center">
        <h1 className="font-medium">{data.title}</h1>

        <p className="line-clamp-2 text-balance px-5 text-muted-foreground text-sm">
          {data.description}
        </p>
      </div>

      <div className="absolute top-3 right-3">
        <ExternalLink className="h-3 w-3 opacity-50 transition group-hover:opacity-100 group-focus-visible:opacity-100" />
      </div>
    </article>
  );
};
