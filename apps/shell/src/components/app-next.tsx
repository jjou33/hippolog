import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useShellEvent } from "@hippolog/shell-router";
import { appBlogBasename } from "../constants/prefix";
import inject from "sample/injector";

const AppNext = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useShellEvent("app-sample", appBlogBasename);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    if (!isFirstRunRef.current) return;

    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(appBlogBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="app-sample" />;
};
export default AppNext;
