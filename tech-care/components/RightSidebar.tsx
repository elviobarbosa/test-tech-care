"use client";

import React from "react";
import LabResults from "./LabResults";

interface PatientDetails {
  name: string;
  avatar?: string;
  dateOfBirth: string;
  gender: string;
  contactInfo: {
    phone: string;
    email: string;
  };
  emergencyContact: {
    name: string;
    phone: string;
  };
  insuranceProvider: string;
}

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
    <aside className="bg-white w-96 h-full flex flex-col">
      <div className="p-6 shrink-0">
        {/* Patient Avatar and Name */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center mb-4">
            {defaultPatient.avatar ? (
              <img
                src={defaultPatient.avatar}
                alt={defaultPatient.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-3xl font-semibold text-gray-700">
                {defaultPatient.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            )}
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            {defaultPatient.name}
          </h2>
        </div>

        {/* Patient Information */}
        <div className="space-y-6">
          {/* Date of Birth */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
              <span>[Icon]</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Date of Birth</p>
              <p className="text-sm font-semibold text-gray-800">
                {defaultPatient.dateOfBirth}
              </p>
            </div>
          </div>

          {/* Gender */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
              <span>[Icon]</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Gender</p>
              <p className="text-sm font-semibold text-gray-800">
                {defaultPatient.gender}
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
              <span>[Icon]</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Contact Info</p>
              <p className="text-sm font-semibold text-gray-800">
                {defaultPatient.contactInfo.phone}
              </p>
              <p className="text-sm font-semibold text-gray-800">
                {defaultPatient.contactInfo.email}
              </p>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
              <span>[Icon]</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Emergency Contact</p>
              <p className="text-sm font-semibold text-gray-800">
                {defaultPatient.emergencyContact.name}
              </p>
              <p className="text-sm font-semibold text-gray-800">
                {defaultPatient.emergencyContact.phone}
              </p>
            </div>
          </div>

          {/* Insurance Provider */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
              <span>[Icon]</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Insurance Provider</p>
              <p className="text-sm font-semibold text-gray-800">
                {defaultPatient.insuranceProvider}
              </p>
            </div>
          </div>
        </div>

        {/* Show All Information Button */}
        <button className="w-full mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-colors">
          Show All Information
        </button>
      </div>

      <LabResults />
    </aside>
  );
}
