const teamMembers = [
  {
    name: 'Sarah L.',
    role: 'UX Researcher',
    image: '/placeholder.svg?height=200&width=200'
  },
  {
    name: 'Michael R.',
    role: 'Product Manager',
    image: '/placeholder.svg?height=200&width=200'
  },
  {
    name: 'Emma T.',
    role: 'Software Engineer',
    image: '/placeholder.svg?height=200&width=200'
  }
]

export function TeamSection() {
  return (
    <section 
      id="team" 
      className="min-h-screen flex items-center bg-[#F87B73] px-4"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-white/90">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

