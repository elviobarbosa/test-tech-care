import React from "react";
import Image from "next/image";
import NavItem from "./NavItem";

export default function Header() {
  const menuItems = [
    { icon: "/ico-home.svg", label: "Overview", iconWidth: 16, iconHeight: 17 },
    {
      icon: "/ico-patients.svg",
      label: "Patients",
      iconWidth: 24,
      iconHeight: 17,
    },
    {
      icon: "/ico-calendar.svg",
      label: "Schedule",
      iconWidth: 15,
      iconHeight: 17,
    },
    { icon: "/ico-chat.svg", label: "Message", iconWidth: 19, iconHeight: 17 },
    {
      icon: "/ico-credit-card.svg",
      label: "Transactions",
      iconWidth: 22,
      iconHeight: 17,
    },
  ];

  return (
    <div className="mt-4.5 mb-8 mx-4.5 w-[calc(100vw-36px)]">
      <header className=" bg-white px-8 py-4 rounded-[70px]" role="banner">
        <div className="flex items-center justify-between">
          <h1 className="flex items-center">
            <Image
              src="/tech-care-logo.svg"
              alt="TechCare"
              width={211}
              height={48}
              priority
              className="h-12 w-auto"
            />
          </h1>

          <nav
            className="flex items-center gap-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {menuItems.map((item) => (
              <NavItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                iconWidth={item.iconWidth}
                iconHeight={item.iconHeight}
              />
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/dr-jose/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
                  alt="Dr. Jose Simmons - General Practitioner"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="nav-item-text">Dr. Jose Simmons</span>
                <span className="font-normal text-sm leading-4.75 tracking-normal text-[#707070]">
                  General Practitioner
                </span>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-300" aria-hidden="true"></div>
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Open settings"
            >
              <Image
                src="/ico-settings.svg"
                alt=""
                width={19}
                height={20}
                aria-hidden="true"
              />
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="More options"
            >
              <Image
                src="/ico-vertical-dots.svg"
                alt=""
                width={4}
                height={18}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
