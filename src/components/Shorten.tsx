"use client";

import ShortenCall from "@/server/API";
import { type Shorten } from "@/types/Shorten";
import { useState } from "react";

export default function ShortenComponent() {
  const [link, setLink] = useState<string>("");
  const [shortened, setShortened] = useState<Shorten | null>(null);

  return (
    <div className="flex flex-col items-center justify-center gap-12 px-4 py-16">
      <input
        className="rounded-md bg-neutral-900 px-4 py-2 text-white outline-none"
        placeholder="Link"
        style={{
          position: "absolute",
          bottom: "35vh",
          width: "calc(35% - 2rem)",
          textAlign: "left",
        }}
        onChange={(e) => setLink(e.target.value)}
      />
      <button
        className="rounded-md bg-neutral-900 px-4 py-2 text-white"
        style={{
          position: "absolute",
          bottom: "27vh",
        }}
        onClick={async () => {
          try {
            const data = await ShortenCall(link);
            setShortened(data);
          } catch (e) {
            console.error(e);
          }
        }}
      >
        Submit
      </button>

      {shortened && (
        <a
          href={shortened.link}
          className="text-purple-400 underline"
          target="_blank"
          rel="noreferrer"
          style={{
            position: "absolute",
            bottom: "20vh",
          }}
        >
          {shortened.link}
        </a>
      )}
    </div>
  );
}
