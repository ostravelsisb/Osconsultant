import schengenImg from "@/assets/dest-schengen.jpg";
import usaImg from "@/assets/dest-usa.jpg";
import ukImg from "@/assets/dest-uk.jpg";
import canadaImg from "@/assets/dest-canada.jpg";
import auImg from "@/assets/dest-australia.jpg";
import nzImg from "@/assets/dest-nz.jpg";
import qatarImg from "@/assets/dest-qatar.jpg";
import bahrainImg from "@/assets/dest-bahrain.jpg";
import meImg from "@/assets/dest-middleeast.jpg";
import saImg from "@/assets/dest-southasia.jpg";
import caImg from "@/assets/dest-centralasia.jpg";
import naImg from "@/assets/dest-northafrica.jpg";
import safImg from "@/assets/dest-southafrica.jpg";

export const COMPANY = {
  name: "OS Consultants",
  tagline: "Your Gateway to the World",
  phone: "+92 333 5542877",
  whatsapp: "+92 336 5500477",
  email: "info@osconsultants.pk",
  address: "Office # 3, Aaly Plaza, Fazal-e-Haq Road, Block E G 6/2 Blue Area, Islamabad, 44000",
  hours: "Mon – Sat · 10:00 AM – 7:00 PM",
  websites: ["ostravel.pk", "ostravels.com"],
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/visa-services", label: "Visa Services" },
  { to: "/countries", label: "Countries" },
  { to: "/air-ticketing", label: "Air Ticketing" },
  { to: "/hotel-booking", label: "Hotels" },
  { to: "/travel-insurance", label: "Insurance" },
  { to: "/passport-services", label: "Passport" },
  { to: "/contact", label: "Contact" },
] as const;

export const COUNTRIES = [
  { slug: "schengen", name: "Schengen Area", short: "26 European countries on a single visa.", image: schengenImg, accent: "Europe" },
  { slug: "usa", name: "United States", short: "B1/B2, F1, work and family visas.", image: usaImg, accent: "Americas" },
  { slug: "uk", name: "United Kingdom", short: "Visitor, student and work visas.", image: ukImg, accent: "Europe" },
  { slug: "canada", name: "Canada", short: "Visit, study, PR pathways and ETAs.", image: canadaImg, accent: "Americas" },
  { slug: "australia", name: "Australia", short: "Tourist, student and skilled visas.", image: auImg, accent: "Oceania" },
  { slug: "new-zealand", name: "New Zealand", short: "NZeTA, visitor and student visas.", image: nzImg, accent: "Oceania" },
  { slug: "qatar", name: "Qatar", short: "Tourist, business and family visit.", image: qatarImg, accent: "Middle East" },
  { slug: "bahrain", name: "Bahrain", short: "eVisa, visit and business visas.", image: bahrainImg, accent: "Middle East" },
  { slug: "middle-east", name: "Middle East", short: "UAE, KSA, Oman, Kuwait & more.", image: meImg, accent: "Region" },
  { slug: "south-asia", name: "South Asia", short: "Sri Lanka, Maldives, Nepal & more.", image: saImg, accent: "Region" },
  { slug: "central-asia", name: "Central Asia", short: "Uzbekistan, Kazakhstan & more.", image: caImg, accent: "Region" },
  { slug: "north-africa", name: "North Africa", short: "Egypt, Morocco, Tunisia & more.", image: naImg, accent: "Region" },
  { slug: "south-africa", name: "South Africa", short: "Tourist & business visas.", image: safImg, accent: "Region" },
];

export const VISA_SERVICES = [
  { title: "Tourist Visa", desc: "Plan your dream vacation with hassle-free tourist visa processing." },
  { title: "Family Visit Visa", desc: "Reunite with family abroad through our reliable visit visa service." },
  { title: "Family Reunification", desc: "Long-term family reunion visas with documentation support." },
  { title: "Schengen Visa", desc: "Single visa to explore 26 European countries seamlessly." },
  { title: "Student Visa", desc: "Study abroad with end-to-end student visa guidance." },
  { title: "Business Visa", desc: "Business and corporate travel visas, fast and reliable." },
];

export const TRAVEL_SERVICES = [
  { title: "Air Ticketing", desc: "IATA-authorized ticketing with the best fares worldwide.", to: "/air-ticketing" },
  { title: "Hotel Booking", desc: "Luxury and budget stays from trusted global partners.", to: "/hotel-booking" },
  { title: "Travel Insurance", desc: "Schengen-compliant medical & trip cancellation cover.", to: "/travel-insurance" },
  { title: "Passport Services", desc: "New applications, renewals & USA passport applications.", to: "/passport-services" },
];

