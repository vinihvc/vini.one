import { createIcon } from "@/components/ui/create-icon";

export const IeFlag = createIcon({
  title: "Ireland",
  className: "flag",
  viewBox: "0 0 512 512",
  path: (
    <>
      <path d="M136 512V0h240v512z" fill="#EEE" />
      <path d="M344 512V0h168v512z" fill="#FF9811" />
      <path d="M0 512V0h168v512z" fill="#6DA544" />
    </>
  ),
});
