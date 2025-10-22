"use client"
import DecorHeader from '@/components/DecorHeader'
import SectionHeader from '@/components/SectionHeader'
import React, { useState, useEffect } from 'react'

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
       <DecorHeader/>
        
        <div className="container mx-auto px-4 relative z-10">

            <SectionHeader
            subtitle="Contact"
            title="Parlons de votre projet"
            description="Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos besoins."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
                    <h3 className="text-2xl font-bold mb-6 gradient-text">Envoyez-moi un message</h3>
                    
                    <form>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nom</label>
                                <input type="text" id="name" className="w-full bg-slate-900/70 border border-slate-700 focus:border-purple-500 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300" placeholder="Votre nom"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" id="email" className="w-full bg-slate-900/70 border border-slate-700 focus:border-purple-500 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300" placeholder="votre@email.com"/>
                            </div>
                        </div>
                        
                        <div className="mb-6">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Sujet</label>
                            <input type="text" id="subject" className="w-full bg-slate-900/70 border border-slate-700 focus:border-purple-500 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300" placeholder="Sujet de votre message"/>
                        </div>
                        
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea id="message" rows="5" className="w-full bg-slate-900/70 border border-slate-700 focus:border-purple-500 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300" placeholder="Votre message..."></textarea>
                        </div>
                        
                        <button type="submit" className="btn-effect bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/20 flex items-center justify-center w-full">
                            <span>Envoyer le message</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </form>
                </div>
                
                <div className="flex flex-col justify-between">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-6 gradient-text">Informations de contact</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-purple-500/10 p-4 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-white">Email</h4>
                                    <p className="mt-1 text-gray-400">fndiaye1011@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-purple-500/10 p-4 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-white">Téléphone</h4>
                                    <p className="mt-1 text-gray-400">+221 77 224 61 27</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-purple-500/10 p-4 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-white">Localisation</h4>
                                    <p className="mt-1 text-gray-400">Dakar, Sénégal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
                        <h3 className="text-xl font-bold mb-4 gradient-text">Ma localisation</h3>
                        
                        {/* Carte interactive */}
                        <div className="w-full h-64 rounded-lg overflow-hidden mb-4 relative">
                        {/* Intégration de Google Maps avec iframe */}

                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d33133.559881515685!2d-17.372318021217016!3d14.788865622317838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2ssn!4v1740530385223!5m2!1sfr!2ssn"
                            width="100%" 
                            height=" 100%" 
                            style={{border: 0}} 
                            allowFullScreen  
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"  
                            className="absolute inset-0">
                            </iframe>
                        
    {/* Superposition avec logo et informations */}
    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-900 to-transparent">
        <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
                <p className="font-medium text-white">Dakar, Sénégal</p>
                <p className="text-xs text-gray-300">14.7167° N, 17.4677° W</p>
            </div>
        </div>
    </div>
</div>
                        
                        <div className="mt-6">
                            <h4 className="text-lg font-medium text-white mb-4">Suivez-moi</h4>
                            <div className="flex space-x-4">
                                <a href="https://github.com/fadal1011" className="bg-slate-700 hover:bg-slate-600 p-3 rounded-full transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-purple-400" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact