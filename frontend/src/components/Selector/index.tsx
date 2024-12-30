import { OptionComponent } from "./option";
import { useEffect, useRef } from "react";
import { background, fieldset, options_wrapper } from "./selector.module.css";
import { motion, useAnimate } from "motion/react";
import { SelectorProps, SelectorProvider, useSelectorCtx } from "./context";

/**
 * The `Selector` component uses to radio inpus to modify state. Needs to be submitted in a form.
 */
export default function (props: SelectorProps) {
  return (
    <SelectorProvider {...props}>
      <SelectorComponent />
    </SelectorProvider>
  );
}

function SelectorComponent() {
  const ctx = useSelectorCtx();
  if (!ctx) return null;

  const { title, options, current_value } = ctx;

  const refs = useRef<HTMLElement[]>([]);
  const options_ref = useRef<HTMLDivElement>(null);

  function animate_bg(duration?: number) {
    const parent_rect = options_ref.current?.getBoundingClientRect();
    const rect = refs.current
      .find((el) => {
        const input = el.querySelector("input");
        return input?.value === current_value;
      })
      ?.getBoundingClientRect();

    if (!parent_rect || !rect) return;

    animate(
      scope.current,
      {
        top: Math.abs(parent_rect.top - rect.top),
        bottom: Math.abs(parent_rect.bottom - rect.bottom),
        left: Math.abs(parent_rect.left - rect.left),
        right: Math.abs(parent_rect.right - rect.right),
      },
      { duration },
    );
  }

  const [scope, animate] = useAnimate();
  useEffect(() => {
    const resize = () => animate_bg(0);
    resize();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    animate_bg();
  }, [current_value]);

  return (
    <motion.fieldset
      initial={{ translateX: "10%", opacity: 0 }}
      animate={{ translateX: "0", opacity: 1 }}
      transition={{ type: "tween", duration: 0.5, ease: "anticipate" }}
      className={fieldset}
    >
      <h3>{title}</h3>

      <div className={options_wrapper} ref={options_ref}>
        {options.map((option, i) => {
          return (
            <OptionComponent
              key={option.id}
              {...option}
              ref={(el) => {
                if (el) refs.current[i] = el;
              }}
            />
          );
        })}

        <motion.div
          className={background}
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        ></motion.div>
      </div>
    </motion.fieldset>
  );
}
