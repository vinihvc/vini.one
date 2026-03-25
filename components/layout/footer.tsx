import type React from "react";
import { SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/cn";
import { Flags } from "@/lib/flags";

interface FooterProps extends React.ComponentProps<"footer"> {}

const Footer = (props: FooterProps) => {
  const { className, ...rest } = props;

  const travelingCountry = {
    countryCode: "mx",
    city: "San Luis Potosi",
    state: "San Luis Potosi",
    startDate: "2025-11-23",
    endDate: undefined,
  };

  const Flag = Flags[travelingCountry.countryCode as keyof typeof Flags];

  return (
    <footer className={cn("py-10", className)} {...rest}>
      <div className="container flex items-center justify-between text-muted-foreground">
        {travelingCountry ? (
          <div className="flex items-center space-x-2">
            <span className="relative top-px flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-green-500" />
            </span>

            <div className="flex items-center gap-2">
              <span className="text-xs">Currently</span>

              <Flag />
            </div>
          </div>
        ) : (
          <div className="grow" />
        )}

        <span className="text-sm">
          &copy;{` ${new Date().getFullYear()} ${SITE_CONFIG.name}`}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
