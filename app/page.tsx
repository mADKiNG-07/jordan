import Bio from "@/components/common/bio";
import Navbar from "@/components/common/navbar";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto py-6 space-y-7">
        {/* intro */}
        <Bio />

        <section className="">
          <p className="leading-7">
            Hi, I&apos;m Jordan, a simple developer. I am passionate about
            combining creativity and logic, hence{" "}
            <Link href={""} className="italic text-purple-500">
              my favourite tools
            </Link>
            . From a young age, I was captivated by{" "}
            <Link href={""} className="italic text-purple-500">
              cartoons
            </Link>{" "}
            and games, but sadly i cant watch as much i used to. Over the years,
            i worked on several projects, some of which really helped me grow as
            a developer. I really love leaning{" "}
            <Link href={""} className="italic text-purple-500">
              new things,
            </Link>{" "}
            and sharing my knowledge with others. I want my work to not only
            showcase my skills but also inspire fellow developers and help them
            grow. If you&apos;re looking for someone who loves a good challenge
            and enjoys collaboration, I&apos;m excited to connect and make
            something amazing together.
          </p>
        </section>
      </main>
    </div>
  );
}
