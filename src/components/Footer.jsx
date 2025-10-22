import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-900 py-10 border-t border-slate-800">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold gradient-text">Mouhamadou Fadal Ndiaye</h2>
                    <p className="text-gray-400 mt-2">Développeur Full-Stack</p>
                </div>
                
                <div className="mb-6 md:mb-0">
                    <ul className="flex space-x-6">
                        <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Accueil</a></li>
                        <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projets</a></li>
                        <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">Compétences</a></li>
                        <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">À propos</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-slate-800 mt-8 pt-8 text-center">
                <p className="text-gray-500">© 2024 Mouhamadou Fadal Ndiaye. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer