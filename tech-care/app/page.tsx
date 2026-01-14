"use client";

import { useState } from "react";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import DiagnosisHistory from "@/components/DiagnosisHistory";
import DiagnosticList from "@/components/DiagnosticList";

export default function Home() {
  const [selectedPatientId, setSelectedPatientId] = useState("1");

  const mockPatients = [
    { id: "1", name: "Emily Johnson", age: 34, gender: "Female" },
    { id: "2", name: "Michael Smith", age: 45, gender: "Male" },
    { id: "3", name: "Sarah Williams", age: 28, gender: "Female" },
    { id: "4", name: "David Brown", age: 52, gender: "Male" },
    { id: "5", name: "Jessica Davis", age: 38, gender: "Female" },
    { id: "6", name: "Christopher Wilson", age: 41, gender: "Male" },
  ];

  return (
    <div className="h-screen flex flex-col mb-8">
      <Header />

      <div className="flex flex-1 overflow-hidden w-[calc(100vw-36px)] m-auto">
        <LeftSidebar
          patients={mockPatients}
          selectedPatientId={selectedPatientId}
          onSelectPatient={setSelectedPatientId}
        />

        <main className="flex-1 pl-6 pr-6 space-y-6">
          <DiagnosisHistory />
          <DiagnosticList />
        </main>
        <RightSidebar />
      </div>
    </div>
  );
}
