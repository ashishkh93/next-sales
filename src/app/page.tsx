"use client";

import { useEffect } from "react";
import "../styles/globals.css";
import SalesComp from "@/components/pages/sales";

export default function Home() {
  const fetchParties = async () => {
    const response = await fetch("/api/parties?search=John");
    const data = await response.json();
    console.log(data, "data==");
  };

  useEffect(() => {
    fetchParties();
  }, []);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="p-[14px]">
        <SalesComp />
      </main>
    </div>
  );
}
