"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  BookOpen,
  Briefcase,
  Building2,
  Calculator,
  FileText,
  GraduationCap,
  HelpCircle,
  Library,
  Megaphone,
  Receipt,
  School,
  Trophy,
  User,
  X,
  ExternalLink,
  ShoppingBag,
  MonitorSmartphone,
  KeyRound,
  FileCheck2,
  AlertTriangle
} from "lucide-react";

// LINKS DATA - Fortified with Internal Page Links to boost site structure
const quickLinks = [
  {
    title: "AKTU OneView Results",
    description: "Check Semester Results",
    icon: Trophy,
    href: "https://oneview.aktu.ac.in/WebPages/aktu/OneView.aspx",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "AKTU ERP Login",
    description: "Student Dashboard",
    icon: User,
    href: "https://erp.aktu.ac.in/login.aspx",
    color: "text-purple-600",
    bg: "bg-purple-50",
    // 👇 Contextual Ad for Coursework
    affiliate: {
      title: "dee",
      desc: "Top pick for CSE Students",
      discount: "24% OFF",
      link: "https://amzn.to/4dQkZjW"
    }
  },
  {
    title: "Download Admit Card",
    description: "Exam Hall Tickets",
    icon: FileText,
    href: "https://erp.aktu.ac.in/login.aspx",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    title: "Circulars & Notices",
    description: "Latest Updates",
    icon: Megaphone,
    href: "https://aktu.ac.in/circulars.html",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    title: "AKTU Syllabus 2026",
    description: "B.Tech, MBA & Pharmacy",
    icon: BookOpen,
    href: "https://aktu.ac.in/syllabus.html",
    color: "text-teal-600",
    bg: "bg-teal-50",affiliate: {
      title: "Casio Scientific Calculator",
      desc: "AKTU Exam Approved",
      discount: "24% OFF",
      link: "https://amzn.to/4dQkZjW"
    }
  },
  {
    title: "Fee Payment",
    description: "Online Challan",
    icon: Receipt,
    href: "https://erp.aktu.ac.in/Login.aspx",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    title: "Digital Library",
    description: "E-Books & Papers",
    icon: Library,
    href: "https://ndl.iitkgp.ac.in/",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Lateral Entry (LEET)",
    description: "B.Tech Direct 2nd Year",
    icon: School,
    href: "/lateral-entry",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Student Deals & Gear",
    description: "Laptops & Accessories",
    icon: ShoppingBag,
    href: "https://amzn.to/4uTzHOS",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Helpline & Contact",
    description: "University Support",
    icon: HelpCircle,
    href: "https://aktu.ac.in/contact-us.html",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
  {
    title: "Tenders & Jobs",
    description: "Latest Openings",
    icon: Briefcase,
    href: "https://aktu.ac.in/tender.html",
    color: "text-gray-700",
    bg: "bg-gray-50",
  },
  {
    title: "Career Services",
    description: "Placement Cell",
    icon: GraduationCap,
    href: "https://aktu.ac.in/career.html",
    color: "text-blue-800",
    bg: "bg-blue-50",
  },
];

export default function Home() {
  const [selectedLink, setSelectedLink] = useState<
    (typeof quickLinks)[0] | null
  >(null);

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Top Banner */}
      <div className="bg-orange-500 text-white text-center py-2 text-xs md:text-sm font-medium px-4">
        ⚡ The Fastest Way to Access AKTU OneView Results and other Resources
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <header className="text-center flex flex-col items-center">
          <div className="w-20 h-20 relative mb-4">
            <Image
              src="/aktu-logo.png"
              alt="AKTU Official Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-blue-900 mb-2">
            AKTU OneView - Student Portal 2026
          </h1>
          <p className="text-gray-600 font-medium text-sm md:text-base">
            Your Gateway to Dr. A.P.J. Abdul Kalam Technical University Resources
          </p>
        </header>

        {/* About Section */}
        <section className="text-center space-y-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <Building2 className="w-5 h-5 text-red-500" />
            About AKTU
          </h2>
          <article className="text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <p>
              Founded in 2000 by the Uttar Pradesh State Government,
              <strong>
                {" "}
                Dr. A.P.J. Abdul Kalam Technical University (AKTU)
              </strong>
              —previously known as UPTU—has grown into one of Asia’s premier
              technical hubs. Today, it empowers a massive network of over
              <strong> 750 affiliated colleges</strong> and
              <strong> 400,000 students</strong>, delivering top-tier education
              in Engineering, Pharmacy, Architecture, and Technology.
            </p>
          </article>
        </section>

        {/* --- 💰 ADVERTISEMENT SPACE START 💰 --- */}
        {/* Place your Google AdSense Display Ad code inside this div */}
        {/* <div className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center border border-gray-300">
          <span className="text-gray-500 text-sm font-semibold tracking-wider">
          <img src="" alt="Ad" className="w-full h-full object-contain" />
          </span>
        </div> */}
        {/* --- ADVERTISEMENT SPACE END --- */}

        {/* Quick Links Grid */}
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-200">
          {quickLinks.map((link, index) => (
            <div
              key={index}
              onClick={() => setSelectedLink(link)}
              className="cursor-pointer flex flex-col items-center text-center p-4 hover:bg-gray-50 rounded-xl transition-all hover:scale-105 group border border-transparent hover:border-gray-100"
            >
              <div
                className={`p-3 rounded-full bg-gray-50 mb-3 group-hover:bg-white group-hover:shadow-md transition-all`}
              >
                <link.icon className={`w-6 h-6 md:w-8 md:h-8 ${link.color}`} />
              </div>
              <h3 className="font-bold text-gray-800 text-sm md:text-base leading-tight">
                {link.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1 hidden md:block">
                {link.description}
              </p>
            </div>
          ))}
        </section>

        {/* --- 🚀 HIGH-VALUE EXTENDED SEO CONTENT TO RESTORE RANKING 🚀 --- */}
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 space-y-6 text-left">
          <div className="text-center border-b border-gray-100 pb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
              <MonitorSmartphone className="w-6 h-6 text-blue-600" />
              Navigating the AKTU ERP Login & Student Portal
            </h2>
            <p className="text-gray-500 text-xs md:text-sm mt-1">
              An informative guide to tracking results, examination forms, and your personal profile.
            </p>
          </div>

          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              The Dr. A.P.J. Abdul Kalam Technical University (AKTU) Enterprise Resource Planning portal, commonly termed the AKTU ERP, acts as the digital backbone for technical education across Uttar Pradesh. Whether you are registered in an undergraduate B.Tech program or pursuing professional postgraduate streams, your entire academic lifecycle relies on managing credentials through this secure user gateway.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 flex items-center gap-2 text-base">
                  <FileCheck2 className="w-5 h-5 text-green-600" />
                  Key Tasks Managed via Portal
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-xs md:text-sm">
                  <li><strong>Semester Examination Forms:</strong> Completing choice filling for elective modules and final submission.</li>
                  <li><strong>Digital Admit Cards:</strong> Accessing official session tickets before arriving at designated test centers.</li>
                  <li><strong>Fee Defaulter Clearances:</strong> Monitoring outstanding exam fee verification tallies directly compiled by institutional accounts.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 flex items-center gap-2 text-base">
                  <KeyRound className="w-5 h-5 text-purple-600" />
                  Troubleshooting Common Portal Lockouts
                </h3>
                <p className="text-xs md:text-sm">
                  If your user dashboard displays password errors or skips security checks during odd/even evaluation timelines:
                </p>
                <ol className="list-decimal pl-5 space-y-1 text-xs">
                  <li>Navigate directly to the official password recovery submenu on the main university subdomain login.</li>
                  <li>Provide your persistent University Roll Number to request a validation token.</li>
                  <li>Ensure your institute registrar updates modifications to mobile numbers or email links to avoid verification failures.</li>
                </ol>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 mt-4 flex gap-3 items-start">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900">
                <strong>Important Note on AKTU OneView System:</strong> For tracking academic performance history, marks tallies, or internal sessional parameters, remember that the **OneView Portal** runs independently from primary profile logins. This means security code updates processed inside the ERP screen will not lock out your access to historical marks grids.
              </div>
            </div>
          </div>
        </section>

        {/* Secondary SEO Content */}
        <section className="bg-blue-50 p-6 rounded-2xl text-center shadow-sm border border-blue-100">
          <h2 className="text-lg md:text-xl font-bold text-blue-900 mb-2 flex items-center justify-center gap-2">
            <GraduationCap className="w-6 h-6" />
            About This Student Portal
          </h2>
          <p className="text-sm text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Designed for <strong>mobile-first access</strong>, this platform
            serves as a fast, unofficial gateway for{" "}
            <strong>Dr. A.P.J. Abdul Kalam Technical University</strong>{" "}
            students. We aggregate direct links to the{" "}
            <strong>AKTU OneView</strong> dashboard, ERP login, and semester
            results, ensuring you can navigate the{" "}
            <strong>university student portal</strong> efficiently even on slow
            networks.
          </p>
        </section>
      </main>

      {/* POPUP MODAL SECTION */}
      {selectedLink && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-sm rounded-t-2xl md:rounded-2xl p-6 shadow-2xl transform transition-all animate-in slide-in-from-bottom-10 md:slide-in-from-bottom-0 md:zoom-in-95">
            
            {/* Close Header */}
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
              <h3 className="font-bold text-lg text-gray-800">
                Opening Link...
              </h3>
              <button
                onClick={() => setSelectedLink(null)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div
                className={`p-4 rounded-full ${
                  selectedLink.bg || "bg-gray-100"
                }`}
              >
                <selectedLink.icon
                  className={`w-12 h-12 ${selectedLink.color}`}
                />
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  {selectedLink.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  {selectedLink.description}
                </p>
              </div>

              {/* Action Button */}
              <Link
                href={selectedLink.href}
                target={
                  selectedLink.href.startsWith("http") ? "_blank" : "_self"
                }
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-blue-200"
                onClick={() => setSelectedLink(null)}
              >
                <span>Continue to Website</span>
                <ExternalLink className="w-4 h-4" />
              </Link>

             {/* --- 💰 DYNAMIC AFFILIATE EARNING SECTION 💰 --- */}
              <div className="w-full mt-6 pt-4 border-t border-dashed border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider animate-pulse border border-red-200">
                    Hot Deal
                  </span>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Student Gear
                  </p>
                </div>
                
                <a
                  href={selectedLink.affiliate?.link || "https://amzn.to/4uTzHOS"}
                  target="_blank"
                  className="flex flex-col gap-3 bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-300 p-3.5 rounded-xl hover:shadow-md transition-all text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2.5 rounded-lg shadow-sm border border-yellow-100">
                      <ShoppingBag className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-extrabold text-gray-900 leading-tight group-hover:text-blue-700 transition-colors">
                        {/* 👇 Dynamic Product Title */}
                        {selectedLink.affiliate?.title || "Apple MacBook Air M1"}
                      </p>
                      <p className="text-[11px] text-gray-600 mt-1 font-medium">
                        {/* 👇 Dynamic Subtitle & Discount */}
                        {selectedLink.affiliate?.desc || "Top pick for CSE Students"} •{" "}
                        <span className="text-green-600 font-bold bg-green-100 px-1 py-0.5 rounded">
                          {selectedLink.affiliate?.discount || "24% OFF"}
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="w-full bg-orange-500 text-white text-xs font-bold py-2 rounded-lg text-center shadow-sm group-hover:bg-orange-600 transition-colors">
                    Check Price on Amazon &rarr;
                  </div>
                </a>
              </div>
              {/* --- AFFILIATE EARNING SECTION END --- */}

              <p className="text-xs text-gray-400 mt-1">
                Redirecting to official source
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}