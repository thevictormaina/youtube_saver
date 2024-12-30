export const resolutions = [
  "4k",
  "1080p",
  "720p",
  "480p",
  "320p",
  "144p",
] as const;

export const resolution_options: OptionType<typeof resolution>[] = [
  { id: "4k", value: "4k" },
  { id: "1080p", value: "1080p" },
  { id: "720p", value: "720p" },
  { id: "480p", value: "480p" },
  { id: "320p", value: "320p" },
  { id: "144p", value: "144p" },
];
