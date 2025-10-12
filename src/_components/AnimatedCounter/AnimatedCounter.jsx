'use client';

import { useState, useEffect } from "react";
import Big from "../Text/Big/Big";

export default function AnimatedCounter({ targetNumber, duration = 2000, ...props }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / targetNumber));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= targetNumber) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return (
    <Big text={count} {...props} />
  );
}
