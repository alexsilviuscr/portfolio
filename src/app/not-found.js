"use client";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [countdown, setCountdown] = useState(10); // Countdown in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      window.location.href = "https://alexsilviu.vercel.app/";
    }

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-16 ">
      <h1>404</h1>
      <h2>Page not found</h2>
      <h3>
        Redirecting you home in{" "}
        <span className="link">{countdown} seconds...</span>
      </h3>
    </div>
  );
}
