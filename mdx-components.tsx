import Link from "fumadocs-core/link";
import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/cn";
import { BlurImage } from "./components/ui/blur-image";

export const mdxComponents = (components?: MDXComponents): MDXComponents => ({
  ...components,
  a: ({ className, ...props }: React.ComponentProps<"a">) => (
    <a
      className={cn(
        "font-medium text-foreground underline underline-offset-4",
        className
      )}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote
      className={cn("mt-6 border-l-2 ps-6 italic", className)}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.ComponentProps<"code">) => (
    <code
      className={cn(
        "relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-[.8125rem] text-muted-foreground outline-none",
        className
      )}
      {...props}
    />
  ),
  figcaption: ({ className, ...props }: React.ComponentProps<"figcaption">) => {
    return (
      <figcaption
        className={cn(
          "flex items-center gap-2 text-muted-foreground text-sm [&_svg]:size-4.5 [&_svg]:opacity-70 sm:[&_svg]:size-4",
          className
        )}
        {...props}
      />
    );
  },
  figure: ({ className, ...props }: React.ComponentProps<"figure">) => {
    return <figure className={cn(className)} {...props} />;
  },
  h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 font-heading font-semibold text-3xl",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, children, ...props }: React.ComponentProps<"h2">) => {
    const id =
      (props as { id?: string }).id ||
      children
        ?.toString()
        .replace(/ /g, "-")
        .replace(/'/g, "")
        .replace(/\?/g, "")
        .toLowerCase();

    return (
      <h2
        {...props}
        className={cn(
          "mt-2 scroll-m-20 font-heading font-semibold text-2xl first:mt-0 [&+p]:mt-4! *:[code]:text-2xl",
          className
        )}
        id={id}
      >
        <a
          className="no-underline underline-offset-4 hover:underline"
          href={`#${id}`}
        >
          {children}
        </a>
      </h2>
    );
  },
  h3: ({ className, children, ...props }: React.ComponentProps<"h3">) => {
    const id =
      (props as { id?: string }).id ||
      children
        ?.toString()
        .replace(/ /g, "-")
        .replace(/'/g, "")
        .replace(/\?/g, "")
        .toLowerCase();

    return (
      <h3
        {...props}
        className={cn(
          "mt-2 scroll-m-20 font-semibold text-lg *:[code]:text-lg",
          className
        )}
        id={id}
      >
        <a
          className="no-underline underline-offset-4 hover:underline"
          href={`#${id}`}
        >
          {children}
        </a>
      </h3>
    );
  },
  h4: ({ className, ...props }: React.ComponentProps<"h4">) => (
    <h4
      className={cn("mt-2 scroll-m-20 font-medium tracking-tight", className)}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.ComponentProps<"h5">) => (
    <h5
      className={cn(
        "mt-2 scroll-m-20 font-medium text-lg tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.ComponentProps<"h6">) => (
    <h6
      className={cn(
        "mt-2 scroll-m-20 font-medium text-base tracking-tight",
        className
      )}
      {...props}
    />
  ),
  hr: ({ ...props }: React.ComponentProps<"hr">) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ComponentProps<typeof BlurImage>) => (
    <figure {...props}>
      <BlurImage
        alt={alt ?? ""}
        className={cn("aspect-square rounded-md", className)}
        {...props}
      />

      <figcaption className="text-muted-foreground text-sm">{alt}</figcaption>
    </figure>
  ),
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.ComponentProps<"li">) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
    <ol
      className={cn("my-6 ms-6 list-decimal text-muted-foreground", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <p
      className={cn(
        "not-first:mt-6 text-muted-foreground leading-relaxed",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.ComponentProps<"pre">) => {
    return (
      <pre
        className={cn(
          "w-max min-w-full px-4 py-3.5 text-[.8125rem] outline-none has-data-[slot=tabs]:p-0 has-data-highlighted-line:px-0 has-data-line-numbers:px-0",
          className
        )}
        {...props}
      />
    );
  },
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={cn("font-medium text-foreground", className)}
      {...props}
    />
  ),
  table: ({ className, ...props }: React.ComponentProps<"table">) => (
    <table
      className={cn("relative w-full border-none text-sm", className)}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.ComponentProps<"td">) => (
    <td
      className={cn(
        "whitespace-nowrap px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.ComponentProps<"th">) => (
    <th
      className={cn(
        "px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  tr: ({ className, ...props }: React.ComponentProps<"tr">) => (
    <tr
      className={cn("m-0 border-b last:border-b-none", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul
      className={cn("my-6 ms-6 list-disc text-muted-foreground", className)}
      {...props}
    />
  ),
});
