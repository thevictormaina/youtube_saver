import AudioIcon from "../components/Icons/AudioIcon";
import VideoIcon from "../components/Icons/VideoIcon";
import { OptionType } from "../components/Selector/option";

export default [
  {
    id: "video",
    value: "video",
    label: (
      <span>
        <VideoIcon /> Video
      </span>
    ),
  },
  {
    id: "audio",
    value: "audio",
    label: (
      <span>
        <AudioIcon /> Audio
      </span>
    ),
  },
] as OptionType[];
