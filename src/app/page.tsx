"use client";

import { useEffect } from "react";
import "../styles/globals.css";
import SalesComp from "@/components/pages/sales";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="p-[14px]">
        <SalesComp />
      </main>
    </div>
  );
}
