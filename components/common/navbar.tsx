"use client";

import { Bug, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <header className="border-b border-border p-4">
        <div className="container max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl  flex justify-center items-center gap-3">
            <Bug className="text-purple-500" />
            jordan.dev
          </h1>
          <div className="flex gap-3">
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              {theme === "light" ? (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
