import React from "react";
import { Outlet } from "react-router-dom";

function BlogParent() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default BlogParent;
