"use client";

import React from "react";
import PatientInfo from "./PatientInfo";
import LabResults from "./LabResults";
import { Patient } from "@/types/patient";

interface RightSidebarProps {
  patient: Patient | null;
  isLoading?: boolean;
}

export default function RightSidebar({
  patient,
  isLoading = false,
}: RightSidebarProps) {
  if (isLoading) {
    return (
      <aside className="w-96 flex flex-col rounded-2xl gap-6">
        <div className="bg-white rounded-2xl p-6 flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      </aside>
    );
  }

  if (!patient) {
    return (
      <aside className="w-96 flex flex-col rounded-2xl gap-6">
        <div className="bg-white rounded-2xl p-6 flex items-center justify-center h-64">
          <p className="text-[#072635]">Select a patient to view details</p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-96 flex flex-col rounded-2xl gap-6">
      <PatientInfo patient={patient} />

      <div className="bg-white rounded-2xl h-full overflow-y-hidden">
        <LabResults labResults={patient.lab_results} />
      </div>
    </aside>
  );
}
