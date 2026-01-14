"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import DiagnosisHistory from "@/components/DiagnosisHistory";
import DiagnosticList from "@/components/DiagnosticList";
import { fetchPatients } from "@/services/api";
import { Patient } from "@/types/patient";

export default function Home() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isLoadingPatients, setIsLoadingPatients] = useState(true);
  const [isLoadingPatientDetails, setIsLoadingPatientDetails] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPatients = async () => {
      try {
        setIsLoadingPatients(true);
        const data = await fetchPatients();
        setPatients(data);

        const jessicaTaylor = data.find((p) => p.name === "Jessica Taylor");
        if (jessicaTaylor) {
          setSelectedPatient(jessicaTaylor);
        }
      } catch (err) {
        setError("Failed to load patients");
        console.error(err);
      } finally {
        setIsLoadingPatients(false);
      }
    };

    loadPatients();
  }, []);

  const handleSelectPatient = async (patientName: string) => {
    try {
      setIsLoadingPatientDetails(true);
      const data = await fetchPatients();
      const patient = data.find((p) => p.name === patientName);

      if (patient) {
        setSelectedPatient(patient);
      }
    } catch (err) {
      setError("Failed to load patient details");
      console.error(err);
    } finally {
      setIsLoadingPatientDetails(false);
    }
  };

  return (
    <div className="flex flex-col mb-8">
      <Header />

      <div className="flex flex-1 items-stretch w-[calc(100vw-36px)] m-auto max-h-screen relative">
        <LeftSidebar
          patients={patients}
          selectedPatient={selectedPatient}
          onSelectPatient={handleSelectPatient}
          isLoading={isLoadingPatients}
        />

        <main className="flex-1 pl-6 pr-6 space-y-6 max-h-full flex flex-col justify-between">
          {isLoadingPatientDetails ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              <DiagnosisHistory />
              <DiagnosticList />
            </>
          )}
        </main>

        <RightSidebar
          patient={selectedPatient}
          isLoading={isLoadingPatientDetails}
        />
      </div>

      {error && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg">
          {error}
        </div>
      )}
    </div>
  );
}
