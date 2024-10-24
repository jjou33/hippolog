import React from "react";
import { Link, Outlet } from "react-router-dom";
import { appSampleBasename, appBlogBasename } from "../constants/prefix";

const Layout = () => {
  return (
    <div>
      <header>
        <div>
          <Link to="/">
            <span>HIPPO BLOG</span>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to={`${appSampleBasename}`}>포스팅 SAMPLE</Link>
              </li>
              <li>
                <Link to={`${appSampleBasename}/1`}>포스팅 1</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="constainer">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
