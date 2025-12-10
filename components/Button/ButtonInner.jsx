import React, {ReactNode} from "react";
import LoadingSvg from "@/public/icons/loading.svg";
import css from "./Button.module.scss";


/**
 * Props for the Inner component of the Button.
 */
interface InnerProps {
  children: ReactNode;
  helperText?: string | null;
  icon?: ReactNode;
  iconLeft?: ReactNode;
}


/**
 * Inner component for the Button. Handles the layout of the button's content (shared between <a> and <button> subtypes).
 * @param children   - Main content of the button
 * @param helperText - Helper text to display below the button
 * @param icon       - Main icon of the button
 * @param iconLeft   - Icon to display on the left side of the button content
 */
export default function ButtonInner({children, helperText, icon, iconLeft}:InnerProps){
  return <>
    <span className={css.text}>
      {iconLeft}
      {icon || children}
    </span>
    <span className={css.spinner}>
      <LoadingSvg />
    </span>
    {helperText && <div className={css.helperText}>{helperText}</div>}
  </>;
}
