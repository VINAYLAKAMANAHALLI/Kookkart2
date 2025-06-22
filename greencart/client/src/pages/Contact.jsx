import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Clock, Banknote, ShoppingCart, MessageCircle, CreditCard
} from 'lucide-react';

const contactItems = [
  { label: 'Phone Number', icon: Phone, value: <a href="tel:+919980237827" className="underline">+91 93802 37827</a> },
  { label: 'WhatsApp', icon: MessageCircle, value: <a href="https://wa.me/9986368489" target="_blank" className="underline">Message on WhatsApp</a> },
  { label: 'Email', icon: Mail, value: <a href="mailto:vinaylakamanahalli@gmail.com" className="underline">vinaylakamanahalli@gmail.com</a> },
  { label: 'EMI Options', icon: CreditCard, value: 'Available for major appliances and electronics---contact us' },
  { label: 'Bank Options', icon: Banknote, value: 'SBI, HDFC, ICICI, Axis – Credit/Debit accepted' },
  { label: 'Delivery Timings', icon: ShoppingCart, value: '10:00 AM – 7:00 PM (All days except Sunday)' },
  { label: 'Shop Hours', icon: Clock, value: 'Opens at 9:30 AM and Closes at 8:00 PM' },
  { label: 'Address', icon: MapPin, value: 'Shivaji Circle, Dharwad, Karnataka, India' },
  { label: 'Location', icon: MapPin, value: <a href="https://maps.google.com/?q=Shivaji+Circle,+Dharwad,+Karnataka,+India" target="_blank" className="underline">View on Google Maps</a> },
];

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-br from-orange-300 to-orange-300 min-h-screen py-12 px-6">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-gray-900 text-center mb-6 drop-shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to KookKart 🛍️
        </motion.h1>

        <motion.p
          className="text-lg text-gray-800 text-center leading-relaxed max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          At <strong>KookKart</strong>, we redefine home and kitchen shopping in Dharwad. Trusted by thousands, our curated selection of modern appliances, EMI-friendly payments, and reliable doorstep delivery make us your go-to destination for quality and convenience. From mixer grinders to refrigerators, we bring innovation and affordability under one roof – with service that feels like family.
        </motion.p>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15,
              }
            }
          }}
        >
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-start p-5 rounded-xl backdrop-blur-lg bg-white/60 shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="w-10 h-10 mr-4 flex items-center justify-center bg-yellow-500/30 text-yellow-800 rounded-full">
                <item.icon size={20} />
              </div>
              <div>
                <p className="text-base font-semibold text-gray-800">{item.label}</p>
                <p className="text-sm text-gray-700 mt-1">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
