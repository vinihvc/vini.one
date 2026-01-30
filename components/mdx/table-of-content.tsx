import type { TOCItemType } from "fumadocs-core/toc";
import { NotebookText } from "lucide-react";
import { cn } from "@/lib/cn";

interface TableOfContentProps {
  /**
   * Table of content data
   */
  data: TOCItemType[];
}

export function TableOfContent(props: TableOfContentProps) {
  const { data } = props;

  if (data.length === 0) {
    return null;
  }

  return (
    <div className="group relative mt-8 overflow-clip rounded-lg border bg-card p-4">
      <NotebookText className="absolute top-4 right-4 stroke-1 opacity-60 transition-opacity group-hover:opacity-100 md:h-10 md:w-10" />

      <h4 className="mt-0 mb-3 font-medium text-lg">
        In this article you will find:
      </h4>

      <ol className="my-6 ms-6 list-decimal text-muted-foreground">
        {data.map((item) => (
          <li className="mt-2" key={item.url}>
            <a
              className={cn(
                "relative py-1 leading-4.5 no-underline",
                "text-muted-foreground",
                "transition-colors",
                "before:absolute before:inset-y-px before:-left-3.25 before:w-px before:rounded-full",
                "hover:text-foreground",
                "data-[depth=3]:ps-3.5",
                "data-[depth=4]:ps-5.5"
              )}
              data-depth={item.depth}
              href={item.url}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
