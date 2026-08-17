import type { SVGProps } from "react";

// Minimal hand-rolled icon set, kept tiny and dependency-free rather than
// pulling in a full icon library for a handful of glyphs.

const base = (props: SVGProps<SVGSVGElement>) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export function IconGithub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4.5-1 4.5-4.5a3.6 3.6 0 0 0-1-2.5 3.3 3.3 0 0 0-.1-2.5s-.8-.3-2.9 1a10 10 0 0 0-5 0C7.8 6 7 6.3 7 6.3a3.3 3.3 0 0 0-.1 2.5A3.6 3.6 0 0 0 6 11.3c0 3.5 2.5 4.3 4.5 4.5-.4.4-.5.9-.5 1.7V21" />
    </svg>
  );
}

export function IconLinkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M8 10.5v6M8 7.8v.01M12.2 16.5v-3.4c0-1.2.9-2.1 2.1-2.1 1.2 0 1.9.9 1.9 2.1v3.4" />
      <path d="M12.2 12v4.5" />
    </svg>
  );
}

export function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.1 5.6a1 1 0 0 0 1.2 0L20 7" />
    </svg>
  );
}

export function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M6.5 3.5h2.7l1.3 4-2 1.4a10.6 10.6 0 0 0 4.6 4.6l1.4-2 4 1.3v2.7c0 1.1-.9 2-2.1 1.9A16.5 16.5 0 0 1 4.6 5.6c-.1-1.2.8-2.1 1.9-2.1Z" />
    </svg>
  );
}

export function IconArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconDownload(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 4v11m0 0 4-4m-4 4-4-4M5 18.5h14" />
    </svg>
  );
}

export function IconExternal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M9.5 6.5H6a1.5 1.5 0 0 0-1.5 1.5v10A1.5 1.5 0 0 0 6 19.5h10a1.5 1.5 0 0 0 1.5-1.5v-3.5" />
      <path d="M14 4.5h5.5V10M19.2 4.8l-8.7 8.7" />
    </svg>
  );
}

export function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 6.5h16M4 12h16M4 17.5h16" />
    </svg>
  );
}

export function IconClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