export const TESTIMONIALS = [
  { name: "Ahmed Khan", role: "Schengen Visa · Approved", quote: "OS Consultants made my Schengen application stress-free. Highly professional team in Islamabad." },
  { name: "Sara Malik", role: "UK Visit Visa · Approved", quote: "Got my UK visit visa in record time. Their documentation guidance was spot on." },
  { name: "Bilal Hussain", role: "Canada Tourist · Approved", quote: "Smooth experience from form filling to interview prep. Strongly recommended!" },
  { name: "Ayesha Tariq", role: "Australia Visa · Approved", quote: "Clear, honest advice and constant updates. Best visa consultants in Blue Area." },
  { name: "Omar Shahid", role: "USA B1/B2 · Approved", quote: "Their interview coaching was the difference maker. Five stars!" },
  { name: "Hina Raza", role: "Family Reunification", quote: "Patient, expert handling of complex family reunification documents." },
];

export const FAQS = [
  { q: "How long does a typical visa application take?", a: "Processing times vary by country — Schengen 10–15 working days, UK 3 weeks, USA 2–4 weeks after interview. We give a clear timeline at consultation." },
  { q: "Do you guarantee visa approval?", a: "No legitimate consultant can guarantee approval — final decisions rest with embassies. We do guarantee complete documentation and professional preparation that maximize your chances." },
  { q: "What documents are required?", a: "It depends on the visa type. Generally: passport, photos, financial proof, travel itinerary, invitation letters, and supporting documents. We provide a tailored checklist." },
  { q: "Are you IATA authorized for ticketing?", a: "Yes. We are IATA-authorized and offer competitive fares on all international airlines." },
  { q: "Do you handle USA passport applications?", a: "Yes — we assist US passport holders in Pakistan with new applications and renewals end-to-end." },
  { q: "Where is your office located?", a: "We are located in Blue Area, Islamabad, Pakistan. Walk-ins welcome Monday to Saturday." },
  { q: "How do I book a consultation?", a: "Use the Consultation page form, call us, or message on WhatsApp. We typically respond within 1 business hour." },
];

