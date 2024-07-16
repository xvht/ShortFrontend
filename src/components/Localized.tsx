"use client";

import { getLanguage } from "@/lib/languages";
import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";

const LocalizedMessage: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const language = getLanguage();
    setMessage(language!.text);
  }, []);

  return (
    <h1 className="absolute text-5xl font-extrabold tracking-tight text-white sm:text-[3rem]">
      <ReactTyped strings={[message]} typeSpeed={50} />
    </h1>
  );
};

const LocalizedAuthor: React.FC = () => {
  const [author, setAuthor] = useState<string>("");

  useEffect(() => {
    const language = getLanguage();
    setAuthor(language!.author);
  }, []);

  return (
    <p className="font-semibold">
      {author}{" "}
      <a className="underline" href="https://github.com/devfxx" target="_blank">
        @devfxx
      </a>
    </p>
  );
};

export { LocalizedAuthor, LocalizedMessage };
