import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import React, { useMemo } from "react";

interface VisaSuccessGaugeProps {
  income: string;
  stamps: string;
  refusals: string;
  destination: string;
}

export const VisaSuccessGauge = React.memo(({ income, stamps, refusals, destination }: VisaSuccessGaugeProps) => {
  const { score, status, colorClass } = useMemo(() => {
    const incomeVal = parseInt(income.replace(/\D/g, "")) || 0;
    const stampsVal = parseInt(stamps) || 0;
    const refusalsVal = parseInt(refusals) || 0;

    const s = Math.max(
      5,
      Math.min(
        98,
        (incomeVal > 300000 ? 35 : incomeVal > 150000 ? 20 : 5) +
          stampsVal * 12 -
          refusalsVal * 20 +
          (destination === "tier3" ? 35 : destination === "tier2" ? 15 : 5),
      ),
    );

    const st = s > 75 ? "Optimistic" : s > 45 ? "Moderate" : "Challenging";
    const cc = s > 75 ? "text-emerald-500" : s > 45 ? "text-amber-500" : "text-red-500";

    return { score: s, status: st, colorClass: cc, incomeVal, stampsVal, refusalsVal };
  }, [income, stamps, refusals, destination]);

  const incomeVal = parseInt(income.replace(/\D/g, "")) || 0;
  const stampsVal = parseInt(stamps) || 0;
  const refusalsVal = parseInt(refusals) || 0;

  return (
    <div className="bg-gradient-to-br from-secondary/40 to-white p-8 md:p-10 rounded-[3rem] border-2 border-border/50 relative overflow-hidden group">
      <div className="absolute top-0 right-0 h-40 w-40 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-primary/10 transition-colors" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
        <div className="relative h-40 w-40 shrink-0">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
            <circle
              className="text-secondary stroke-current"
              strokeWidth="10"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
            />
            <motion.circle
              className={cn("stroke-current transition-all duration-1000", colorClass)}
              strokeWidth="10"
              strokeDasharray="251"
              strokeDashoffset={251 - (251 * score) / 100}
              strokeLinecap="round"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
              initial={{ strokeDashoffset: 251 }}
              animate={{ strokeDashoffset: 251 - (251 * score) / 100 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-black tracking-tighter">{score}%</span>
            <span className="text-[8px] font-black uppercase text-muted-foreground tracking-[0.2em] mt-1">
              Probability
            </span>
          </div>
        </div>

        <div className="space-y-5 text-center md:text-left flex-1">
          <h4 className="text-2xl font-black uppercase tracking-tight">AI Success Audit</h4>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {stampsVal > 3 && (
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[9px] font-black rounded-lg uppercase tracking-wider">
                Elite Traveler
              </span>
            )}
            {incomeVal > 200000 && (
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[9px] font-black rounded-lg uppercase tracking-wider">
                High Stability
              </span>
            )}
            {refusalsVal > 0 && (
              <span className="px-3 py-1 bg-red-100 text-red-700 text-[9px] font-black rounded-lg uppercase tracking-wider">
                Refusal Mitigation
              </span>
            )}
            {destination === "tier1" && (
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-[9px] font-black rounded-lg uppercase tracking-wider">
                Tier 1 Scrutiny
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground font-bold leading-relaxed uppercase tracking-tight opacity-80">
            Based on your profile ({stampsVal} stamps, {incomeVal.toLocaleString()} PKR income), your probability for{" "}
            {destination === "tier1" ? "Tier 1" : "this"} region is{" "}
            <span className={cn("font-black", colorClass)}>{status}</span>.{" "}
            {refusalsVal > 0 ? "Address previous refusals carefully." : "Focus on demonstrating strong ties."}
          </p>
        </div>
      </div>
    </div>
  );
});

VisaSuccessGauge.displayName = "VisaSuccessGauge";
