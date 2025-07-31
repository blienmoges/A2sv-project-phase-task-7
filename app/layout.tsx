"use client";
import { Provider } from "react-redux";
import { store } from "./component/store";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <main className="min-h-screen ">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
