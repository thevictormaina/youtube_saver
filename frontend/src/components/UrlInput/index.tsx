import { useRef } from "react";
import {
  wrapper,
  label,
  input_container,
  input,
  paste_button,
  submit_button,
} from "./url_input.module.css";
import classname_concat from "../../utils/classname_concat";
import { small } from "../../styles/fonts.module.css";
import LinkIcon from "../Icons/LinkIcon";
import PasteIcon from "../Icons/PasteIcon";
import RefreshIcon from "../Icons/RefreshIcon";

export default function UrlInput() {
  const id = "youtube_link";
  const placeholder_url = "https://youtu.be/dQw4w9WgXcQ";

  const input_ref = useRef<HTMLInputElement>(null);

  function handle_focus() {
    if (!input_ref.current) return;
    input_ref.current.focus();
  }

  return (
    <div className={wrapper} onClick={handle_focus}>
      <label htmlFor={id} className={classname_concat(small, label)}>
        Paste your YouTube link here
      </label>

      <div className={input_container}>
        <LinkIcon />

        <input
          id={id}
          name={id}
          type="text"
          className={input}
          placeholder={placeholder_url}
          defaultValue={placeholder_url}
          ref={input_ref}
        />

        <PasteButton />
      </div>

      <SubmitButton />
    </div>
  );
}

function PasteButton() {
  return (
    <button type="button" className={paste_button}>
      <PasteIcon />
      <span>Paste</span>
    </button>
  );
}

function SubmitButton() {
  return (
    <button className={submit_button}>
      <span>Convert</span>
      <RefreshIcon />
    </button>
  );
}
