"use client";

import React from "react";
import Image from "next/image";

interface Patient {
  id: string;
  name: string;
  avatar?: string;
  age: number;
  gender: string;
}

interface LeftSidebarProps {
  patients: Patient[];
  selectedPatientId?: string;
  onSelectPatient: (patientId: string) => void;
}

export default function LeftSidebar({
  patients,
  selectedPatientId,
  onSelectPatient,
}: LeftSidebarProps) {
  return (
    <aside className="bg-white rounded-2xl w-80 overflow-y-auto flex flex-col">
      <div className="p-6 flex-1 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="card-title">Patients</h2>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <span className="w-5 h-5 block">
              <Image
                src="/ico-search.svg"
                alt="Search"
                width={18}
                height={18}
                aria-hidden="true"
              />
            </span>
          </button>
        </div>

        <div className="space-y-2">
          {patients.map((patient) => (
            <button
              key={patient.id}
              onClick={() => onSelectPatient(patient.id)}
              className={`w-full flex items-center justify-between p-4 rounded-lg transition-colors ${
                selectedPatientId === patient.id
                  ? "bg-blue-50 border border-blue-200"
                  : "hover:bg-gray-50 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center shrink-0">
                  {patient.avatar ? (
                    <img
                      src={patient.avatar}
                      alt={patient.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-sm font-semibold text-gray-700">
                      {patient.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-semibold text-gray-800">
                    {patient.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {patient.gender}, {patient.age}
                  </span>
                </div>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle more options menu here
                }}
                className="p-1 hover:bg-gray-200 rounded transition-colors cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.stopPropagation();
                    e.preventDefault();
                    // Handle more options menu here
                  }
                }}
              >
                <span className="w-5 h-5 block">[More Icon]</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
