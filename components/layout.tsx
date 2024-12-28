'use client'

import { useActiveSection } from '@/hooks/use-active-section'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: 'home' },
  { name: 'Concept', href: 'concept' },
  { name: 'Features', href: 'features' },
  { name: 'Demo', href: 'demo' },
  { name: 'Process', href: 'process' },
  { name: 'Team', href: 'team' },
]

export function Layout({ children }: { children: React.ReactNode }) {
  const activeSection = useActiveSection(navigation.map(nav => nav.href))

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#E5F3FF]">
      <header className="fixed top-0 w-full z-50 bg-[#3D8977] text-white">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2"
            >
              <img 
                src="/placeholder.svg?height=32&width=32" 
                alt="Nurtue Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-semibold">nurtue</span>
            </button>
            <nav className="hidden md:flex gap-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "relative py-2 text-sm font-medium transition-colors",
                    "hover:text-white/80",
                    activeSection === item.href ? "text-white" : "text-white/70",
                  )}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <span className="absolute -bottom-[1px] left-0 h-0.5 w-full bg-white" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
}

