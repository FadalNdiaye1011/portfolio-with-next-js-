import React from 'react'

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md py-4 text-white">
    <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                <span className="font-bold text-lg">FD</span>
            </div>
            <span className="font-bold text-xl">FadalDev</span>
        </div>
        <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-purple-400 transition-colors" data-i18n="home">Accueil</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors" data-i18n="projects">Projets</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors" data-i18n="skills">Compétences</a>
            <a href="#about" className="hover:text-purple-400 transition-colors" data-i18n="about">À propos</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors" data-i18n="contact">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
            <select id="language-switcher" className="bg-slate-800 text-white px-2 py-1 rounded">
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
            </select>
        </div>
    </div>
</nav>
  )
}

export default NavBar