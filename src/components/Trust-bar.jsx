import { ShieldCheck, Hammer, Building2, HardHat } from "lucide-react"

const TrustBar = () => {
  return (
    <section className="bg-white py-10 border-b">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        <div className="flex flex-col items-center gap-2 transition hover:scale-105">
          <Building2 className="w-6 h-6 text-blue-600" />
          <p className="font-semibold">15+ Years Experience</p>
        </div>

        <div className="flex flex-col items-center gap-2 transition hover:scale-105">
          <Hammer className="w-6 h-6 text-blue-600" />
          <p className="font-semibold">500+ Projects</p>
        </div>

        <div className="flex flex-col items-center gap-2 transition hover:scale-105">
          <ShieldCheck className="w-6 h-6 text-blue-600" />
          <p className="font-semibold">Licensed & Insured</p>
        </div>

        <div className="flex flex-col items-center gap-2 transition hover:scale-105">
          <HardHat className="w-6 h-6 text-blue-600" />
          <p className="font-semibold">Safety Guaranteed</p>
        </div>

      </div>
    </section>
  )
}

export default TrustBar
