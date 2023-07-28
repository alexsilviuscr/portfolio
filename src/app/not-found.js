"use client";
import Link from "next/link";

export default function NotFound() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-16">
      <h1>404</h1>
      <h2>Page not found</h2>
      <h3>
        How about you go{" "}
        <Link href="/" legacyBehavior>
          <a style={{ color: 'var(--gold)' }} >home</a>
        </Link>
      </h3>
    </div>
  );
}
