'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const features = [
  {
    title: 'Community',
    description: 'Share your parenting struggles to get advice from fellow parents and experts in the field.',
    image: '/placeholder.svg?height=600&width=300&text=Community'
  },
  {
    title: 'Conflict Resolution',
    description: 'Resolve conflicts with your child in a peaceful and guided manner.',
    image: '/placeholder.svg?height=600&width=300&text=Conflict+Resolution'
  },
  {
    title: 'Practice',
    description: 'Practice effective language through interactive quizzes.',
    image: '/placeholder.svg?height=600&width=300&text=Practice'
  }
]

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section 
      id="features" 
      className="min-h-screen flex items-center bg-[#E5F3FF] px-4"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#3D8977] mb-12">Features</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={cn(
                  "bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-all",
                  activeFeature === index ? "ring-2 ring-[#3D8977]" : "hover:shadow-xl"
                )}
                onClick={() => setActiveFeature(index)}
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="relative">
            {features.map((feature, index) => (
              <img
                key={feature.title}
                src={`resources/image/iphone3.png`}
                alt={`${feature.title} Screenshot`}
                className={cn(
                  "rounded-lg shadow-xl mx-auto transition-opacity duration-300 absolute top-0 left-0 right-0",
                  activeFeature === index ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

