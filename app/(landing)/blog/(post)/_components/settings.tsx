'use client'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Select, SelectItem } from '@/components/ui/select'
import { Settings2, Undo } from 'lucide-react'
import { saveContainerWidth, saveFontFamily, saveFontSize } from '../actions'
import { useBlogPost } from '../context'
import {
  CONTAINER_WIDTHS,
  type ContainerWidthType,
  FONT_FAMILY,
  FONT_SIZES,
  type FontFamilyType,
  type FontSizeType,
} from '../data'

const PostSettings = () => {
  const {
    fontSize,
    setFontSize,
    fontFamily,
    containerWidth,
    setContainerWidth,
    setFontFamily,
    resetSettings,
  } = useBlogPost()

  const handleFontSizeChange = (value: string) => {
    setFontSize(value as FontSizeType)
    saveFontSize(value)
  }

  const handleContainerWidthChange = (value: string) => {
    setContainerWidth(value as ContainerWidthType)
    saveContainerWidth(value)
  }

  const handleFontFamilyChange = (value: string) => {
    setFontFamily(value as FontFamilyType)
    saveFontFamily(value)
  }

  return (
    <div className="sticky right-4 bottom-20 z-50 flex w-full justify-end sm:right-0 sm:bottom-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="w-9 bg-rose-500 px-0 hover:bg-rose-500/90 focus-visible:ring-rose-500"
            variant="primary"
            size="sm"
          >
            <Settings2 />

            <span className="sr-only">Customize your reading experience</span>
          </Button>
        </PopoverTrigger>

        <PopoverContent
          align="end"
          sideOffset={16}
          className="mx-auto flex w-auto items-center gap-2 selection:bg-rose-500"
        >
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm" htmlFor="font-size">
              Size
            </label>

            <Select
              id="font-size"
              className="focus-visible:ring-rose-500"
              value={fontSize}
              onValueChange={handleFontSizeChange}
            >
              {FONT_SIZES.map((size) => (
                <SelectItem key={size.value} value={size.value}>
                  {size.name}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-2 max-sm:hidden">
            <label className="font-medium text-sm" htmlFor="container-width">
              Container
            </label>

            <Select
              id="container-width"
              className="focus-visible:ring-rose-500"
              value={containerWidth}
              onValueChange={handleContainerWidthChange}
            >
              {CONTAINER_WIDTHS.map((width) => (
                <SelectItem key={width.value} value={width.value}>
                  {width.name}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm" htmlFor="font-family">
              Font
            </label>

            <Select
              id="font-family"
              className="focus-visible:ring-rose-500"
              value={fontFamily}
              onValueChange={handleFontFamilyChange}
            >
              {FONT_FAMILY.map((font) => (
                <SelectItem key={font.value} value={font.value}>
                  {font.name}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm" htmlFor="reset-settings">
              Reset
            </label>

            <Button
              id="reset-settings"
              className="focus-visible:ring-rose-500"
              variant="outline"
              size="icon"
              onClick={resetSettings}
            >
              <Undo className="h-4 w-4" />

              <span className="sr-only">Reset to default</span>
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default PostSettings
