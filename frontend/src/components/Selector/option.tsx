import { useSelectorCtx } from "./context";
import { active, inactive, option } from "./option.module.css";
import { forwardRef, RefObject, useMemo, useRef } from "react";

export type OptionType<T = string> = {
  /**
   * The HTML `id` attribute for the radio `input` and `label` elements.
   */
  id: string;

  /**
   * The value for the `input` element of this option.
   */
  value: T;

  /**
   * The label that will appear in the UI. Should default to `value` if not defined. Can be an element or component as well.
   */
  label?: React.ReactNode | string;
  //icon?: React.ReactNode;
};

/**
 * Single option in the `Selector` component. Each option is highlighted by a hidden radio button.
 */
export const OptionComponent = forwardRef<HTMLElement, OptionType>(
  (props, ref) => {
    const ctx = useSelectorCtx();
    if (!ctx) return null;

    const { id, label, value } = props;
    const { current_value, name, set_current_value } = ctx;

    const is_active = useMemo(() => {
      return value === current_value ? active : inactive;
    }, [value, current_value]);

    function handle_click() {
      set_current_value(value);
    }
    return (
      <label
        onClick={handle_click}
        htmlFor={id}
        className={`${option} ${is_active}`}
        ref={ref as RefObject<HTMLLabelElement>}
      >
        <span>{label || value}</span>

        <input
          type="radio"
          hidden
          name={name}
          id={id}
          value={value}
          defaultChecked={current_value === value}
        />
      </label>
    );
  },
);
