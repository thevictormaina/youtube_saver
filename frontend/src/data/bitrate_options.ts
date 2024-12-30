import { OptionType } from "../components/Selector/option";

export const bitrates = [
  "320 kbps",
  "256 kbps",
  "192 kbps",
  "128 kbps",
] as const;

export const bitrate_options = bitrates.map<
  OptionType<(typeof bitrates)[number]>
>((b) => ({
  id: b,
  value: b,
}));
