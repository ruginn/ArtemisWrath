"use client";

import { useEffect } from "react";
import { useSideBar } from "@/hooks/use-sidebar";

const DeckBuilder = () => {
  const activeSidebar = useSideBar();
  useEffect(() => {
    activeSidebar.onChange("deckbuilder");
  }, []);
  return (
    <div className="bg-green-400 w-full">
      <h1 className="text-red-500">Deck Builder</h1>
    </div>
  );
};

export default DeckBuilder;
