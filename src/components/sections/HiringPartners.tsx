import { Section } from "@/components/ui-extensions";

const companies = [
  "Razorpay", "Swiggy", "Flipkart", "Zomato", "CRED", "PhonePe",
  "Groww", "Meesho", "Ola", "Paytm", "Freshworks", "Zerodha",
  "Myntra", "Nykaa", "Dream11", "ShareChat", "Lenskart", "Byju's",
  "Unacademy", "upGrad", "Dunzo", "Urban Company", "Rapido", "Practo",
];

const HiringPartners = () => {
  return (
    <Section variant="white">
      <div className="text-center mb-14 animate-fade-up">
        <p className="font-afacad text-sm uppercase tracking-widest text-muted-foreground mb-3">Hiring partners</p>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display">
          Where our students get hired.
        </h2>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {companies.map((name) => (
          <div
            key={name}
            className="flex items-center justify-center h-14 rounded-lg bg-muted text-sm font-medium font-afacad text-muted-foreground grayscale hover:grayscale-0 transition-all"
          >
            {name}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default HiringPartners;
