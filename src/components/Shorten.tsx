"use client";

import { env } from "@/env";
import Shorten from "@/server/API";
import { type Response } from "@/types/Shorten";
import { useState } from "react";
import { z } from "zod";

export default function ShortenComponent() {
  const [link, setLink] = useState<string>("");
  const [shortened, setShortened] = useState<Response | null>(null);

  const shorten = async (link: string) => {
    try {
      const data = await Shorten(link);
      if (!data) return;

      setShortened(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        className="absolute bottom-72 rounded-md bg-neutral-900 px-4 py-2 text-white outline-none"
        placeholder="Link"
        style={{
          width: "calc(35% - 2rem)",
          textAlign: "left",
        }}
        onChange={(e) => setLink(e.target.value)}
      />
      <button
        className="absolute bottom-56 rounded-md bg-neutral-900 px-4 py-2 text-white"
        onClick={async () => {
          try {
            if (!link) return;
            if (!z.string().url().parse(link)) return; // this will throw if not valid url

            await shorten(link);
          } catch (e) {
            return; // not a valid url
          }
        }}
      >
        Submit
      </button>

      {shortened && (
        <a
          href={`${env.NEXT_PUBLIC_BASE_URL}/${shortened.id}`}
          className="absolute bottom-40 text-blue-400 underline"
          target="_blank"
          rel="noreferrer noopener"
        >
          {`${env.NEXT_PUBLIC_BASE_URL}/${shortened.id}`}
        </a>
      )}
    </div>
  );
}
