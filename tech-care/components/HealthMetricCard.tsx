"use client";

import React from "react";
import Image from "next/image";

export interface HealthMetric {
  id: string;
  icon: string;
  iconWidth?: number;
  iconHeight?: number;
  title: string;
  value: string;
  status: string;
  bgColor: string;
}

interface HealthMetricCardProps {
  metric: HealthMetric;
}

export default function HealthMetricCard({ metric }: HealthMetricCardProps) {
  const bgStyle = metric.bgColor.startsWith("#")
    ? { backgroundColor: metric.bgColor }
    : undefined;

  return (
    <div
      className={`${!metric.bgColor.startsWith("#") ? metric.bgColor : ""} rounded-xl p-4`}
      style={bgStyle}
    >
      <div className="flex mb-3">
        <div className="flex items-center justify-center">
          {metric.icon.startsWith("/") || metric.icon.startsWith("http") ? (
            <Image
              src={metric.icon}
              alt=""
              width={metric.iconWidth || 96}
              height={metric.iconHeight || 96}
              aria-hidden="true"
            />
          ) : (
            <span className="text-2xl">{metric.icon}</span>
          )}
        </div>
      </div>
      <h3 className="font-manrope font-medium text-base leading-5.5 tracking-normal text-[#072635] text-left">
        {metric.title}
      </h3>
      <p className="font-manrope font-extrabold text-[30px] leading-10.25 tracking-normal text-[#072635] text-left">
        {metric.value}
      </p>
      <div className="flex gap-1 mt-6">
        <span className="font-manrope font-normal text-sm leading-4.75 tracking-normal text-[#072635] text-left">
          {metric.status}
        </span>
      </div>
    </div>
  );
}
