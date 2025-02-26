import { cn } from '@/lib/cn'

export const Input = (props: React.ComponentProps<'input'>) => {
  const { className, ...rest } = props

  return (
    <input
      className={cn(
        'flex h-9 w-full',
        'px-3 py-1',
        'transition-colors ',
        'border border-input',
        'text-base',
        'bg-transparent ',
        'placeholder:text-muted-foreground',
        'rounded-md shadow-sm',
        'file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm',
        'ring-ring focus-visible:outline-0 focus-visible:ring-1',
        'disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...rest}
    />
  )
}
