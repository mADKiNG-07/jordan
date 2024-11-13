import Navbar from "@/components/common/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto">
        {/* intro */}
        <div className="h-[30vh] flex flex-col justify-center items-center text-center">
          <div className="space-y-5">
            <h1 className="text-5xl leading-tight">
              Welcome to my not so{" "}
              <span className="text-purple-500">
                <i>regular</i>
              </span>{" "}
              portfolio.
            </h1>
            <p>
              Don&apos;t let the bug icon thow you off, lol. Just your regular
              programmer with a soft touch.
            </p>
          </div>
        </div>

        <section className="mb-12 grid grid-cols-2 gap-6">
          <Card>
            <CardContent className="flex justify-center items-center gap-6 py-10">
              <Image
                src="/dp.jpg"
                alt="Jane Doe"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <p className="">
                  <span className="text-purple-500">who am i...</span>I&apos;m
                  an intermediate <i className="text-purple-500">fullstack</i>{" "}
                  developer.{" "}
                  <span className="text-purple-500">
                    I used to be a graphic designer...
                  </span>
                  so i have a thing for making really good looking websites.{" "}
                  <i className="text-purple-500">What about my backend game?</i>{" "}
                  I enjoy it actually, it can be challenging but i have a couple
                  years of experience writing some logic
                  <span className="text-purple-500">
                    ...reading the docs helps lol.
                  </span>{" "}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex justify-center gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:jane@example.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com/janedoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/janedoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
