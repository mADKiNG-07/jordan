import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { tools } from "@/lib/details";

export default function Page() {
  return (
    <section className="space-y-2">
      <h1 className="font-medium text-2xl ">Tools</h1>
      <p className="leading-7">
        {" "}
        My primary stacks are Typescript and Next JS. I love how simple next.js
        can be...I have used a variety of other languages and tools over the
        years, like JAVA (my first love) and C#. Here are some of the tools I
        have used and am comfortable with.
      </p>

      <div className="h-6" />

      <div className="lg:grid lg:grid-cols-2 gap-4">
        {tools.map((tool) => (
          <Card key={tool.title}>
            <CardHeader className="space-y-4">
              <Image src={tool.logo} alt={tool.title} width={50} height={50} />
              <CardTitle className="font-medium text-2xl">
                {tool.title}
              </CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
