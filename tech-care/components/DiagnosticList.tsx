"use client";

import React from "react";

interface Diagnostic {
  id: string;
  problem: string;
  description: string;
  status: string;
}

interface DiagnosticListProps {
  diagnostics?: Diagnostic[];
}

export default function DiagnosticList({
  diagnostics = [],
}: DiagnosticListProps) {
  const defaultDiagnostics: Diagnostic[] =
    diagnostics.length > 0
      ? diagnostics
      : [
          {
            id: "1",
            problem: "Hypertension",
            description: "Chronic high blood pressure",
            status: "Under Observation",
          },
          {
            id: "2",
            problem: "Type 2 Diabetes",
            description: "Insulin resistance and elevated blood sugar",
            status: "Cured",
          },
          {
            id: "3",
            problem: "Asthma",
            description: "Recurrent episodes of bronchial constriction",
            status: "Inactive",
          },
          {
            id: "4",
            problem: "Osteoarthritis",
            description: "Degenerative joint disease",
            status: "Under Observation",
          },
        ];

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col overflow-hidden">
      <h2 className="card-title">Diagnostic List</h2>

      <div className="mt-6 flex flex-col min-h-0">
        <div className="shrink-0">
          <table className="w-full table-fixed">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left py-3 px-4 rounded-l-full w-1/3">
                  <span className="diagnosis-t-header">Problem/Diagnosis</span>
                </th>
                <th className="text-left py-3 px-4 w-1/3">
                  <span className="diagnosis-t-header">Description</span>
                </th>
                <th className="text-left py-3 px-4 rounded-r-full w-1/3">
                  <span className="diagnosis-t-header">Status</span>
                </th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="overflow-y-auto max-h-75">
          <table className="w-full table-fixed">
            <tbody>
              {defaultDiagnostics.map((diagnostic) => (
                <tr
                  key={diagnostic.id}
                  className="border-b border-gray-100 last:border-0"
                >
                  <td className="py-4 px-4 w-1/3">
                    <span className="diagnosis-item">{diagnostic.problem}</span>
                  </td>
                  <td className="py-4 px-4 w-1/3">
                    <span className="diagnosis-item">
                      {diagnostic.description}
                    </span>
                  </td>
                  <td className="py-4 px-4 w-1/3">
                    <span className="diagnosis-item">{diagnostic.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
