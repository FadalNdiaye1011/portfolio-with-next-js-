import DecorHeader from '@/components/DecorHeader'
import SectionHeader from '@/components/SectionHeader'
import React from 'react'

function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
         <DecorHeader/>
        
        <div className="container mx-auto px-4 relative z-10">
            <SectionHeader 
            subtitle="Expertise"
            title="Mes Compétences"
            description="Combinant créativité et expertise technique pour créer des expériences web mémorables."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">Développement Frontend</h3>
                    <p className="text-gray-400 mb-5">Création d'interfaces utilisateur réactives et hautement interactives avec les technologies modernes.</p>
                    <ul className="space-y-2">
                        <li className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            HTML / CSS / JavaScript
                        </li>
                        <li className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            Angular / React
                        </li>
                        <li className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            Bootstrap / Tailwind CSS
                        </li>
                        <li className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            TypeScript
                        </li>
                    </ul>
                </div>
                
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Développement Backend</h3>
                    <p className="text-gray-400 mb-5">Développement de solutions back-end robustes et évolutives pour des applications web et mobiles.</p>
                    <ul className="space-y-2">
                        <li className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            PHP / Laravel
                        </li>
                        <li className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            SQL / Bases de données
                        </li>
                        <li className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            API REST
                        </li>
                        <li className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            Déploiement et hébergement
                        </li>
                    </ul>
                </div>
                
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-pink-500/30 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-pink-500/20 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-pink-400 transition-colors">Conception et Modélisation</h3>
                    <p className="text-gray-400 mb-5">Conception d'architectures logicielles et modélisation de bases de données pour des applications performantes.</p>
                    <ul className="space-y-2">
                        <li className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                            UML
                        </li>
                        <li className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                            Maquettage (Figma, Canva)
                        </li>
                        <li className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                            Gestion de projet (Trello)
                        </li>
                        <li className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                            Tests et débogage (Postman, Insomnia)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills