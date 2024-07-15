import React from "react";
import Navbar from "../components/Navbar/Navbar";

function RootLayout({ children }) {
  return (
    <main className="h-full">
      <Navbar />
      {children}
    </main>
  );
}

export default RootLayout;
