export function SEOBlock() {
  const keywords =
    "best travel agency in pakistan, no.1 travel agency in pakistan, top travel agency islamabad, best visa consultant pakistan, top visa consultancy islamabad, #1 visa expert pakistan, reliable travel agents in pakistan, best tour operator pakistan, cheap flights pakistan, flight booking pakistan, hotel reservation islamabad, corporate travel agency pakistan, best travel and tours pakistan, immigration consultant islamabad, schengen visa agent pakistan, uk visa consultant pakistan, usa visa expert islamabad, canada immigration consultant pakistan, australia study visa pakistan, europe visa services pakistan, authorized travel agent pakistan, IATA travel agency pakistan, top 10 travel agencies in pakistan, best holiday packages pakistan, best umrah packages pakistan";

  return (
    <div className="mt-16 border-t border-white/10 pt-8 text-sm text-white/60">
      <h2 className="text-xl font-bold text-white/80 mb-3">
        Pakistan's No.1 Travel Agency & Best Visa Consultant
      </h2>
      <p className="mb-4 leading-relaxed">
        OS Consultants is widely recognized as the <strong>No.1 Travel Agency in Pakistan</strong>{" "}
        and the <strong>best visa consultant in Islamabad</strong>. We provide premium, reliable,
        and authorized travel services, helping thousands of clients with their global travel needs,
        from cheap flight bookings to complex immigration processes.
      </p>
      <p className="mb-2 font-semibold text-white/70">
        As the top-rated travel agency and immigration consultant in Pakistan, we specialize in:
      </p>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>Worldwide Air Ticketing & Cheap Flight Bookings</li>
        <li>Schengen Visa Processing for Europe</li>
        <li>UK, USA, Canada & Australia Visa Assistance</li>
        <li>Global Hotel Reservations & Tour Packages</li>
        <li>Corporate Travel Management in Pakistan</li>
      </ul>
      <p className="mb-4 leading-relaxed">
        Whether you are looking for the best travel agency in Pakistan to book your next vacation,
        or the top visa consultant in Islamabad to handle your student, work, or visit visa, OS
        Consultants is your ultimate gateway. We pride ourselves on a 98% visa success rate and
        offering the cheapest flight tickets in Pakistan. Contact the best travel and tours company
        in Pakistan today.
      </p>

      {/* Hidden Keywords for SEO */}
      <div className="sr-only" aria-hidden="true">
        {keywords}
      </div>
    </div>
  );
}
