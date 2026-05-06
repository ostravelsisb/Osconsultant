import { ShieldCheck, Globe, Award, FileText } from "lucide-react";

export function ProfileAssessmentSEO() {
  return (
    <section className="mt-32 border-t border-border pt-20 pb-32">
      <div className="max-w-4xl mx-auto space-y-16 px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground/80">
            Expert Global Visa Strategy Hub
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground font-medium uppercase text-xs tracking-widest">
            Advanced Profile Auditing for Tier 1 Destinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <ShieldCheck size={18} /> USA B1/B2 Success Probability
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our AI-driven assessment focuses on Section 214(b) compliance—the most common
              reason for US visa refusals in Pakistan. We evaluate your "Home Ties,"
              professional stability, and travel intent to maximize your approval chances for B1
              Business and B2 Tourist visas.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <Globe size={18} /> Schengen & UK Visa Evaluation
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Navigate the complex requirements of the UK Standard Visitor Visa and Schengen
              (Germany, France, Italy, etc.) applications. We audit your financial
              documentation, sponsorship letters, and itinerary consistency to meet strict
              consular standards.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <Award size={18} /> Global Passport Strategy
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Not ready for a Tier 1 visa? Our "Passport Strength Audit" identifies high-value
              "Bridge Countries" (like Turkey, Japan, or South Korea) that help build the travel
              history needed for 5-year USA or UK visa success.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <FileText size={18} /> Document Integrity Audit
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              From bank statement analysis to employment verification and hotel voucher
              consistency, OS Consultants Islamabad ensures your application is "decision-ready"
              for embassy officers.
            </p>
          </div>
        </div>

        <div className="bg-secondary/20 p-10 rounded-[2.5rem] border border-border/50 text-center space-y-6">
          <h3 className="text-xl font-black uppercase">
            Why OS Consultants is Pakistan's #1 Visa Expert?
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            With over 15 years of field experience in Islamabad and a 98% success rate, we don't
            just fill forms—we build profiles. Whether you are a solo traveler, a business
            professional, or a family seeking reunification, our consultative approach minimizes
            risk and maximizes global mobility.
          </p>
          <div className="flex flex-wrap justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {["IATA Authorized", "Islamabad Chamber of Commerce Member"].map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 bg-white rounded-full text-[10px] font-bold border border-border uppercase tracking-widest"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
