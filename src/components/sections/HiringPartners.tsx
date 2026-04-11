import { Section } from "@/components/ui-extensions";
import { motion } from "framer-motion";

const companies = [
  "Razorpay", "Swiggy", "Flipkart", "Zomato", "CRED", "PhonePe",
  "Groww", "Meesho", "Ola", "Paytm", "Freshworks", "Zerodha",
  "Myntra", "Nykaa", "Dream11", "ShareChat", "Lenskart", "Byju's",
  "Unacademy", "upGrad", "Dunzo", "Urban Company", "Rapido", "Practo",
];

const HiringPartners = () => {
  return (
    <Section variant="white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="font-afacad text-sm uppercase tracking-widest text-muted-foreground mb-3">Hiring partners</p>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display">
          Where our students get hired.
        </h2>
      </motion.div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {companies.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="flex items-center justify-center h-14 rounded-lg bg-muted text-sm font-medium font-afacad text-muted-foreground grayscale hover:grayscale-0 transition-all"
          >
            {name}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default HiringPartners;
