import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Banknote, ShoppingCart, MessageCircle, CreditCard } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-yellow-600 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-4xl mx-auto p-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-5xl font-bold text-black mb-2 text-center drop-shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          KookKart
        </motion.h1>

        <motion.p 
          className="text-lg text-black font-sans mb-8 text-center leading-relaxed max-w-3xl mx-auto "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to KookKart – your one-stop destination for all home and kitchen appliance needs. With over a decade of trusted service, we pride ourselves on delivering top-quality products and unmatched customer support. From modern kitchen tools to essential household electronics, we cater to every corner of your home. Our experience ensures smooth purchasing, multiple payment options including EMI, and reliable delivery. We partner with top brands and banks to offer seamless solutions for all families. Located in the heart of Dharwad, KookKart stands as a symbol of trust, affordability, and excellence in home shopping.
        </motion.p>

        <motion.div 
          className="pt-6 space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15,
              }
            }
          }}
        >
          <ul className="space-y-4 text-black">
            {[ 
              { label: 'Phone Number', icon: <Phone size={20} className="inline mr-2 text-black" />, value: <a href="tel:+919986368489" className="underline">+91 9380237827</a> },
              { label: 'WhatsApp', icon: <MessageCircle size={20} className="inline mr-2 text-black" />, value: <a href="https://wa.me/9986368489" target="_blank" className="underline">Message on WhatsApp</a> },
              { label: 'Email', icon: <Mail size={20} className="inline mr-2 text-black" />, value: <a href="mailto:vinaylakamanahalli@gmail.com" className="underline">vinaylakamanahalli@gmail.com</a> },
              { label: 'EMI Options', icon: <CreditCard size={20} className="inline mr-2 text-black" />, value: 'Available for major appliances and electronics' },
              { label: 'Bank Options', icon: <Banknote size={20} className="inline mr-2 text-black" />, value: 'SBI, HDFC, ICICI, Axis Bank – Credit/Debit accepted   - -for more information call/message us' },
              { label: 'Delivery Timings', icon: <ShoppingCart size={20} className="inline mr-2 text-black" />, value: '10:00 AM – 7:00 PM (All days except Sunday)' },
              { label: 'Shop Hours', icon: <Clock size={20} className="inline mr-2 text-black" />, value: 'Opens at 9:30 AM and Closes at 8:00 PM' },
              { label: 'Address', icon: <MapPin size={20} className="inline mr-2 text-black" />, value: 'Shivaji Circle, Dharwad, Karnataka, India' },
              { label: 'Location', icon: <MapPin size={20} className="inline mr-2 text-black" />, value: <a href="https://maps.google.com/?q= badishop+Shivaji+Circle,+Dharwad,+Karnataka,+India" target="_blank" className="underline">View on Google Maps</a> },
            ].map((item, index) => (
              <motion.li 
                key={index} 
                className="bg-amber-200/60 hover:bg-amber-200 transition p-4 rounded-xl shadow"
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="font-semibold mr-2">{item.label}:</span> {item.value}
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;