export const SCHENGEN_COUNTRIES = [
  {
    slug: "germany",
    name: "Germany",
    title: "Germany Visa Consultant in Islamabad",
    description: "Expert assistance for Germany Schengen visa applications from Pakistan. Tourist, business, and family visit visas handled with precision.",
    keywords: "Germany visa consultant Islamabad, apply for Germany visa Pakistan, Germany visit visa requirements, Schengen visa Germany ISB",
    intro: "Germany is the economic powerhouse of Europe and a top destination for Pakistani business travelers, students, and tourists. However, the German embassy in Islamabad is known for its meticulous scrutiny of visa applications. As your dedicated Germany visa consultant in Islamabad, OS Consultants ensures your itinerary, financial proofs, and cover letters are perfectly aligned with consular expectations to maximize your approval chances.",
    docs: [
      "Original Passport (valid for at least 6 months with 2 blank pages)",
      "Schengen Visa Application Form (duly filled and signed)",
      "Two recent biometric passport-sized photographs (white background)",
      "Travel Medical Insurance (Minimum coverage €30,000, valid for all Schengen states)",
      "Confirmed Return Flight Itinerary",
      "Proof of Accommodation (Hotel bookings or invitation letter 'Verpflichtungserklärung')",
      "Bank Statement for the last 6 months (signed and stamped by the bank)",
      "Account Maintenance Certificate",
      "Proof of Income (Salary slips, NTN, tax returns for the last 2 years)",
      "Family Registration Certificate (FRC) issued by NADRA",
      "Detailed Cover Letter explaining the purpose of the trip",
    ]
  },
  {
    slug: "france",
    name: "France",
    title: "France Visit Visa Consultant in Islamabad",
    description: "Fast and reliable France Schengen visa processing in Islamabad. Expert documentation and appointment scheduling.",
    keywords: "France visa consultant Islamabad, France visit visa Pakistan, apply for France visa ISB, French embassy visa requirements, Schengen visa France",
    intro: "France remains one of the most visited countries in the world. Whether you are planning a holiday in Paris or attending a business expo, securing a France Schengen visa from Pakistan requires a flawless application. We are recognized as the top France visa consultant in Islamabad, providing end-to-end services from securing hard-to-get appointments to crafting compelling travel itineraries that satisfy the French embassy's requirements.",
    docs: [
      "Valid Passport and copies of previous visas",
      "Completed France Schengen Application Form via France-Visas portal",
      "Two standard passport-size photos (ICAO compliant)",
      "Schengen-approved Travel Insurance",
      "Flight Reservation (Round trip)",
      "Confirmed Hotel Reservation or 'Attestation d’accueil' if staying with family/friends",
      "Bank Statements (last 6 months) and proof of financial ties to Pakistan",
      "Employment Letter / Leave Approval / Business Registration documents",
      "FRC and Marriage Certificate (if traveling with spouse)",
      "Personal Cover Letter"
    ]
  },
  {
    slug: "italy",
    name: "Italy",
    title: "Italy Visa Expert in Islamabad",
    description: "Comprehensive visa assistance for Italy from Pakistan. Get your Italy tourist or business visa approved smoothly.",
    keywords: "Italy visa consultant Islamabad, Italy visit visa requirements Pakistan, apply Italy Schengen visa ISB, Italian embassy Islamabad visa",
    intro: "Italy's rich history and vibrant culture draw thousands of Pakistani travelers annually. The Italian embassy processes numerous applications, and presenting a well-organized file is critical. At OS Consultants, we specialize in Italy Schengen visas. We guide you through the document gathering process, ensuring your financial stability and ties to Pakistan are clearly demonstrated to the Italian consular officers.",
    docs: [
      "Original Passport (valid for 6 months beyond intended stay)",
      "Completed and signed Schengen Visa Form",
      "Two recent biometric photos",
      "Travel Health Insurance (Coverage €30,000)",
      "Flight Ticket Reservation",
      "Proof of Lodging (Hotel booking for the entire stay in Italy and Schengen zone)",
      "Personal Bank Statement (last 6 months) and Account Maintenance Certificate",
      "Proof of Occupation (Employment letter, business ownership proof, or student ID)",
      "Income Tax Returns (FBR) for the last 2 years",
      "Polio Vaccination Certificate (if applicable/requested)",
      "Cover Letter detailing the trip"
    ]
  },
  {
    slug: "spain",
    name: "Spain",
    title: "Spain Visa Consultant in Islamabad",
    description: "Apply for a Spain Schengen visa from Islamabad. We provide expert documentation and application tracking.",
    keywords: "Spain visa consultant Islamabad, Spain visit visa Pakistan, BLS Spain Islamabad, apply Spain visa ISB, Spanish embassy visa requirements",
    intro: "Spain is a top holiday destination known for its beautiful coasts and architectural marvels. Visa applications for Spain from Pakistan are typically submitted through BLS International. As an experienced Spain visa consultant in Islamabad, we help you prepare a robust application file, ensuring your hotel bookings, financial documents, and travel plans meet the specific criteria set by the Spanish embassy in Islamabad.",
    docs: [
      "Valid Passport with at least two blank pages",
      "Spain Schengen Visa Application Form",
      "Two passport-size photos with white background",
      "Travel Insurance (Schengen compliant)",
      "Flight Itinerary (Round trip)",
      "Hotel Bookings covering every night in Spain",
      "Bank Statement (last 6 months) signed and stamped",
      "Proof of Employment / Business / Studies",
      "Tax Returns (NTN and 2 years returns)",
      "FRC (Family Registration Certificate)",
      "Detailed Cover Letter"
    ]
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    title: "Netherlands Visa Consultant in Islamabad",
    description: "Expert guidance for Netherlands Schengen visa applications. Get your Dutch visit visa approved.",
    keywords: "Netherlands visa consultant Islamabad, Dutch visa Pakistan, apply Netherlands visa ISB, VFS Netherlands Islamabad, Netherlands visit visa requirements",
    intro: "Whether traveling to Amsterdam for tourism or business, applying for a Netherlands visa from Pakistan requires a solid application submitted via VFS Global. Our team at OS Consultants acts as your premier Netherlands visa consultant in Islamabad. We meticulously review your financial documents and travel itinerary, ensuring you present a compelling case to the Dutch embassy.",
    docs: [
      "Original Passport and copies of all pages with visas/stamps",
      "Schengen Visa Form completed online",
      "Two recent passport-sized photos",
      "Travel Medical Insurance (€30,000 coverage)",
      "Flight Itinerary",
      "Hotel Reservation or Proof of Sponsorship",
      "Bank Statement (last 6 months) with sufficient funds",
      "Employment/Business Documents",
      "FBR Tax Returns",
      "FRC (NADRA)",
      "Cover Letter and detailed day-to-day itinerary"
    ]
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    title: "Switzerland Visa Consultant in Islamabad",
    description: "Premium visa consultancy for Switzerland in Islamabad. Flawless documentation for your Swiss adventure.",
    keywords: "Switzerland visa consultant Islamabad, Swiss visa Pakistan, apply Switzerland visa ISB, Switzerland visit visa requirements, Schengen visa Switzerland",
    intro: "Switzerland offers breathtaking landscapes and serves as a major hub for international business. A Swiss Schengen visa application demands high standards of proof regarding your financial means and intent to return. As the leading Switzerland visa consultant in Islamabad, we provide personalized guidance to craft an impeccable visa file, ensuring a stress-free application process for your Swiss journey.",
    docs: [
      "Valid Passport (6 months validity)",
      "Schengen Visa Application Form",
      "Two passport photos (ICAO standards)",
      "Schengen Travel Insurance",
      "Flight Reservation",
      "Confirmed Hotel Bookings for Switzerland",
      "Bank Statements (last 6 months) and Account Maintenance Certificate",
      "Proof of Occupation (Salary slips, business registration)",
      "NTN and Tax Returns",
      "FRC from NADRA",
      "Personal Cover Letter"
    ]
  }
];