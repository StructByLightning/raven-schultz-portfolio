/*eslint-disable complexity */
"use client";
import Link from "next/link";
import React, { forwardRef, ReactNode } from "react";
import constructClassName from "@/utilities/constructClassName";
import tag from "@/utilities/tag";
import css from "./Button.module.scss";
import ButtonInner from "./ButtonInner";

/**
 * Available button styles
 *
 * @property RAISED - Standard elevated button with shadow
 * @property GHOST  - Outlined button with transparent background
 * @property TEXT   - Minimal text-only button without borders
 */
export const BUTTON_VARIANTS = {
  RAISED: "RAISED",
  GHOST: "GHOST",
  TEXT: "TEXT",
};

/**
 * Available button sizes
 *
 * @property LARGE   - Large button for prominent CTAs
 * @property REGULAR - Standard button size
 * @property SMALL   - Compact button at 61% of regular size
 */
export const BUTTON_SIZES = {
  LARGE: "LARGE",
  REGULAR: "REGULAR",
  SMALL: "SMALL",
};


/**
 * A flexible button component that can render as either a `<Link>` or a `<button>`, depending on whether an `href` is provided.
 *
 * @param children   - The content of the button
 * @param className  - [optional] Additional custom class names for the button
 * @param danger     - [optional] If true, applies red danger styling to the button (default: false)
 * @param dataTestId - [optional] Sets the data-testid attribute (default: "")
 * @param disabled   - [optional] If true, disables the button (default: false)
 * @param ghost      - [optional] Deprecated. Use `variant` instead. (default: false)
 * @param helperText - [optional] Additional text to display below the button
 * @param href       - [optional] The URL that the button links to. Renders as a `<button>` if not provided
 * @param icon       - [optional] SVG icon. If present, the button will display as a circle with the icon
 * @param iconLeft   - [optional] An SVG icon to display on the left side
 * @param large      - [optional] Deprecated. Use `size` instead. (default: false)
 * @param size       - [optional] Controls the button size (default: BUTTON_SIZES.REGULAR)
 * @param loading    - [optional] If true, shows a loading indicator (default: false)
 * @param onClick    - [optional] The click event handler
 * @param prefetch   - [optional] Prefetch the page for the link. Only applies when `href` is provided (default: true)
 * @param target     - [optional] The target attribute for the link (default: "_self")
 * @param type       - [optional] HTML button type (default: "button")
 * @param variant    - [optional] Controls the button styling (default: BUTTON_VARIANTS.RAISED)
 * @param wrap       - [optional] If true, allows text wrapping inside the button (default: false)
 */
export default forwardRef(({
  children,
  className = "",
  danger = false,
  dataTestId = "",
  disabled = false,
  ghost = false,
  helperText = null,
  href = "",
  icon = null,
  iconLeft = null,
  large = false,
  loading = false,
  onClick = null,
  prefetch = true,
  size = BUTTON_SIZES.REGULAR,
  target = "_self",
  type = "button",
  variant = BUTTON_VARIANTS.RAISED,
  wrap = false,
}, ref) => {
  const fullClassName = constructClassName(css, "button", `custom ${className}`, {
    ghost: ghost || variant === BUTTON_VARIANTS.GHOST,
    icon: Boolean(icon),
    disabled,
    loading,
    wrap,
    large: large || size === BUTTON_SIZES.LARGE,
    small: size === BUTTON_SIZES.SMALL,
    danger,
    text: variant === BUTTON_VARIANTS.TEXT,
  });


  //log click event and call onClick handler
  function handleClick(e) {
    tag("buttonClick", {
      variant: variant,
      href,
      text: children?.toString() || "",
      className,
      disabled,
      loading,
      wrap,
      target,
      large,
      type,
    });

    if (onClick && !loading) {
      onClick(e);
    }
  }

  if (href) {
    return <Link
      href={href}
      className={fullClassName}
      onClick={handleClick}
      target={target}
      prefetch={prefetch}
      ref={ref}
      aria-disabled={disabled}
      data-testid={dataTestId}
    >
      <ButtonInner icon={icon} iconLeft={iconLeft} helperText={helperText}>{children}</ButtonInner>
    </Link>;
  }

  return <button
    className={fullClassName}
    onClick={handleClick}
    ref={ref}
    type={type}
    disabled={disabled}
    data-testid={dataTestId}
  >
    <ButtonInner icon={icon} iconLeft={iconLeft} helperText={helperText}>{children}</ButtonInner>
  </button>;
});
