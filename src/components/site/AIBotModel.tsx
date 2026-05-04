import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { MessageSquare, Sparkles, X, Compass, Globe, Award, ShieldCheck, ExternalLink } from "lucide-react";

const messages = [
  "Hi there! I am Sarah, your personal travel consultant. 😊",
  "Looking for the best visa options? Let me help guide you! 🌍",
  "We maintain a 98% success rate on visa applications. ✈️",
  "Need to secure IATA-exclusive flight deals? Let's check them. 🎟️",
  "Planning Umrah? We offer tailored packages for ultimate comfort. 🕌"
];

const HumanFaceAvatar = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-95 group-hover:scale-100 transition-transform duration-300">
    {/* Hair Back */}
    <path d="M15 50 C 15 20, 85 20, 85 50" stroke="#3A2E2B" strokeWidth="12" strokeLinecap="round" />
    {/* Face Head */}
    <circle cx="50" cy="50" r="32" fill="#FCDBB0" />
    {/* Hair Front / Bangs */}
    <path d="M22 34 C 35 15, 65 15, 78 34" fill="#3A2E2B" />
    <path d="M18 38 C 22 26, 32 26, 36 34" fill="#3A2E2B" />
    {/* Eyes */}
    <circle cx="39" cy="48" r="3" fill="#1C1B1B" />
    <circle cx="61" cy="48" r="3" fill="#1C1B1B" />
    {/* Eyelashes / Eye glint */}
    <circle cx="40" cy="47" r="1" fill="#FFFFFF" />
    <circle cx="62" cy="47" r="1" fill="#FFFFFF" />
    {/* Cheeks */}
    <circle cx="34" cy="54" r="3.5" fill="#FFB2A6" opacity="0.6" />
    <circle cx="66" cy="54" r="3.5" fill="#FFB2A6" opacity="0.6" />
    {/* Cute Smile */}
    <path d="M42 58 Q 50 66, 58 58" stroke="#D32F2F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Support Headset */}
    <path d="M24 50 Q 18 10, 50 14" stroke="#2563EB" strokeWidth="3" fill="none" />
    <circle cx="21" cy="48" r="4.5" fill="#1D4ED8" />
    <path d="M21 48 Q 28 65, 38 65" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Nose */}
    <path d="M49 51 Q 50 54, 51 51" stroke="#E0AC8B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

export function AIBotModel() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(true);

  // Auto-cycle through informational facts every 12 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowBubble(false);
      setTimeout(() => {
        setCurrentMsgIndex((prev) => (prev + 1) % messages.length);
        setShowBubble(true);
      }, 500);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-[92px] right-4 sm:bottom-[104px] sm:right-6 lg:bottom-[116px] lg:right-8 z-[9999] select-none flex items-end justify-end flex-col">
      {/* Bot Chat Window / Quick Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-[340px] max-w-[calc(100vw-48px)] bg-background/95 backdrop-blur-xl border border-sky-200/50 shadow-2xl rounded-3xl overflow-hidden flex flex-col z-[100]"
          >
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center relative shadow-glow p-0.5">
                  <HumanFaceAvatar />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border border-white" />
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">Sarah from OS Consultants</h3>
                  <p className="text-[10px] text-sky-100 opacity-90 flex items-center gap-1 mt-0.5">
                    <Sparkles className="w-3 h-3" /> Senior Travel Consultant — Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close Assistant"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Conversation/Info Body */}
            <div className="p-4 bg-gradient-to-b from-sky-50/40 via-background to-background flex-1 flex flex-col gap-4 overflow-y-auto max-h-[360px] no-scrollbar">
              <p className="text-xs text-muted-foreground leading-relaxed bg-sky-50/50 p-3 rounded-2xl border border-sky-100/50">
                Hi! Welcome to OS Consultants. I'm here to provide premium advice and take care of your complete travel & visa process. Let's make your journey unforgettable!
              </p>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 gap-2">
                <Link
                  to="/visa-services"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-secondary/30 hover:bg-sky-50/70 border border-sky-100/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-sky-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-foreground">Global Visa Services</span>
                  </div>
                  <Compass className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to="/air-ticketing"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-secondary/30 hover:bg-sky-50/70 border border-sky-100/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-sky-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-foreground">IATA Air Ticketing</span>
                  </div>
                  <Compass className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to="/hotel-booking"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-secondary/30 hover:bg-sky-50/70 border border-sky-100/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-sky-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-foreground">Premium Hotel Bookings</span>
                  </div>
                  <Compass className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href="https://wa.me/923315222030"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-green-50/80 hover:bg-green-100/80 border border-green-200/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-green-800">Direct WhatsApp Agent</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-green-700" />
                </a>
              </div>
            </div>

            {/* Bottom Footer Tip */}
            <div className="bg-sky-50/30 p-2.5 text-center border-t border-border/40">
              <span className="text-[10px] font-medium text-muted-foreground">
                OS Consultants — Expert Advice Since 2009
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating/Walking human model (The OS Specialist) */}
      <div className="flex items-center gap-3">
        {/* Breathing / Floating Message Bubble */}
        <AnimatePresence>
          {showBubble && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-background/95 border border-sky-200/50 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-glow text-xs text-foreground font-medium flex flex-col gap-1 cursor-pointer max-w-[210px] leading-relaxed transition-all hover:bg-sky-50/40 select-none relative mr-1"
              onClick={() => setIsOpen(true)}
            >
              {/* Point of the speech bubble pointing to the bot on the right */}
              <div className="absolute bottom-4 right-[-6px] w-3 h-3 bg-background border-t border-r border-sky-200/50 transform rotate-45 backdrop-blur-md" />
              <span>{messages[currentMsgIndex]}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated Human Assistant Avatar */}
        <motion.div
          animate={{
            y: [0, -6, 0],
            x: [0, 4, 0]
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2.8,
            ease: "easeInOut"
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-gradient-to-br from-sky-500 via-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center cursor-pointer shadow-glow-primary border border-white/20 hover:scale-105 transition-all group relative active:scale-95 p-1 shrink-0"
          title="Talk to Sarah from OS"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF7F11] via-[#FF7F11]/20 to-[#00B4D8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur duration-500" />
          <div className="w-full h-full rounded-full flex items-center justify-center relative bg-gradient-to-br from-sky-500 via-indigo-600 to-purple-600 p-0.5">
            <HumanFaceAvatar />
          </div>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-400"></span>
          </span>
        </motion.div>
      </div>
    </div>
  );
}
