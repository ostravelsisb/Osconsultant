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
  tagline: "Pakistan's No.1 Travel Agency — Your Gateway to the World",
  phone: "+92 51 2021700",
  mobile: "+92 333 5542877",
  whatsapp: "+92 336 5500477",
  email: "info@osconsultants.pk",
  address: "Office # 3, Aaly Plaza, Fazal-e-Haq Road, Block E G 6/2 Blue Area, Islamabad, 44000",
  hours: "Mon – Sat · 10:00 AM – 7:00 PM",
  websites: ["ostravel.pk", "ostravels.com"],
  socials: {
    facebook: "https://www.facebook.com/osconsultants01/",
    instagram: "https://www.instagram.com/osconsultants.pk/",
    linkedin: "https://www.linkedin.com/company/os-consultants/",
    twitter: "https://twitter.com/osconsultants",
  },
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/visa-services", label: "Visa Services" },
  { to: "/umrah", label: "Umrah" },
  { to: "/countries", label: "Countries" },
  { to: "/air-ticketing", label: "Air Ticketing" },
  { to: "/travel-insurance", label: "Insurance" },
  { to: "/passport-services", label: "Passport" },
  { to: "/profile-assessment", label: "Free Assessment" },
  { to: "/contact", label: "Contact" },
] as const;

export const COUNTRIES = [
  {
    slug: "schengen",
    name: "Schengen Area",
    short: "29 European countries on a single visa.",
    image: schengenImg,
    accent: "Europe",
  },
  {
    slug: "united-states",
    name: "United States",
    short: "B1/B2, F1, work and family visas.",
    image: usaImg,
    accent: "Americas",
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    short: "Visitor, student and work visas.",
    image: ukImg,
    accent: "Europe",
  },
  {
    slug: "canada",
    name: "Canada",
    short: "Visit, study, PR pathways and ETAs.",
    image: canadaImg,
    accent: "Americas",
  },
  {
    slug: "middle-east",
    name: "Middle East",
    short: "UAE, KSA, Oman, Kuwait, Qatar, Bahrain & more.",
    image: meImg,
    accent: "Region",
  },
  {
    slug: "south-asia",
    name: "South Asia",
    short: "Sri Lanka, Maldives, Nepal & more.",
    image: saImg,
    accent: "Region",
  },
  {
    slug: "central-asia",
    name: "Central Asia",
    short: "Uzbekistan, Kazakhstan & more.",
    image: caImg,
    accent: "Region",
  },
  {
    slug: "east-asia",
    name: "East Asia",
    short: "China, Japan, South Korea & more.",
    image:
      "/images/img_9190f20f71.jpg",
    accent: "Region",
  },
  {
    slug: "north-africa",
    name: "North Africa",
    short: "Egypt, Morocco, Tunisia & more.",
    image: naImg,
    accent: "Region",
  },
  {
    slug: "southern-africa",
    name: "Southern Africa",
    short: "South Africa, Mauritius, Kenya & more.",
    image: safImg,
    accent: "Region",
  },
  {
    slug: "south-america",
    name: "South America",
    short: "Brazil, Argentina, Colombia & more.",
    image:
      "/images/img_89f28f9017.jpg",
    accent: "Region",
  },
  {
    slug: "oceania",
    name: "Oceania",
    short: "Australia, New Zealand, Fiji & more.",
    image: "/images/img_73cf6a7246.jpg",
    accent: "Region",
  },
];

export const VISA_SERVICES = [
  {
    title: "Germany Visa Consultant in Islamabad — OS Consultants",
    desc: "Plan your dream vacation with hassle-free tourist visa processing.",
  },
  {
    title: "Family Visit Visa",
    desc: "Reunite with family abroad through our reliable visit visa service.",
  },
  {
    title: "Family Reunification",
    desc: "Long-term family reunion visas with documentation support.",
  },
  { title: "Schengen Visa", desc: "Single visa to explore 29 European countries seamlessly." },
  { title: "Student Visa", desc: "Study abroad with end-to-end student visa guidance." },
  { title: "Business Visa", desc: "Business and corporate travel visas, fast and reliable." },
];

export const TRAVEL_SERVICES = [
  {
    title: "Air Ticketing",
    desc: "IATA-authorized ticketing with the best fares worldwide.",
    to: "/air-ticketing",
  },
  {
    title: "Hotel Booking",
    desc: "Luxury and budget stays from trusted global partners.",
    to: "/hotel-booking",
  },
  {
    title: "Travel Insurance",
    desc: "Schengen-compliant medical & trip cancellation cover.",
    to: "/travel-insurance",
  },
  {
    title: "Passport Services",
    desc: "New applications, renewals & USA passport applications.",
    to: "/passport-services",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ahmed Khan",
    role: "Schengen Visa · Approved",
    quote:
      "OS Consultants made my Schengen application stress-free. Highly professional team in Islamabad.",
  },
  {
    name: "Sara Malik",
    role: "UK Visit Visa · Approved",
    quote: "Got my UK visit visa in record time. Their documentation guidance was spot on.",
  },
  {
    name: "Bilal Hussain",
    role: "Canada Tourist · Approved",
    quote: "Smooth experience from form filling to interview prep. Strongly recommended!",
  },
  {
    name: "Ayesha Tariq",
    role: "Australia Visa · Approved",
    quote: "Clear, honest advice and constant updates. Best visa consultants in Blue Area.",
  },
  {
    name: "Omar Shahid",
    role: "USA B1/B2 · Approved",
    quote: "Their interview coaching was the difference maker. Five stars!",
  },
  {
    name: "Hina Raza",
    role: "Family Reunification",
    quote: "Patient, expert handling of complex family reunification documents.",
  },
];

export const FAQS = [
  {
    q: "How long does a typical visa application take?",
    a: "Processing times vary by country — Schengen 10–15 working days, UK 3 weeks, USA 2–4 weeks after interview. We give a clear timeline at consultation.",
  },
  {
    q: "Do you guarantee visa approval?",
    a: "No legitimate consultant can guarantee approval — final decisions rest with embassies. We do guarantee complete documentation and professional preparation that maximize your chances.",
  },
  {
    q: "What documents are required?",
    a: "It depends on the visa type. Generally: passport, photos, financial proof, travel itinerary, invitation letters, and supporting documents. We provide a tailored checklist.",
  },
  {
    q: "Are you IATA authorized for ticketing?",
    a: "Yes. We are IATA-authorized and offer competitive fares on all international airlines.",
  },
  {
    q: "Do you handle USA passport applications?",
    a: "Yes — we assist US passport holders in Pakistan with new applications and renewals end-to-end.",
  },
  {
    q: "Where is your office located?",
    a: "We are located in Blue Area, Islamabad, Pakistan. Walk-ins welcome Monday to Saturday.",
  },
  {
    q: "How do I book a consultation?",
    a: "Use the Consultation page form, call us, or message on WhatsApp. We typically respond within 1 business hour.",
  },
];

