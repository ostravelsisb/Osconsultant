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
  phone: "+92 51 2021700",
  mobile: "+92 333 5542877",
  whatsapp: "+92 336 5500477",
  email: "info@osconsultants.pk",
  address: "Office # 3, Aaly Plaza, Fazal-e-Haq Road, Block E G 6/2 Blue Area, Islamabad, 44000",
  hours: "Mon – Sat · 10:00 AM – 7:00 PM",
  websites: ["ostravel.pk", "ostravels.com"],
  socials: {
    facebook: "https://www.facebook.com/osconsultants01/",
    instagram: "https://www.instagram.com/osconsultants/",
    linkedin: "https://www.linkedin.com/company/os-consultants/",
    twitter: "https://twitter.com/osconsultants",
  },
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
  {
    slug: "schengen",
    name: "Schengen Area",
    short: "26 European countries on a single visa.",
    image: schengenImg,
    accent: "Europe",
  },
  {
    slug: "usa",
    name: "United States",
    short: "B1/B2, F1, work and family visas.",
    image: usaImg,
    accent: "Americas",
  },
  {
    slug: "uk",
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
    slug: "australia",
    name: "Australia",
    short: "Tourist, student and skilled visas.",
    image: auImg,
    accent: "Oceania",
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    short: "NZeTA, visitor and student visas.",
    image: nzImg,
    accent: "Oceania",
  },
  {
    slug: "qatar",
    name: "Qatar",
    short: "Tourist, business and family visit.",
    image: qatarImg,
    accent: "Middle East",
  },
  {
    slug: "bahrain",
    name: "Bahrain",
    short: "eVisa, visit and business visas.",
    image: bahrainImg,
    accent: "Middle East",
  },
  {
    slug: "middle-east",
    name: "Middle East",
    short: "UAE, KSA, Oman, Kuwait & more.",
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
];

