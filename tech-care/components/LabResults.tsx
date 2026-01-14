"use client";

import React from "react";

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

      <div className="space-y-3 mt-6 flex-1 overflow-y-auto">
        {defaultResults.map((result) => (
          <div
            key={result.id}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-gray-400">[Doc Icon]</span>
              </div>
              <span className="text-sm font-medium text-gray-800">
                {result.name}
              </span>
            </div>
            <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
              <span className="w-5 h-5 block text-gray-600">
                [Download Icon]
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