export const SCHENGEN_COUNTRIES = [
  {
    slug: "germany",
    name: "Germany",
    code: "de",
    title: "Germany Visa Consultant in Islamabad",
    description:
      "Expert assistance for Germany Schengen visa applications from Pakistan. Tourist, business, and family visit visas handled with precision.",
    keywords:
      "Germany visa consultant Islamabad, apply for Germany visa Pakistan, Germany visit visa requirements, Schengen visa Germany ISB, Germany visit visa from pakistan, Germany visa requirements, Germany visa fee pakistan",
    intro:
      "Germany is the economic powerhouse of Europe and a top destination for Pakistani business travelers, students, and tourists. However, the German embassy in Islamabad is known for its meticulous scrutiny of visa applications. As your dedicated Germany visa consultant in Islamabad, OS Consultants ensures your itinerary, financial proofs, and cover letters are perfectly aligned with consular expectations to maximize your approval chances.",
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
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: [
      "Berlin (Brandenburg Gate)",
      "Munich (Neuschwanstein Castle)",
      "The Rhine Valley",
      "Black Forest",
    ],
    image:
      "/images/img_336389a0b5.jpg",
  },
  {
    slug: "france",
    name: "France",
    code: "fr",
    title: "France Visa Consultant in Islamabad — OS Consultants",
    description:
      "Fast and reliable France Schengen visa processing in Islamabad. Expert documentation and appointment scheduling.",
    keywords:
      "France visa consultant Islamabad, France visit visa Pakistan, apply for France visa ISB, French embassy visa requirements, Schengen visa France, France visit visa from pakistan, France visa requirements, France visa fee pakistan",
    intro:
      "France remains one of the most visited countries in the world. Whether you are planning a holiday in Paris or attending a business expo, securing a France Schengen visa from Pakistan requires a flawless application. We are recognized as the top France visa consultant in Islamabad, providing end-to-end services from securing hard-to-get appointments to crafting compelling travel itineraries that satisfy the French embassy's requirements.",
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
      "Personal Cover Letter",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: [
      "Paris (Eiffel Tower)",
      "French Riviera (Nice/Cannes)",
      "Mont Saint-Michel",
      "Loire Valley Castles",
    ],
    image:
      "/images/img_65a04c58e4.jpg",
  },
  {
    slug: "italy",
    name: "Italy",
    code: "it",
    title: "Italy Visa Consultant in Islamabad — OS Consultants",
    description:
      "Comprehensive visa assistance for Italy from Pakistan. Get your Italy tourist or business visa approved smoothly.",
    keywords:
      "Italy visa consultant Islamabad, Italy visit visa requirements Pakistan, apply Italy Schengen visa ISB, Italian embassy Islamabad visa, Italy visit visa from pakistan, Italy visa requirements, Italy visa fee pakistan",
    intro:
      "Italy's rich history and vibrant culture draw thousands of Pakistani travelers annually. The Italian embassy processes numerous applications, and presenting a well-organized file is critical. At OS Consultants, we specialize in Italy Schengen visas. We guide you through the document gathering process, ensuring your financial stability and ties to Pakistan are clearly demonstrated to the Italian consular officers.",
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
      "Cover Letter detailing the trip",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: ["Rome (Colosseum)", "Venice (Grand Canal)", "Florence (Duomo)", "Amalfi Coast"],
    image:
      "/images/img_177ae3a7a4.jpg",
  },
  {
    slug: "spain",
    name: "Spain",
    code: "es",
    title: "Spain Visa Consultant in Islamabad — OS Consultants",
    description:
      "Apply for a Spain Schengen visa from Islamabad. We provide expert documentation and application tracking.",
    keywords:
      "Spain visa consultant Islamabad, Spain visit visa Pakistan, BLS Spain Islamabad, apply Spain visa ISB, Spanish embassy visa requirements, Spain visit visa from pakistan, Spain visa requirements, Spain visa fee pakistan",
    intro:
      "Spain is a top holiday destination known for its beautiful coasts and architectural marvels. Visa applications for Spain from Pakistan are typically submitted through BLS International. As an experienced Spain visa consultant in Islamabad, we help you prepare a robust application file, ensuring your hotel bookings, financial documents, and travel plans meet the specific criteria set by the Spanish embassy in Islamabad.",
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
      "Detailed Cover Letter",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: [
      "Barcelona (Sagrada Familia)",
      "Madrid (Royal Palace)",
      "Seville (Alcázar)",
      "Ibiza / Mallorca",
    ],
    image:
      "/images/img_74bfe51e2f.jpg",
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    code: "nl",
    title: "Netherlands Visa Consultant in Islamabad — OS Consultants",
    description:
      "Expert guidance for Netherlands Schengen visa applications. Get your Dutch visit visa approved.",
    keywords:
      "Netherlands visa consultant Islamabad, Dutch visa Pakistan, apply Netherlands visa ISB, VFS Netherlands Islamabad, Netherlands visit visa requirements, Netherlands visit visa from pakistan, Netherlands visa requirements, Netherlands visa fee pakistan",
    intro:
      "Whether traveling to Amsterdam for tourism or business, applying for a Netherlands visa from Pakistan requires a solid application submitted via VFS Global. Our team at OS Consultants acts as your premier Netherlands visa consultant in Islamabad. We meticulously review your financial documents and travel itinerary, ensuring you present a compelling case to the Dutch embassy.",
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
      "Cover Letter and detailed day-to-day itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: [
      "Amsterdam (Canals)",
      "Rotterdam (Architecture)",
      "Keukenhof Gardens",
      "The Hague",
    ],
    image:
      "/images/img_b723ee4cf3.jpg",
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    code: "ch",
    title: "Switzerland Visa Consultant in Islamabad — OS Consultants",
    description:
      "Premium visa consultancy for Switzerland in Islamabad. Flawless documentation for your Swiss adventure.",
    keywords:
      "Switzerland visa consultant Islamabad, Swiss visa Pakistan, apply Switzerland visa ISB, Switzerland visit visa requirements, Schengen visa Switzerland, Switzerland visit visa from pakistan, Switzerland visa requirements, Switzerland visa fee pakistan",
    intro:
      "Switzerland offers breathtaking landscapes and serves as a major hub for international business. A Swiss Schengen visa application demands high standards of proof regarding your financial means and intent to return. As the leading Switzerland visa consultant in Islamabad, we provide personalized guidance to craft an impeccable visa file, ensuring a stress-free application process for your Swiss journey.",
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
      "Personal Cover Letter",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: [
      "Zurich (Lake Zurich)",
      "Lucerne (Chapel Bridge)",
      "Interlaken (Jungfraujoch)",
      "Geneva (Jet d'Eau)",
    ],
    image:
      "/images/img_a53f0fe3aa.jpg",
  },
  {
    slug: "austria",
    name: "Austria",
    code: "at",
    title: "Austria Visa Consultant in Islamabad — OS Consultants",
    description:
      "Expert Austria Schengen visa assistance from Islamabad. Tourist, business & family visit visas with 98% approval rate. Professional documentation by Pakistan's #1 visa agency.",
    keywords:
      "Austria visa consultant Islamabad, Austria visit visa Pakistan, Austria Schengen visa requirements, Vienna visa from ISB, apply Austria visa Islamabad, Austria tourist visa Pakistan 2026, Austria visit visa from pakistan, Austria visa requirements, Austria visa fee pakistan",
    intro:
      "Austria, the heart of Europe, is famous for its alpine scenery, classical music heritage, and world-class cities like Vienna and Salzburg. The Austrian embassy in Islamabad requires precise documentation, especially regarding travel insurance and financial stability. As Pakistan's leading Austria visa consultant, OS Consultants ensures your application meets every requirement for a smooth approval.",
    docs: [
      "Original Passport (valid for 6 months with 2 blank pages)",
      "Schengen Visa Application Form (completed and signed)",
      "Two recent biometric photos (White background, 35x45mm)",
      "Travel Medical Insurance (Minimum €30,000 coverage, Schengen-wide)",
      "Confirmed Flight Itinerary (Round trip)",
      "Hotel Reservations covering entire stay in Austria",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "Employment Letter / 3 Salary Slips / NTN & Tax Returns",
      "NADRA Family Registration Certificate (FRC)",
      "Detailed Cover Letter explaining purpose of visit",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: ["Vienna (Schönbrunn Palace)", "Salzburg (Old Town)", "Hallstatt", "Innsbruck"],
    image:
      "/images/img_2db79fcc2e.jpg",
  },
  {
    slug: "belgium",
    name: "Belgium",
    code: "be",
    title: "Belgium Visa Consultant in Islamabad — OS Consultants",
    description:
      "Apply for Belgium Schengen visa from Islamabad with Pakistan's #1 visa agency. Expert documentation for tourist, business & family visas. 98% approval rate.",
    keywords:
      "Belgium visa consultant Islamabad, Belgium visit visa Pakistan, Belgium Schengen visa ISB, Brussels visa from Pakistan, apply Belgium visa Islamabad 2026, Belgium visit visa from pakistan, Belgium visa requirements, Belgium visa fee pakistan",
    intro:
      "Belgium is known for its medieval towns, Renaissance architecture, and as the headquarters of the European Union. Applications for Belgium from Pakistan are handled with strict attention to the purpose of stay. OS Consultants ensures your documentation is robust and fully aligned with the Belgian embassy requirements in Islamabad.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Belgium Schengen Visa Application Form",
      "Two biometric Photos (White background, 35x45mm)",
      "Travel Medical Insurance (€30,000 minimum, Schengen-wide)",
      "Confirmed Flight & Hotel Bookings",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "Employment/Business Documents (NTN, salary slips, chamber cert)",
      "FBR Tax Returns (Last 2 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Detailed Day-by-Day Itinerary & Cover Letter",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: ["Brussels (Grand Place)", "Bruges (Canals)", "Ghent (Gravensteen)", "Antwerp"],
    image:
      "/images/belgium.jpg",
  },
  {
    slug: "denmark",
    name: "Denmark",
    code: "dk",
    title: "Denmark Visa Consultant in Islamabad — OS Consultants",
    description:
      "Fast and reliable Denmark Schengen visa processing in Islamabad. Expert documentation for tourist & business visas via ApplyVisa portal. Pakistan's top visa agency.",
    keywords:
      "Denmark visa consultant Islamabad, Denmark visit visa Pakistan, Copenhagen visa from ISB, Denmark Schengen visa requirements, apply Denmark visa Islamabad 2026, Denmark visit visa from pakistan, Denmark visa requirements, Denmark visa fee pakistan",
    intro:
      "Denmark, the land of the Vikings and modern Scandinavian design. The Danish embassy uses the ApplyVisa portal for applications from Pakistan. OS Consultants guides you through the complete digital submission and physical document gathering process, ensuring strong ties to Pakistan and a clear travel plan.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Denmark Application via ApplyVisa portal",
      "Two recent biometric Photos (White background)",
      "Schengen Travel Insurance (€30,000 minimum)",
      "Confirmed Flight Reservation (Round trip)",
      "Hotel Reservation or Invitation Letter",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "NTN & Tax Returns (Last 2 years)",
      "NADRA FRC and Marriage Certificate (if applicable)",
      "Detailed Cover Letter with travel itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: ["Copenhagen (Nyhavn)", "Tivoli Gardens", "Little Mermaid Statue", "Skagen"],
    image:
      "/images/img_b58414952a.jpg",
  },
  {
    slug: "greece",
    name: "Greece",
    code: "gr",
    title: "Greece Visa Consultant in Islamabad — OS Consultants",
    description:
      "Secure your Greece Schengen visa from Pakistan with Pakistan's #1 visa consultant. Expert documentation for tourist & business visas. 98% approval rate from Blue Area, Islamabad.",
    keywords:
      "Greece visa consultant Islamabad, Greece visit visa Pakistan, Athens visa from ISB, Greece Schengen visa requirements, apply Greece visa Islamabad 2026, Greek embassy visa Pakistan, Greece visit visa from pakistan, Greece visa requirements, Greece visa fee pakistan",
    intro:
      "From the Acropolis to the stunning Aegean islands, Greece is a dream destination for Pakistani travelers. OS Consultants assists in preparing your Greece Schengen visa file for submission at GVCW centers, ensuring every document — from financial proofs to hotel confirmations — is in perfect order for maximum approval chances.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Greece Schengen Visa Application Form",
      "Two biometric Photographs (White background, 35x45mm)",
      "Schengen Travel Insurance (€30,000 minimum coverage)",
      "Confirmed Flight & Hotel Reservations",
      "Bank Statement (Last 6 months) & Account Maintenance Certificate",
      "Income Proof (Employment letter, salary slips, NTN)",
      "FBR Tax Returns (Last 2 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Detailed Cover Letter & day-by-day itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: ["Athens (Acropolis)", "Santorini (Oia)", "Mykonos", "Meteora Monasteries"],
    image:
      "/images/img_bacef8264c.jpg",
  },
  {
    slug: "norway",
    name: "Norway",
    code: "no",
    title: "Norway Visa Consultant in Islamabad — OS Consultants",
    description:
      "Expert Norway Schengen visa assistance from Islamabad. UDI portal applications, tourist & business visas. Pakistan's #1 visa agency with 98% approval rate.",
    keywords:
      "Norway visa consultant Islamabad, Norway visit visa Pakistan, Oslo visa from ISB, Norway Schengen visa requirements, UDI visa application Pakistan, apply Norway visa Islamabad 2026, Norway visit visa from pakistan, Norway visa requirements, Norway visa fee pakistan",
    intro:
      "Norway's stunning fjords and magical northern lights attract travelers worldwide. The Norwegian embassy uses the UDI portal for applications from Pakistan. OS Consultants guides you through the complete digital submission and physical document gathering process, ensuring your financial means and return ties are clearly demonstrated.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Norway UDI Portal Application & Cover Letter",
      "Two recent biometric Photos (White background)",
      "Schengen Travel Insurance (€30,000 minimum)",
      "Confirmed Flight Itinerary (Round trip)",
      "Hotel Bookings covering entire stay in Norway",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "NTN & Tax Returns (Last 2 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Personal Cover Letter with detailed itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: [
      "Oslo (Viking Ship Museum)",
      "Bergen (Bryggen)",
      "Geirangerfjord",
      "Lofoten Islands",
    ],
    image:
      "/images/norway.jpg",
  },
  {
    slug: "portugal",
    name: "Portugal",
    code: "pt",
    title: "Portugal Visa Consultant in Islamabad — OS Consultants",
    description:
      "Apply for Portugal Schengen visa from Islamabad with Pakistan's top visa agency. Expert documentation for tourist & business visas. 98% approval rate.",
    keywords:
      "Portugal visa consultant Islamabad, Portugal visit visa Pakistan, Lisbon visa from ISB, Portugal Schengen visa requirements, apply Portugal visa Islamabad 2026, Portugal visit visa from pakistan, Portugal visa requirements, Portugal visa fee pakistan",
    intro:
      "Portugal offers a rich history, stunning Algarve coastlines, and vibrant cities like Lisbon and Porto. OS Consultants provides expert help for Portugal Schengen visas, ensuring your documentation meets the exacting standards of the Portuguese consular section in Islamabad.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Portugal Schengen Visa Application Form",
      "Two Photos (ICAO Standard, white background)",
      "Schengen Travel Insurance (€30,000 minimum)",
      "Confirmed Flight & Hotel Reservations",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "Employment Letter / Salary Slips / Business Registration",
      "NTN & Tax Returns (Last 2 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Detailed Travel Plan & Cover Letter",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: [
      "Lisbon (Belem Tower)",
      "Porto (Ribeira)",
      "Algarve Beaches",
      "Sintra (Pena Palace)",
    ],
    image:
      "/images/img_91a130a181.jpg",
  },
  {
    slug: "sweden",
    name: "Sweden",
    code: "se",
    title: "Sweden Visa Consultant in Islamabad — OS Consultants",
    description:
      "Professional Sweden Schengen visa assistance in Islamabad. VFS Global submissions, tourist & business visas. Pakistan's #1 visa agency.",
    keywords:
      "Sweden visa consultant Islamabad, Sweden visit visa Pakistan, Stockholm visa from ISB, Sweden Schengen visa requirements, VFS Sweden Islamabad, apply Sweden visa 2026, Sweden visit visa from pakistan, Sweden visa requirements, Sweden visa fee pakistan",
    intro:
      "Sweden, known for its innovation, stunning nature, and high quality of life. Applications are submitted through VFS Global. OS Consultants ensures your file is complete, with particular focus on financial means, ties to Pakistan, and clear purpose of visit.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Sweden Schengen Visa Application Form",
      "Two biometric Photos (White background, 35x45mm)",
      "Schengen Medical Insurance (€30,000 minimum)",
      "Confirmed Flight Ticket Reservation",
      "Hotel Reservation covering entire stay",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "NTN & Tax Returns (Last 2 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Cover Letter with detailed itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: ["Stockholm (Gamla Stan)", "Gothenburg", "Icehotel (Kiruna)", "Vasa Museum"],
    image:
      "/images/img_e293531f17.jpg",
  },
  {
    slug: "czech-republic",
    name: "Czech Republic",
    code: "cz",
    title: "Czech Republic Visa Consultant in Islamabad — OS Consultants",
    description:
      "Apply for Czech Republic Schengen visa from Islamabad. Expert Prague visa documentation with 98% approval rate. Pakistan's #1 visa agency.",
    keywords:
      "Czech Republic visa consultant Islamabad, Prague visa Pakistan, Czech Schengen visa ISB, Czech embassy Islamabad visa 2026, apply Czech visa Pakistan, Czech Republic visit visa from pakistan, Czech Republic visa requirements, Czech Republic visa fee pakistan",
    intro:
      "The Czech Republic, with its fairytale capital Prague, is a must-visit in Central Europe. The Czech embassy processes numerous applications and presenting a well-organized file is critical. OS Consultants specializes in Czech Republic Schengen visas with meticulous document preparation for maximum approval chances.",
    docs: [
      "Original Passport with 6 months validity",
      "Schengen Visa Application Form",
      "Two recent biometric Photos (White background)",
      "Travel Medical Insurance (Minimum €30,000 coverage)",
      "Bank Statement (Last 6 months, Signed/Stamped)",
      "Account Maintenance Certificate",
      "Employment Letter / 3 Salary Slips / NTN",
      "NADRA Family Registration Certificate (FRC)",
      "Polio Vaccination Certificate (Yellow card)",
      "Confirmed Flight & Hotel Booking",
      "Visa Fee: 90 EUR (Payable in PKR)",
    ],
    popularPlaces: ["Prague (Old Town Square)", "Charles Bridge", "Prague Castle", "Český Krumlov"],
    image:
      "/images/img_724a4ba6fc.jpg",
  },
  {
    slug: "estonia",
    name: "Estonia",
    code: "ee",
    title: "Estonia Visa Consultant in Islamabad — OS Consultants",
    description:
      "Estonia Schengen visa assistance from Islamabad. Digital nomad, tourist & visit visa expertise. Pakistan's top visa agency with 98% approval rate.",
    keywords:
      "Estonia visa consultant Islamabad, Estonia visit visa Pakistan, Tallinn visa from ISB, Estonia Schengen visa 2026, Estonia digital nomad visa Pakistan, Estonia visit visa from pakistan, Estonia visa requirements, Estonia visa fee pakistan",
    intro:
      "Estonia is a digital leader with a beautiful medieval heart. Known for its advanced e-governance and charming Old Town Tallinn, Estonia attracts tech professionals and tourists alike. OS Consultants helps you navigate the Estonian visa process with precision, focusing on the specific requirements of the embassy.",
    docs: [
      "Original Passport with 6 months validity",
      "Schengen Visa Application Form",
      "Two biometric Photos",
      "Travel Medical Insurance (€30,000)",
      "Bank Statement (Last 6 months)",
      "Professional/Income Proof (NTN/Salary)",
      "FRC (NADRA)",
      "Polio Vaccination Certificate",
      "Confirmed Flight & Hotel Reservation",
      "Visa Fee: 90 EUR",
    ],
    popularPlaces: ["Tallinn Old Town", "Lahemaa National Park", "Saaremaa Island", "Pärnu"],
    image:
      "/images/estonia_tallinn.png",
  },
  {
    slug: "finland",
    name: "Finland",
    code: "fi",
    title: "Finland Visa Consultant in Islamabad — OS Consultants",
    description:
      "Expert Finland Schengen visa services in Islamabad for tourism, study & business. Professional documentation with 98% approval rate. Pakistan's #1 visa agency.",
    keywords:
      "Finland visa consultant Islamabad, Finland visit visa Pakistan, Helsinki visa from ISB, Finland Schengen visa 2026, Finland student visa Pakistan, Lapland visa ISB, Finland visit visa from pakistan, Finland visa requirements, Finland visa fee pakistan",
    intro:
      "Finland, consistently rated the world's happiest country, offers stunning lakes, magical Northern Lights, and world-class education. OS Consultants provides meticulous file preparation for the Finnish embassy, ensuring your financial documents, travel insurance, and ties to Pakistan are clearly demonstrated.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Schengen Visa Application Form (completed and signed)",
      "Two recent biometric Photos (White background, 35x45mm)",
      "Travel Medical Insurance (€30,000 minimum, Schengen-wide)",
      "Confirmed Flight & Hotel Reservations",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "Employment/Business Documents (NTN, salary slips)",
      "FBR Tax Returns (Last 2 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Detailed Cover Letter with travel itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: [
      "Helsinki (Senate Square)",
      "Rovaniemi (Santa Claus Village)",
      "Lapland",
      "Suomenlinna",
    ],
    image: "/images/img_2c5129476b.jpg",
  },
  {
    slug: "hungary",
    name: "Hungary",
    code: "hu",
    title: "Hungary Visa Consultant in Islamabad — OS Consultants",
    description:
      "Secure your Hungary Schengen visa from Pakistan with Pakistan's top visa consultant. Expert Budapest visa documentation with 98% approval rate.",
    keywords:
      "Hungary visa consultant Islamabad, Budapest visa Pakistan, Hungary Schengen visa ISB, Hungary visit visa 2026, apply Hungary visa Islamabad, Hungary visit visa from pakistan, Hungary visa requirements, Hungary visa fee pakistan",
    intro:
      "Hungary, known for its thermal baths, the majestic Danube, and the stunning Budapest Parliament building. OS Consultants ensures your application for the Hungarian embassy is flawless, with expert preparation of financial proofs, travel plans, and all supporting documents.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Schengen Visa Application Form",
      "Two recent biometric Photos (White background)",
      "Travel Medical Insurance (€30,000 minimum)",
      "Confirmed Flight & Hotel Reservations",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "Employment/Business Documents (NTN, salary slips)",
      "FBR Tax Returns (Last 2 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Cover Letter with detailed itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: [
      "Budapest (Parliament Building)",
      "Fisherman's Bastion",
      "Lake Balaton",
      "Eger Castle",
    ],
    image:
      "/images/img_ed939a2e0f.jpg",
  },
  {
    slug: "iceland",
    name: "Iceland",
    code: "is",
    title: "Iceland Visa Consultant in Islamabad — OS Consultants",
    description:
      "Expert Iceland Schengen visa assistance from Islamabad. Blue Lagoon, Golden Circle & Northern Lights trips. Pakistan's #1 visa agency.",
    keywords:
      "Iceland visa consultant Islamabad, Iceland visit visa Pakistan, Reykjavik visa from ISB, Iceland Schengen visa 2026, apply Iceland visa Pakistan, Iceland visit visa from pakistan, Iceland visa requirements, Iceland visa fee pakistan",
    intro:
      "Iceland, the land of fire and ice, offers unparalleled natural wonders from the Blue Lagoon to the Golden Circle. OS Consultants guides you through the specific requirements for this unique Schengen destination, ensuring your financial stability and travel plans satisfy the Icelandic consular standards.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Schengen Visa Application Form",
      "Two recent biometric Photos (White background)",
      "Travel Medical Insurance (€30,000 minimum)",
      "Confirmed Flight & Hotel Reservations",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "Employment/Business Documents (NTN, salary slips)",
      "FBR Tax Returns (Last 2 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Cover Letter with travel itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: ["Blue Lagoon", "Golden Circle", "Reykjavík", "Vatnajökull Glacier"],
    image:
      "/images/img_ba0a694179.jpg",
  },
  {
    slug: "latvia",
    name: "Latvia",
    code: "lv",
    title: "Latvia Visa Consultant in Islamabad — OS Consultants",
    description:
      "Apply for Latvia Schengen visa from Islamabad. Expert Riga visa documentation. Pakistan's top visa agency with 98% approval rate.",
    keywords:
      "Latvia visa consultant Islamabad, Riga visa Pakistan, Latvia Schengen visa ISB, Latvia visit visa 2026, apply Latvia visa Pakistan, Latvia visit visa from pakistan, Latvia visa requirements, Latvia visa fee pakistan",
    intro:
      "Latvia offers a fascinating mix of art nouveau architecture, pristine nature, and a vibrant cultural scene in Riga. OS Consultants handles your Latvia Schengen visa application with care, ensuring precise documentation for the Latvian embassy.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Schengen Visa Application Form",
      "Two recent biometric Photos (White background)",
      "Travel Medical Insurance (€30,000 minimum)",
      "Confirmed Flight & Hotel Reservations",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "Employment/Business Documents (NTN, salary slips)",
      "FBR Tax Returns (Last 2 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Cover Letter with travel itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: ["Riga (Old Town)", "Jūrmala Beach", "Gauja National Park", "Rundāle Palace"],
    image:
      "/images/img_d26531bc65.jpg",
  },
  {
    slug: "lithuania",
    name: "Lithuania",
    code: "lt",
    title: "Lithuania Visa Consultant in Islamabad — OS Consultants",
    description:
      "Lithuania Schengen visa services from Islamabad for tourism & business. Expert documentation by Pakistan's #1 visa agency. 98% approval rate.",
    keywords:
      "Lithuania visa consultant Islamabad, Lithuania visit visa Pakistan, Vilnius visa from ISB, Lithuania Schengen visa 2026, apply Lithuania visa Pakistan, Lithuania visit visa from pakistan, Lithuania visa requirements, Lithuania visa fee pakistan",
    intro:
      "Lithuania is rich in history, Baltic charm, and UNESCO World Heritage sites. OS Consultants provides expert documentation support for the Lithuanian embassy, ensuring your visa file meets every requirement.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Schengen Visa Application Form",
      "Two recent biometric Photos (White background)",
      "Travel Medical Insurance (€30,000 minimum)",
      "Confirmed Flight & Hotel Reservations",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "Employment/Business Documents (NTN, salary slips)",
      "FBR Tax Returns (Last 2 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Cover Letter with travel itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: [
      "Vilnius (Old Town)",
      "Trakai Island Castle",
      "Curonian Spit",
      "Hill of Crosses",
    ],
    image: "/images/img_61a5b51eff.jpg",
  },
  {
    slug: "luxembourg",
    name: "Luxembourg",
    code: "lu",
    title: "Luxembourg Visa Consultant in Islamabad — OS Consultants",
    description:
      "Premium Luxembourg Schengen visa assistance from Islamabad. Expert documentation for this EU hub. Pakistan's #1 visa agency.",
    keywords:
      "Luxembourg visa consultant Islamabad, Luxembourg visit visa Pakistan, Luxembourg Schengen visa ISB, Luxembourg visa 2026, apply Luxembourg visa Pakistan, Luxembourg visit visa from pakistan, Luxembourg visa requirements, Luxembourg visa fee pakistan",
    intro:
      "Luxembourg, a tiny but prosperous country and a major financial hub of the European Union. OS Consultants assists in preparing high-quality visa files for Luxembourg, ensuring your financial documentation and travel plans meet the stringent embassy requirements.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Schengen Visa Application Form",
      "Two recent biometric Photos (White background)",
      "Travel Medical Insurance (€30,000 minimum)",
      "Confirmed Flight & Hotel Reservations",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "Employment/Business Documents (NTN, salary slips)",
      "FBR Tax Returns (Last 2 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Cover Letter with travel itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: [
      "Luxembourg City (Old Quarter)",
      "Vianden Castle",
      "The Grund",
      "Mullerthal Trail",
    ],
    image: "/images/img_61a5b51eff.jpg",
  },
  {
    slug: "malta",
    name: "Malta",
    code: "mt",
    title: "Malta Visa Consultant in Islamabad — OS Consultants",
    description:
      "Secure your Malta Schengen visa from Pakistan with Pakistan's top visa consultant. Mediterranean island paradise. 98% approval rate.",
    keywords:
      "Malta visa consultant Islamabad, Malta visit visa Pakistan, Valletta visa from ISB, Malta Schengen visa 2026, apply Malta visa Pakistan, Malta visit visa from pakistan, Malta visa requirements, Malta visa fee pakistan",
    intro:
      "Malta, a sun-drenched Mediterranean archipelago with a rich history spanning millennia. OS Consultants helps you navigate the Maltese visa process smoothly, ensuring your documentation is complete and embassy-ready.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Schengen Visa Application Form",
      "Two recent biometric Photos (White background)",
      "Travel Medical Insurance (€30,000 minimum)",
      "Confirmed Flight & Hotel Reservations",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "Employment/Business Documents (NTN, salary slips)",
      "FBR Tax Returns (Last 2 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Cover Letter with travel itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: ["Valletta", "Gozo Island", "Blue Grotto", "Mdina Old City"],
    image:
      "/images/malta.jpg",
  },
  {
    slug: "poland",
    name: "Poland",
    code: "pl",
    title: "Poland Visa Consultant in Islamabad — OS Consultants",
    description:
      "Expert Poland Schengen visa assistance from Islamabad. Warsaw & Kraków visas with 98% approval rate. Pakistan's #1 visa agency.",
    keywords:
      "Poland visa consultant Islamabad, Poland visit visa Pakistan, Warsaw visa from ISB, Krakow visa Pakistan, Poland Schengen visa 2026, apply Poland visa Islamabad, Poland visit visa from pakistan, Poland visa requirements, Poland visa fee pakistan",
    intro:
      "Poland is a country of resilience, stunning architecture, and rich cultural heritage from Kraków's Main Square to Warsaw's rebuilt Old Town. OS Consultants provides comprehensive support for the Polish embassy in Islamabad, ensuring flawless documentation for your visa application.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Schengen Visa Application Form",
      "Two recent biometric Photos (White background)",
      "Travel Medical Insurance (€30,000 minimum)",
      "Confirmed Flight & Hotel Reservations",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "Employment/Business Documents (NTN, salary slips)",
      "FBR Tax Returns (Last 2 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Cover Letter with travel itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: [
      "Kraków (Main Market Square)",
      "Warsaw (Old Town)",
      "Wieliczka Salt Mine",
      "Tatra Mountains",
    ],
    image:
      "/images/img_47448876ef.jpg",
  },
  {
    slug: "slovakia",
    name: "Slovakia",
    code: "sk",
    title: "Slovakia Visa Consultant in Islamabad — OS Consultants",
    description:
      "Apply for Slovakia Schengen visa from Islamabad. Expert Bratislava visa documentation. Pakistan's top visa agency. 98% approval rate.",
    keywords:
      "Slovakia visa consultant Islamabad, Bratislava visa Pakistan, Slovakia Schengen visa ISB, Slovakia visit visa 2026, apply Slovakia visa Pakistan, Slovakia visit visa from pakistan, Slovakia visa requirements, Slovakia visa fee pakistan",
    intro:
      "Slovakia, home to dramatic castles, the High Tatras mountains, and the charming capital Bratislava. OS Consultants ensures your application for the Slovakian embassy is perfectly assembled with all required documentation.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Schengen Visa Application Form",
      "Two recent biometric Photos (White background)",
      "Travel Medical Insurance (€30,000 minimum)",
      "Confirmed Flight & Hotel Reservations",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "Employment/Business Documents (NTN, salary slips)",
      "FBR Tax Returns (Last 2 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Cover Letter with travel itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: ["Bratislava Castle", "High Tatras", "Spiš Castle", "Bojnice Castle"],
    image: "/images/slovakia.jpg",
  },
  {
    slug: "slovenia",
    name: "Slovenia",
    code: "si",
    title: "Slovenia Visa Consultant in Islamabad — OS Consultants",
    description:
      "Expert Slovenia Schengen visa services from Islamabad. Lake Bled, Ljubljana & Alpine adventures. Pakistan's #1 visa agency.",
    keywords:
      "Slovenia visa consultant Islamabad, Slovenia visit visa Pakistan, Ljubljana visa from ISB, Lake Bled visa Pakistan, Slovenia Schengen visa 2026, Slovenia visit visa from pakistan, Slovenia visa requirements, Slovenia visa fee pakistan",
    intro:
      "Slovenia, where the Alps meet the Mediterranean, offers breathtaking landscapes from Lake Bled to the charming streets of Ljubljana. OS Consultants provides meticulous file preparation for the Slovenian embassy, ensuring every document is perfect.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Schengen Visa Application Form",
      "Two recent biometric Photos (White background)",
      "Travel Medical Insurance (€30,000 minimum)",
      "Confirmed Flight & Hotel Reservations",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "Employment/Business Documents (NTN, salary slips)",
      "FBR Tax Returns (Last 2 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Cover Letter with travel itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: ["Lake Bled", "Ljubljana", "Postojna Cave", "Piran"],
    image:
      "/images/img_444738d49f.jpg",
  },
  {
    slug: "liechtenstein",
    name: "Liechtenstein",
    code: "li",
    title: "Liechtenstein Visa Consultant in Islamabad — OS Consultants",
    description:
      "Expert Liechtenstein Schengen visa assistance from Islamabad. Alpine principality visas with 98% approval rate. Pakistan's #1 visa agency.",
    keywords:
      "Liechtenstein visa consultant Islamabad, Liechtenstein visit visa Pakistan, Vaduz visa from ISB, Liechtenstein Schengen visa 2026, Liechtenstein visit visa from pakistan, Liechtenstein visa requirements, Liechtenstein visa fee pakistan",
    intro:
      "Liechtenstein, a tiny alpine principality nestled between Switzerland and Austria, is one of Europe's most exclusive destinations. OS Consultants guides you through all requirements for this unique Schengen destination with expert document preparation.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Schengen Visa Application Form",
      "Two recent biometric Photos (White background)",
      "Travel Medical Insurance (€30,000 minimum)",
      "Confirmed Flight & Hotel Reservations",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "Employment/Business Documents (NTN, salary slips)",
      "FBR Tax Returns (Last 2 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Cover Letter with travel itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: ["Vaduz Castle", "Malbun", "Gutenberg Castle", "Schloss Vaduz"],
    image:
      "/images/img_043aa12edc.jpg",
  },
  {
    slug: "croatia",
    name: "Croatia",
    code: "hr",
    title: "Croatia Visa Consultant in Islamabad — OS Consultants",
    description:
      "Expert Croatia Schengen visa assistance from Islamabad. Dubrovnik, Split & Plitvice visas. Pakistan's #1 visa agency with 98% approval rate.",
    keywords:
      "Croatia visa consultant Islamabad, Croatia visit visa Pakistan, Dubrovnik visa from ISB, Croatia Schengen visa 2026, apply Croatia visa Pakistan, Split visa ISB, Croatia visit visa from pakistan, Croatia visa requirements, Croatia visa fee pakistan",
    intro:
      "Croatia, the newest member of the Schengen zone, is famous for its stunning Adriatic coastline, historic Dubrovnik, and the breathtaking Plitvice Lakes. OS Consultants handles your Croatia visa application with precision, ensuring every document meets the embassy's exacting standards.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Schengen Visa Application Form",
      "Two recent biometric Photos (White background)",
      "Travel Medical Insurance (€30,000 minimum)",
      "Confirmed Flight & Hotel Reservations",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "Employment/Business Documents (NTN, salary slips)",
      "FBR Tax Returns (Last 2 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Cover Letter with travel itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: [
      "Dubrovnik (Old Town)",
      "Plitvice Lakes National Park",
      "Split (Diocletian's Palace)",
      "Hvar Island",
    ],
    image: "/images/img_a62f168aa1.jpg",
  },
  {
    slug: "bulgaria",
    name: "Bulgaria",
    code: "bg",
    title: "Bulgaria Visa Consultant in Islamabad — OS Consultants",
    description:
      "Expert Bulgaria Schengen visa assistance from Islamabad. Sofia, Plovdiv & Black Sea coast visas. Pakistan's #1 visa agency. 98% approval rate.",
    keywords:
      "Bulgaria visa consultant Islamabad, Bulgaria visit visa Pakistan, Sofia visa from ISB, Bulgaria Schengen visa 2026, apply Bulgaria visa Pakistan, Plovdiv visa ISB, Bulgaria visit visa from pakistan, Bulgaria visa requirements, Bulgaria visa fee pakistan",
    intro:
      "Bulgaria joined the Schengen zone for air and sea travel in 2024, making it an exciting new European destination. From the ancient streets of Plovdiv to the stunning Black Sea coast, OS Consultants assists in preparing your file for this beautiful Balkan destination with expert documentation.",
    docs: [
      "Original Passport (valid 6 months, 2 blank pages)",
      "Schengen Visa Application Form",
      "Two recent biometric Photos (White background)",
      "Travel Medical Insurance (€30,000 minimum, Schengen compliant)",
      "Confirmed Flight & Hotel Reservations",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "Employment/Business Documents (NTN, salary slips)",
      "FBR Tax Returns (Last 2 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Cover Letter with travel itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: [
      "Sofia (Alexander Nevsky Cathedral)",
      "Plovdiv Old Town",
      "Rila Monastery",
      "Sunny Beach",
    ],
    image:
      "https://assets.vogue.com/photos/66cf9fcf8e300baeca058f80/4:3/w_2560%2Cc_limit/1303587513",
  },
  {
    slug: "romania",
    name: "Romania",
    code: "ro",
    title: "Romania Visa Consultant in Islamabad — OS Consultants",
    description:
      "Expert Romania Schengen visa assistance from Islamabad. Bucharest, Transylvania & medieval cities. Pakistan's #1 visa agency. 98% approval rate.",
    keywords:
      "Romania visa consultant Islamabad, Romania visit visa Pakistan, Bucharest visa from ISB, Romania Schengen visa 2026, Transylvania visa Pakistan, apply Romania visa Islamabad, Romania visit visa from pakistan, Romania visa requirements, Romania visa fee pakistan",
    intro:
      "Romania, a land of legends, medieval architecture, and the mythical Transylvania, joined the Schengen zone for air and sea in 2024. OS Consultants handles your documentation end-to-end with expert precision, ensuring your application meets every embassy requirement.",
    docs: [
      "Original Passport with 6 months validity",
      "Visa Application Form",
      "Biometric Photos (White background)",
      "Travel Medical Insurance (Schengen compliant)",
      "Bank Statement (6 months) & Maintenance Certificate",
      "NTN & Tax Returns (Last 2 years)",
      "Job Letter / Salary Slips / Business Docs",
      "FRC (Family Registration Certificate)",
      "Polio Vaccination Certificate",
      "Confirmed Flight & Hotel Reservation",
      "Visa Fee: 90 EUR",
    ],
    popularPlaces: ["Bucharest", "Transylvania (Bran Castle)", "Sighişoara", "Sibiu"],
    image:
      "/images/img_9befe7a914.jpg",
  },
];

