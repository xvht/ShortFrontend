"use server";

import { env } from "@/env";
import { type Shorten } from "@/types/Shorten";

export default async function Shorten(link: string) {
  const res = await fetch(`${env.API_URL}/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: link }),
  });

  const data = (await res.json()) as Shorten;
  return data;
}
