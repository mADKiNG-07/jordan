import { socials } from "@/lib/details";
import Image from "next/image";
import Link from "next/link";

export default function Bio() {
  return (
    <>
      <div className=" ">
        <div className="flex gap-3">
          <Image
            width={100}
            height={100}
            className="rounded-sm"
            src={"/dp.jpg"}
            alt={""}
          />
          <div className="space-y-3">
            <h1 className="font-semibold text-4xl">Jordan.</h1>
            <p>jordan@twinkle.dev</p>
            <div className="flex gap-3">
              {socials.map((social) => {
                return (
                  <Link
                    className="hover:text-purple-500"
                    href={social.link}
                    key={social.key}
                  >
                    {social.icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
