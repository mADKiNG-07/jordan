import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/details";
import { Github, LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <section className="space-y-2">
      <h1 className="font-medium text-2xl ">Projects</h1>
      <p className="leading-7">
        {" "}
        During my free time and outside my day job, I work on a ton of side
        projects sometimes in different tools/languages and for various reasons;
        mainly to explore and learn new and old things.
      </p>

      <div className="h-5" />
      {/* hello world */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader className="gap-3">
              <CardTitle className="text-2xl font-medium">
                {project.title}
              </CardTitle>
              <CardDescription className="flex-grow">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="leading-7"></div>
              <div className="flex flex-wrap gap-2">
                {project.languages.map((lang) => (
                  <Badge key={lang} variant="secondary">
                    {lang}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex mt-auto justify-between items-center">
              {project.link ? (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <LinkIcon className="w-4 h-4 text-purple-500" />
                </Link>
              ) : null}

              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Github className="w-4 h-4 text-purple-500" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
