"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer"; // ✅ CORRECT
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
  ShoppingBag, // New icon for the deal section
} from "lucide-react";

// LINKS DATA
const quickLinks = [
  {
    title: "AKTU OneView Results",
    description: "Check Semester Results",
    icon: Trophy,
    href: "https://oneview.aktu.ac.in/WebPages/aktu/OneView.aspx",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  // {
  //   title: "SGPA to Percentage",
  //   description: "Calculate Your GPA",
  //   icon: Calculator,
  //   href: "#",
  //   color: "text-green-600",
  //   bg: "bg-green-50",
  // },
  {
    title: "AKTU ERP Login",
    description: "Student Dashboard",
    icon: User,
    href: "https://erp.aktu.ac.in/login.aspx",
    color: "text-purple-600",
    bg: "bg-purple-50",
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
    bg: "bg-teal-50",
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
  {
    title: "AKTU Admission 2026",
    description: "Registration Process",
    icon: School,
    href: "/admissions",
    color: "text-green-800",
    bg: "bg-green-50",
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
        
       Rapid Access Portal for Dr. A.P.J Abdul Kalam Technical University Resources
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
            ADVERTISEMENT SPACE
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

        {/* Footer */}
        <footer className="text-center space-y-6 pt-8 pb-8 border-t border-gray-200">
          <div className="flex flex-col items-center gap-2 text-sm text-blue-600 font-medium">
            <Link href="https://aktu.ac.in/" className="hover:underline">
              Official AKTU Website
            </Link>
            <Link href="https://erp.aktu.ac.in/" className="hover:underline">
              AKTU ERP Login
            </Link>
            <Link
              href="https://oneview.aktu.ac.in/"
              className="hover:underline"
            >
              OneView Results
            </Link>
          </div>

          <p className="text-xs text-gray-400 max-w-lg mx-auto">
            ⚠️ Disclaimer: This is a student-friendly resource portal. We are
            not the official university website. For official notices, always
            verify at
            <Link href="https://aktu.ac.in" className="underline ml-1">
              aktu.ac.in
            </Link>
            .
          </p>
        </footer>
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

              {/* --- 💰 AFFILIATE EARNING SECTION START 💰 --- */}
              {/* This appears while the user is looking at the popup */}
              <div className="w-full mt-5 pt-4 border-t border-dashed border-gray-200">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Student Recommendation
                </p>
                <a
                  href="#" // 🔴 REPLACE THIS WITH YOUR AMAZON AFFILIATE LINK
                  target="_blank"
                  className="flex items-center gap-3 bg-yellow-50 border border-yellow-200 p-3 rounded-lg hover:bg-yellow-100 transition-colors text-left group"
                >
                  <div className="bg-white p-2 rounded-md shadow-sm">
                    <ShoppingBag className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800 group-hover:text-blue-700">
                      Best Laptop for Coding 2026
                    </p>
                    <p className="text-[10px] text-gray-500">
                      Top pick for CSE Students &rarr;
                    </p>
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
          <div><Footer /></div>
    </div>
  );
}