import React from 'react'
import Image from 'next/image'
import SectionHeader from '@/components/SectionHeader'
import DecorHeader from '@/components/DecorHeader'

function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <DecorHeader/>
        
        <div className="container mx-auto px-4 relative z-10">
            <SectionHeader
            subtitle="À propos"
            title="Qui suis-je ?"
            description="Je suis un développeur Full-Stack passionné par la création d'applications web et mobiles innovantes."
            />
            
            {/* Photo profile avec carte flottante */}
            <div className="relative max-w-md mx-auto mb-16 md:mb-24">
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative z-10">
                    <div className="w-full h-full rounded-full border-4 border-purple-500 p-2 rotate-3 hover:rotate-0 transition-transform duration-300">
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-indigo-400">
                            {/* Remplacez le src avec votre image */}
                            <Image 
                                src="/photo/myProfil.png" 
                                alt="Votre Nom" 
                                width={320} 
                                height={320}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
                
                {/* Cartes flottantes avec détails personnels */}
                <div className="absolute -bottom-4 -left-4 md:-left-12 bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 rounded-lg shadow-lg transform -rotate-3 hover:-rotate-6 transition-transform duration-300">
                    <p className="text-white text-sm font-medium">2 ans d'expérience</p>
                </div>
                <div className="absolute -top-4 -right-4 md:-right-12 bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 rounded-lg shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300">
                    <p className="text-white text-sm font-medium">5+ projets réalisés</p>
                </div>
                
                {/* Cercles décoratifs */}
                <div className="absolute -z-10 bottom-0 left-0 w-20 h-20 rounded-full bg-purple-500/30 filter blur-md"></div>
                <div className="absolute -z-10 top-8 right-4 w-12 h-12 rounded-full bg-blue-500/20 filter blur-md"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 transform transition-transform hover:scale-105 duration-300">
                    <h3 className="text-2xl font-bold mb-6 gradient-text">Mon Parcours</h3>
                    <p className="text-gray-400 mb-6">
                        Je suis un développeur Full-Stack récemment diplômé, passionné par la programmation tant côté front-end que back-end. Je maîtrise les langages HTML, CSS, JavaScript et TypeScript, ainsi que les frameworks Angular, Bootstrap et Tailwind. De plus, je possède des compétences solides en développement back-end avec PHP et le framework Laravel.
                    </p>
                    <p className="text-gray-400 mb-6">
                        J'ai travaillé en tant que stagiaire chez Orange Finance Mobile Sénégal et Illimitis, où j'ai contribué à des projets innovants tout en perfectionnant mes compétences techniques.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-3 py-1 bg-indigo-900/40 text-indigo-300 text-sm rounded-full">HTML</span>
                        <span className="px-3 py-1 bg-purple-900/40 text-purple-300 text-sm rounded-full">CSS</span>
                        <span className="px-3 py-1 bg-blue-900/40 text-blue-300 text-sm rounded-full">JavaScript</span>
                        <span className="px-3 py-1 bg-pink-900/40 text-pink-300 text-sm rounded-full">PHP</span>
                        <span className="px-3 py-1 bg-green-900/40 text-green-300 text-sm rounded-full">Laravel</span>
                    </div>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 transform transition-transform hover:scale-105 duration-300">
                    <h3 className="text-2xl font-bold mb-6 gradient-text">Mes Diplômes</h3>
                    <ul className="space-y-6">
                        <li>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-white">Licence en Développement Web/Mobiles</h4>
                                    <p className="text-gray-400">Université Cheikh Hamidou Kane - Dakar (2019 - 2022)</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-white">Certificat en Développement Web/Mobiles</h4>
                                    <p className="text-gray-400">Sonatel Academy - Dakar (2023 - 2024)</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    
                    <h3 className="text-2xl font-bold mt-10 mb-6 gradient-text">Centres d'Intérêt</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center p-3 bg-slate-700/30 rounded-lg">
                            <div className="w-8 h-8 flex items-center justify-center bg-indigo-600/30 rounded-lg text-indigo-300">
                                🎮
                            </div>
                            <span className="ml-3 text-gray-300">Jeux vidéo</span>
                        </div>
                        <div className="flex items-center p-3 bg-slate-700/30 rounded-lg">
                            <div className="w-8 h-8 flex items-center justify-center bg-cyan-600/30 rounded-lg text-cyan-300">
                                📚
                            </div>
                            <span className="ml-3 text-gray-300">Lecture</span>
                        </div>
                        <div className="flex items-center p-3 bg-slate-700/30 rounded-lg">
                            <div className="w-8 h-8 flex items-center justify-center bg-purple-600/30 rounded-lg text-purple-300">
                                🏃‍♂️
                            </div>
                            <span className="ml-3 text-gray-300">Sport</span>
                        </div>
                        <div className="flex items-center p-3 bg-slate-700/30 rounded-lg">
                            <div className="w-8 h-8 flex items-center justify-center bg-pink-600/30 rounded-lg text-pink-300">
                                🎵
                            </div>
                            <span className="ml-3 text-gray-300">Musique</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About