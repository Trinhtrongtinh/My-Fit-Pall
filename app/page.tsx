import { FeaturesSection } from '@/components/features-section'
import { DemoSection } from '@/components/demo-section'
import { DesignProcessSection } from '@/components/design-process-section'
import { TeamSection } from '@/components/team-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div>
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center bg-[#E5F3FF] px-4"
      >
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-[#3D8977] mb-6">
            grow together.
          </h1>
          <p className="text-xl text-gray-600">
            Nurtue exists to improve the relationship between parents and
            their children through healthy communication habits, guided
            conflict resolution, and communal support.
          </p>
        </div>
      </section>

      <section 
        id="concept" 
        className="min-h-screen flex items-center bg-[#F87B73] px-4"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Concept</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-4">
              <p>
                Nurtue connects parents to a supportive community of experts and
                fellow parents, promotes effective communication via interactive
                modules, and guides parents through healthy conflict resolution.
              </p>
            </div>
            <div className="aspect-video bg-white/10 rounded-lg">
              {/* Video placeholder */}
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />

      <DemoSection />

      <DesignProcessSection />

      <TeamSection />

      <Footer />
    </div>
  )
}

