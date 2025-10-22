import DecorHeader from '@/components/DecorHeader'
import SectionHeader from '@/components/SectionHeader'
import React from 'react'

function Project() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <DecorHeader/>
    <div className="container mx-auto px-4">
        <SectionHeader
            subtitle="Portfolio"
            title="Mes Projets Récents"
            description="Une sélection de mes travaux les plus récents, combinant esthétique et performance technique"
            />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="card-3d bg-slate-800 rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gradient-to-r from-purple-900 to-pink-900 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center">
                            <div className="text-5xl gradient-text font-bold">3D</div>
                        </div>
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Expérience Immersive</h3>
                    <p className="text-gray-400 mb-4">Visualisation 3D interactive pour une marque de technologie utilisant Three.js et WebGL.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-xs rounded-full">Three.js</span>
                        <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded-full">WebGL</span>
                        <span className="px-2 py-1 bg-pink-900/30 text-pink-400 text-xs rounded-full">GSAP</span>
                    </div>
                    <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                        Voir le projet
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
            
            <div className="card-3d bg-slate-800 rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gradient-to-r from-indigo-900 to-blue-900 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-white/10 backdrop-blur-sm h-16 w-16 rounded-lg"></div>
                            <div className="bg-white/10 backdrop-blur-sm h-16 w-16 rounded-lg"></div>
                            <div className="bg-white/10 backdrop-blur-sm h-16 w-16 rounded-lg"></div>
                            <div className="bg-white/20 backdrop-blur-sm h-16 w-16 rounded-lg flex items-center justify-center text-white text-xl font-bold">UI</div>
                        </div>
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Dashboard Analytique</h3>
                    <p className="text-gray-400 mb-4">Interface utilisateur réactive avec des visualisations de données avancées et animations fluides.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-indigo-900/30 text-indigo-400 text-xs rounded-full">React</span>
                        <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-xs rounded-full">D3.js</span>
                        <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded-full">Tailwind</span>
                    </div>
                    <a href="#" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors">
                        Voir le projet
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
            
            <div className="card-3d bg-slate-800 rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gradient-to-r from-fuchsia-900 to-violet-900 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                            <div className="w-20 h-36 bg-white/10 backdrop-blur-sm rounded-lg"></div>
                            <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-dashed border-white/30 rounded flex items-center justify-center">
                                <span className="text-3xl">📱</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Application Mobile</h3>
                    <p className="text-gray-400 mb-4">Application progressive avec animations fluides et interfaces minimalistes.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-violet-900/30 text-violet-400 text-xs rounded-full">React Native</span>
                        <span className="px-2 py-1 bg-fuchsia-900/30 text-fuchsia-400 text-xs rounded-full">Reanimated</span>
                        <span className="px-2 py-1 bg-red-900/30 text-red-400 text-xs rounded-full">API Rest</span>
                    </div>
                    <a href="#" className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                        Voir le projet
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Project