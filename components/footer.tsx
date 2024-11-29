import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-6 bg-white">
      <div className="container flex flex-col items-center justify-center gap-4">
        <p className="text-center text-sm leading-loose text-black inline">
          Built by{" "}
          <Link
            href="https://www.linkedin.com/in/mohammed-aldaqaq-5b6a7528b"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Mohammed Aldaqaq
          </Link>
          , with source code available on{" "}
          <Link
            href="https://github.com/Gardo32/Cloud-Guide"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .{" "}
          <Link
            href="/credits"
            className="font-medium underline underline-offset-4"
          >
            View Credits
          </Link>
        </p>
      </div>
    </footer>
  );
}
