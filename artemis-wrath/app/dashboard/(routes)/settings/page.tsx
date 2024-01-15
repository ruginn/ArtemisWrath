"use client";

import { useEffect } from "react";
import { useSideBar } from "@/hooks/use-sidebar";

const Settings = () => {
  const activeSidebar = useSideBar();

  useEffect(() => {
    activeSidebar.onChange("settings");
  }, []);

  return <div>Settings</div>;
};

export default Settings;