export const SOUTH_ASIA_COUNTRIES = [
  {
    slug: "pakistan",
    name: "Pakistan",
    code: "pk",
    title: "Pakistan Visa Consultant in Islamabad — OS Consultants",
    description: "Expert inbound visa consultancy for traveling to Pakistan.",
    keywords: "Pakistan visa, Pakistan inbound visa, Pakistan travel visa, Pakistan visit visa from pakistan, visa consultant islamabad, Pakistan visa requirements, Pakistan visa fee pakistan",
    intro:
      "Explore the breathtaking northern areas and rich cultural heritage of Pakistan. We guide you through the inbound tourist, business, and e-visa process thoroughly.",
    docs: [
      "Valid Passport Color Scan (Bio-data page, minimum 6-month validity)",
      "Recent Digital Photograph (White background, size 35x45mm, matte finish)",
      "Hotel Booking Confirmation or Invitation Letter (Sponsorship from host)",
      "Copy of Pakistani Host CNIC / Passport (If visiting family or friends)",
      "Copy of Parents' CNIC / Passport (For minors and applicants of Pakistani origin)",
      "SECP Registration Certificate or Chamber of Commerce Letter (For Business Visa)",
      "Evidence of legal residence in the country of application (For foreign applicants)",
      "Proof of Return Travel & Day-by-day Itinerary",
    ],
    popularPlaces: ["Islamabad", "Lahore", "Hunza Valley"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/King_Faisal_Mosque.jpg?utm_source=en.wikivoyage.org&utm_campaign=index&utm_content=original",
  },
  {
    slug: "thailand",
    name: "Thailand",
    code: "th",
    title: "Thailand Visa Consultant in Islamabad — OS Consultants",
    description:
      "Apply for Thailand visit visa from Pakistan. Expert documentation for sticker and e-visas.",
    keywords:
      "Thailand visa consultant Islamabad, Thailand visit visa Pakistan, Thai embassy Islamabad, Thailand visit visa from pakistan, Thailand visa requirements, Thailand visa fee pakistan",
    intro:
      "Thailand is a favorite for Pakistani tourists. Whether you need a tourist sticker visa or an e-visa, we handle the entire process, including hotel vouchers and flight bookings.",
    docs: [
      "Original Passport with 6 months validity",
      "Two Photographs (White background, non-glossy, 35x45mm)",
      "Bank Statement (Last 6 months, showing 200,000+ PKR balance)",
      "Account Maintenance Certificate from bank",
      "Job Letter / Salary Slips (Last 3 months)",
      "Business Docs: NTN & 2 years Tax Returns (for business owners)",
      "NADRA Family Registration Certificate (FRC)",
      "Polio Vaccination Certificate (Yellow card)",
      "Confirmed Flight Itinerary & Hotel Booking",
      "Visa Fee: Approx 15,000 - 20,000 PKR (Single Entry)",
    ],
    popularPlaces: ["Bangkok", "Phuket", "Pattaya", "Chiang Mai"],
    image:
      "https://www.travelzoo.com/images/tzoo.13733.0.1102287.UltimateThailandTravelGuide-Bangkok-Thailand-iStock-954686622.jpg?width=412&spr=3",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    code: "my",
    title: "Malaysia Visa Consultant in Islamabad — OS Consultants",
    description: "Get your Malaysia e-visa or sticker visa processed quickly in Islamabad.",
    keywords: "visa, malaysia, visit, pakistan, what, from, pakistan?, tourist, pakistani, stay, malaysia?, 2026, group, companies, islamabad, complete, guide, types, visas, Malaysia visa, Malaysia visit visa from pakistan, visa consultant islamabad, Malaysia visa requirements, Malaysia visa fee pakistan",
    intro:
      "Malaysia offers a mix of modern cities and beautiful rainforests. We specialize in rapid e-visa processing for Pakistani citizens.",
    docs: [
      "Original Passport Scan (All pages)",
      "Digital Photo (White background, 35x50mm)",
      "Bank Statement (Last 6 months, verifiable)",
      "Confirmed Return Flight Ticket",
      "Confirmed Hotel Booking",
      "NADRA FRC (Mandatory for families)",
      "Visa Fee: Approx 12,000 - 15,000 PKR (eVisa)",
    ],
    popularPlaces: ["Kuala Lumpur (Petronas Towers)", "Langkawi", "Genting Highlands", "Penang"],
    image: "/images/img_f8e7bf4b92.png",
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    code: "lk",
    title: "Sri Lanka Visa Consultant in Islamabad — OS Consultants",
    description: "Fast Sri Lanka ETA processing for Pakistani tourists. Minimum documentation.",
    keywords: "Sri Lanka visa Pakistan, Sri Lanka ETA Islamabad, Sri Lanka visit visa from pakistan, visa consultant islamabad, Sri Lanka visa requirements, Sri Lanka visa fee pakistan",
    intro:
      "Sri Lanka is an island paradise. We provide instant ETA (Electronic Travel Authorization) services with just your passport copy.",
    docs: [
      "Passport Copy (First 2 pages)",
      "Digital Photo (White background)",
      "Return Ticket Reservation",
      "Confirmed Hotel Booking",
      "Visa Fee: $50 USD (Electronic ETA)",
    ],
    popularPlaces: ["Colombo", "Kandy", "Bentota", "Sigiriya"],
    image:
      "/images/img_24186b0cbd.jpg",
  },
  {
    slug: "maldives",
    name: "Maldives",
    code: "mv",
    title: "Maldives Visa Consultant in Islamabad — OS Consultants",
    description:
      "Guidance on Maldives visa on arrival and mandatory travel declarations for Pakistanis.",
    keywords: "Maldives visa for Pakistanis, Maldives travel agent Islamabad, Maldives visit visa from pakistan, visa consultant islamabad, Maldives visa requirements, Maldives visa fee pakistan",
    intro:
      "Maldives offers visa-on-arrival for Pakistanis. We assist with 'Imuga' declarations and mandatory hotel bookings to ensure a smooth entry.",
    docs: [
      "Valid Passport",
      "Confirmed Return Ticket",
      "Confirmed Hotel Booking",
      "Travel Declaration (Imuga)",
      "Polio Certificate",
    ],
    popularPlaces: ["Male", "Maafushi", "Luxury Resorts", "Baa Atoll"],
    image:
      "/images/img_b05426dbf4.jpg",
  },
  {
    slug: "nepal",
    name: "Nepal",
    code: "np",
    title: "Nepal Visa Consultant in Islamabad — OS Consultants",
    description:
      "Apply for Nepal visit visa from Pakistan. Expert assistance for trekking and leisure tours.",
    keywords: "Nepal visa Pakistan, Nepal visit visa Islamabad, Nepal visit visa from pakistan, visa consultant islamabad, Nepal visa requirements, Nepal visa fee pakistan",
    intro:
      "Nepal is the gateway to the Himalayas. We help you with the visa application process for a seamless mountain adventure.",
    docs: [
      "Original Passport with 6 months validity",
      "Two Photographs (White background)",
      "CNIC Copy",
      "NADRA Family Registration Certificate (FRC)",
      "Bank Statement (Last 6 months, showing sufficient funds)",
      "Visa Fee: $30 USD (Standard processing)",
    ],
    popularPlaces: ["Kathmandu", "Pokhara", "Everest Base Camp", "Lumbini"],
    image:
      "/images/img_eb045d8957.jpg",
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    code: "id",
    title: "Indonesia Visa Consultant in Islamabad — OS Consultants",
    description:
      "Apply for Indonesia B211A or tourist visa from Pakistan. Expert guidance for Bali travel.",
    keywords: "Indonesia visa consultant Islamabad, Bali visa Pakistan, Indonesia e-visa ISB, Indonesia visit visa from pakistan, Indonesia visa requirements, Indonesia visa fee pakistan",
    intro:
      "From the tropical paradise of Bali to the bustling streets of Jakarta, Indonesia is a top pick. We specialize in B211A business/visit visas and standard tourist entries.",
    docs: [
      "Digital Color Scan of Passport (First page)",
      "Recent Digital Photo (White background)",
      "Bank Statement (Last 6 months, showing $2000+ USD equivalent)",
      "Confirmed Flight Itinerary (Return)",
      "Confirmed Hotel Booking",
      "NADRA Family Registration Certificate (FRC)",
      "Polio Vaccination Card",
      "Visa Fee: Approx $100 - $150 USD (eVisa processing)",
    ],
    popularPlaces: ["Bali (Ubud & Seminyak)", "Jakarta", "Gili Islands", "Mount Bromo"],
    image:
      "/images/img_0f3fbe4290.jpg",
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    code: "vn",
    title: "Vietnam Visa Consultant in Islamabad — OS Consultants",
    description: "Fast and easy Vietnam e-visa processing for Pakistani citizens.",
    keywords: "Vietnam visa Pakistan, Vietnam e-visa consultant Islamabad, Vietnam visit visa from pakistan, Vietnam visa requirements, Vietnam visa fee pakistan",
    intro:
      "Vietnam's stunning Halong Bay and rich history await. We handle the e-visa application process for a hassle-free entry into this vibrant SE Asian nation.",
    docs: [
      "Passport Scan (Color, valid for 6 months)",
      "Digital Photo (White background, no glasses)",
      "Entry/Exit Dates and Port of Entry",
      "Confirmed Hotel Booking",
      "Visa Fee: $25 USD (Government fee) + Processing",
    ],
    popularPlaces: ["Halong Bay", "Hanoi", "Ho Chi Minh City", "Da Nang"],
    image:
      "/images/img_10a421bb5d.jpg",
  },
  {
    slug: "bangladesh",
    name: "Bangladesh",
    code: "bd",
    title: "Bangladesh Visa Consultant in Islamabad — OS Consultants",
    description: "Expert assistance for Bangladesh visit and business visas in Islamabad.",
    keywords: "Bangladesh visa consultant Islamabad, Bangladesh visit visa Pakistan, Bangladesh visit visa from pakistan, Bangladesh visa requirements, Bangladesh visa fee pakistan",
    intro:
      "Whether for business or visiting family, we provide professional assistance for Bangladesh sticker visa applications at the High Commission in Islamabad.",
    docs: [
      "Original Passport",
      "Visa Form",
      "Photos",
      "Job/Business Documents",
      "Invitation Letter (if any)",
      "FRC",
      "Visa Fee: 5,000 - 10,000 PKR (approx)",
    ],
    popularPlaces: ["Dhaka", "Cox's Bazar", "Sylhet", "Sundarbans"],
    image:
      "/images/img_a4de4f8f80.jpg",
  },
  {
    slug: "cambodia",
    name: "Cambodia",
    code: "kh",
    title: "Cambodia Visa Consultant in Islamabad — OS Consultants",
    description: "Quick Cambodia e-visa processing for Pakistani travelers.",
    keywords: "Cambodia visa Pakistan, Cambodia e-visa consultant Islamabad, Cambodia visit visa from pakistan, Cambodia visa requirements, Cambodia visa fee pakistan",
    intro:
      "Explore the ancient temples of Angkor Wat. We make your Cambodia e-visa process simple and fast.",
    docs: [
      "Passport Scan (First 2 pages)",
      "Digital Photo (White background)",
      "Bank Statement (Last 3-6 months)",
      "Confirmed Hotel & Flight Reservation",
      "Visa Fee: $36 USD (Government Fee)",
    ],
    popularPlaces: ["Angkor Wat", "Phnom Penh", "Siem Reap", "Koh Rong"],
    image:
      "/images/img_d7d1cdb91d.jpg",
  },
];

export const CENTRAL_ASIA_COUNTRIES = [
  {
    slug: "turkey",
    name: "Turkey",
    code: "tr",
    title: "Turkey Visa Consultant in Islamabad — OS Consultants",
    description: "Expert assistance for Turkey sticker and e-visas in Islamabad.",
    keywords:
      "Turkey visa consultant Islamabad, Turkey visit visa Pakistan, Anatolia Gerrys Turkey, Turkey visit visa from pakistan, Turkey visa requirements, Turkey visa fee pakistan",
    intro:
      "Turkey is the bridge between East and West. We provide complete file preparation for Turkish sticker visas (via Anatolia/Gerry's) and instant e-visas for those with valid Schengen/US visas.",
    docs: [
      "Original Passport (Valid for 6 months beyond travel)",
      "Two Biometric Photos (5x5cm, white background, non-glossy)",
      "Bank Statement (Last 6 months, showing 500,000+ PKR balance)",
      "Account Maintenance Certificate",
      "Employment Letter / 3 Salary Slips / Job ID Card",
      "Business: NTN, 3 years Tax Returns & Chamber Certificate",
      "NADRA FRC and MRC (if applicable)",
      "Polio Vaccination Certificate (Updated Yellow card)",
      "Visa Fee: Approx 45,000 - 65,000 PKR (via Anatolia/Gerry's)",
    ],
    popularPlaces: ["Istanbul (Hagia Sophia)", "Cappadocia", "Antalya", "Pamukkale"],
    image: "/images/img_77a446cf0f.jpg",
  },
  {
    slug: "azerbaijan",
    name: "Azerbaijan",
    code: "az",
    title: "Azerbaijan Visa Consultant in Islamabad — OS Consultants",
    description: "Instant Azerbaijan ASAN e-visa processing for Pakistani tourists.",
    keywords: "Azerbaijan visa Pakistan, Baku visa consultant Islamabad, Azerbaijan visit visa from pakistan, Azerbaijan visa requirements, Azerbaijan visa fee pakistan",
    intro:
      "Baku, the city of winds, is just a few clicks away. We process your Azerbaijan e-visa within 3 hours to 3 days with minimum documentation.",
    docs: [
      "Passport Copy (Scan)",
      "Digital Photo",
      "Visa Fee: $26 USD (Standard) / $60 USD (Urgent)",
    ],
    popularPlaces: ["Baku (Flame Towers)", "Old City (Icherisheher)", "Gobustan", "Gabala"],
    image: "/images/img_6b95d93dde.jpg",
  },
  {
    slug: "uzbekistan",
    name: "Uzbekistan",
    code: "uz",
    title: "Uzbekistan Visa Consultant in Islamabad — OS Consultants",
    description: "Apply for Uzbekistan e-visa or sticker visa from Pakistan.",
    keywords: "Uzbekistan visa Pakistan, Tashkent visa consultant Islamabad, Uzbekistan visit visa from pakistan, Uzbekistan visa requirements, Uzbekistan visa fee pakistan",
    intro:
      "Explore the Silk Road cities of Samarkand and Bukhara. We provide fast e-visa services for Uzbekistan for all Pakistani passport holders.",
    docs: [
      "Passport Scan (Color)",
      "Digital Photo (White background)",
      "Bank Statement (Optional but recommended for approval)",
      "Confirmed Flight & Hotel Booking",
      "Visa Fee: $20 USD (approx)",
    ],
    popularPlaces: ["Samarkand (Registan)", "Bukhara", "Tashkent", "Khiva"],
    image:
      "/images/img_0095b4d839.webp",
  },
  {
    slug: "kazakhstan",
    name: "Kazakhstan",
    code: "kz",
    title: "Kazakhstan Visa Consultant in Islamabad — OS Consultants",
    description: "Expert assistance for Kazakhstan visit and business visas from Pakistan.",
    keywords: "Kazakhstan visa Pakistan, Almaty visa agent Islamabad, Kazakhstan visit visa from pakistan, visa consultant islamabad, Kazakhstan visa requirements, Kazakhstan visa fee pakistan",
    intro:
      "Kazakhstan offers stunning mountain scenery and modern architecture. We assist with the visa invitation and application process for Almaty and Astana.",
    docs: [
      "Passport Scan",
      "Two Photos (White background)",
      "Bank Statement (Last 6 months)",
      "Employment Proof / Chamber Certificate",
      "Visa Fee: $60 - $80 USD (Electronic / Sticker)",
    ],
    popularPlaces: ["Almaty", "Astana", "Charyn Canyon", "Big Almaty Lake"],
    image:
      "/images/img_bdb58549db.jpg",
  },
  {
    slug: "kyrgyzstan",
    name: "Kyrgyzstan",
    code: "kg",
    title: "Kyrgyzstan Visa Consultant in Islamabad — OS Consultants",
    description: "Apply for Kyrgyzstan e-visa from Pakistan. Fast and reliable processing.",
    keywords: "Kyrgyzstan visa Pakistan, Bishkek visa agent Islamabad, Kyrgyzstan visit visa from pakistan, visa consultant islamabad, Kyrgyzstan visa requirements, Kyrgyzstan visa fee pakistan",
    intro:
      "The Switzerland of Central Asia. We process your Kyrgyzstan e-visa smoothly for your next mountain trekking adventure.",
    docs: [
      "Passport Scan (Color)",
      "Digital Photo (White background)",
      "Confirmed Hotel Booking",
      "Return Flight Itinerary",
      "Visa Fee: $50 USD (approx)",
    ],
    popularPlaces: ["Bishkek", "Issyk-Kul Lake", "Ala Archa National Park", "Osh"],
    image: "/images/img_b274ca9ac6.png",
  },
];

export const NORTH_AFRICA_COUNTRIES = [
  {
    slug: "egypt",
    name: "Egypt",
    code: "eg",
    title: "Egypt Visa Consultant in Islamabad — OS Consultants",
    description:
      "Apply for Egypt tourist or business visa from Pakistan. Expert guidance for Nile tours.",
    keywords: "Egypt visa consultant Islamabad, Egypt visit visa Pakistan, apply Egypt visa ISB, Egypt visit visa from pakistan, Egypt visa requirements, Egypt visa fee pakistan",
    intro:
      "From the Pyramids of Giza to the Red Sea resorts, Egypt is a land of wonders. We assist with both sticker visa applications at the embassy and e-visa processing for eligible travelers.",
    docs: [
      "Original Passport (Valid 6 months)",
      "Egypt Visa Application Form (Duly signed)",
      "Two recent Photographs (White background, 4x6cm)",
      "Bank Statement (Last 6 months, signed and stamped)",
      "Account Maintenance Certificate",
      "Salary Slips (3 months) / Job Letter",
      "Business NTN & FBR Tax Returns (3 years)",
      "NADRA Family Registration Certificate (FRC)",
      "Polio Vaccination Certificate (Mandatory)",
      "Visa Fee: Approx $25 - $60 USD (Standard processing)",
    ],
    popularPlaces: [
      "Cairo (Pyramids)",
      "Luxor (Valley of the Kings)",
      "Sharm El Sheikh",
      "Alexandria",
    ],
    image:
      "/images/img_5f274d0404.jpg",
  },
  {
    slug: "morocco",
    name: "Morocco",
    code: "ma",
    title: "Morocco Visa Consultant in Islamabad — OS Consultants",
    description: "Get your Morocco tourist visa processed with expert assistance in Islamabad.",
    keywords: "Morocco visa consultant Islamabad, Morocco visit visa Pakistan, Morocco visit visa from pakistan, Morocco visa requirements, Morocco visa fee pakistan",
    intro:
      "Morocco offers a vibrant mix of culture, deserts, and ancient cities. We handle the complete documentation for your Moroccan visa application at the embassy.",
    docs: [
      "Original Passport with 6 months validity",
      "Four Photos (White background, 35x45mm)",
      "Bank Statement (Last 6 months, signed and stamped)",
      "National Tax Number (NTN) & 3 years Tax Returns",
      "Employment Letter & Salary Slips OR Chamber Certificate",
      "Confirmed Return Flight & Hotel Voucher",
      "Visa Fee: 10,000 - 15,000 PKR",
    ],
    popularPlaces: ["Marrakesh", "Casablanca", "Fes", "Chefchaouen (Blue City)"],
    image:
      "/images/img_89aa20b71a.jpg",
  },
  {
    slug: "tunisia",
    name: "Tunisia",
    code: "tn",
    title: "Tunisia Visa Consultant in Islamabad — OS Consultants",
    description: "Apply for Tunisia visit visa from Pakistan. Reliable documentation assistance.",
    keywords: "Tunisia visa Pakistan, Tunisia visa consultant Islamabad, Tunisia visit visa from pakistan, Tunisia visa requirements, Tunisia visa fee pakistan",
    intro:
      "Tunisia is known for its Mediterranean beaches and Roman ruins. We help you prepare a solid file for your Tunisian visa submission.",
    docs: [
      "Passport (Original + copies)",
      "Two Photos (White background)",
      "Bank Statement (Last 6 months)",
      "Confirmed Hotel Booking & Flight Reservation",
      "Invitation Letter (Required for some categories)",
      "NTN & Job Certificate",
      "Visa Fee: 10,000 PKR (approx)",
    ],
    popularPlaces: ["Tunis", "Carthage", "Sidi Bou Said", "Djerba Island"],
    image:
      "/images/img_c0b4c74682.jpg",
  },
  {
    slug: "algeria",
    name: "Algeria",
    code: "dz",
    title: "Algeria Visa Consultant in Islamabad — OS Consultants",
    description: "Expert assistance for Algeria visit and business visas from Pakistan.",
    keywords: "Algeria visa Pakistan, Algeria visa consultant Islamabad, Algeria visit visa from pakistan, Algeria visa requirements, Algeria visa fee pakistan",
    intro:
      "Algeria, the largest country in Africa, offers diverse landscapes from the Sahara to the coast. We assist with the invitation and visa filing process.",
    docs: [
      "Original Passport (Valid for 6 months)",
      "Two Photos (White background)",
      "Notarized Invitation Letter from Algeria",
      "Bank Statement (Last 6 months)",
      "Employment Letter / Salary Slips",
      "Visa Fee: $100 USD (approx)",
    ],
    popularPlaces: ["Algiers", "Constantine", "Oran", "Sahara Desert"],
    image: "/images/img_fdff1152ec.jpg",
  },
];

export const SOUTHERN_AFRICA_COUNTRIES = [
  {
    slug: "south-africa",
    name: "South Africa",
    code: "za",
    title: "South Africa Visa Consultant in Islamabad — OS Consultants",
    description: "Expert assistance for South Africa visit and business visas from Pakistan.",
    keywords: "South Africa visa consultant Islamabad, South Africa visit visa Pakistan, South Africa visit visa from pakistan, South Africa visa requirements, South Africa visa fee pakistan",
    intro:
      "Experience the wildlife and city life of South Africa. We provide meticulous file preparation for your sticker visa application at the South African High Commission.",
    docs: [
      "Original Passport with 6 months validity",
      "Two Photos (White background, 35x45mm)",
      "Bank Statement (Last 6 months, signed and stamped)",
      "NTN Certificate & Tax Returns (Last 2 years)",
      "Employment Letter / Job ID OR Chamber Certificate",
      "NADRA Family Registration Certificate (FRC)",
      "Polio Vaccination Certificate (Updated)",
      "Visa Fee: $35 - $50 USD (approx)",
    ],
    popularPlaces: [
      "Cape Town (Table Mountain)",
      "Johannesburg",
      "Kruger National Park",
      "Garden Route",
    ],
    image:
      "/images/img_cd27a01743.jpg",
  },
  {
    slug: "mauritius",
    name: "Mauritius",
    code: "mu",
    title: "Mauritius Visa Consultant in Islamabad — OS Consultants",
    description: "Guidance on Mauritius visa on arrival and documentation for Pakistani tourists.",
    keywords: "Mauritius visa for Pakistanis, Mauritius travel agent Islamabad, Mauritius visit visa from pakistan, visa consultant islamabad, Mauritius visa requirements, Mauritius visa fee pakistan",
    intro:
      "Mauritius is a dream island destination. Pakistanis enjoy visa-on-arrival, and we help you arrange all mandatory travel documents for a seamless entry.",
    docs: [
      "Valid Passport",
      "Confirmed Return Ticket",
      "Confirmed Hotel Booking",
      "Proof of Funds ($100 per day)",
      "Polio Certificate",
    ],
    popularPlaces: [
      "Port Louis",
      "Le Morne Brabant",
      "Grand Baie",
      "Chamarel Seven Coloured Earths",
    ],
    image:
      "/images/img_717e04c070.jpg",
  },
  {
    slug: "kenya",
    name: "Kenya",
    code: "ke",
    title: "Kenya Visa Consultant in Islamabad — OS Consultants",
    description: "Fast Kenya e-visa processing for Pakistani citizens. Ideal for safaris.",
    keywords: "Kenya visa Pakistan, Kenya e-visa consultant Islamabad, Kenya visit visa from pakistan, Kenya visa requirements, Kenya visa fee pakistan",
    intro:
      "Home of the Great Migration. We process your Kenya Electronic Travel Authorization (eTA) quickly so you can focus on your safari planning.",
    docs: [
      "Passport Copy",
      "Digital Photo",
      "Hotel Booking",
      "Flight Itinerary",
      "Visa Fee: $50 USD (approx)",
    ],
    popularPlaces: ["Maasai Mara", "Nairobi", "Mombasa", "Amboseli National Park"],
    image:
      "/images/img_b7daef7da6.jpg",
  },
  {
    slug: "seychelles",
    name: "Seychelles",
    code: "sc",
    title: "Seychelles Visa Consultant in Islamabad — OS Consultants",
    description: "Assistance with Seychelles mandatory travel authorization for Pakistanis.",
    keywords: "Seychelles visa Pakistan, Seychelles travel agent Islamabad, Seychelles visit visa from pakistan, visa consultant islamabad, Seychelles visa requirements, Seychelles visa fee pakistan",
    intro:
      "Seychelles offers visa-free entry, but requires a mandatory Travel Authorization. We assist with the online filing and documentation.",
    docs: [
      "Passport Copy",
      "Digital Photo",
      "Hotel Booking",
      "Flight Ticket",
      "Travel Authorization Fee: ~€10",
    ],
    popularPlaces: ["Mahé", "Praslin", "La Digue", "Anse Source d'Argent"],
    image:
      "/images/img_167d3497c2.webp",
  },
  {
    slug: "zimbabwe",
    name: "Zimbabwe",
    code: "zw",
    title: "Zimbabwe Visa Consultant in Islamabad — OS Consultants",
    description: "Professional assistance for Zimbabwe visit and business visas in Pakistan.",
    keywords: "Zimbabwe visa consultant Islamabad, Zimbabwe visit visa Pakistan, Zimbabwe visit visa from pakistan, Zimbabwe visa requirements, Zimbabwe visa fee pakistan",
    intro:
      "Experience the majestic Victoria Falls and abundant wildlife in Zimbabwe. We provide complete visa application support.",
    docs: [
      "Original Passport",
      "Two Photos (White background)",
      "Bank Statement (Last 6 months)",
      "Hotel Reservation & Return Ticket",
      "Employment/Business Verification",
    ],
    popularPlaces: ["Victoria Falls", "Harare", "Hwange National Park"],
    image:
      "/images/img_cd27a01743.jpg",
  },
  {
    slug: "zambia",
    name: "Zambia",
    code: "zm",
    title: "Zambia Visa Consultant in Islamabad — OS Consultants",
    description: "Expert assistance for Zambia e-visas and entry permits from Pakistan.",
    keywords: "Zambia visa consultant Islamabad, Zambia visit visa Pakistan, Zambia visit visa from pakistan, Zambia visa requirements, Zambia visa fee pakistan",
    intro:
      "Zambia is home to raw and authentic African safaris. We handle your e-visa process for a stress-free travel experience.",
    docs: ["Passport Scan", "Digital Photo", "Bank Statement", "Confirmed Flight & Hotel Voucher"],
    popularPlaces: ["Livingstone", "Lusaka", "South Luangwa"],
    image:
      "/images/img_97d1206d2d.jpg",
  },
  {
    slug: "tanzania",
    name: "Tanzania",
    code: "tz",
    title: "Tanzania Visa Consultant in Islamabad — OS Consultants",
    description: "Apply for Tanzania eVisas from Pakistan with expert guidance.",
    keywords: "Tanzania visa Pakistan, Tanzania eVisa consultant Islamabad, Tanzania visit visa from pakistan, Tanzania visa requirements, Tanzania visa fee pakistan",
    intro:
      "Discover the magic of Zanzibar's white-sand beaches and the plains of the Serengeti. We ensure accurate file preparation for your Tanzania e-visa.",
    docs: ["Passport Copy", "Digital Photo", "Hotel Reservation", "Confirmed Return Ticket"],
    popularPlaces: ["Zanzibar", "Mount Kilimanjaro", "Serengeti National Park"],
    image:
      "/images/img_b7daef7da6.jpg",
  },
];

export const MIDDLE_EAST_COUNTRIES = [
  {
    slug: "united-arab-emirates",
    name: "United Arab Emirates",
    code: "ae",
    title: "United Arab Emirates Visa Consultant in Islamabad — OS Consultants",
    description: "Fast-track UAE and Dubai visit visas from Pakistan. 24-48 hour processing.",
    keywords: "Dubai visa consultant Islamabad, UAE visit visa Pakistan, Dubai visa price, United Arab Emirates visa, United Arab Emirates visit visa from pakistan, United Arab Emirates visa requirements, United Arab Emirates visa fee pakistan",
    intro:
      "The UAE, particularly Dubai, is the most popular destination for Pakistanis. We provide instant e-visa services for 30, 60, and 90 days, handling all sponsorships and documentation for a guaranteed smooth entry.",
    docs: [
      "Digital Color Scan of Passport (First 2 pages)",
      "Digital Photo (White background, high resolution)",
      "CNIC Copy (Scan)",
      "Polio Vaccination Card",
      "Visa Fee: 30 Days (~$85), 60 Days (~$140)",
    ],
    popularPlaces: ["Dubai", "Abu Dhabi", "Sharjah"],
    image:
      "/images/img_6c3994af1f.jpg",
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    code: "sa",
    title: "Saudi Arabia Visa Consultant in Islamabad — OS Consultants",
    description:
      "Apply for Saudi Arabia tourist and Umrah visas from Pakistan. Instant processing.",
    keywords: "Saudi visa consultant Islamabad, Umrah visa Pakistan, Saudi tourist visa ISB, Saudi Arabia visa, Saudi Arabia visit visa from pakistan, Saudi Arabia visa requirements, Saudi Arabia visa fee pakistan",
    intro:
      "Saudi Arabia has opened its doors to the world with the new Tourist Visa. We process both Tourist and Umrah visas instantly, providing complete support for Nusuk registration and hotel bookings.",
    docs: [
      "Digital Scan of Passport (First page)",
      "Recent Digital Photo (White background)",
      "Polio Vaccination Certificate (Yellow card)",
      "Confirmed Hotel & Flight Booking (for tourist visa)",
      "Visa Fee: Approx $130 - $180 (Includes insurance)",
    ],
    popularPlaces: ["Riyadh", "Jeddah", "Makkah", "Medina"],
    image:
      "https://qz.com/cdn-cgi/image/width=1920,quality=85,format=auto/https://assets.qz.com/media/3c14b8fe305cf9b3bb4f64c9103d09d8.jpg",
  },
  {
    slug: "oman",
    name: "Oman",
    code: "om",
    title: "Oman Visa Consultant in Islamabad — OS Consultants",
    description: "Apply for Oman eVisa from Pakistan. Quick processing and expert guidance.",
    keywords: "Oman visa consultant Islamabad, Oman eVisa Pakistan, Oman visit visa from pakistan, Oman visa requirements, Oman visa fee pakistan",
    intro:
      "Explore the natural beauty of Oman. We handle the eVisa process through the Royal Oman Police portal, ensuring your application is approved without delay.",
    docs: [
      "Passport Scan (First 2 pages)",
      "Digital Photo (White background)",
      "Return Flight Itinerary",
      "Confirmed Hotel Booking",
      "Polio Vaccination Card",
      "Visa Fee: $50 - $100 USD (depending on duration)",
    ],
    popularPlaces: ["Muscat", "Salalah", "Nizwa"],
    image:
      "/images/img_2b46afe296.jpg",
  },
  {
    slug: "kuwait",
    name: "Kuwait",
    code: "kw",
    title: "Kuwait Visa Consultant in Islamabad — OS Consultants",
    description: "Professional assistance for Kuwait visit and business visas in Pakistan.",
    keywords: "Kuwait visa Pakistan, Kuwait visit visa Islamabad, Kuwait visit visa from pakistan, visa consultant islamabad, Kuwait visa requirements, Kuwait visa fee pakistan",
    intro:
      "We provide expert guidance for Kuwait visa applications, ensuring all sponsorship and documentation requirements are met according to the latest regulations.",
    docs: [
      "Passport Copy",
      "Digital Photo",
      "Sponsorship Letter (Mandatory)",
      "Bank Statement (Last 6 months)",
      "Job/Business Documentation",
    ],
    popularPlaces: ["Kuwait City", "The Avenues", "Al Hamra Tower"],
    image: "/images/img_a7a3006382.jpg",
  },
  {
    slug: "qatar",
    name: "Qatar",
    code: "qa",
    title: "Qatar Visa Consultant in Islamabad — OS Consultants",
    description: "Fast-track Qatar visit visas and Hayya card assistance from Pakistan.",
    keywords: "Qatar visa consultant Islamabad, Qatar visit visa Pakistan, Hayya card Pakistan, Qatar visit visa from pakistan, Qatar visa requirements, Qatar visa fee pakistan",
    intro:
      "Whether traveling to Doha for business, tourism, or transit, we provide swift processing for Qatar visas, including assistance with the Hayya platform and Discover Qatar hotel bookings.",
    docs: [
      "Valid Passport",
      "Confirmed Return Ticket",
      "Discover Qatar Hotel Booking (if applicable)",
      "Polio Certificate",
    ],
    popularPlaces: ["Doha", "The Pearl", "Katara Cultural Village"],
    image: "/images/img_6b163c97a3.jpg",
  },
  {
    slug: "bahrain",
    name: "Bahrain",
    code: "bh",
    title: "Bahrain Visa Consultant in Islamabad — OS Consultants",
    description: "Seamless Bahrain eVisa processing from Pakistan.",
    keywords: "Bahrain visa Pakistan, Bahrain eVisa consultant Islamabad, Bahrain visit visa from pakistan, Bahrain visa requirements, Bahrain visa fee pakistan",
    intro:
      "Bahrain offers a straightforward eVisa system for eligible Pakistani citizens. We ensure your application is error-free, handling the online portal submission for rapid approvals.",
    docs: ["Passport Copy", "Return Flight Ticket", "Hotel Booking", "Bank Statement"],
    popularPlaces: ["Manama", "Bab Al Bahrain", "Tree of Life"],
    image:
      "/images/img_2448b3a87e.jpg",
  },
  {
    slug: "turkey",
    name: "Turkey",
    code: "tr",
    title: "Turkey Visa Consultant in Islamabad — OS Consultants",
    description: "Expert assistance for Turkey sticker and eVisas from Pakistan.",
    keywords: "Turkey visa consultant Islamabad, Turkey visit visa Pakistan, Turkey visit visa from pakistan, Turkey visa requirements, Turkey visa fee pakistan",
    intro:
      "Experience the incredible blend of cultures, historic landmarks, and stunning coastlines in Turkey. We assist you with complete file preparation for smooth processing.",
    docs: [
      "Original Passport",
      "Two Photos (White background)",
      "Bank Statement (Last 6 months)",
      "NTN Certificate & Tax Returns",
      "Employment Letter OR Business Documents",
      "Confirmed Flight & Hotel Reservation",
    ],
    popularPlaces: ["Istanbul", "Cappadocia", "Antalya"],
    image:
      "https://www.newmarketholidays.co.uk/media/nrhl2qpg/1920-adobestock_231346803-suleymaniye-mosque-istanbul-turkey.jpeg?format=webp&v=1db1654e65fe5f0",
  },
  {
    slug: "jordan",
    name: "Jordan",
    code: "jo",
    title: "Jordan Visa Consultant in Islamabad — OS Consultants",
    description: "Professional assistance for Jordan visit and tourist visas in Pakistan.",
    keywords: "Jordan visa consultant Islamabad, Jordan visit visa Pakistan, Jordan visit visa from pakistan, Jordan visa requirements, Jordan visa fee pakistan",
    intro:
      "Jordan is home to the breathtaking ancient city of Petra and spectacular desert landscapes. We ensure all your visa requirements are perfectly met.",
    docs: [
      "Original Passport",
      "Two Photos (White background)",
      "Bank Statement (Last 6 months)",
      "Hotel Reservation & Return Ticket",
      "Employment/Business Verification",
    ],
    popularPlaces: ["Petra", "Wadi Rum", "Dead Sea"],
    image:
      "/images/img_6eb88f4ea0.jpg",
  },
  {
    slug: "lebanon",
    name: "Lebanon",
    code: "lb",
    title: "Lebanon Visa Consultant in Islamabad — OS Consultants",
    description: "Seamless Lebanon visit visa processing from Pakistan.",
    keywords: "Lebanon visa Pakistan, Lebanon visit visa consultant Islamabad, Lebanon visit visa from pakistan, Lebanon visa requirements, Lebanon visa fee pakistan",
    intro:
      "Visit Lebanon's historic ruins and beautiful coastal cities. We handle all your tourist visa paperwork flawlessly for easy travel.",
    docs: [
      "Original Passport",
      "Two Photos (White background)",
      "Bank Statement (Last 6 months)",
      "Hotel Reservation & Return Ticket",
      "Employment Letter",
    ],
    popularPlaces: ["Beirut", "Byblos", "Jeita Grotto"],
    image: "/images/lebanon_beirut.png",
  },
];

export const EAST_ASIA_COUNTRIES = [
  {
    slug: "china",
    name: "China",
    code: "cn",
    title: "China Visa Consultant in Islamabad — OS Consultants",
    description: "Professional assistance for China visit and business visas in Pakistan.",
    keywords: "China visa consultant Islamabad, China visit visa Pakistan, China visit visa from pakistan, China visa requirements, China visa fee pakistan",
    intro:
      "China is a major hub for business and tourism. We provide comprehensive support for China visa applications, including invitation letters and file preparation.",
    docs: [
      "Original Passport (Current & Previous)",
      "Two Photos (White background, 33x48mm)",
      "Bank Statement (Last 6 months, signed and stamped)",
      "NTN & Tax Returns (Last 2 years)",
      "Official Invitation Letter (PU or TE Letter)",
      "Employment Letter / Salary Slips",
      "NADRA FRC & Polio Certificate",
    ],
    popularPlaces: ["Beijing", "Great Wall", "Shanghai"],
    image:
      "/images/img_ca78fc9521.jpg",
  },
  {
    slug: "japan",
    name: "Japan",
    code: "jp",
    title: "Japan Visa Consultant in Islamabad — OS Consultants",
    description: "Expert assistance for Japan visit visas from Pakistan.",
    keywords: "Japan visa consultant Islamabad, Japan visit visa Pakistan, Japan visit visa from pakistan, Japan visa requirements, Japan visa fee pakistan",
    intro:
      "Experience the unique blend of tradition and modernity in Japan. We handle the visa application process for the Japanese embassy in Islamabad.",
    docs: [
      "Original Passport (Current + Previous)",
      "Two Photos (White background, 45x45mm)",
      "Bank Statement (Last 6 months, verifiable)",
      "Account Maintenance Certificate",
      "NTN Certificate & 2 years Tax Returns",
      "Job Letter / Salary Slips OR Business Documents",
      "NADRA Family Registration Certificate (FRC)",
      "Detailed Travel Itinerary",
    ],
    popularPlaces: ["Tokyo", "Mount Fuji", "Kyoto"],
    image:
      "/images/img_9190f20f71.jpg",
  },
  {
    slug: "south-korea",
    name: "South Korea",
    code: "kr",
    title: "South Korea Visa Consultant in Islamabad — OS Consultants",
    description: "Expert assistance for South Korea visit visas from Pakistan.",
    keywords: "South Korea visa consultant Islamabad, South Korea visit visa Pakistan, South Korea visit visa from pakistan, South Korea visa requirements, South Korea visa fee pakistan",
    intro:
      "South Korea is a fascinating blend of ancient traditions and futuristic technology. We assist with the complete documentation and filing for your South Korean visa application.",
    docs: [
      "Original Passport",
      "Two Photos (White background)",
      "Bank Statement (Last 6 months)",
      "NTN Certificate & Tax Returns",
      "Employment Letter / Salary Slips OR Business Docs",
      "NADRA Family Registration Certificate (FRC)",
      "Confirmed Flight & Hotel Reservation",
    ],
    popularPlaces: ["Seoul", "Jeju Island", "Busan"],
    image:
      "/images/img_2996419cfa.jpg",
  },
  {
    slug: "taiwan",
    name: "Taiwan",
    code: "tw",
    title: "Taiwan Visa Consultant in Islamabad — OS Consultants",
    description: "Professional assistance for Taiwan visit and business visas in Pakistan.",
    keywords: "Taiwan visa consultant Islamabad, Taiwan visit visa Pakistan, Taiwan visit visa from pakistan, Taiwan visa requirements, Taiwan visa fee pakistan",
    intro:
      "Taiwan offers stunning landscapes and a bustling tech economy. We guide you through the complete visa application process, ensuring your documentation meets the embassy's rigorous standards.",
    docs: [
      "Original Passport",
      "Two Photos (White background)",
      "Bank Statement (Last 6 months)",
      "NTN Certificate & Tax Returns",
      "Employment Letter OR Business Docs",
      "NADRA Family Registration Certificate (FRC)",
      "Confirmed Flight & Hotel Reservation",
    ],
    popularPlaces: ["Taipei 101", "Taroko Gorge", "Kaohsiung"],
    image:
      "https://lp-cms-production.imgix.net/2023-03/shutterstockRF_606645959.jpg?auto=format,compress&q=72&w=1920&fit=crop&crop=faces,edges",
  },
  {
    slug: "hong-kong",
    name: "Hong Kong",
    code: "hk",
    title: "Hong Kong Visa Consultant in Islamabad — OS Consultants",
    description: "Apply for Hong Kong visit visas from Pakistan with expert assistance.",
    keywords: "Hong Kong visa Pakistan, Hong Kong visit visa consultant, Hong Kong visit visa from pakistan, visa consultant islamabad, Hong Kong visa requirements, Hong Kong visa fee pakistan",
    intro:
      "Hong Kong is a premier global financial hub and tourist hotspot. We assist Pakistani citizens with online visa applications and thorough documentation review for smooth entry.",
    docs: [
      "Passport Copy (All used pages)",
      "Digital Photo",
      "Bank Statement (Last 6 months, verified)",
      "Flight & Hotel Booking",
      "Employment/Business Docs",
      "Detailed Travel Itinerary",
    ],
    popularPlaces: ["Victoria Peak", "Disneyland", "Tsim Sha Tsui"],
    image:
      "https://images.goway.com/production/featured_images/Hong%20Kong%20Skyline%20Kowloon%20from%20Fei%20Ngo%20Shan%20Hill%20sunset_shutterstock_213021286.jpg?VersionId=h9UH95UG_HR9HmVfKg3ZPgERx9AB2MTe",
  },
  {
    slug: "mongolia",
    name: "Mongolia",
    code: "mn",
    title: "Mongolia Visa Consultant in Islamabad — OS Consultants",
    description: "Expert assistance for Mongolia visit visas from Pakistan.",
    keywords: "Mongolia visa consultant Islamabad, Mongolia visit visa Pakistan, Mongolia visit visa from pakistan, Mongolia visa requirements, Mongolia visa fee pakistan",
    intro:
      "Explore the vast steppes and unique nomadic culture of Mongolia. We handle your visa application process smoothly and efficiently, organizing all necessary invitations and paperwork.",
    docs: [
      "Original Passport",
      "Two Photos (White background)",
      "Bank Statement (Last 6 months)",
      "Invitation Letter (if applicable)",
      "Travel Itinerary & Hotel Booking",
      "Employment Verification",
    ],
    popularPlaces: ["Ulaanbaatar", "Gobi Desert", "Terelj National Park"],
    image:
      "/images/img_d37b53d263.webp",
  },
  {
    slug: "macau",
    name: "Macau",
    code: "mo",
    title: "Macau Visa Consultant in Islamabad — OS Consultants",
    description: "Expert assistance for Macau visit visas from Pakistan.",
    keywords: "Macau visa consultant Islamabad, Macau visit visa Pakistan, Macau visit visa from pakistan, Macau visa requirements, Macau visa fee pakistan",
    intro:
      "Experience the vibrant mix of Portuguese and Chinese cultures in Macau. We assist you through the complete visa application process for easy entry.",
    docs: [
      "Original Passport",
      "Two Photos (White background)",
      "Bank Statement (Last 6 months)",
      "Hotel Reservation & Return Ticket",
      "Employment/Business Documents",
    ],
    popularPlaces: ["Senado Square", "Ruins of St. Paul's", "Cotai Strip"],
    image:
      "https://images.theconversation.com/files/251285/original/file-20181218-27770-7c5266.jpg?ixlib=rb-4.1.0&q=50&auto=format&w=768&h=512&fit=crop&dpr=2",
  },
];

export const AMERICAS_COUNTRIES = [
  {
    slug: "mexico",
    name: "Mexico",
    code: "mx",
    title: "Mexico Visa Consultant in Islamabad — OS Consultants",
    description: "Apply for Mexico visit and business visas from Pakistan.",
    keywords: "Mexico visa consultant Islamabad, Mexico visit visa Pakistan, Mexico visit visa from pakistan, Mexico visa requirements, Mexico visa fee pakistan",
    intro:
      "Mexico offers a rich cultural experience. We assist in preparing your visa application for the Mexican embassy, ensuring all documentation is perfectly in order.",
    docs: [
      "Passport with at least 6 months validity",
      "Two Photos (White background, 35x45mm)",
      "Bank Statement (Last 6 months, showing consistent balance)",
      "NTN Certificate & Tax Returns (Last 3 years)",
      "Employment Letter / Salary Slips OR Business Docs",
      "NADRA Family Registration Certificate (FRC)",
    ],
    image:
      "https://images.unsplash.com/photo-1518105779142-d975fb23a3db?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "brazil",
    name: "Brazil",
    code: "br",
    title: "Brazil Visa Consultant in Islamabad — OS Consultants",
    description: "Expert assistance for Brazil visit visas from Pakistan.",
    keywords: "Brazil visa consultant Islamabad, Brazil visit visa Pakistan, Brazil visit visa from pakistan, Brazil visa requirements, Brazil visa fee pakistan",
    intro:
      "Explore the vibrant culture of Brazil. We handle the visa application process, ensuring your documentation meets the standards of the Brazilian embassy in Islamabad.",
    docs: [
      "Original Passport",
      "Two Photos (White background)",
      "Bank Statement (Last 6 months)",
      "NTN Certificate & Tax Returns",
      "Police Clearance Certificate (Mandatory)",
      "NADRA Family Registration Certificate (FRC)",
      "Confirmed Flight & Hotel Reservation",
    ],
    image:
      "/images/img_89f28f9017.jpg",
  },
];

export const EUROPE_OTHERS_COUNTRIES = [
  {
    slug: "ireland",
    name: "Ireland",
    code: "ie",
    title: "Ireland Visa Consultant in Islamabad — OS Consultants",
    description: "Professional assistance for Ireland visit and study visas in Pakistan.",
    keywords: "Ireland visa consultant Islamabad, Ireland visit visa Pakistan, Ireland visit visa from pakistan, Ireland visa requirements, Ireland visa fee pakistan",
    intro:
      "Explore the Emerald Isle. We provide expert guidance for Ireland visa applications, ensuring all documentation meets the Irish Naturalisation and Immigration Service standards.",
    docs: [
      "Passport (Current & Old)",
      "Two Photos (White background, 35x45mm)",
      "Bank Statement (Last 6 months, showing stable income)",
      "NTN & Tax Returns (Last 3 years)",
      "Job Letter / 3 Salary Slips OR Business Docs",
      "NADRA Family Registration Certificate (FRC)",
      "Polio Vaccination Certificate",
    ],
    image:
      "/images/img_b393bd8d52.jpg",
  },
];

export const SOUTH_AMERICA_COUNTRIES = [
  {
    slug: "brazil",
    name: "Brazil",
    code: "br",
    title: "Brazil Visa Consultant in Islamabad — OS Consultants",
    description: "Expert assistance for Brazil visit visas from Pakistan.",
    keywords: "Brazil visa consultant Islamabad, Brazil visit visa Pakistan, Brazil visit visa from pakistan, Brazil visa requirements, Brazil visa fee pakistan",
    intro:
      "Explore the vibrant culture of Brazil. We handle the visa application process, ensuring your documentation meets the standards of the Brazilian embassy in Islamabad.",
    docs: [
      "Original Passport",
      "Two Photos (White background)",
      "Bank Statement (Last 6 months)",
      "NTN Certificate & Tax Returns",
      "Police Clearance Certificate (Mandatory)",
      "NADRA Family Registration Certificate (FRC)",
      "Confirmed Flight & Hotel Reservation",
    ],
    popularPlaces: ["Rio de Janeiro", "São Paulo", "Iguazu Falls"],
    image:
      "/images/img_79124dec4f.jpg",
  },
  {
    slug: "argentina",
    name: "Argentina",
    code: "ar",
    title: "Argentina Visa Consultant in Islamabad — OS Consultants",
    description: "Professional assistance for Argentina visit and business visas in Pakistan.",
    keywords: "Argentina visa consultant Islamabad, Argentina visit visa Pakistan, Argentina visit visa from pakistan, Argentina visa requirements, Argentina visa fee pakistan",
    intro:
      "Discover the wonders of Argentina, from tango in Buenos Aires to the glaciers of Patagonia. We help you prepare your visa application thoroughly.",
    docs: [
      "Original Passport",
      "Two Photos (White background)",
      "Bank Statement (Last 6 months)",
      "Employment/Business Documents",
      "Hotel Reservation & Flight Booking",
    ],
    popularPlaces: ["Buenos Aires", "Patagonia", "Iguazu Falls"],
    image:
      "/images/img_ea7f486387.jpg",
  },
  {
    slug: "colombia",
    name: "Colombia",
    code: "co",
    title: "Colombia Visa Consultant in Islamabad — OS Consultants",
    description: "Seamless Colombia visit visa processing from Pakistan.",
    keywords: "Colombia visa Pakistan, Colombia visit visa consultant Islamabad, Colombia visit visa from pakistan, Colombia visa requirements, Colombia visa fee pakistan",
    intro:
      "Experience Colombia's rich history, coffee regions, and beautiful landscapes. We ensure all your visa documents are in order.",
    docs: [
      "Passport Copy",
      "Digital Photo",
      "Bank Statement (Last 6 months)",
      "Employment Letter",
      "Flight & Hotel Booking",
    ],
    popularPlaces: ["Bogotá", "Medellín", "Cartagena"],
    image:
      "/images/img_4f9678fc4d.jpg",
  },
  {
    slug: "peru",
    name: "Peru",
    code: "pe",
    title: "Peru Visa Consultant in Islamabad — OS Consultants",
    description: "Expert assistance for Peru visit visas from Pakistan.",
    keywords: "Peru visa consultant Islamabad, Peru visit visa Pakistan, Peru visit visa from pakistan, Peru visa requirements, Peru visa fee pakistan",
    intro:
      "Discover the historic Machu Picchu, ancient ruins, and rich culinary heritage of Peru. We handle your documentation smoothly.",
    docs: [
      "Original Passport",
      "Two Photos (White background)",
      "Bank Statement (Last 6 months)",
      "Employment/Business Documents",
      "Hotel Reservation & Flight Booking",
    ],
    popularPlaces: ["Machu Picchu", "Lima", "Cusco"],
    image:
      "https://www.peru.travel/Contenido/AcercaDePeru/Imagen/en/6/0.0/Principal/Machu%20Picchu.jpg",
  },
  {
    slug: "chile",
    name: "Chile",
    code: "cl",
    title: "Chile Visa Consultant in Islamabad — OS Consultants",
    description: "Expert assistance for Chile tourist and business visas from Pakistan.",
    keywords: "Chile visa Pakistan, Chile visit visa consultant Islamabad, Chile visit visa from pakistan, Chile visa requirements, Chile visa fee pakistan",
    intro:
      "Experience Chile's varied geography, from coastal cities to desert landscapes and snow-capped peaks. We guide you thoroughly.",
    docs: [
      "Original Passport",
      "Two Photos (White background)",
      "Bank Statement (Last 6 months)",
      "NTN Certificate & Tax Returns",
      "Employment Letter OR Business Verification",
    ],
    popularPlaces: ["Santiago", "San Pedro de Atacama", "Torres del Paine"],
    image:
      "https://internationalliving.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fwv75stsetqy3%2F4Dbcf17ULwlk8ce5Thh035%2F468c91e6519bfc486408f0258d817bc9%2FChile.jpg%3Fq%3D60%26fit%3Dfill%26fm%3Dwebp&w=3840&q=60",
  },
  {
    slug: "ecuador",
    name: "Ecuador",
    code: "ec",
    title: "Ecuador Visa Consultant in Islamabad — OS Consultants",
    description: "Reliable guidance for securing an Ecuador visit visa from Pakistan.",
    keywords: "Ecuador visa Pakistan, Ecuador visit visa consultant Islamabad, Ecuador visit visa from pakistan, Ecuador visa requirements, Ecuador visa fee pakistan",
    intro:
      "Ecuador offers breathtaking colonial history and the world-renowned Galapagos Islands. We ensure your application is perfect.",
    docs: [
      "Original Passport",
      "Two Photos (White background)",
      "Bank Statement (Last 6 months)",
      "Hotel & Flight Reservations",
    ],
    popularPlaces: ["Quito", "Galapagos Islands", "Cuenca"],
    image: "/images/img_3e8d9f9d37.jpg",
  },
  {
    slug: "bolivia",
    name: "Bolivia",
    code: "bo",
    title: "Bolivia Visa Consultant in Islamabad — OS Consultants",
    description: "Seamless Bolivia visit visa processing from Pakistan.",
    keywords: "Bolivia visa consultant Islamabad, Bolivia visit visa Pakistan, Bolivia visit visa from pakistan, Bolivia visa requirements, Bolivia visa fee pakistan",
    intro:
      "Bolivia is home to the spectacular Salar de Uyuni and high Andean landscapes. We assist in preparing your complete file.",
    docs: [
      "Original Passport",
      "Two Photos (White background)",
      "Bank Statement (Last 6 months)",
      "Hotel & Flight Reservation",
    ],
    popularPlaces: ["Salar de Uyuni", "La Paz", "Sucre"],
    image:
      "/images/img_29a8ca7d64.jpg",
  },
  {
    slug: "uruguay",
    name: "Uruguay",
    code: "uy",
    title: "Uruguay Visa Consultant in Islamabad — OS Consultants",
    description: "Professional assistance for Uruguay visit visas from Pakistan.",
    keywords: "Uruguay visa Pakistan, Uruguay visit visa consultant Islamabad, Uruguay visit visa from pakistan, Uruguay visa requirements, Uruguay visa fee pakistan",
    intro:
      "Uruguay boasts a beautiful coastal plain and distinct cultural highlights. We help assemble your documentation impeccably.",
    docs: [
      "Original Passport",
      "Two Photos (White background)",
      "Bank Statement (Last 6 months)",
      "Employment Verification",
    ],
    popularPlaces: ["Montevideo", "Punta del Este", "Colonia"],
    image:
      "https://images.squarespace-cdn.com/content/v1/52efc94ae4b01409c74273d6/1585834171615-UL7OJYX14WAZC26CASHB/montevideo_grande.jpg?format=1500w",
  },
  {
    slug: "venezuela",
    name: "Venezuela",
    code: "ve",
    title: "Venezuela Visa Consultant in Islamabad — OS Consultants",
    description: "Seamless Venezuela visit visa processing from Pakistan.",
    keywords: "Venezuela visa Pakistan, Venezuela visa consultant Islamabad, Venezuela visit visa from pakistan, Venezuela visa requirements, Venezuela visa fee pakistan",
    intro:
      "Experience the gorgeous Caribbean coast and the highest waterfall, Angel Falls. We help you prepare your visa paperwork.",
    docs: ["Passport Copy", "Two Photos (White background)", "Bank Statement", "Hotel Voucher"],
    popularPlaces: ["Caracas", "Angel Falls", "Los Roques"],
    image:
      "/images/img_d41ff19670.jpg",
  },
  {
    slug: "paraguay",
    name: "Paraguay",
    code: "py",
    title: "Paraguay Visa Consultant in Islamabad — OS Consultants",
    description: "Expert assistance for Paraguay tourist visas from Pakistan.",
    keywords: "Paraguay visa consultant Islamabad, Paraguay visit visa Pakistan, Paraguay visit visa from pakistan, Paraguay visa requirements, Paraguay visa fee pakistan",
    intro:
      "Explore Paraguay's unique nature, historic ruins, and culture. We guide you on the complete visa application process.",
    docs: [
      "Passport Copy",
      "Two Photos",
      "Bank Statement (6 months)",
      "Job Letter / Business verification",
    ],
    popularPlaces: ["Asunción", "Encarnación", "Ciudad del Este"],
    image:
      "https://pre-webunwto.s3.eu-west-1.amazonaws.com/styles/webp/s3/2025-12/paraguay-investment.jpg.webp?VersionId=.rr3BXqM86y8dp2YRZkcHkGvTSOcrfO.&itok=ZLskNYgN",
  },
];

export const OCEANIA_COUNTRIES = [
  {
    slug: "australia",
    name: "Australia",
    code: "au",
    title: "Australia Visa Consultant in Islamabad — OS Consultants",
    description:
      "Expert assistance for Australian tourist, student, and skilled visas from Pakistan.",
    keywords: "Australia visa consultant Islamabad, Australia visit visa Pakistan, Australia visit visa from pakistan, Australia visa requirements, Australia visa fee pakistan",
    intro:
      "Australia offers magnificent beaches, unique wildlife, and vibrant multicultural cities. We guide you thoroughly through the online application for subclass 600 visitor visas.",
    docs: [
      "Original Passport (Valid for at least 6 months)",
      "Two Photos (White background, 35x45mm, matte finish)",
      "6-Month Account Maintenance Certificate & Verifiable Bank Statement",
      "FBR NTN Certificate and Last 3 Years Tax Returns",
      "Official Employment Letter or Business Registration/NTN",
      "NADRA Family Registration Certificate (FRC)",
      "Polio Vaccination Certificate",
      "Detailed Cover Letter & Day-by-day Itinerary",
    ],
    popularPlaces: ["Sydney", "Melbourne", "Great Barrier Reef"],
    image:
      "/images/img_b85c11d707.jpg",
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    code: "nz",
    title: "New Zealand Visa Consultant in Islamabad — OS Consultants",
    description: "Professional assistance for New Zealand visitor visas from Pakistan.",
    keywords: "New Zealand visa Pakistan, New Zealand visit visa consultant, New Zealand visit visa from pakistan, visa consultant islamabad, New Zealand visa requirements, New Zealand visa fee pakistan",
    intro:
      "Explore the breathtaking fjords, mountains, and Maori culture of New Zealand. We help you submit a solid visitor visa application.",
    docs: [
      "Current Valid Passport and All Previous Passports",
      "Two Recent Passport-size Photos (White background)",
      "Detailed Bank Statement (Last 6 months, Signed/Stamped)",
      "FBR NTN and 3 Years FBR Tax Assessment Records",
      "Employment Letter / Job ID OR Chamber of Commerce Certificate",
      "NADRA Family Registration Certificate (FRC)",
      "Confirmed Hotel Bookings & Detailed Round-trip Itinerary",
    ],
    popularPlaces: ["Auckland", "Queenstown", "Milford Sound"],
    image:
      "https://afar.brightspotcdn.com/dims4/default/b2f5cec/2147483647/strip/true/crop/3000x1592+0+342/resize/1440x764!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F07%2F6a%2F49c8995449aab970530b5dc69fb4%2Ftravelguides-auckland-miloszmaslanka-shutterstock.jpg",
  },
  {
    slug: "fiji",
    name: "Fiji",
    code: "fj",
    title: "Fiji Visa Consultant in Islamabad — OS Consultants",
    description: "Expert assistance for Fiji tourist visas from Pakistan.",
    keywords: "Fiji visa Pakistan, Fiji visit visa consultant, Fiji visit visa from pakistan, visa consultant islamabad, Fiji visa requirements, Fiji visa fee pakistan",
    intro:
      "Enjoy the tropical blue waters, coral reefs, and island vibes of Fiji. We process your visa application seamlessly.",
    docs: [
      "Valid Passport Scan (All relevant pages)",
      "Digital Photograph (White background)",
      "Bank Statement (Last 6 months with source of funds verification)",
      "Confirmed Return Air Ticket & Onward Travel proof",
      "Verifiable Hotel Reservations or Invitation Letter",
    ],
    popularPlaces: ["Nadi", "Suva", "Mamanuca Islands"],
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/8e/70/88/aerial-view-of-fiji-marriott.jpg?w=1200&h=-1&s=1",
  },
];
