"use client";

import React from "react";
import Image from "next/image";
import { Patient } from "@/types/patient";

interface PatientInfoProps {
  patient: Patient;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PatientInfo({ patient }: PatientInfoProps) {
  const genderIcon =
    patient.gender.toLowerCase() === "female"
      ? "/ico-female.svg"
      : "/ico-male.svg";

  return (
    <div className="p-6 shrink-0 bg-white rounded-2xl">
      <div className="flex flex-col items-center mb-8">
        <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center mb-4">
          {patient.profile_picture ? (
            <img
              src={patient.profile_picture}
              alt={patient.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-3xl font-semibold text-gray-700">
              {patient.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          )}
        </div>
        <h2 className="font-manrope font-extrabold text-2xl leading-8.25 tracking-normal text-[#072635] text-center">
          {patient.name}
        </h2>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <Image
              src="/ico-birth.svg"
              alt=""
              width={42}
              height={42}
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="right-item-description">Date of Birth</p>
            <p className="right-item-value">
              {formatDate(patient.date_of_birth)}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <Image
              src={genderIcon}
              alt=""
              width={42}
              height={42}
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="right-item-description">Gender</p>
            <p className="right-item-value">{patient.gender}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <Image
              src="/ico-phone.svg"
              alt=""
              width={42}
              height={42}
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="right-item-description">Contact Info</p>
            <p className="right-item-value">{patient.phone_number}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <Image
              src="/ico-phone.svg"
              alt=""
              width={42}
              height={42}
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="right-item-description">Emergency Contacts</p>
            <p className="right-item-value">{patient.emergency_contact}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <Image
              src="/ico-insurance.svg"
              alt=""
              width={42}
              height={42}
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="right-item-description">Insurance Provider</p>
            <p className="right-item-value">{patient.insurance_type}</p>
          </div>
        </div>
      </div>

      <div className="w-full m-auto text-center">
        <button className="mt-8 bg-[#01F0D0] text-[#072635] font-bold py-3 px-10 rounded-full ">
          Show All Information
        </button>
      </div>
    </div>
  );
}
