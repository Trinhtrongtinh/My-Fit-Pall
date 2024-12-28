'use client'

export function smoothScroll(element: HTMLElement) {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export function handleDoubleClick(id: string) {
  const element = document.getElementById(id)
  if (element) {
    smoothScroll(element)
  }
}

