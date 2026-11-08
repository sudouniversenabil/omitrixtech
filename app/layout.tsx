
import type { Metadata } from "next";
import "./globals.css";
import Navber from "./component/Navber";

export const metadata: Metadata = {
  title: "Omitrix Tech",
  description: "Omitrix Tech - Web Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navber/>
        {children}
      </body>
    </html>
  );
}
