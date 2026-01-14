"use client";

import React from "react";
import Image from "next/image";

interface LabResult {
  id: string;
  name: string;
  date: string;
}

interface LabResultsProps {
  results?: LabResult[];
}

export default function LabResults({ results = [] }: LabResultsProps) {
  const defaultResults: LabResult[] =
    results.length > 0
      ? results
      : [
          {
            id: "1",
            name: "Blood Test",
            date: "Dec 15, 2025",
          },
          {
            id: "2",
            name: "CT Scan",
            date: "Dec 10, 2025",
          },
          {
            id: "3",
            name: "X-Ray",
            date: "Dec 5, 2025",
          },
          {
            id: "4",
            name: "Urine Test",
            date: "Nov 28, 2025",
          },
          {
            id: "5",
            name: "MRI Scan",
            date: "Nov 20, 2025",
          },
        ];

  return (
    <div className="p-6 flex-1 overflow-hidden flex flex-col mt-6">
      <h2 className="card-title">Lab Results</h2>

      <div className="space-y-1 mt-6 flex-1 overflow-y-auto">
        {defaultResults.map((result) => (
          <div
            key={result.id}
            className="flex px-2 items-center justify-between p-1 hover:bg-[#F6F7F8] transition-colors group"
          >
            <span className="diagnosis-item">{result.name}</span>
            <button className="p-2 hover:bg-[#F6F7F8] transition-colors">
              <Image
                src="/ico-download.svg"
                alt="Download"
                width={20}
                height={20}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
