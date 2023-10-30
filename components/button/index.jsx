"use client";
import Link from "next/link";
import React, {forwardRef} from "react";
import css from "./index.module.scss";
import LoadingSvg from "@/public/icons/loading.svg";
import tag from "@/scripts/tag";

function Inner({icon, children}){
  return <>
    <span className={css.text}>{icon || children}</span>
    <span className={css.spinner}>
      <LoadingSvg/>
    </span>
  </>;
}

export default forwardRef(({
  ghost = false,
  dark = false,
  grayscale = false,
  href = "",
  onClick = null,
  children,
  className = "",
  icon = null,
  disabled = false,
  transparent = false,
  loading = false,
  wrap = false,
  target = "_self",
  prefetch = true,
}, ref) => {
  let thisClassName = `custom ${className} ${css.button}`;
  thisClassName += ` ${ghost ? css.ghost : ""}`;
  thisClassName += ` ${dark ? css.dark : ""}`;
  thisClassName += ` ${grayscale ? css.grayscale : ""}`;
  thisClassName += ` ${icon ? css.icon : ""}`;
  thisClassName += ` ${disabled ? css.disabled : ""}`;
  thisClassName += ` ${transparent ? css.transparent : ""}`;
  thisClassName += ` ${loading ? css.loading : ""}`;
  thisClassName += ` ${wrap ? css.wrap : ""}`;


  //send a mixpanel analytics event and then call the onClick prop
  function handleClick(event){
    tag("Button Click", {href, text: children.innerText || children});
    if (onClick){
      onClick(event);
    }
  }

  if (href){
    return <Link
      href={href}
      className={thisClassName}
      onClick={handleClick}
      target={target}
      prefetch={prefetch}
    >
      <Inner icon={icon}>{children}</Inner>
    </Link>;
  }
  return <button
    className={thisClassName}
    onClick={handleClick}
  >
    <Inner icon={icon}>{children}</Inner>
  </button>;
});
