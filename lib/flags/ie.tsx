import { createIcon } from '@/components/ui/create-icon'

export const IeFlag = createIcon({
  title: 'Ireland',
  className: 'flag',
  viewBox: '0 0 512 512',
  path: (
    <>
      <path fill="#EEE" d="M136 512V0h240v512z" />
      <path fill="#FF9811" d="M344 512V0h168v512z" />
      <path fill="#6DA544" d="M0 512V0h168v512z" />
    </>
  ),
})
