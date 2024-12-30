import Selector from "../components/Selector";
import UrlInput from "../components/UrlInput";
import styles, { form } from "./home.module.css";
import { OptionType } from "../components/Selector/option";
import classname_concat from "../utils/classname_concat";
import format_options from "../data/format_options";
import { useState } from "react";
import { resolution_options } from "../data/resolution_options";
import { bitrate_options } from "../data/bitrate_options";

export default function Home() {
  const [format, set_format] = useState<"video" | "audio">("video");
  function change_format(val: "video" | "audio") {
    set_format(val);
  }

  return (
    <div>
      <form action="" className={classname_concat(form, styles[format])}>
        <UrlInput />

        <FormatSelector
          format={format}
          change_format={(val: string) =>
            change_format(val as "video" | "audio")
          }
          options={format_options}
        />

        {format === "video" && <VideoResolutionSelector />}
        {format === "audio" && <AudioQualitySelector />}
      </form>
    </div>
  );
}

type FormatSelectorOptions = {
  format: string;
  change_format: (val: string) => void;
  options: OptionType[];
};
function FormatSelector(props: FormatSelectorOptions) {
  function handle_change(val?: string) {
    if (val) props.change_format(val);
  }
  return (
    <Selector
      title="Format"
      name="format"
      options={props.options}
      onChange={handle_change}
    />
  );
}

function VideoResolutionSelector() {
  return (
    <Selector
      title="Resolution"
      name="resolution"
      options={resolution_options}
    />
  );
}

function AudioQualitySelector() {
  return <Selector title="Bitrate" name="bitrate" options={bitrate_options} />;
}
