import { LocalizedAuthor, LocalizedMessage } from "@/components/Localized";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0f0124] to-[#070112] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <LocalizedMessage />

        <input
          className="rounded-md bg-neutral-900 px-4 py-2 text-white outline-none"
          placeholder="Link"
          style={{
            position: "absolute",
            bottom: "35vh",
            width: "calc(35% - 2rem)",
            textAlign: "left",
          }}
        />
      </div>
      <div className="absolute bottom-4 text-sm text-white">
        <LocalizedAuthor />
      </div>
    </main>
  );
}
