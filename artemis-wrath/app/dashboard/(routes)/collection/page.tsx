"use client";
import { useEffect } from "react";
import { useSideBar } from "@/hooks/use-sidebar";

const Collection = () => {
  const activeSidebar = useSideBar();

  useEffect(() => {
    activeSidebar.onChange("collection");
  }, []);

  return (
    <div>
      <h1>Collection</h1>
    </div>
  );
};

export default Collection;
