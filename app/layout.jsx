"use client";
import "@/styles/core.scss";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import tag from "@/scripts/tag";
import { v4 as uuidv4 } from "uuid";
import { setCookie, getCookie } from "cookies-next";


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect((a, b, c) => {
    tag("Page View", {});

    let distinctId = getCookie("distinctId");
    if (!distinctId){
      distinctId = uuidv4();
      setCookie("distinctId", distinctId, 365);
    }

    window.pageExited = false;
    window.pageViewStartTime = (new Date()).getTime();
    function handleExit(){
      if (!window.pageExited){
        window.pageExited = true;
        tag("Page Exit", {
          duration: (new Date()).getTime() - window.pageViewStartTime,
        });
      }
    }
    window.handlePageExit = function(){
      handleExit();
    };

    window.addEventListener("beforeunload", handlePageExit);
    document.addEventListener("beforeunload", handlePageExit);
    window.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden"){
        handleExit();
      }
    });
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden"){
        handleExit();
      }
    });
    window.addEventListener("pagehide", () => {
      handleExit();
    });
    document.addEventListener("pagehide", () => {
      handleExit();
    });
  }, [pathname, searchParams]);

  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/va9B4kDNxMZdWfMOD5VnSKzeRhf6.woff2" as="font" type="font/woff2" crossOrigin="true"/>
        <link rel="preload" href="/fonts/va9B4kDNxMZdWfMOD5VnWKneRhf6.woff2" as="font" type="font/woff2" crossOrigin="true"/>
        <link rel="preload" href="/fonts/va9C4kDNxMZdWfMOD5VvkrjJYTI.woff2" as="font" type="font/woff2" crossOrigin="true"/>
        <link rel="preload" href="/fonts/va9E4kDNxMZdWfMOD5Vvl4jL.woff2" as="font" type="font/woff2" crossOrigin="true"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0"/>
      </head>
      <body>
        <div className="invisible">
        </div>
        {children}
      </body>
    </html>
  );
}
