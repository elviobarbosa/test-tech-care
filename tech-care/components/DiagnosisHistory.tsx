"use client";

import React from "react";
import HealthMetricCard, { HealthMetric } from "./HealthMetricCard";
import BloodPressureChart from "./BloodPressureChart";
import { DiagnosisHistoryItem } from "@/types/patient";

interface DiagnosisHistoryProps {
  diagnosisHistory?: DiagnosisHistoryItem[];
}

export default function DiagnosisHistory({
  diagnosisHistory = [],
}: DiagnosisHistoryProps) {
  // Get the latest diagnosis data (most recent entry)
  const latestData =
    diagnosisHistory.length > 0
      ? diagnosisHistory[diagnosisHistory.length - 1]
      : null;

  // Build health metrics from latest data
  const healthMetrics: HealthMetric[] = latestData
    ? [
        {
          id: "1",
          icon: "/ico-respiratory.svg",
          title: "Respiratory Rate",
          value: `${latestData.respiratory_rate.value} bpm`,
          status: latestData.respiratory_rate.levels,
          bgColor: "#E0F3FA",
        },
        {
          id: "2",
          icon: "/ico-temperature.svg",
          title: "Temperature",
          value: `${latestData.temperature.value}°F`,
          status: latestData.temperature.levels,
          bgColor: "#FFE6E9",
        },
        {
          id: "3",
          icon: "/ico-heart.svg",
          title: "Heart Rate",
          value: `${latestData.heart_rate.value} bpm`,
          status: latestData.heart_rate.levels,
          bgColor: "#FFE6F1",
        },
      ]
    : [
        {
          id: "1",
          icon: "/ico-respiratory.svg",
          title: "Respiratory Rate",
          value: "-- bpm",
          status: "No data",
          bgColor: "#E0F3FA",
        },
        {
          id: "2",
          icon: "/ico-temperature.svg",
          title: "Temperature",
          value: "--°F",
          status: "No data",
          bgColor: "#FFE6E9",
        },
        {
          id: "3",
          icon: "/ico-heart.svg",
          title: "Heart Rate",
          value: "-- bpm",
          status: "No data",
          bgColor: "#FFE6F1",
        },
      ];

  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="card-title">Diagnosis History</h2>

      <div className="mt-6 mb-6">
        {diagnosisHistory.length > 0 ? (
          <BloodPressureChart diagnosisHistory={diagnosisHistory} />
        ) : (
          <div className="bg-purple-50 rounded-xl p-6 h-72 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 mb-2">No diagnosis history</p>
              <p className="text-sm text-gray-400">
                Blood pressure data will appear here
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {healthMetrics.map((metric) => (
          <HealthMetricCard key={metric.id} metric={metric} />
        ))}
      </div>
    </div>
  );
}
