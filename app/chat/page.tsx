import React from "react";
import { Metadata } from "next";

// This function is used to generate the metadata for the page
export const metadata: Metadata = {
    title: "chat",
    description: "Generated by create next app",
  };
export default function chat() {
  return (
    <main className="bg-blue-500 p-10">
      <h1>chat</h1>

    </main>
  );
}