import React from 'react';
import { EVENT_INFO } from '../mockData';
import { MapPin, Navigation, Train, Bus, Wifi, Coffee, Sparkles } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location-section" className="py-20 bg-white text-[#1a2e22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8bc349]/20 text-[#034d20] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#034d20]" />
            Host Campus & Logistics
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#034d20] tracking-tight">
            Margʻilon Shahar Ixtisoslashtirilgan Maktabi
          </h2>
          <p className="text-base text-[#1a2e22]/80 leading-relaxed">
            A modern, purpose-built educational campus in historical Margilan, equipped with smart assembly halls, simulation breakout rooms, and green courtyards.
          </p>
        </div>

        {/* Grid: Details & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address card */}
              <div className="p-6 rounded-2xl bg-[#f4f8f4] border border-[#d4e7d8] space-y-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#034d20] text-[#8bc349] flex items-center justify-center">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#034d20]">{EVENT_INFO.venue}</h3>
                    <p className="text-xs text-[#1a2e22]/70">Margilan City, Fergana Region</p>
                  </div>
                </div>

                <p className="text-xs text-[#1a2e22]/90 font-medium">
                  {EVENT_INFO.locationDetails}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-[#034d20]">
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#d4e7d8] flex items-center gap-1">
                    <Wifi className="w-3.5 h-3.5 text-[#8bc349]" /> High-Speed Wi-Fi
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#d4e7d8] flex items-center gap-1">
                    <Coffee className="w-3.5 h-3.5 text-[#8bc349]" /> Eco-Cafeteria
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#d4e7d8] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#8bc349]" /> Modern Assembly Hall
                  </span>
                </div>
              </div>

              {/* Transit & Travel Guidance */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#034d20]">
                  Getting to Margilan:
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-[#d4e7d8] flex items-start gap-3 shadow-xs">
                    <Train className="w-4 h-4 text-[#034d20] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#034d20] block">By Train (Afrosiyob / Sharq):</strong>
                      Direct express rail connection from Tashkent Central to Margilan Railway Station (~4.5 hours through Kamchik Pass).
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#d4e7d8] flex items-start gap-3 shadow-xs">
                    <Bus className="w-4 h-4 text-[#034d20] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#034d20] block">By Air / Local Taxi:</strong>
                      Fergana International Airport (FEG) is just 15 minutes away from the specialized school venue.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#034d20] text-white text-xs space-y-1">
              <span className="font-bold text-[#8bc349] block">Delegate Assistance Desk:</span>
              <span>Shuttle transport will be organized from Margilan Railway Station on November 11 & 12 morning.</span>
            </div>
          </div>

          {/* Right Map Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border-2 border-[#d4e7d8] shadow-lg min-h-[380px] relative bg-gray-100">
            <iframe
              id="google-maps-iframe"
              title="Margilan Specialized School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48609.43108992019!2d71.70014798319088!3d40.47271928096236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb8346e4c7d0d1%3A0x6b6bc7c3e536c4b2!2sMargilan%2C%20Fergana%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#d4e7d8] shadow-md text-xs font-bold text-[#034d20] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>Margilan, Fergana Region, Uzbekistan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
