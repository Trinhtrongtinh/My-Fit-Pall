import Link from 'next/link'

const processSteps = [
  {
    phase: 'Needfinding',
    artifacts: [
      { name: 'Slides PDF', url: 'https://example.com/needfinding-pdf' },
      { name: 'Slides PPTX', url: 'https://example.com/needfinding-pptx' },
    ],
  },
  {
    phase: 'Point of Views & Experience Prototypes',
    artifacts: [
      { name: 'Slides PDF', url: 'https://example.com/pov-pdf' },
      { name: 'Slides PPTX', url: 'https://example.com/pov-pptx' },
    ],
  },
  {
    phase: 'Concept Video',
    artifacts: [
      { name: 'Video YouTube', url: 'https://example.com/concept-youtube' },
      { name: 'Video MP4', url: 'https://example.com/concept-mp4' },
      { name: 'Slides PDF', url: 'https://example.com/concept-pdf' },
      { name: 'Slides PPTX', url: 'https://example.com/concept-pptx' },
    ],
  },
  {
    phase: 'Low-Fidelity Prototype',
    artifacts: [
      { name: 'Report PDF', url: 'https://example.com/low-fi-report' },
      { name: 'Slides PDF', url: 'https://example.com/low-fi-pdf' },
      { name: 'Slides PPTX', url: 'https://example.com/low-fi-pptx' },
    ],
  },
  {
    phase: 'Medium-Fidelity Prototype',
    artifacts: [
      { name: 'Prototype Link', url: 'https://example.com/med-fi-prototype' },
      { name: 'Prototype README', url: 'https://example.com/med-fi-readme' },
      { name: 'Slides PDF', url: 'https://example.com/med-fi-pdf' },
      { name: 'Slides PPTX', url: 'https://example.com/med-fi-pptx' },
    ],
  },
  {
    phase: 'Group Heuristic Evaluation',
    artifacts: [
      { name: 'Report PDF', url: 'https://example.com/heuristic-eval' },
    ],
  },
  {
    phase: 'High-Fidelity Prototype',
    artifacts: [
      { name: 'Prototype Link', url: 'https://example.com/high-fi-prototype' },
      { name: 'Prototype README', url: 'https://example.com/high-fi-readme' },
      { name: 'Demo YouTube', url: 'https://example.com/high-fi-youtube' },
      { name: 'Demo MP4', url: 'https://example.com/high-fi-mp4' },
      { name: 'Slides PDF', url: 'https://example.com/high-fi-pdf' },
      { name: 'Slides PPTX', url: 'https://example.com/high-fi-pptx' },
    ],
  },
  {
    phase: 'Poster & Pitch Slide',
    artifacts: [
      { name: 'Poster PDF', url: 'https://example.com/poster-pdf' },
      { name: 'Poster Source File (Canva)', url: 'https://example.com/poster-canva' },
      { name: 'Pitch Slide PDF', url: 'https://example.com/pitch-pdf' },
      { name: 'Pitch Slide PPTX', url: 'https://example.com/pitch-pptx' },
    ],
  },
  {
    phase: 'Final Report',
    artifacts: [
      { name: 'Report PDF', url: 'https://example.com/final-report' },
    ],
  },
]

export function DesignProcessSection() {
  return (
    <section 
      id="process" 
      className="min-h-screen flex items-center bg-[#E5F3FF] px-4 py-16"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#3D8977] mb-12">Design Process</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#3D8977] text-white">
                <th className="border border-[#3D8977] p-2 text-left">Phase</th>
                <th className="border border-[#3D8977] p-2 text-left">Artifacts</th>
              </tr>
            </thead>
            <tbody>
              {processSteps.map((step, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                  <td className="border border-[#3D8977] p-2">{step.phase}</td>
                  <td className="border border-[#3D8977] p-2">
                    {step.artifacts.map((artifact, artifactIndex) => (
                      <span key={artifactIndex}>
                        <Link 
                          href={artifact.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {artifact.name}
                        </Link>
                        {artifactIndex < step.artifacts.length - 1 && ' • '}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

