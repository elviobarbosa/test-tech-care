'use client';

import React from 'react';

interface HealthMetric {
  id: string;
  icon: string;
  title: string;
  value: string;
  status: string;
  bgColor: string;
}

interface DiagnosisHistoryProps {
  patientName?: string;
  chartData?: any;
}

export default function DiagnosisHistory({ patientName = 'Patient' }: DiagnosisHistoryProps) {
  const healthMetrics: HealthMetric[] = [
    {
      id: '1',
      icon: '[Heart Icon]',
      title: 'Respiratory Rate',
      value: '20 bpm',
      status: 'Normal',
      bgColor: 'bg-blue-50'
    },
    {
      id: '2',
      icon: '[Temp Icon]',
      title: 'Temperature',
      value: '98.6°F',
      status: 'Normal',
      bgColor: 'bg-pink-50'
    },
    {
      id: '3',
      icon: '[Heart Icon]',
      title: 'Heart Rate',
      value: '78 bpm',
      status: 'Lower than Average',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Diagnosis History</h2>

      {/* Chart Area */}
      <div className="bg-purple-50 rounded-xl p-6 mb-6 h-72 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-2">[Blood Pressure Chart]</p>
          <p className="text-sm text-gray-400">Chart visualization will go here</p>
        </div>
      </div>

      {/* Health Metrics */}
      <div className="grid grid-cols-3 gap-4">
        {healthMetrics.map((metric) => (
          <div
            key={metric.id}
            className={`${metric.bgColor} rounded-xl p-4`}
          >
            <div className="flex justify-center mb-3">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl">{metric.icon}</span>
              </div>
            </div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2 text-center">
              {metric.title}
            </h3>
            <p className="text-2xl font-bold text-gray-900 mb-2 text-center">
              {metric.value}
            </p>
            <div className="flex items-center justify-center gap-1">
              <span className="w-3 h-3 block">[Status Icon]</span>
              <span className="text-xs text-gray-600">{metric.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
