"use client";

import React from "react";
import PatientInfo, { PatientDetails } from "./PatientInfo";
import LabResults from "./LabResults";

interface RightSidebarProps {
  patient?: PatientDetails;
}

export default function RightSidebar({ patient }: RightSidebarProps) {
  const defaultPatient: PatientDetails = patient || {
    name: "Emily Johnson",
    dateOfBirth: "January 15, 1990",
    gender: "Female",
    contactInfo: {
      phone: "(555) 123-4567",
      email: "emily.johnson@email.com",
    },
    emergencyContact: {
      name: "John Johnson",
      phone: "(555) 987-6543",
    },
    insuranceProvider: "Blue Cross Blue Shield",
  };

  return (
    <aside className="w-96 flex flex-col rounded-2xl gap-6">
      <PatientInfo patient={defaultPatient} />

      <div className="bg-white rounded-2xl">
        <LabResults />
      </div>
    </aside>
  );
}
