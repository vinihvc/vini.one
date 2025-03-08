import { X } from 'lucide-react'
import { BlurImage } from '../ui/blur-image'
import { Button } from '../ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Stories } from '../ui/stories'

interface MDXPhotosProps {
  data?: {
    asset_id: string
    url: string
    width: number
    height: number
  }[]
}

const MDXPhotos = (props: MDXPhotosProps) => {
  const { data, ...rest } = props

  if (!data || data.length === 0) {
    return null
  }

  return (
    <div {...rest}>
      <h2 id="gallery" className="mt-10">
        <a href="#gallery">Galeria de fotos</a>
      </h2>

      <Carousel className="w-full" opts={{ align: 'start', loop: true }}>
        <CarouselContent className="-ml-2">
          {data?.map((photo, index) => (
            <Dialog key={photo.asset_id}>
              <DialogTrigger asChild>
                <CarouselItem className="basis-1/3 cursor-pointer pl-2">
                  <div className="relative aspect-square rounded-md">
                    <BlurImage
                      src={photo.url}
                      alt="Photo"
                      className="aspect-square rounded-md"
                      fill
                    />
                  </div>
                </CarouselItem>
              </DialogTrigger>

              <DialogContent className="flex h-full w-full items-center justify-between">
                <DialogTitle className="sr-only">Photos</DialogTitle>

                <DialogDescription className="sr-only">
                  Gallery of photos
                </DialogDescription>

                <Stories defaultIndex={index} data={data} />

                <DialogClose
                  className="fixed top-6 right-2 lg:top-2 lg:right-2"
                  asChild
                >
                  <Button
                    className="rounded-full max-lg:border-0 max-lg:[&_svg]:h-6 max-lg:[&_svg]:w-6"
                    variant="outline"
                    size="icon"
                  >
                    <X />
                  </Button>
                </DialogClose>
              </DialogContent>
            </Dialog>
          ))}
        </CarouselContent>

        <CarouselPrevious className="max-lg:hidden" />

        <CarouselNext className="max-lg:hidden" />
      </Carousel>
    </div>
  )
}

export default MDXPhotos
