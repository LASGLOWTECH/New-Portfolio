"use client";

import Image from "next/image";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <div className="flex justify-center hover:scale-[1.02] transition-transform duration-300">
      <div className="bg-gradient-to-tl from-darkestBlue via-greyBlack to-darkestBlue shadow-2xl px-4 py-6 rounded-2xl w-full ">
        <Image
          src={data.img}
          alt={data.title}
          width={500}
          height={300}
          className="rounded-md border-b-4 border-amber2 shadow-md"
        />

        <h3 className="text-base font-bold text-ash2 mt-4">{data.title}</h3>
        <p className="text-sm text-ash2 py-3">{data.info}</p>

        <Link href={data.link} className="inline-block mt-2">
          <button className="font-bold text-darkBlue text-lg py-2 px-4 rounded-md bg-gradient-to-tr from-amber2 via-amber1 to-amber2 hover:scale-105 transition">
            {data.button}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
