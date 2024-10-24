import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useShellEvent } from "@hippolog/shell-router";
import { appSampleBasename } from "../constants/prefix";
import inject from "sample/injector";

const AppBlog = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useShellEvent("app-sample", appSampleBasename);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    if (!isFirstRunRef.current) return;

    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(appSampleBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="app-sample" />;
};
export default AppBlog;
