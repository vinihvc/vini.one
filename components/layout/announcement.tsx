import { cn } from "@/lib/cn";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { NavLink } from "../ui/nav-link";

interface AnnouncementProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  /**
   * The data to display in the announcement
   */
  data: {
    /**
     * The badge to display in the announcement
     */
    badge: string;
    /**
     * The label to display in the announcement
     */
    label: string;
    /**
     * The href to display in the announcement
     */
    href: string;
  };
}

export const Announcement = (props: AnnouncementProps) => {
  const { data, className, ...rest } = props;

  return (
    <Button
      asChild
      className={cn("gap-4 rounded-full pr-4 pl-1.5 text-xs", className)}
      size="sm"
      variant="outline"
      {...rest}
    >
      <NavLink href={data.href}>
        <Badge className="rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-background">
          {data.badge}
        </Badge>

        {data.label}
      </NavLink>
    </Button>
  );
};
