"use client";

import { Moon, Sun, Terminal } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

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
        <div className="container max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex justify-center items-center gap-6">
            <Link href={"/"}>
              <h1 className="flex justify-center items-center text-purple-500">
                <Terminal className="" />
                twinkle.toez
              </h1>
            </Link>
            <div>
              <Link href={"/tools"}>Blog</Link>
            </div>
            <div>
              <Link href={"/projects"}>Projects</Link>
            </div>
            <div>
              <Link href={"/tools"}>Tools</Link>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={toggleTheme}
            >
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
