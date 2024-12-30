import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { OptionType } from "./option";

export type SelectorCtxState = {
  /**
   * The title of the selector group that should appear in the UI.
   */
  title: string | undefined;

  /**
   * The HTML `name` attribute for the radio buttons in the selector.
   */
  name: string | undefined;

  /**
   * List of all the options in the selector group.
   */
  options: OptionType[];

  /**
   * Currently selected value from options list.
   */
  current_value?: OptionType["value"] | undefined;
};

type SelectorCtxActions = {
  /**
   * Update title field.
   */
  set_title: Dispatch<SetStateAction<string | undefined>>;

  /**
   * Update name field.
   */
  set_name: Dispatch<SetStateAction<string | undefined>>;

  /**
   * Update options field.
   */
  set_options: Dispatch<SetStateAction<OptionType[]>>;

  /**
   * Update `current_value` field.
   */
  set_current_value: Dispatch<SetStateAction<OptionType["value"]>>;
};

type SelectorCtxType = SelectorCtxState & SelectorCtxActions;

export const selector_context = createContext<SelectorCtxType | null>(null);

type UseSelectorCtxParams = {
  title?: string;
  name?: string;
  options: OptionType[];
  default_value: OptionType["value"];
};

/**
 * Custom hook to start using `SelectorCtx` in components. Takes an optional init object.
 */
export function useSelectorCtx(init?: UseSelectorCtxParams) {
  const ctx = useContext(selector_context);

  if (!ctx) return null;
  if (!init) return ctx;

  const { title, name, options, default_value } = init;
  ctx.set_title(title);
  ctx.set_name(name);
  ctx.set_options(options);
  ctx.set_current_value(default_value);

  return ctx;
}

export type SelectorProps = {
  onChange?: (val: SelectorCtxState["current_value"]) => void;
} & SelectorCtxState &
  PropsWithChildren;

export function SelectorProvider(props: SelectorProps) {
  const [title, set_title] = useState(props.title);
  const [name, set_name] = useState(props.name);
  const [options, set_options] = useState(props.options);
  const [current_value, set_current_value] = useState<OptionType["value"]>(
    props.current_value || options[0].value,
  );

  useEffect(() => {
    if (props.onChange) props.onChange(current_value);
  }, [current_value]);

  const ctx = {
    title,
    set_title,
    name,
    set_name,
    options,
    set_options,
    current_value,
    set_current_value,
  };

  return (
    <selector_context.Provider value={ctx}>
      {props.children}
    </selector_context.Provider>
  );
}
