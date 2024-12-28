import Link from 'next/link'

export function DemoSection() {
  return (
    <section 
      id="demo" 
      className="min-h-screen flex items-center bg-[#F87B73] px-4"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Demo</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <Link 
              href="https://example.com/prototype" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#F87B73] px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              Try Prototype
            </Link>
          </div>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Nurtue Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

