import React, { useState } from 'react';

const PrivateViewing = () => {
  const [formData, setFormData] = useState({ date: '', role: '' });

  const backgroundUrl = "https://res.cloudinary.com/dvnplfu6z/image/upload/v1776678828/19_Feb_-_33_2_sr01ky.png";

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const phoneNumber = "91XXXXXXXXXX"; // Replace with actual number
    const message = `Hello Zarivaram, I would like to request a Private Viewing.%0A%0A*Occasion Date:* ${formData.date}%0A*Role:* ${formData.role}`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section
      id="private-viewing"
      className="relative flex w-full items-center justify-center overflow-hidden py-20 lg:py-28 min-h-[70vh] lg:min-h-0"
    >
      {/* Background layer: Adjusted for mobile focal point */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-no-repeat bg-[75%_center] lg:bg-center"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
        aria-hidden
      />
      
      {/* Overlay: Darker on mobile for better text pop */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-black/30 lg:bg-black/20"
        aria-hidden
      />

      <div className="relative z-20 container mx-auto flex flex-col items-center px-[6%] text-center">
        
        {/* Title: Scaled for mobile screens */}
        <div className="mb-8 lg:mb-10 max-w-2xl">
          <h2 className="font-['EB_Garamond'] text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-4xl lg:font-extralight lg:leading-[1.15]">
            Request a <br className="lg:hidden" />
            Private Viewing
          </h2>
        </div>

        {/* Form: Full width on small mobile, fixed max-width on desktop */}
        <form 
          onSubmit={handleWhatsAppRedirect}
          className="w-full max-w-md bg-white/15 backdrop-blur-2xl border border-white/20 p-8 lg:p-10 rounded-2xl shadow-2xl"
        >
          <div className="space-y-8 lg:space-y-6">
            {/* Input: Date */}
            <div className="text-left group border-b border-white/30 pb-2 focus-within:border-[#C29734] transition-all">
              <label className="font-['Montserrat'] text-[0.7rem] lg:text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[#C29734]">
                The Occasion Date
              </label>
              <input 
                required
                type="text" 
                placeholder="e.g. November 2026"
                className="w-full bg-transparent font-['EB_Garamond'] text-xl text-white outline-none placeholder:text-white/40 mt-1"
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>

            {/* Input: Role */}
            <div className="text-left group border-b border-white/30 pb-2 focus-within:border-[#C29734] transition-all">
              <label className="font-['Montserrat'] text-[0.7rem] lg:text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[#C29734]">
                Your Role
              </label>
              <input 
                required
                type="text" 
                placeholder="e.g. Mother of the Bride"
                className="w-full bg-transparent font-['EB_Garamond'] text-xl text-white outline-none placeholder:text-white/40 mt-1"
                onChange={(e) => setFormData({...formData, role: e.target.value})}
              />
            </div>

            {/* Submit Button: Full width tap target */}
            <button
              type="submit"
              className="w-full group flex items-center justify-center gap-4 bg-[#C29734] py-5 lg:py-4 font-['Montserrat'] text-[0.75rem] font-bold uppercase tracking-[0.3em] text-black transition-all active:scale-95 lg:hover:bg-white rounded-lg"
            >
              <span>Confirm on WhatsApp</span>
              <div className="h-px w-6 bg-black transition-all group-hover:w-10"></div>
            </button>
          </div>

          
        </form>

      </div>
    </section>
  );
};

export default PrivateViewing;