"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Icons for dropdown

const translations = [
  { lang: "English", text: "SwasthyaSaathi" },
  { lang: "हिन्दी", text: "स्वास्थ्यसाथी" },
  { lang: "বাংলা", text: "স্বাস্থ্যসাথী" },
  { lang: "ગુજરાતી", text: "સ્વાસ્થ્યસાથી" },
  { lang: "मराठी", text: "स्वास्थ्यसाथी" },
  { lang: "தமிழ்", text: "சுகாதார தோழன்" },
];

const greetings = [
  { lang: "English", text: "Hello" },
  { lang: "हिन्दी", text: "नमस्ते" },
  { lang: "বাংলা", text: "নমস্কার" },
  { lang: "ગુજરાતી", text: "નમસ્તે" },
  { lang: "मराठी", text: "नमस्कार" },
  { lang: "தமிழ்", text: "வணக்கம்" },
];

export default function Navbar() {
  const [indexLeft, setIndexLeft] = useState(0);
  const [indexRight, setIndexRight] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Controls dropdown expansion

  useEffect(() => {
    const intervalLeft = setInterval(() => {
      setIndexLeft((prevIndex) => (prevIndex + 1) % translations.length);
    }, 3000);

    const intervalRight = setInterval(() => {
      setIndexRight((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000);

    return () => {
      clearInterval(intervalLeft);
      clearInterval(intervalRight);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-lg">
      <div className="container flex h-14 items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <span className="text-xl font-bold italic transition-all duration-1000 sm:text-2xl lg:text-3xl">
            {translations[indexLeft].text}
          </span>
        </div>

        <nav className="hidden sm:flex flex-1 items-center justify-center gap-4 text-sm font-medium">
          <Link href="/health-check" className="hover:text-primary">
            SwasthyaMitra
          </Link>
          <Link href="/find-doctor" className="hover:text-primary">
            SwasthyaConnect
          </Link>
          <Link href="/news-help" className="hover:text-primary">
            SwasthyaPulse
          </Link>
          <Link href="/health-insights" className="hover:text-primary">
            SwasthyaView
          </Link>
          <Link href="/our-team" className="hover:text-primary">
            SwasthyaParivar
          </Link>
          <Link href="/map" className="hover:text-primary">
            Map
          </Link>
        </nav>


        <div className="sm:hidden flex-1 flex justify-center relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 rounded-lg border px-3 py-1.5 text-base font-medium"
          >
            Menu
            {dropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {dropdownOpen && (
            <div className="absolute top-12 w-56 rounded-lg border bg-background shadow-lg text-center">
              {[
                ["SwasthyaMitra", "/health-check"],
                ["SwasthyaConnect", "/find-doctor"],
                ["SwasthyaPulse", "/news-help"],
                ["SwasthyaView", "/health-insights"],
                ["SwasthyaParivar", "/our-team"],
                ["Map", "/map"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block py-2 hover:text-primary"
                  onClick={() => setDropdownOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>


        <div className="flex items-center">
          <span className="text-lg font-bold italic transition-all duration-1000 sm:text-xl lg:text-2xl">
            {greetings[indexRight].text}
          </span>
        </div>
      </div>
    </header>
  );
}
