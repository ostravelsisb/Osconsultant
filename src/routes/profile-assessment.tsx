import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  GraduationCap,
  Briefcase,
  Wallet,
  Globe,
  CheckCircle2,
  Info,
  ChevronRight,
  ShieldCheck,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState, useMemo, useCallback } from "react";
import { PageHero } from "@/components/site/PageHero";
import { COMPANY } from "@/data/site";
import { cn } from "@/lib/utils";
import { VisaSuccessGauge } from "@/components/site/VisaSuccessGauge";
import { Suspense, lazy } from "react";

const ProfileAssessmentSEO = lazy(() => import("@/components/site/ProfileAssessmentSEO").then(m => ({ default: m.ProfileAssessmentSEO })));

// Memoized Step 1
const Step1 = React.memo(({ formData, onChange, isInvalid }: any) => (
  <div className="grid gap-6 md:grid-cols-2">
    <div className="space-y-2">
      <Label htmlFor="pa-name" className="text-xs uppercase font-bold text-muted-foreground ml-1">Full Name</Label>
      <Input
        id="pa-name"
        placeholder="Enter your full name"
        className={cn("h-14 rounded-2xl bg-secondary/10 border-none px-6", isInvalid("name") && "ring-2 ring-destructive")}
        value={formData.name}
        onChange={(e) => onChange("name", e.target.value)}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="pa-age" className="text-xs uppercase font-bold text-muted-foreground ml-1">Age</Label>
      <Input
        id="pa-age"
        placeholder="e.g. 28"
        type="number"
        className={cn("h-14 rounded-2xl bg-secondary/10 border-none px-6", isInvalid("age") && "ring-2 ring-destructive")}
        value={formData.age}
        onChange={(e) => onChange("age", e.target.value)}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="pa-marital-status" className="text-xs uppercase font-bold text-muted-foreground ml-1">Marital Status</Label>
      <Select value={formData.maritalStatus || ""} onValueChange={(v) => onChange("maritalStatus", v)}>
        <SelectTrigger id="pa-marital-status" className={cn("h-14 rounded-2xl bg-secondary/10 border-none px-6", isInvalid("maritalStatus") && "ring-2 ring-destructive")}>
          <SelectValue placeholder="Select Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="single">Single</SelectItem>
          <SelectItem value="married">Married</SelectItem>
          <SelectItem value="divorced">Divorced / Widowed</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label htmlFor="pa-phone" className="text-xs uppercase font-bold text-muted-foreground ml-1">Phone Number</Label>
      <Input
        id="pa-phone"
        placeholder="+92 300 1234567"
        className={cn("h-14 rounded-2xl bg-secondary/10 border-none px-6", isInvalid("phone") && "ring-2 ring-destructive")}
        value={formData.phone}
        onChange={(e) => onChange("phone", e.target.value)}
      />
    </div>
  </div>
));

// Memoized Step 2
const Step2 = React.memo(({ formData, onChange, isInvalid }: any) => (
  <div className="grid gap-6 md:grid-cols-2">
    <div className="space-y-2 md:col-span-2">
      <Label htmlFor="pa-education" className="text-xs uppercase font-bold text-muted-foreground ml-1">Highest Education</Label>
      <Select value={formData.education || ""} onValueChange={(v) => onChange("education", v)}>
        <SelectTrigger className="h-14 rounded-2xl bg-secondary/10 border-none px-6">
          <SelectValue placeholder="Select Education" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="masters">Masters or Higher</SelectItem>
          <SelectItem value="bachelors">Bachelors Degree</SelectItem>
          <SelectItem value="diploma">Diploma / Associate</SelectItem>
          <SelectItem value="intermediate">Intermediate / A-Levels</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label htmlFor="pa-occupation" className="text-xs uppercase font-bold text-muted-foreground ml-1">Occupation</Label>
      <Input
        id="pa-occupation"
        placeholder="e.g. Software Engineer"
        className={cn("h-14 rounded-2xl bg-secondary/10 border-none px-6", isInvalid("occupation") && "ring-2 ring-destructive")}
        value={formData.occupation}
        onChange={(e) => onChange("occupation", e.target.value)}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="pa-experience" className="text-xs uppercase font-bold text-muted-foreground ml-1">Experience (Years)</Label>
      <Input
        id="pa-experience"
        type="number"
        className={cn("h-14 rounded-2xl bg-secondary/10 border-none px-6", isInvalid("experience") && "ring-2 ring-destructive")}
        value={formData.experience}
        onChange={(e) => onChange("experience", e.target.value)}
      />
    </div>
  </div>
));

