"use client";

import { AlignLeft, Plus } from "lucide-react";
import React from "react";
import { BlurImage } from "@/components/ui/blur-image";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/nav-link";
import {
  Sheet,
  SheetBody,
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
    <Sheet
      closeOnInteractOutside={false}
      modal={false}
      onOpenChange={(details) => setIsOpen(details.open)}
      open={isOpen}
    >
      <SheetTrigger
        asChild
        className={cn(
          "group fixed bottom-20 z-50 max-sm:right-4 sm:bottom-8 sm:left-8",
          "zoom-in-50 animate-in",
          "data-[state=closed]:visible data-[state=open]:invisible"
        )}
      >
        <Button className="[&_svg]:size-5" size="icon-md">
          <AlignLeft className="transition group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-45" />

          <span className="sr-only">Open trips list</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        className="group sm:w-[360px]"
        placement="left"
        showCloseButton={false}
        variant="inset"
        {...rest}
      >
        <SheetBody>
          <div
            className={cn(
              "absolute bottom-20 max-sm:right-4 sm:bottom-4 sm:left-4",
              "group-data-[state=closed]:animate-out group-data-[state=open]:animate-in"
            )}
          >
            <SheetClose asChild>
              <Button className="[&_svg]:size-5" size="icon-md">
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
                  className="flex w-full rounded-xl"
                  href={trip.url}
                  key={trip.url}
                >
                  <article className="flex w-full items-center gap-4 rounded-xl border p-2 transition hover:border-blue-500">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
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
        </SheetBody>
      </SheetContent>
    </Sheet>
  );
};

export default TripSidebar;
