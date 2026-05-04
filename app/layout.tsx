import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SlackRouter — Auto-route urgent Slack threads to the right people",
  description: "AI analyzes Slack thread content and automatically mentions relevant team members based on urgency, keywords, and context."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bb150020-966f-4ff2-b270-d2db270eea9c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
