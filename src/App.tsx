// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";

import React, { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const MobileApps = lazy(() => import("./pages/MobileApps"));
const UIUXDesign = lazy(() => import("./pages/UIUXDesign"));
const Consulting = lazy(() => import("./pages/Consulting"));
const NotFound = lazy(() => import("./pages/NotFound"));
const queryClient = new QueryClient();

const App = () => (
  <Suspense
    fallback={
      <div className="flex items-center justify-center h-screen">
        <svg
          className="animate-spin h-10 w-10 text-royal-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.93A8 8 0 0112 20v4c-6.627 0-12-5.373-12-12h4a8 8 0 006.93 6.93zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-2.93-6.93A8 8 0 0112 4V0c6.627 0 12 5.373 12 12h-4a8 8 0 00-6.93-6.93z"
          ></path>
        </svg>
        <p className="text-gray-500">Loading...</p>
      </div>
    }
  >
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/mobile-apps" element={<MobileApps />} />
            <Route path="/uiux-design" element={<UIUXDesign />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </Suspense>
);

export default App;
