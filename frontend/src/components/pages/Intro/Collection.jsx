import React from 'react';
import { motion } from 'framer-motion';
const products = [
  { id: 1, name: 'Assam Gold Tea', price: '₹450', image: 'Chai pattii.png', cat: 'Chai Patti' },
  { id: 2, name: 'Marwari Mehendi', price: '₹220', image: 'Mehendi regular cone.webp', cat: 'Mehendi' },
  { id: 3, name: 'Herbal Manjan', price: '₹180', image: 'Manjan.webp', cat: 'Manjan' },
];

const Collection = () => {
  return (
    <div className="min-h-screen bg-zinc-950 py-16 md:py-24 px-4 md:px-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-zinc-100 mb-8 md:mb-12">The Archive <span className="text-zinc-600 text-xs md:text-sm not-italic ml-2 md:ml-4 tracking-[0.3em] uppercase">2026 Edition</span></h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {products.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden bg-zinc-900 border border-zinc-800">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
              </div>
              <div className="mt-4 md:mt-6 flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-amber-500 uppercase tracking-widest mb-1">{product.cat}</p>
                  <h3 className="text-sm md:text-base text-zinc-100 font-medium tracking-wide">{product.name}</h3>
                </div>
                <p className="text-zinc-400 font-serif italic text-sm md:text-base">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Collection;