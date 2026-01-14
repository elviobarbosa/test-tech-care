"use client";

import React from "react";
import Image from "next/image";

interface LabResultsProps {
  labResults?: string[];
}

export default function LabResults({ labResults = [] }: LabResultsProps) {
  return (
    <div className="p-6 flex-1 overflow-hidden flex flex-col">
      <h2 className="card-title">Lab Results</h2>

      <div className="space-y-1 mt-6 flex-1 overflow-y-auto">
        {labResults.length === 0 ? (
          <p className="text-[#072635] text-sm">No lab results available</p>
        ) : (
          labResults.map((result, index) => (
            <div
              key={index}
              className="flex px-2 items-center justify-between p-1 hover:bg-[#F6F7F8] transition-colors group"
            >
              <span className="diagnosis-item">{result}</span>
              <button className="p-2 hover:bg-[#F6F7F8] transition-colors">
                <Image
                  src="/ico-download.svg"
                  alt="Download"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
