"use client";

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Built by Bohdan logo"
      className="text-ink"
    >
      <text
        x="2"
        y="15"
        fontFamily="var(--font-geist-mono), monospace"
        fontWeight="700"
        fontSize="14"
        fill="currentColor"
        opacity="0.45"
      >
        B
      </text>
      <text
        x="12"
        y="27"
        fontFamily="var(--font-geist-mono), monospace"
        fontWeight="700"
        fontSize="14"
        fill="currentColor"
        opacity="0.7"
      >
        B
      </text>
      <text
        x="22"
        y="39"
        fontFamily="var(--font-geist-mono), monospace"
        fontWeight="700"
        fontSize="14"
        fill="currentColor"
        opacity="1"
      >
        B
      </text>
    </svg>
  );
}