export const VISA_SERVICES = [
  {
    title: "Tourist Visa",
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
  { title: "Schengen Visa", desc: "Single visa to explore 26 European countries seamlessly." },
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
    title: "Germany Visa Consultant in Islamabad",
    description:
      "Expert assistance for Germany Schengen visa applications from Pakistan. Tourist, business, and family visit visas handled with precision.",
    keywords:
      "Germany visa consultant Islamabad, apply for Germany visa Pakistan, Germany visit visa requirements, Schengen visa Germany ISB",
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
      "https://cdn.sanity.io/images/nxpteyfv/goguides/2bf36f0d5bb919b4772603e6d8852f3fdc4bdd96-1600x1066.jpg",
  },
  {
    slug: "france",
    name: "France",
    title: "France Visit Visa Consultant in Islamabad",
    description:
      "Fast and reliable France Schengen visa processing in Islamabad. Expert documentation and appointment scheduling.",
    keywords:
      "France visa consultant Islamabad, France visit visa Pakistan, apply for France visa ISB, French embassy visa requirements, Schengen visa France",
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
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "italy",
    name: "Italy",
    title: "Italy Visa Expert in Islamabad",
    description:
      "Comprehensive visa assistance for Italy from Pakistan. Get your Italy tourist or business visa approved smoothly.",
    keywords:
      "Italy visa consultant Islamabad, Italy visit visa requirements Pakistan, apply Italy Schengen visa ISB, Italian embassy Islamabad visa",
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
      "https://plus.unsplash.com/premium_photo-1661962723801-1015e61ec340?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9tZSUyMGl0YWx5fGVufDB8fDB8fHww",
  },
  {
    slug: "spain",
    name: "Spain",
    title: "Spain Visa Consultant in Islamabad",
    description:
      "Apply for a Spain Schengen visa from Islamabad. We provide expert documentation and application tracking.",
    keywords:
      "Spain visa consultant Islamabad, Spain visit visa Pakistan, BLS Spain Islamabad, apply Spain visa ISB, Spanish embassy visa requirements",
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
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    title: "Netherlands Visa Consultant in Islamabad",
    description:
      "Expert guidance for Netherlands Schengen visa applications. Get your Dutch visit visa approved.",
    keywords:
      "Netherlands visa consultant Islamabad, Dutch visa Pakistan, apply Netherlands visa ISB, VFS Netherlands Islamabad, Netherlands visit visa requirements",
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
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    title: "Switzerland Visa Consultant in Islamabad",
    description:
      "Premium visa consultancy for Switzerland in Islamabad. Flawless documentation for your Swiss adventure.",
    keywords:
      "Switzerland visa consultant Islamabad, Swiss visa Pakistan, apply Switzerland visa ISB, Switzerland visit visa requirements, Schengen visa Switzerland",
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
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "austria",
    name: "Austria",
    title: "Austria Visa Consultant in Islamabad",
    description: "Expert assistance for Austria Schengen visa applications from Pakistan.",
    keywords: "Austria visa consultant Islamabad, Austria visit visa requirements Pakistan",
    intro:
      "Austria, the heart of Europe, is famous for its alpine scenery and rich musical heritage. Applying for an Austrian visa from Islamabad requires precise documentation, especially regarding travel insurance and financial stability. We help you navigate the process with ease.",
    docs: [
      "Original Passport",
      "Visa Application Form",
      "Two biometric photos",
      "Schengen Travel Insurance",
      "Flight Itinerary",
      "Hotel Reservations in Austria",
      "Bank Statements (6 months)",
      "Salary Slips / Business Proof",
      "Tax Returns",
      "FRC (NADRA)",
      "Cover Letter",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: ["Vienna (Schönbrunn Palace)", "Salzburg (Old Town)", "Hallstatt", "Innsbruck"],
    image:
      "https://www.costsavertour.com/media/rxpb4ii3/durnstein-town-in-wachau-valley-in-autumn-austria-1355636197.jpg?rxy=0.489974937343358%2C0.468671679197995&mode=crop&width=1920&format=webp&quality=80&height=823",
  },
  {
    slug: "belgium",
    name: "Belgium",
    title: "Belgium Visa Consultant in Islamabad",
    description: "Apply for a Belgium Schengen visa from Islamabad with expert help.",
    keywords: "Belgium visa consultant Islamabad, Belgium visit visa Pakistan",
    intro:
      "Belgium is known for its medieval towns and Renaissance architecture. Applications for Belgium from Pakistan are handled with strict attention to the purpose of stay. We ensure your documentation is robust and embassy-aligned.",
    docs: [
      "Valid Passport",
      "Belgium Visa Application Form",
      "Biometric Photos",
      "Travel Medical Insurance",
      "Flight & Hotel Bookings",
      "Bank Statements",
      "Employment/Business Documents",
      "FBR Tax Returns",
      "FRC",
      "Detailed Itinerary",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: ["Brussels (Grand Place)", "Bruges (Canals)", "Ghent (Gravensteen)", "Antwerp"],
    image:
      "https://images.goway.com/production/hero_image/Grand%20Place%20Brussels%20Belgium_iStock_1922966419-compressed.jpg?VersionId=rWP7fyDnAGzr0K9ztfHds_GEISI14L.4",
  },
  {
    slug: "denmark",
    name: "Denmark",
    title: "Denmark Visa Consultant in Islamabad",
    description: "Fast and reliable Denmark Schengen visa processing in Islamabad.",
    keywords: "Denmark visa consultant Islamabad, Denmark visit visa Pakistan",
    intro:
      "Denmark, the land of the Vikings and modern design. Applying for a Danish visa requires proof of strong ties to Pakistan and a clear travel plan. Our experts help you prepare a winning application.",
    docs: [
      "Valid Passport",
      "Denmark Application via ApplyVisa portal",
      "Recent Photos",
      "Schengen Travel Insurance",
      "Flight Reservation",
      "Hotel Reservation or Invitation",
      "Bank Statements (6 months)",
      "Tax Returns (2 years)",
      "FRC and Marriage Certificate",
      "Cover Letter",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: ["Copenhagen (Nyhavn)", "Tivoli Gardens", "Little Mermaid Statue", "Skagen"],
    image:
      "https://www.wanderlustmagazine.com/wp-content/uploads/2023/10/shutterstock_2088468043-scaled.jpg",
  },
  {
    slug: "greece",
    name: "Greece",
    title: "Greece Visa Consultant in Islamabad",
    description: "Secure your Greece Schengen visa from Pakistan with professional guidance.",
    keywords: "Greece visa consultant Islamabad, Greece visit visa requirements Pakistan",
    intro:
      "From the Acropolis to the Aegean islands, Greece is a dream destination. We assist in preparing your Greece Schengen visa file for submission at GVCW centers, ensuring every document is in perfect order.",
    docs: [
      "Original Passport",
      "Greece Visa Form",
      "Biometric Photographs",
      "Schengen Insurance",
      "Flight & Hotel Confirmations",
      "Bank Statement and Maintenance Certificate",
      "Income Proof (Salary/Business)",
      "Tax Returns",
      "FRC",
      "Cover Letter",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: ["Athens (Acropolis)", "Santorini (Oia)", "Mykonos", "Meteora Monasteries"],
    image:
      "https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "norway",
    name: "Norway",
    title: "Norway Visa Consultant in Islamabad",
    description: "Expert assistance for Norway Schengen visa applications from Pakistan.",
    keywords: "Norway visa consultant Islamabad, Norway visit visa Pakistan",
    intro:
      "Norway's stunning fjords and northern lights are a major draw. The Norwegian embassy uses the UDI portal for applications. We guide you through the digital submission and physical document gathering process.",
    docs: [
      "Valid Passport",
      "Norway UDI Portal Application Cover Letter",
      "Recent Biometric Photos",
      "Travel Insurance",
      "Flight Itinerary",
      "Hotel Bookings in Norway",
      "Bank Statements (6 months)",
      "Tax Documents",
      "FRC (NADRA)",
      "Personal Cover Letter",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: [
      "Oslo (Viking Ship Museum)",
      "Bergen (Bryggen)",
      "Geirangerfjord",
      "Lofoten Islands",
    ],
    image:
      "https://images.goway.com/production/featured_images/View-of-the-city-centre-of-Oslo%2C-Norway%20_iStock-898444450-min.jpg?VersionId=jpVVhtPlJvyLqEgKe9HEjSPR_WT7JE2Q",
  },
  {
    slug: "portugal",
    name: "Portugal",
    title: "Portugal Visa Consultant in Islamabad",
    description: "Apply for a Portugal Schengen visa from Islamabad with ease.",
    keywords: "Portugal visa consultant Islamabad, Portugal visit visa Pakistan",
    intro:
      "Portugal offers a rich history and beautiful coastlines. We provide expert help for Portugal Schengen visas, ensuring your documentation meets the standards of the Portuguese consular section in Islamabad.",
    docs: [
      "Original Passport",
      "Portugal Visa Application Form",
      "Photos (ICAO Standard)",
      "Travel Insurance",
      "Flight & Hotel Reservation",
      "Bank Statement (6 months)",
      "Salary Slips / Business Registration",
      "Tax Returns",
      "FRC",
      "Detailed Travel Plan",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: [
      "Lisbon (Belem Tower)",
      "Porto (Ribeira)",
      "Algarve Beaches",
      "Sintra (Pena Palace)",
    ],
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "sweden",
    name: "Sweden",
    title: "Sweden Visa Consultant in Islamabad",
    description: "Professional Sweden Schengen visa assistance in Islamabad.",
    keywords: "Sweden visa consultant Islamabad, Sweden visit visa requirements Pakistan",
    intro:
      "Sweden, known for its innovation and natural beauty. Applications are submitted through VFS Global. We ensure your file is complete, with particular focus on financial means and purpose of visit.",
    docs: [
      "Valid Passport",
      "Sweden Visa Application Form",
      "Biometric Photos",
      "Schengen Medical Insurance",
      "Flight Ticket Reservation",
      "Hotel Reservation",
      "Bank Statements (6 months)",
      "Tax Returns",
      "FRC (NADRA)",
      "Cover Letter",
      "Visa Fee: 90 EUR (Payable in PKR at current embassy rate)",
    ],
    popularPlaces: ["Stockholm (Gamla Stan)", "Gothenburg", "Icehotel (Kiruna)", "Vasa Museum"],
    image:
      "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "czech-republic",
    name: "Czech Republic",
    title: "Czech Republic Visa Consultant in Islamabad",
    description: "Apply for a Czech Republic Schengen visa from Pakistan with expert help.",
    keywords: "Czech Republic visa consultant Islamabad, Prague visa Pakistan",
    intro:
      "The Czech Republic, with its fairytale capital Prague, is a must-visit in Central Europe. We assist with all documentation for the Czech embassy, ensuring your visit or business visa application is perfectly prepared.",
    docs: [
      "Passport",
      "Application Form",
      "Insurance",
      "Flight/Hotel",
      "Bank Statement (6 months)",
      "FRC",
      "Visa Fee: 90 EUR",
    ],
    popularPlaces: ["Prague (Old Town Square)", "Charles Bridge", "Prague Castle", "Český Krumlov"],
    image:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "estonia",
    name: "Estonia",
    title: "Estonia Visa Consultant in Islamabad",
    description:
      "Estonia Schengen visa assistance in Islamabad. Specialist in digital nomad and visit visas.",
    keywords: "Estonia visa consultant Islamabad, Estonia visit visa Pakistan",
    intro:
      "Estonia is a digital leader with a beautiful medieval heart. We help you navigate the Estonian visa process, focusing on the specific requirements of the Tallinn embassy.",
    docs: [
      "Passport",
      "Application Form",
      "Insurance",
      "Flight/Hotel",
      "Bank Statement",
      "FRC",
      "Visa Fee: 90 EUR",
    ],
    popularPlaces: ["Tallinn Old Town", "Lahemaa National Park", "Saaremaa Island", "Pärnu"],
    image:
      "https://www.lot.com/content/dam/lot/lot-com/destination-photos/estonia/Tallin-3.coreimg.jpg/1723626011079/Tallin-3.jpg",
  },
  {
    slug: "finland",
    name: "Finland",
    title: "Finland Visa Consultant in Islamabad",
    description: "Expert Finland Schengen visa services in Islamabad for tourism and study.",
    keywords: "Finland visa consultant Islamabad, Finland visit visa Pakistan",
    intro:
      "Finland, the world's happiest country, offers stunning lakes and Northern Lights. We provide meticulous file preparation for the Finnish embassy.",
    docs: [
      "Passport",
      "Application Form",
      "Insurance",
      "Flight/Hotel",
      "Bank Statement",
      "FRC",
      "Visa Fee: 90 EUR",
    ],
    popularPlaces: [
      "Helsinki (Senate Square)",
      "Rovaniemi (Santa Claus Village)",
      "Lapland",
      "Suomenlinna",
    ],
    image: "https://static.independent.co.uk/2025/11/24/16/01/iStock-865530762.jpeg",
  },
  {
    slug: "hungary",
    name: "Hungary",
    title: "Hungary Visa Consultant in Islamabad",
    description: "Secure your Hungary Schengen visa from Pakistan with our expert consultants.",
    keywords: "Hungary visa consultant Islamabad, Budapest visa Pakistan",
    intro:
      "Hungary, known for its thermal baths and the majestic Danube. We ensure your application for the Hungarian embassy is flawless.",
    docs: [
      "Passport",
      "Application Form",
      "Insurance",
      "Flight/Hotel",
      "Bank Statement",
      "FRC",
      "Visa Fee: 90 EUR",
    ],
    popularPlaces: [
      "Budapest (Parliament Building)",
      "Fisherman's Bastion",
      "Lake Balaton",
      "Eger Castle",
    ],
    image:
      "https://images.unsplash.com/photo-1551867633-194f125bddfa?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "iceland",
    name: "Iceland",
    title: "Iceland Visa Consultant in Islamabad",
    description: "Expert assistance for Iceland Schengen visa applications from Islamabad.",
    keywords: "Iceland visa consultant Islamabad, Iceland visit visa Pakistan",
    intro:
      "Iceland, the land of fire and ice. We guide you through the specific requirements for this unique Schengen destination.",
    docs: [
      "Passport",
      "Application Form",
      "Insurance",
      "Flight/Hotel",
      "Bank Statement",
      "FRC",
      "Visa Fee: 90 EUR",
    ],
    popularPlaces: ["Blue Lagoon", "Golden Circle", "Reykjavík", "Vatnajökull Glacier"],
    image:
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "latvia",
    name: "Latvia",
    title: "Latvia Visa Consultant in Islamabad",
    description: "Apply for a Latvia Schengen visa from Pakistan with ease.",
    keywords: "Latvia visa consultant Islamabad, Riga visa Pakistan",
    intro:
      "Latvia offers a mix of art nouveau architecture and pristine nature. We handle your application for the Latvian embassy with care.",
    docs: [
      "Passport",
      "Application Form",
      "Insurance",
      "Flight/Hotel",
      "Bank Statement",
      "FRC",
      "Visa Fee: 90 EUR",
    ],
    popularPlaces: ["Riga (Old Town)", "Jūrmala Beach", "Gauja National Park", "Rundāle Palace"],
    image:
      "https://www.baltictravelservices.com/BalticTravelBlog/wp-content/uploads/2016/04/Tour_to_RIGA_LATVIA.jpg",
  },
  {
    slug: "lithuania",
    name: "Lithuania",
    title: "Lithuania Visa Consultant in Islamabad",
    description: "Lithuania Schengen visa services in Islamabad for tourism and business.",
    keywords: "Lithuania visa consultant Islamabad, Lithuania visit visa Pakistan",
    intro:
      "Lithuania is rich in history and Baltic charm. We provide expert documentation support for the Lithuanian embassy.",
    docs: [
      "Passport",
      "Application Form",
      "Insurance",
      "Flight/Hotel",
      "Bank Statement",
      "FRC",
      "Visa Fee: 90 EUR",
    ],
    popularPlaces: [
      "Vilnius (Old Town)",
      "Trakai Island Castle",
      "Curonian Spit",
      "Hill of Crosses",
    ],
    image: "https://images.trvl-media.com/place/2167/ec8f2543-aeb2-4765-a5af-7961e748ce4e.jpg",
  },
  {
    slug: "luxembourg",
    name: "Luxembourg",
    title: "Luxembourg Visa Consultant in Islamabad",
    description: "Premium Luxembourg Schengen visa assistance in Islamabad.",
    keywords: "Luxembourg visa consultant Islamabad, Luxembourg visit visa Pakistan",
    intro:
      "Luxembourg, a tiny country with a massive heart and strong economy. We assist in preparing high-quality visa files for Luxembourg.",
    docs: [
      "Passport",
      "Application Form",
      "Insurance",
      "Flight/Hotel",
      "Bank Statement",
      "FRC",
      "Visa Fee: 90 EUR",
    ],
    popularPlaces: [
      "Luxembourg City (Old Quarter)",
      "Vianden Castle",
      "The Grund",
      "Mullerthal Trail",
    ],
    image: "https://images.trvl-media.com/place/2167/ec8f2543-aeb2-4765-a5af-7961e748ce4e.jpg",
  },
  {
    slug: "malta",
    name: "Malta",
    title: "Malta Visa Consultant in Islamabad",
    description: "Secure your Malta Schengen visa from Pakistan with professional help.",
    keywords: "Malta visa consultant Islamabad, Malta visit visa Pakistan",
    intro:
      "Malta, a sun-drenched Mediterranean archipelago. We help you navigate the Maltese visa process smoothly.",
    docs: [
      "Passport",
      "Application Form",
      "Insurance",
      "Flight/Hotel",
      "Bank Statement",
      "FRC",
      "Visa Fee: 90 EUR",
    ],
    popularPlaces: ["Valletta", "Gozo Island", "Blue Grotto", "Mdina Old City"],
    image:
      "https://media.gq.com/photos/5bc4b85c6f8daa7dae417db4/16:9/w_2560%2Cc_limit/travel-guide-gq-malta.jpg",
  },
  {
    slug: "poland",
    name: "Poland",
    title: "Poland Visa Consultant in Islamabad",
    description: "Expert assistance for Poland Schengen visa applications from Islamabad.",
    keywords: "Poland visa consultant Islamabad, Poland visit visa Pakistan",
    intro:
      "Poland is a country of resilience and stunning architecture. We provide comprehensive support for the Polish embassy in Islamabad.",
    docs: [
      "Passport",
      "Application Form",
      "Insurance",
      "Flight/Hotel",
      "Bank Statement",
      "FRC",
      "Visa Fee: 90 EUR",
    ],
    popularPlaces: [
      "Kraków (Main Market Square)",
      "Warsaw (Old Town)",
      "Wieliczka Salt Mine",
      "Tatra Mountains",
    ],
    image:
      "https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "slovakia",
    name: "Slovakia",
    title: "Slovakia Visa Consultant in Islamabad",
    description: "Apply for a Slovakia Schengen visa from Pakistan with expert help.",
    keywords: "Slovakia visa consultant Islamabad, Bratislava visa Pakistan",
    intro:
      "Slovakia, home to dramatic castles and the High Tatras. We ensure your application for the Slovakian embassy is perfectly assembled.",
    docs: [
      "Passport",
      "Application Form",
      "Insurance",
      "Flight/Hotel",
      "Bank Statement",
      "FRC",
      "Visa Fee: 90 EUR",
    ],
    popularPlaces: ["Bratislava Castle", "High Tatras", "Spiš Castle", "Bojnice Castle"],
    image: "https://idsb.tmgrup.com.tr/ly/uploads/images/2024/03/18/319978.jpg",
  },
  {
    slug: "slovenia",
    name: "Slovenia",
    title: "Slovenia Visa Consultant in Islamabad",
    description: "Expert Slovenia Schengen visa services in Islamabad for tourism and study.",
    keywords: "Slovenia visa consultant Islamabad, Slovenia visit visa Pakistan",
    intro:
      "Slovenia, where the Alps meet the Mediterranean. We provide meticulous file preparation for the Slovenian embassy.",
    docs: [
      "Passport",
      "Application Form",
      "Insurance",
      "Flight/Hotel",
      "Bank Statement",
      "FRC",
      "Visa Fee: 90 EUR",
    ],
    popularPlaces: ["Lake Bled", "Ljubljana", "Postojna Cave", "Piran"],
    image:
      "https://res.cloudinary.com/eurocamp/image/upload/v1753797470/Slovenia_Krki-Medieval_Town_Kostanjevica_FI_pxe4is.jpg",
  },
  {
    slug: "liechtenstein",
    name: "Liechtenstein",
    title: "Liechtenstein Visa Consultant in Islamabad",
    description: "Expert assistance for Liechtenstein Schengen visa applications from Islamabad.",
    keywords: "Liechtenstein visa consultant Islamabad, Liechtenstein visit visa Pakistan",
    intro:
      "Liechtenstein, a tiny alpine principality. We guide you through the requirements for this exclusive Schengen destination.",
    docs: [
      "Passport",
      "Application Form",
      "Insurance",
      "Flight/Hotel",
      "Bank Statement",
      "FRC",
      "Visa Fee: 90 EUR",
    ],
    popularPlaces: ["Vaduz Castle", "Malbun", "Gutenberg Castle", "Schloss Vaduz"],
    image:
      "https://www.travelandleisure.com/thmb/C-RFiEPiso8zwYNCyBjaFcM24iI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-how-to-get-there-LIECHTENSTEIN0724-9e26935e378641a889889c73109e8bb0.jpg",
  },
  {
    slug: "croatia",
    name: "Croatia",
    title: "Croatia Visa Consultant in Islamabad",
    description: "Expert assistance for Croatia Schengen visa applications from Islamabad.",
    keywords: "Croatia visa consultant Islamabad, Croatia visit visa Pakistan",
    intro:
      "Croatia, the newest member of the Schengen zone, famous for its stunning coastline and historic cities. We handle your application with precision.",
    docs: [
      "Passport",
      "Application Form",
      "Insurance",
      "Flight/Hotel",
      "Bank Statement",
      "FRC",
      "Visa Fee: 90 EUR",
    ],
    popularPlaces: [
      "Dubrovnik (Old Town)",
      "Plitvice Lakes National Park",
      "Split (Diocletian's Palace)",
      "Hvar Island",
    ],
    image: "https://i.natgeofe.com/n/a53f21b1-5025-47fc-bd1b-3b2da933f763/croatia.jpg",
  },
  {
    slug: "bulgaria",
    name: "Bulgaria",
    title: "Bulgaria Visa Consultant in Islamabad",
    description: "Expert assistance for Bulgaria Schengen visa applications from Islamabad.",
    keywords: "Bulgaria visa consultant Islamabad, Bulgaria visit visa Pakistan",
    intro:
      "Bulgaria joined the Schengen zone for air and sea travel in 2024. We assist in preparing your file for this beautiful Balkan destination.",
    docs: [
      "Passport",
      "Application Form",
      "Insurance",
      "Flight/Hotel",
      "Bank Statement",
      "FRC",
      "Visa Fee: 90 EUR",
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
    title: "Romania Visa Consultant in Islamabad",
    description: "Expert assistance for Romania Schengen visa applications from Islamabad.",
    keywords: "Romania visa consultant Islamabad, Romania visit visa Pakistan",
    intro:
      "Romania, a land of legends and medieval architecture, joined the Schengen zone for air and sea in 2024. We handle your documentation end-to-end.",
    docs: [
      "Passport",
      "Application Form",
      "Insurance",
      "Flight/Hotel",
      "Bank Statement",
      "FRC",
      "Visa Fee: 90 EUR",
    ],
    popularPlaces: ["Bucharest", "Transylvania (Bran Castle)", "Sighişoara", "Sibiu"],
    image:
      "https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Romania.jpg-2.jpg",
  },
];

export const SOUTH_ASIA_COUNTRIES = [
  {
    slug: "thailand",
    name: "Thailand",
    title: "Thailand Visa Consultant in Islamabad",
    description:
      "Apply for Thailand visit visa from Pakistan. Expert documentation for sticker and e-visas.",
    keywords:
      "Thailand visa consultant Islamabad, Thailand visit visa Pakistan, Thai embassy Islamabad",
    intro:
      "Thailand is a favorite for Pakistani tourists. Whether you need a tourist sticker visa or an e-visa, we handle the entire process, including hotel vouchers and flight bookings.",
    docs: [
      "Original Passport",
      "Visa Form",
      "Two Photos (White Background)",
      "Bank Statement (6 Months)",
      "Account Maintenance Certificate",
      "Salary Slips / Business Docs",
      "FRC",
      "Visa Fee: 10,000 - 15,000 PKR (approx)",
    ],
    popularPlaces: ["Bangkok", "Phuket", "Pattaya", "Chiang Mai"],
    image:
      "https://www.travelzoo.com/images/tzoo.13733.0.1102287.UltimateThailandTravelGuide-Bangkok-Thailand-iStock-954686622.jpg?width=412&spr=3",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    title: "Malaysia Visa Consultant in Islamabad",
    description: "Get your Malaysia e-visa or sticker visa processed quickly in Islamabad.",
    keywords: "Malaysia visa consultant Islamabad, Malaysia e-visa Pakistan",
    intro:
      "Malaysia offers a mix of modern cities and beautiful rainforests. We specialize in rapid e-visa processing for Pakistani citizens.",
    docs: [
      "Passport Copy",
      "Digital Photo (White Background)",
      "Bank Statement",
      "Return Ticket",
      "Hotel Booking",
      "FRC (for families)",
      "Visa Fee: 12,000 PKR (approx)",
    ],
    popularPlaces: ["Kuala Lumpur (Petronas Towers)", "Langkawi", "Genting Highlands", "Penang"],
    image: "https://ychef.files.bbci.co.uk/1920x1080/p0g712th.png",
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    title: "Sri Lanka ETA Consultant in Islamabad",
    description: "Fast Sri Lanka ETA processing for Pakistani tourists. Minimum documentation.",
    keywords: "Sri Lanka visa Pakistan, Sri Lanka ETA Islamabad",
    intro:
      "Sri Lanka is an island paradise. We provide instant ETA (Electronic Travel Authorization) services with just your passport copy.",
    docs: ["Passport Copy", "Return Ticket", "Hotel Booking", "Visa Fee: $50 USD (approx)"],
    popularPlaces: ["Colombo", "Kandy", "Bentota", "Sigiriya"],
    image:
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "maldives",
    name: "Maldives",
    title: "Maldives Travel Guide for Pakistanis",
    description:
      "Guidance on Maldives visa on arrival and mandatory travel declarations for Pakistanis.",
    keywords: "Maldives visa for Pakistanis, Maldives travel agent Islamabad",
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
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "nepal",
    name: "Nepal",
    title: "Nepal Visa Consultant in Islamabad",
    description:
      "Apply for Nepal visit visa from Pakistan. Expert assistance for trekking and leisure tours.",
    keywords: "Nepal visa Pakistan, Nepal visit visa Islamabad",
    intro:
      "Nepal is the gateway to the Himalayas. We help you with the visa application process for a seamless mountain adventure.",
    docs: [
      "Original Passport",
      "Visa Form",
      "Photos",
      "CNIC Copy",
      "Bank Statement (Optional but recommended)",
      "Visa Fee: $30 USD (approx)",
    ],
    popularPlaces: ["Kathmandu", "Pokhara", "Everest Base Camp", "Lumbini"],
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    title: "Indonesia Visa Expert in Islamabad",
    description:
      "Apply for Indonesia B211A or tourist visa from Pakistan. Expert guidance for Bali travel.",
    keywords: "Indonesia visa consultant Islamabad, Bali visa Pakistan, Indonesia e-visa ISB",
    intro:
      "From the tropical paradise of Bali to the bustling streets of Jakarta, Indonesia is a top pick. We specialize in B211A business/visit visas and standard tourist entries.",
    docs: [
      "Passport Copy (Color)",
      "Digital Photo",
      "Bank Statement (Last 3 Months)",
      "Return Flight Ticket",
      "Hotel Booking",
      "Visa Fee: $100 - $150 USD (approx)",
    ],
    popularPlaces: ["Bali (Ubud & Seminyak)", "Jakarta", "Gili Islands", "Mount Bromo"],
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    title: "Vietnam E-Visa Consultant Islamabad",
    description: "Fast and easy Vietnam e-visa processing for Pakistani citizens.",
    keywords: "Vietnam visa Pakistan, Vietnam e-visa consultant Islamabad",
    intro:
      "Vietnam's stunning Halong Bay and rich history await. We handle the e-visa application process for a hassle-free entry into this vibrant SE Asian nation.",
    docs: [
      "Passport Copy",
      "Digital Photo",
      "Entry/Exit Dates",
      "Entry/Exit Ports",
      "Visa Fee: $25 USD (approx) + Processing",
    ],
    popularPlaces: ["Halong Bay", "Hanoi", "Ho Chi Minh City", "Da Nang"],
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "bangladesh",
    name: "Bangladesh",
    title: "Bangladesh Visa Consultant in Islamabad",
    description: "Expert assistance for Bangladesh visit and business visas in Islamabad.",
    keywords: "Bangladesh visa consultant Islamabad, Bangladesh visit visa Pakistan",
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
      "https://images.unsplash.com/photo-1585938389612-a552a28d6914?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "cambodia",
    name: "Cambodia",
    title: "Cambodia E-Visa Services Islamabad",
    description: "Quick Cambodia e-visa processing for Pakistani travelers.",
    keywords: "Cambodia visa Pakistan, Cambodia e-visa consultant Islamabad",
    intro:
      "Explore the ancient temples of Angkor Wat. We make your Cambodia e-visa process simple and fast.",
    docs: [
      "Passport Copy",
      "Digital Photo",
      "Bank Statement",
      "Hotel Booking",
      "Visa Fee: $36 USD (approx)",
    ],
    popularPlaces: ["Angkor Wat", "Phnom Penh", "Siem Reap", "Koh Rong"],
    image:
      "https://images.unsplash.com/photo-1500049242364-5f500807cdd7?auto=format&fit=crop&q=80&w=800",
  },
];

export const CENTRAL_ASIA_COUNTRIES = [
  {
    slug: "turkey",
    name: "Turkey",
    title: "Turkey Visa Consultant in Islamabad",
    description: "Expert assistance for Turkey sticker and e-visas in Islamabad.",
    keywords:
      "Turkey visa consultant Islamabad, Turkey visit visa Pakistan, Anatolia Gerrys Turkey",
    intro:
      "Turkey is the bridge between East and West. We provide complete file preparation for Turkish sticker visas (via Anatolia/Gerry's) and instant e-visas for those with valid Schengen/US visas.",
    docs: [
      "Original Passport",
      "Visa Form",
      "Two Biometric Photos (5x5cm)",
      "Bank Statement (6 Months)",
      "NTN & Tax Returns",
      "Employment Letter",
      "Polio Certificate",
      "Visa Fee: 60 - 150 USD (varies)",
    ],
    popularPlaces: ["Istanbul (Hagia Sophia)", "Cappadocia", "Antalya", "Pamukkale"],
    image: "https://cdn-imgix.headout.com/media/images/2235bf02e2ee0df7ea93f34d3cada1a6-Banner.jpg",
  },
  {
    slug: "azerbaijan",
    name: "Azerbaijan",
    title: "Azerbaijan E-Visa Expert in Islamabad",
    description: "Instant Azerbaijan ASAN e-visa processing for Pakistani tourists.",
    keywords: "Azerbaijan visa Pakistan, Baku visa consultant Islamabad",
    intro:
      "Baku, the city of winds, is just a few clicks away. We process your Azerbaijan e-visa within 3 hours to 3 days with minimum documentation.",
    docs: [
      "Passport Copy (Scan)",
      "Digital Photo",
      "Visa Fee: $26 USD (Standard) / $60 USD (Urgent)",
    ],
    popularPlaces: ["Baku (Flame Towers)", "Old City (Icherisheher)", "Gobustan", "Gabala"],
    image: "https://assets.micontenthub.com/traveloffers/travel-tips/baku_OIPJAbO-S.jpg",
  },
  {
    slug: "uzbekistan",
    name: "Uzbekistan",
    title: "Uzbekistan Visa Consultant in Islamabad",
    description: "Apply for Uzbekistan e-visa or sticker visa from Pakistan.",
    keywords: "Uzbekistan visa Pakistan, Tashkent visa consultant Islamabad",
    intro:
      "Explore the Silk Road cities of Samarkand and Bukhara. We provide fast e-visa services for Uzbekistan for all Pakistani passport holders.",
    docs: [
      "Passport Copy",
      "Digital Photo",
      "Bank Statement (Optional)",
      "Visa Fee: $20 USD (approx)",
    ],
    popularPlaces: ["Samarkand (Registan)", "Bukhara", "Tashkent", "Khiva"],
    image:
      "https://www.wendywutours.co.uk/resource/upload/2006/adobe-express-file-2026-01-13t105042-393.jpg.webp",
  },
  {
    slug: "kazakhstan",
    name: "Kazakhstan",
    title: "Kazakhstan Visa Services in Islamabad",
    description: "Expert assistance for Kazakhstan visit and business visas from Pakistan.",
    keywords: "Kazakhstan visa Pakistan, Almaty visa agent Islamabad",
    intro:
      "Kazakhstan offers stunning mountain scenery and modern architecture. We assist with the visa invitation and application process for Almaty and Astana.",
    docs: [
      "Passport Copy",
      "Photo",
      "Bank Statement",
      "Employment Proof",
      "Visa Fee: $60 - $80 USD (approx)",
    ],
    popularPlaces: ["Almaty", "Astana", "Charyn Canyon", "Big Almaty Lake"],
    image:
      "https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Kazakhstan-3.jpg",
  },
  {
    slug: "kyrgyzstan",
    name: "Kyrgyzstan",
    title: "Kyrgyzstan E-Visa Consultant Islamabad",
    description: "Apply for Kyrgyzstan e-visa from Pakistan. Fast and reliable processing.",
    keywords: "Kyrgyzstan visa Pakistan, Bishkek visa agent Islamabad",
    intro:
      "The Switzerland of Central Asia. We process your Kyrgyzstan e-visa smoothly for your next mountain trekking adventure.",
    docs: ["Passport Copy", "Digital Photo", "Hotel Booking", "Visa Fee: $50 USD (approx)"],
    popularPlaces: ["Bishkek", "Issyk-Kul Lake", "Ala Archa National Park", "Osh"],
    image: "https://globalcio.com/upload/iblock/0b8/ti2m5uxafsm5lwb70gtlxca97eq9ofkd/1920_1080.png",
  },
];

export const NORTH_AFRICA_COUNTRIES = [
  {
    slug: "egypt",
    name: "Egypt",
    title: "Egypt Visa Consultant in Islamabad",
    description:
      "Apply for Egypt tourist or business visa from Pakistan. Expert guidance for Nile tours.",
    keywords: "Egypt visa consultant Islamabad, Egypt visit visa Pakistan, apply Egypt visa ISB",
    intro:
      "From the Pyramids of Giza to the Red Sea resorts, Egypt is a land of wonders. We assist with both sticker visa applications at the embassy and e-visa processing for eligible travelers.",
    docs: [
      "Original Passport",
      "Visa Form",
      "Two Photos (White Background)",
      "Bank Statement (6 Months)",
      "NTN / Tax Returns",
      "Employment/Leave Letter",
      "FRC",
      "Polio Certificate",
      "Visa Fee: $25 - $60 USD (varies)",
    ],
    popularPlaces: [
      "Cairo (Pyramids)",
      "Luxor (Valley of the Kings)",
      "Sharm El Sheikh",
      "Alexandria",
    ],
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "morocco",
    name: "Morocco",
    title: "Morocco Visa Consultant in Islamabad",
    description: "Get your Morocco tourist visa processed with expert assistance in Islamabad.",
    keywords: "Morocco visa consultant Islamabad, Morocco visit visa Pakistan",
    intro:
      "Morocco offers a vibrant mix of culture, deserts, and ancient cities. We handle the complete documentation for your Moroccan visa application at the embassy.",
    docs: [
      "Original Passport",
      "Visa Form",
      "Four Photos (White Background)",
      "Bank Statement (6 Months)",
      "Chamber Recommendation (for business)",
      "Confirmed Flight & Hotel",
      "Visa Fee: 10,000 - 15,000 PKR (approx)",
    ],
    popularPlaces: ["Marrakesh", "Casablanca", "Fes", "Chefchaouen (Blue City)"],
    image:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "tunisia",
    name: "Tunisia",
    title: "Tunisia Visa Services in Islamabad",
    description: "Apply for Tunisia visit visa from Pakistan. Reliable documentation assistance.",
    keywords: "Tunisia visa Pakistan, Tunisia visa consultant Islamabad",
    intro:
      "Tunisia is known for its Mediterranean beaches and Roman ruins. We help you prepare a solid file for your Tunisian visa submission.",
    docs: [
      "Passport",
      "Visa Form",
      "Photos",
      "Bank Statement",
      "Confirmed Hotel Booking",
      "Invitation Letter (if any)",
      "Visa Fee: 10,000 PKR (approx)",
    ],
    popularPlaces: ["Tunis", "Carthage", "Sidi Bou Said", "Djerba Island"],
    image:
      "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "algeria",
    name: "Algeria",
    title: "Algeria Visa Consultant Islamabad",
    description: "Expert assistance for Algeria visit and business visas from Pakistan.",
    keywords: "Algeria visa Pakistan, Algeria visa consultant Islamabad",
    intro:
      "Algeria, the largest country in Africa, offers diverse landscapes from the Sahara to the coast. We assist with the invitation and visa filing process.",
    docs: [
      "Passport",
      "Visa Form",
      "Photos",
      "Notarized Invitation Letter",
      "Bank Statement",
      "Employment Proof",
      "Visa Fee: $100 USD (approx)",
    ],
    popularPlaces: ["Algiers", "Constantine", "Oran", "Sahara Desert"],
    image: "https://gfmag.com/wp-content/uploads/2025/11/shutterstock_2466084797-scaled.jpg",
  },
];

export const SOUTHERN_AFRICA_COUNTRIES = [
  {
    slug: "south-africa",
    name: "South Africa",
    title: "South Africa Visa Consultant in Islamabad",
    description: "Expert assistance for South Africa visit and business visas from Pakistan.",
    keywords: "South Africa visa consultant Islamabad, South Africa visit visa Pakistan",
    intro:
      "Experience the wildlife and city life of South Africa. We provide meticulous file preparation for your sticker visa application at the South African High Commission.",
    docs: [
      "Original Passport",
      "Visa Form",
      "Two Photos (White Background)",
      "Bank Statement (6 Months)",
      "NTN / Tax Returns",
      "Job/Business Documents",
      "Polio Certificate",
      "Visa Fee: $35 - $50 USD (approx)",
    ],
    popularPlaces: [
      "Cape Town (Table Mountain)",
      "Johannesburg",
      "Kruger National Park",
      "Garden Route",
    ],
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "mauritius",
    name: "Mauritius",
    title: "Mauritius Visa Guide for Pakistanis",
    description: "Guidance on Mauritius visa on arrival and documentation for Pakistani tourists.",
    keywords: "Mauritius visa for Pakistanis, Mauritius travel agent Islamabad",
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
      "https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Mauritius-2.jpg",
  },
  {
    slug: "kenya",
    name: "Kenya",
    title: "Kenya E-Visa Services Islamabad",
    description: "Fast Kenya e-visa processing for Pakistani citizens. Ideal for safaris.",
    keywords: "Kenya visa Pakistan, Kenya e-visa consultant Islamabad",
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
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "seychelles",
    name: "Seychelles",
    title: "Seychelles Visitor Permit Guide",
    description: "Assistance with Seychelles mandatory travel authorization for Pakistanis.",
    keywords: "Seychelles visa Pakistan, Seychelles travel agent Islamabad",
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
      "https://cdn.conscious-explorer.com/keycdn/file/a51da0068065eaead885f44f4e029d36835038a5d42082201d17f28559b2d4b5/SJoUTslQaytZjQm0.webp",
  },
];
