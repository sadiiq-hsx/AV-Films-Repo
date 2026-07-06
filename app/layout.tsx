import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AV Films — Wedding & Events Photography",
    description: "Cinematic wedding and event photography & videography.",
    };

    export default function RootLayout({
      children,
      }: {
        children: React.ReactNode;
        }) {
          return (
              <html lang="en">
                    <body>{children}</body>
                        </html>
                          );
                          }