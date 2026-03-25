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
        "relative",
        "h-full",
        "p-4",
        "flex flex-col items-center gap-2",
        "bg-card",
        "rounded-2xl border",
        "hover:border-foreground/10",
        className
      )}
      {...rest}
    >
      {Icon && (
        <div
          className={cn(
            "size-10",
            "flex items-center justify-center",
            "rounded-lg border border-input",
            projectClasses
          )}
        >
          <Icon className="size-5 stroke-1" />
        </div>
      )}

      <div className="flex flex-col gap-1 text-center">
        <h1 className="font-medium">{data.title}</h1>

        <p className="line-clamp-2 text-muted-foreground text-sm">
          {data.description}
        </p>
      </div>

      <div className="absolute top-3 right-3">
        <ExternalLink className="size-2.5 opacity-50 transition group-hover:opacity-100 group-focus-visible:opacity-100" />
      </div>
    </article>
  );
};