// Memoized Step 3
const Step3 = React.memo(({ formData, onChange, isInvalid }: any) => (
  <div className="grid gap-6 md:grid-cols-2">
    <div className="space-y-2">
      <Label htmlFor="pa-income" className="text-xs uppercase font-bold text-muted-foreground ml-1">Monthly Income (PKR)</Label>
      <Input
        id="pa-income"
        placeholder="e.g. 150,000"
        className={cn("h-14 rounded-2xl bg-secondary/10 border-none px-6", isInvalid("income") && "ring-2 ring-destructive")}
        value={formData.income}
        onChange={(e) => onChange("income", e.target.value)}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="pa-balance" className="text-xs uppercase font-bold text-muted-foreground ml-1">Bank Balance (PKR)</Label>
      <Input
        id="pa-balance"
        placeholder="e.g. 2,000,000"
        className={cn("h-14 rounded-2xl bg-secondary/10 border-none px-6", isInvalid("bankBalance") && "ring-2 ring-destructive")}
        value={formData.bankBalance}
        onChange={(e) => onChange("bankBalance", e.target.value)}
      />
    </div>
    <div className="md:col-span-2 bg-primary/5 p-6 rounded-2xl border border-primary/10 flex gap-4">
      <Info className="text-primary shrink-0" size={20} />
      <p className="text-xs text-muted-foreground">Financial stability is the most critical factor for Tier 1 visa approvals. Please provide realistic estimates.</p>
    </div>
  </div>
));

// Memoized Step 4
const Step4 = React.memo(({ formData, onChange, isInvalid }: any) => (
  <div className="space-y-10">
    <div className="grid gap-4 md:grid-cols-3">
      {[
        { id: "tier1", label: "Tier 1", c: "USA, UK, CA, AU, EU", color: "bg-red-500" },
        { id: "tier2", label: "Tier 2", c: "NZ, JP, KR, IE", color: "bg-amber-500" },
        { id: "tier3", label: "Tier 3", c: "TR, AE, MY, TH", color: "bg-emerald-500" },
      ].map((t) => (
        <button
          key={t.id}
          onClick={() => onChange("destination", t.id)}
          className={cn("p-4 rounded-2xl border-2 text-left transition-all", formData.destination === t.id ? "border-primary bg-primary/5" : "border-border bg-white")}
        >
          <div className={cn("h-1 w-8 rounded-full mb-2", t.color)} />
          <p className="font-bold text-sm">{t.label}</p>
          <p className="text-[10px] text-muted-foreground">{t.c}</p>
        </button>
      ))}
    </div>

    <div className="grid gap-4 md:grid-cols-2">
      {[
        { id: "tourist", label: "Tourist", icon: Sparkles },
        { id: "business", label: "Business", icon: Briefcase },
      ].map((p) => (
        <button
          key={p.id}
          onClick={() => onChange("visaType", p.id)}
          className={cn("p-5 rounded-2xl border-2 flex items-center gap-4 text-left transition-all", formData.visaType === p.id ? "border-primary bg-primary/5" : "border-border bg-white")}
        >
          <div className={cn("h-10 w-10 rounded-xl flex items-center justify-center", formData.visaType === p.id ? "bg-primary text-white" : "bg-secondary text-muted-foreground")}>
            <p.icon size={20} />
          </div>
          <p className="font-bold">{p.label}</p>
        </button>
      ))}
    </div>

    <VisaSuccessGauge 
      income={formData.income} 
      stamps={formData.stamps} 
      refusals={formData.refusals} 
      destination={formData.destination} 
    />

    <div className="grid gap-4 md:grid-cols-2 bg-secondary/10 p-6 rounded-2xl">
      <Input placeholder="Stamps" type="number" value={formData.stamps} onChange={(e) => onChange("stamps", e.target.value)} className="bg-white rounded-xl" />
      <Input placeholder="Refusals" type="number" value={formData.refusals} onChange={(e) => onChange("refusals", e.target.value)} className="bg-white rounded-xl" />
      <Input placeholder="Travel History (e.g. Dubai, Turkey)" value={formData.travelHistory} onChange={(e) => onChange("travelHistory", e.target.value)} className="md:col-span-2 bg-white rounded-xl" />
    </div>
  </div>
));

