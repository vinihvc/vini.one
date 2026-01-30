import { createIcon } from "@/components/ui/create-icon";

export const EuaFlag = createIcon({
  title: "United States of America",
  className: "flag",
  viewBox: "0 0 512 512",
  path: (
    <>
      <path d="M0 0h512v512H0z" fill="#EEE" />
      <path
        d="M0 122.4V55.7h512v66.7zM0 256v-66.8h512V256zm0 133.6v-66.8h512v66.8zM0 512h512v-55.7H0z"
        fill="#D80027"
      />
      <path d="M0 0h256v256H0z" fill="#0052B4" />
      <path
        clipRule="evenodd"
        d="m44.8 6.4 8.6 26.5h28L58.6 49.3 67.4 76 44.8 59.5 22.2 75.9 31 49.3 8.3 33h27.9zm83.2 0 8.6 26.5h28l-22.7 16.4 8.7 26.6L128 59.5l-22.6 16.4 8.6-26.6L91.6 33h27.9zm91.8 26.5-8.6-26.5-8.6 26.5h-28l22.7 16.4-8.7 26.6 22.6-16.4 22.6 16.4-8.7-26.6 22.6-16.4z"
        fill="#EEE"
        fillRule="evenodd"
      />
    </>
  ),
});
