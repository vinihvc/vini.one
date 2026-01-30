"use client";

import { AlignLeft, Plus } from "lucide-react";
import React from "react";
import { BlurImage } from "@/components/ui/blur-image";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/nav-link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/cn";
import { formatDate } from "@/utils/formatter";
import type { SerializableTrip } from "@/utils/serializer";

interface TripSidebarProps
  extends React.ComponentPropsWithoutRef<typeof Sheet> {
  /**
   * The data of the routes
   */
  data?: SerializableTrip[];
}

const TripSidebar = (props: TripSidebarProps) => {
  const { data, ...rest } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet modal={false} onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger
        asChild
        className={cn(
          "group fixed bottom-20 z-50 max-sm:right-4 sm:bottom-8 sm:left-8",
          "zoom-in-50 animate-in",
          "data-[state=closed]:visible data-[state=open]:invisible"
        )}
      >
        <Button
          className="[&_svg]:h-5 [&_svg]:w-5"
          size="icon"
          variant="primary"
        >
          <AlignLeft className="transition group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-45" />

          <span className="sr-only">Open trips list</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        animation={["fade"]}
        className="group flex flex-col rounded-lg bg-transparent p-0 backdrop-blur-none selection:bg-blue-500 sm:w-[360px]"
        side="left"
        {...rest}
      >
        <div className="flex-1 rounded-lg bg-background/50 p-4 backdrop-blur-md sm:m-4">
          <div
            className={cn(
              "absolute bottom-20 max-sm:right-4 sm:bottom-4 sm:left-4",
              "group-data-[state=closed]:animate-out group-data-[state=open]:animate-in"
            )}
          >
            <SheetClose asChild>
              <Button
                className="[&_svg]:h-5 [&_svg]:w-5"
                size="icon"
                variant="primary"
              >
                <Plus className="transition group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-45" />

                <span className="sr-only">Close trips list</span>
              </Button>
            </SheetClose>
          </div>

          <SheetTitle className="sr-only">Trips</SheetTitle>

          <SheetDescription className="sr-only">
            Some places I've visited
          </SheetDescription>

          <div className="grid grid-cols-1 gap-4 rounded-none">
            {data?.map((trip) => {
              const firstPhoto = trip.photos[0];

              return (
                <NavLink
                  className="flex w-full rounded-lg ring-blue-500"
                  href={trip.url}
                  key={trip.url}
                >
                  <article className="flex w-full items-center gap-4 rounded-lg border p-2 transition hover:border-blue-500">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md">
                      <BlurImage
                        alt={`${trip.city}, ${trip.country}`}
                        className="h-16 w-16 object-cover"
                        height={64}
                        src={firstPhoto ?? ""}
                        width={64}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="font-medium">
                        {trip.city}, {trip.country}
                      </h3>

                      <time
                        className="text-muted-foreground text-xs"
                        dateTime={trip.arrivalDate.toString()}
                      >
                        {formatDate(trip.arrivalDate, {
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                  </article>
                </NavLink>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TripSidebar;