export const Route = createFileRoute("/profile-assessment")({
  head: () => ({
    meta: [
      { title: "Visa Success AI | Profile Audit | OS Consultants" },
      { name: "description", content: "Professional visa eligibility assessment tool." }
    ]
  }),
  component: ProfileAssessment,
});

function ProfileAssessment() {
  const [step, setStep] = useState(1);
  const [triedNext, setTriedNext] = useState(false);
  const [formData, setFormData] = useState({
    name: "", age: "", maritalStatus: "", phone: "",
    education: "", occupation: "", experience: "",
    income: "", bankBalance: "",
    destination: "tier1", visaType: "tourist", stamps: "", refusals: "", travelHistory: ""
  });

  const onChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const isInvalid = useCallback((field: keyof typeof formData) => {
    return triedNext && !formData[field];
  }, [triedNext, formData]);

  const isStepValid = () => {
    if (step === 1) return !!(formData.name && formData.age && formData.phone);
    if (step === 2) return !!(formData.occupation);
    if (step === 3) return !!(formData.income);
    return true;
  };

  const nextStep = () => {
    if (isStepValid()) {
      setStep(s => Math.min(s + 1, 4));
      setTriedNext(false);
    } else {
      setTriedNext(true);
    }
  };

  return (
    <div className="bg-secondary/20 min-h-screen pb-20">
      <PageHero eyebrow="Evaluation" title="Profile Assessment" subtitle="Instantly check your visa approval probability with our AI-driven tool." />

      <div className="container-px mx-auto max-w-4xl -mt-12 relative z-10">
        <div className="bg-white rounded-3xl shadow-elevated border border-border overflow-hidden">
          <div className="bg-secondary/30 h-1 w-full"><motion.div className="bg-primary h-full" animate={{ width: `${(step / 4) * 100}%` }} /></div>
          
          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div key={step} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                {step === 1 && <Step1 formData={formData} onChange={onChange} isInvalid={isInvalid} />}
                {step === 2 && <Step2 formData={formData} onChange={onChange} isInvalid={isInvalid} />}
                {step === 3 && <Step3 formData={formData} onChange={onChange} isInvalid={isInvalid} />}
                {step === 4 && <Step4 formData={formData} onChange={onChange} isInvalid={isInvalid} />}
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex justify-between border-t pt-8">
              <Button variant="ghost" onClick={() => setStep(s => Math.max(1, s - 1))} disabled={step === 1}>Back</Button>
              {step < 4 ? (
                <Button onClick={nextStep} className="bg-primary text-white px-8 rounded-xl font-bold">Continue <ChevronRight className="ml-2" size={16} /></Button>
              ) : (
                <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`} className="bg-emerald-600 text-white px-8 h-10 flex items-center rounded-xl font-bold">Submit Via WhatsApp</a>
              )}
            </div>
          </div>
        </div>

        <Suspense fallback={<div className="h-40" />}>
          <ProfileAssessmentSEO />
        </Suspense>
      </div>
    </div>
  );
}
