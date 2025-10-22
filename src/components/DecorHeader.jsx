import React from 'react'

function DecorHeader() {
  return (
    <div className="absolute inset-0">
        {/* Éléments décoratifs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
        
        {/* Particules flottantes */}
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-indigo-400 rounded-full opacity-50 animate-float-reverse"></div>
    </div>

  )
}

export default DecorHeader