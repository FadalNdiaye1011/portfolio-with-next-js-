"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import DecorHeader from '@/components/DecorHeader';

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Directrice Marketing, TechCorp",
      image: "/testimonials/person1.jpg", // Remplacez par le chemin de vos images
      text: "Un développeur exceptionnel qui a dépassé toutes nos attentes. Son expertise technique et sa créativité ont transformé notre vision en une application web remarquable. Toujours à l'écoute et réactif, c'est un plaisir de travailler avec lui."
    },
    {
      id: 2,
      name: "Thomas Lefèvre",
      role: "Fondateur, StartupInno",
      image: "/testimonials/person2.jpg",
      text: "Collaborer avec ce développeur a été une expérience incroyable. Sa compréhension approfondie de nos besoins et sa capacité à proposer des solutions innovantes ont fait toute la différence. Je recommande vivement ses services à quiconque cherche un développeur Full-Stack talentueux."
    },
    {
      id: 3,
      name: "Sophie Martin",
      role: "Chef de Projet Digital, AgenceWeb",
      image: "/testimonials/person3.jpg",
      text: "Un professionnel remarquable avec un souci du détail impressionnant. Son travail sur notre plateforme e-commerce a non seulement amélioré l'expérience utilisateur mais a également augmenté nos conversions de 45%. Un talent rare que nous continuerons certainement à solliciter."
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <DecorHeader/>
       
        <div className="container mx-auto px-4 relative z-10">
            <SectionHeader 
            subtitle="Ce qu'ils disent"
            title="Témoignages"
            description="Découvrez ce que mes clients et collaborateurs ont à dire sur mon travail et notre collaboration."
            />
            
            <div className="max-w-5xl mx-auto">
                {/* Slider de témoignages */}
                <div className="relative">
                    {/* Card témoignage */}
                    <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-slate-700/50 shadow-xl">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                            {/* Image et détails */}
                            <div className="flex flex-col items-center w-full md:w-56 shrink-0">
                                <div className="relative w-32 h-32 mb-4">
                                    <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full opacity-70 blur-sm animate-pulse-slow"></div>
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800">
                                        <Image 
                                            src={testimonials[activeIndex].image} 
                                            alt={testimonials[activeIndex].name} 
                                            width={128} 
                                            height={128}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-1">{testimonials[activeIndex].name}</h4>
                                <p className="text-sm text-purple-400">{testimonials[activeIndex].role}</p>
                                
                                <div className="mt-6 flex justify-center space-x-2">
                                    {testimonials.map((_, index) => (
                                        <button 
                                            key={index}
                                            onClick={() => setActiveIndex(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                index === activeIndex ? 'bg-purple-500 scale-125' : 'bg-slate-600'
                                            }`}
                                            aria-label={`Voir témoignage ${index + 1}`}
                                        ></button>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Texte témoignage */}
                            <div className="relative">
                                <div className="absolute -top-6 -left-4 text-6xl text-purple-500/30 font-serif">"</div>
                                <p className="text-gray-300 text-lg italic relative z-10 leading-relaxed">
                                    {testimonials[activeIndex].text}
                                </p>
                                <div className="absolute -bottom-6 -right-4 text-6xl text-purple-500/30 font-serif">"</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Boutons navigation */}
                    <button 
                        onClick={prevTestimonial}
                        className="absolute top-1/2 -left-5 md:-left-8 transform -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                        aria-label="Témoignage précédent"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <button 
                        onClick={nextTestimonial}
                        className="absolute top-1/2 -right-5 md:-right-8 transform -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                        aria-label="Témoignage suivant"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        
        {/* Ajoutez ce style pour les animations */}
        <style jsx>{`
            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
                100% { transform: translateY(0px); }
            }
            
            @keyframes float-slow {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0px); }
            }
            
            @keyframes float-reverse {
                0% { transform: translateY(0px); }
                50% { transform: translateY(15px); }
                100% { transform: translateY(0px); }
            }
            
            @keyframes pulse-slow {
                0% { opacity: 0.6; }
                50% { opacity: 0.8; }
                100% { opacity: 0.6; }
            }
            
            .animate-float {
                animation: float 6s ease-in-out infinite;
            }
            
            .animate-float-slow {
                animation: float-slow 8s ease-in-out infinite;
            }
            
            .animate-float-reverse {
                animation: float-reverse 7s ease-in-out infinite;
            }
            
            .animate-pulse-slow {
                animation: pulse-slow 3s ease-in-out infinite;
            }
        `}</style>
    </section>
  );
}

export default Testimonials;