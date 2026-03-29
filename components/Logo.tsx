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
    >
      {/* Three B's stacked — geometric monogram */}
      {/* Top B */}
      <text
        x="2"
        y="15"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="#3b82f6"
        opacity="0.5"
      >
        B
      </text>
      {/* Middle B */}
      <text
        x="12"
        y="27"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="#3b82f6"
        opacity="0.75"
      >
        B
      </text>
      {/* Bottom B */}
      <text
        x="22"
        y="39"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="#3b82f6"
        opacity="1"
      >
        B
      </text>
    </svg>
  );
}
