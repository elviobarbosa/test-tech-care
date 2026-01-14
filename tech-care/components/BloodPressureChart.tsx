"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { DiagnosisHistoryItem } from "@/types/patient";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface BloodPressureChartProps {
  diagnosisHistory: DiagnosisHistoryItem[];
}

export default function BloodPressureChart({
  diagnosisHistory,
}: BloodPressureChartProps) {
  const sortedHistory = [...diagnosisHistory].sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months.indexOf(a.month) - months.indexOf(b.month);
  });

  const last6Months = sortedHistory.slice(-6);

  const labels = last6Months.map(
    (item) => `${item.month.slice(0, 3)}, ${item.year}`
  );

  const systolicData = last6Months.map(
    (item) => item.blood_pressure.systolic.value
  );
  const diastolicData = last6Months.map(
    (item) => item.blood_pressure.diastolic.value
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#C26EB4",
        backgroundColor: "rgba(194, 110, 180, 0.1)",
        tension: 0.4,
        pointBackgroundColor: "#C26EB4",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: false,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#7E6CAB",
        backgroundColor: "rgba(126, 108, 171, 0.1)",
        tension: 0.4,
        pointBackgroundColor: "#7E6CAB",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#072635",
        bodyColor: "#072635",
        borderColor: "#E0E0E0",
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function (context: any) {
            return `${context.dataset.label}: ${context.parsed.y} mmHg`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          color: "#072635",
          font: {
            size: 12,
          },
        },
        grid: {
          color: "#E0E0E0",
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          color: "#072635",
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const latestData = last6Months[last6Months.length - 1];

  return (
    <div className="bg-[#F4F0FE] rounded-xl p-6">
      <div className="flex gap-6 items-center">
        <div className="flex-1 h-52">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold text-[#072635]">Blood Pressure</h3>
            <div className="flex gap-4"></div>
          </div>
          <Line data={data} options={options} />
        </div>

        {latestData && (
          <div className="flex flex-col gap-4 w-48">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-[#C26EB4]"></div>
                <span className="text-sm font-bold text-[#072635]">
                  Systolic
                </span>
              </div>
              <p className="text-2xl font-bold text-[#072635]">
                {latestData.blood_pressure.systolic.value}
              </p>
              <p className="text-sm text-[#072635] flex items-center gap-1 mt-1">
                <svg
                  width="10"
                  height="5"
                  viewBox="0 0 10 5"
                  fill="none"
                  className="inline"
                >
                  <path d="M0 5L5 0L10 5H0Z" fill="#072635" />
                </svg>
                {latestData.blood_pressure.systolic.levels}
              </p>
            </div>
            <hr className="border-[#CBC8D4]" />
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-[#7E6CAB]"></div>
                <span className="text-sm font-bold text-[#072635]">
                  Diastolic
                </span>
              </div>
              <p className="text-2xl font-bold text-[#072635]">
                {latestData.blood_pressure.diastolic.value}
              </p>
              <p className="text-sm text-[#072635] flex items-center gap-1 mt-1">
                <svg
                  width="10"
                  height="5"
                  viewBox="0 0 10 5"
                  fill="none"
                  className="inline"
                >
                  <path d="M0 0L5 5L10 0H0Z" fill="#072635" />
                </svg>
                {latestData.blood_pressure.diastolic.levels}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
