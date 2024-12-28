'use client'

import { useState, useEffect } from 'react'

export function useActiveSection(sections: string[]) {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observers = sections.map(section => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(section)
            }
          })
        },
        {
          rootMargin: '-50% 0px', // Triggers when section is in middle of viewport
          threshold: 0
        }
      )

      const element = document.getElementById(section)
      if (element) {
        observer.observe(element)
      }

      return { observer, section }
    })

    return () => {
      observers.forEach(({ observer, section }) => {
        const element = document.getElementById(section)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [sections])

  return activeSection
}

