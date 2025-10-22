import React from 'react'

function SectionHeader({ subtitle, title, description, textColor = "text-purple-400" }) {
  return (
    <div className="text-center mb-16">
        <span className={`text-sm ${textColor} uppercase tracking-wider`}>{subtitle}</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">{title}</h2>
        <p className="max-w-xl mx-auto text-gray-400">{description}</p>
    </div>
  )
}

export default SectionHeader