"use server";

import { env } from "@/env";
import { type Response } from "@/types/Shorten";
import { z } from "zod";

export default async function Shorten(link: string) {
  // make sure the link is a valid URL
  try {
    if (!z.string().url().parse(link)) return;

    const res = await fetch(`${env.API_URL}/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: link }),
    });

    const data = (await res.json()) as Response;
    return data;
  } catch (e) {
    return;
  }
}
