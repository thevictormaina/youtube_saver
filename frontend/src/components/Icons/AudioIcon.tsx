import { IconProps } from "./icon";
export default function AudioIcon(props: IconProps) {
  return (
    <svg
      width={props.width ?? 10}
      height={props.height ?? 16}
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_228_25)">
        <path
          d="M5.00062 2.16667V9.29167C4.21728 8.84167 3.25062 8.66667 2.22562 9.025C1.10895 9.425 0.250618 10.4167 0.0506181 11.5833C-0.0418409 12.1083 -0.007284 12.6477 0.1514 13.1566C0.310083 13.6655 0.588282 14.129 0.962738 14.5083C1.33719 14.8877 1.79702 15.1718 2.30378 15.3371C2.81054 15.5024 3.34951 15.544 3.87562 15.4583C5.50895 15.2 6.66728 13.7 6.66728 12.0417V3.83333H8.33395C9.25062 3.83333 10.0006 3.08333 10.0006 2.16667C10.0006 1.25 9.25062 0.5 8.33395 0.5H6.66728C5.75062 0.5 5.00062 1.25 5.00062 2.16667Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_228_25">
          <rect width="10.0006" height="16" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}
