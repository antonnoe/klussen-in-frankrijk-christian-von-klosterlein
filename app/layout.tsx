import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Klussen in Frankrijk V0.7 | Het geredde archief",
  description:
    "118 geredde PDF-documenten en 579 archiefpagina’s over klussen en verbouwen in Frankrijk, ontsloten volgens de oorspronkelijke menulogica.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
