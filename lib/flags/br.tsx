import { createIcon } from '@/components/ui/create-icon'

export const BrFlag = createIcon({
  title: 'Brazil',
  className: 'flag',
  viewBox: '0 0 512 512',
  path: (
    <>
      <path fill="#6DA544" d="M0 0h512v512H0z" />
      <path fill="#FFDA44" d="M256 100.2 467.5 256 256 411.8 44.5 256z" />
      <path fill="#EEE" d="M256 345a89 89 0 1 0 0-178 89 89 0 0 0 0 178" />
      <path
        fill="#0052B4"
        fillRule="evenodd"
        d="M345 256q0 8.7-1.6 17a183 183 0 0 0-169.2-52A89 89 0 0 1 345 256m-178 1.2A150 150 0 0 1 329 307a89 89 0 0 1-162-50"
        clipRule="evenodd"
      />
    </>
  ),
})
