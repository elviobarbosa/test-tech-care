"use client";

import React from "react";
import HealthMetricCard, { HealthMetric } from "./HealthMetricCard";

interface DiagnosisHistoryProps {
  patientName?: string;
  chartData?: unknown;
}

export default function DiagnosisHistory({
  patientName = "Patient",
}: DiagnosisHistoryProps) {
  const healthMetrics: HealthMetric[] = [
    {
      id: "1",
      icon: "/ico-respiratory.svg",
      title: "Respiratory Rate",
      value: "20 bpm",
      status: "Normal",
      bgColor: "#E0F3FA",
    },
    {
      id: "2",
      icon: "/ico-temperature.svg",
      title: "Temperature",
      value: "98.6°F",
      status: "Normal",
      bgColor: "#FFE6E9",
    },
    {
      id: "3",
      icon: "/ico-heart.svg",
      title: "Heart Rate",
      value: "78 bpm",
      status: "Lower than Average",
      bgColor: "#FFE6F1",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="card-title">Diagnosis History</h2>

      <div className="bg-purple-50 rounded-xl p-6 mt-6 mb-6 h-72 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-2">[Blood Pressure Chart]</p>
          <p className="text-sm text-gray-400">
            Chart visualization will go here
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {healthMetrics.map((metric) => (
          <HealthMetricCard key={metric.id} metric={metric} />
        ))}
      </div>
    </div>
  );
}
