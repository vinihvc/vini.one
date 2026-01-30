import { X } from "lucide-react";
import { BlurImage } from "../ui/blur-image";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Stories } from "../ui/stories";

interface MDXPhotosProps {
  data?: {
    asset_id: string;
    url: string;
    width: number;
    height: number;
  }[];
}

const MDXPhotos = (props: MDXPhotosProps) => {
  const { data, ...rest } = props;

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div {...rest}>
      <h2 className="mt-10" id="gallery">
        <a href="#gallery">Photo gallery</a>
      </h2>

      <Carousel className="w-full" opts={{ align: "start", loop: true }}>
        <CarouselContent className="-ml-2">
          {data?.map((photo, index) => (
            <Dialog key={photo.asset_id}>
              <DialogTrigger asChild>
                <CarouselItem className="basis-1/3 cursor-pointer pl-2">
                  <div className="relative aspect-square rounded-md">
                    <BlurImage
                      alt="Photo"
                      className="aspect-square rounded-md"
                      fill
                      src={photo.url}
                    />
                  </div>
                </CarouselItem>
              </DialogTrigger>

              <DialogContent className="z-70 flex h-full w-full items-center justify-between bg-black/50 backdrop-blur-sm">
                <DialogTitle className="sr-only">Photos</DialogTitle>

                <DialogDescription className="sr-only">
                  Gallery of photos
                </DialogDescription>

                <Stories data={data} defaultIndex={index} />

                <DialogClose
                  asChild
                  className="fixed top-6 right-2 lg:top-2 lg:right-2"
                >
                  <Button
                    className="rounded-full max-lg:border-0 max-lg:[&_svg]:h-6 max-lg:[&_svg]:w-6"
                    size="icon"
                    variant="outline"
                  >
                    <X />
                  </Button>
                </DialogClose>
              </DialogContent>
            </Dialog>
          ))}
        </CarouselContent>

        <CarouselPrevious className="max-lg:hidden" text="Previous slide" />

        <CarouselNext className="max-lg:hidden" text="Next slide" />
      </Carousel>
    </div>
  );
};

export default MDXPhotos;
