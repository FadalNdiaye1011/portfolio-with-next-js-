import React from 'react'

function Accueil() {
  return (
    <section id="home" className="hero-bg min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl pulse-effect"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full filter blur-3xl pulse-effect" style={{animationDelay: "1s"}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between relative">
        <div className="lg:w-1/2 z-10 mb-12 lg:mb-0">
          <div className="typing text-lg text-purple-400 mb-2" id="typing-text">Développeur Full-Stack</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Je crée des <span className="gradient-text">solutions</span> numériques impressionnantes
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Spécialisé dans le développement d'applications web et mobiles, avec une expertise en front-end et back-end.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-effect bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center">
              <span>Voir mes projets</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#contact" className="border border-purple-500 hover:border-purple-400 text-purple-400 px-8 py-3 rounded-full font-medium transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="floating-setup relative w-full max-w-lg mx-auto perspective-card" id="pc-setup">
            
            <div className="pc-part w-64 h-80 bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg shadow-xl absolute right-0 transform -rotate-3 glow-effect">
              
              <div className="absolute top-2 left-2 w-20 h-76 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden">
                <div className="absolute top-5 left-1 w-2 h-10 bg-purple-500/60 rounded-full pulse-effect"></div>
                <div className="absolute top-20 left-4 w-2 h-10 bg-blue-500/60 rounded-full pulse-effect" style={{animationDelay: "0.2s"}}></div>
                <div className="absolute top-35 left-8 w-2 h-10 bg-cyan-500/60 rounded-full pulse-effect" style={{animationDelay: "0.5s"}}></div>
              </div>
              
              <div className="absolute top-5 right-6 w-12 h-12 rounded-full border-4 border-t-purple-500 border-r-blue-500 border-b-cyan-400 border-l-pink-500 animate-spin"></div>
              <div className="absolute top-20 right-6 w-12 h-12 rounded-full border-4 border-t-purple-500 border-r-blue-500 border-b-cyan-400 border-l-pink-500 animate-spin" style={{animationDirection: "reverse", animationDuration: "3s"}}></div>
              <div className="absolute top-35 right-6 w-12 h-12 rounded-full border-4 border-t-purple-500 border-r-blue-500 border-b-cyan-400 border-l-pink-500 animate-spin" style={{animationDuration: "4s"}}></div>
            </div>
            
            <div className="pc-part w-80 h-48 bg-black rounded-lg shadow-lg absolute left-0 top-0 transform -rotate-6">
              
              <div className="w-72 h-40 mx-auto mt-4 bg-slate-900 rounded overflow-hidden">
              <div className="text-xs font-mono p-2 text-gray-300 overflow-hidden">
                    <span className="text-purple-400">function</span> <span className="text-yellow-300">createAnimation</span>() {'{'}
                    <br/>
                    &nbsp;&nbsp;<span className="text-cyan-400">const</span> tl = <span className="text-purple-400">new</span> gsap.timeline();
                    <br/>
                    &nbsp;&nbsp;tl.<span className="text-green-400">from</span>(<span className="text-orange-300">'.hero-title'</span>, {'{'}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;y: <span className="text-blue-300">100</span>,
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;opacity: <span className="text-blue-300">0</span>,
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;duration: <span className="text-blue-300">1.5</span>
                    <br/>
                    &nbsp;&nbsp;{'}'});
                    <br/>
                    &nbsp;&nbsp;<span className="text-purple-400">return</span> tl;
                    <br/>
                    {'}'}
                    </div>
              </div>
              
              <div className="w-10 h-8 bg-slate-800 absolute -bottom-8 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-20 h-2 bg-slate-700 absolute -bottom-10 left-1/2 transform -translate-x-1/2 rounded"></div>
            </div>
            
            <div className="pc-part w-56 h-16 bg-slate-800 rounded absolute left-12 bottom-10 transform -rotate-6">
              <div className="grid grid-cols-10 gap-1 p-2">
                <div className="bg-slate-700 rounded h-2"></div>
                <div className="bg-slate-700 rounded h-2"></div>
                <div className="bg-purple-800 rounded h-2"></div>
                <div className="bg-slate-700 rounded h-2"></div>
                <div className="bg-slate-700 rounded h-2"></div>
                <div className="bg-blue-800 rounded h-2"></div>
                <div className="bg-slate-700 rounded h-2"></div>
                <div className="bg-slate-700 rounded h-2"></div>
                <div className="bg-slate-700 rounded h-2"></div>
                <div className="bg-pink-800 rounded h-2"></div>
                <div className="bg-slate-700 rounded h-2"></div>
                <div className="bg-cyan-800 rounded h-2"></div>
                <div className="bg-slate-700 rounded h-2"></div>
                <div className="bg-slate-700 rounded h-2"></div>
                <div className="bg-slate-700 rounded h-2"></div>
                <div className="bg-slate-700 rounded h-2"></div>
                <div className="bg-purple-800 rounded h-2"></div>
                <div className="bg-slate-700 rounded h-2"></div>
                <div className="bg-slate-700 rounded h-2"></div>
                <div className="bg-slate-700 rounded h-2"></div>
              </div>
            </div>
            
            <div className="pc-part w-10 h-16 bg-slate-800 rounded-full absolute right-32 bottom-12 transform -rotate-12">
              <div className="w-2 h-2 bg-purple-500 rounded-full absolute top-4 left-1/2 transform -translate-x-1/2 pulse-effect"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Découvrir plus</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Accueil