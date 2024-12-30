import { IconProps } from "./icon";
export default function VideoIcon(props: IconProps) {
  return (
    <svg
      width={props.width ?? 16}
      height={props.height ?? 10}
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_228_21)">
        <path
          d="M12.1664 3.75V0.833333C12.1664 0.375 11.7914 0 11.3331 0H1.33309C0.874756 0 0.499756 0.375 0.499756 0.833333V9.16667C0.499756 9.625 0.874756 10 1.33309 10H11.3331C11.7914 10 12.1664 9.625 12.1664 9.16667V6.25L14.0748 8.15833C14.5998 8.68333 15.4998 8.30833 15.4998 7.56667V2.425C15.4998 1.68333 14.5998 1.30833 14.0748 1.83333L12.1664 3.75Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_228_21">
          <rect width="16" height="10" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}
