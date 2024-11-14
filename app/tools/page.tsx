import Bio from "@/components/common/bio";
import Navbar from "@/components/common/navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto py-6 space-y-7">
        {/* intro */}
        <Bio />

        <section className="space-y-2">
          <h1 className="font-medium text-2xl ">Tools</h1>
          <p className="leading-7">
            {" "}
            My primary stack includes NextJS, Typescript and PHP, but I have
            used a variety of other languages and tools over the years out of
            necessity or out of curiosity. Here are some of the tools I have
            used and am comfortable with.
          </p>
        </section>
      </main>
    </div>
  );
}
