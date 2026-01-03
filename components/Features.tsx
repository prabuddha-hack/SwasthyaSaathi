import {
  HeartPulse,
  Languages,
  MapPin,
  Stethoscope,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    name: "Swasthya Mitra",
    description:
      "An AI-powered health assistant that understands symptoms and provides safe medical guidance in simple language, helping rural users take informed health decisions.",
    icon: HeartPulse,
  },
  {
    name: "Multilingual Healthcare Access",
    description:
      "Users can ask health questions in their native Indian languages and receive responses in the same language, removing communication barriers in healthcare.",
    icon: Languages,
  },
  {
    name: "Map",
    description:
      "Locate nearby hospitals, clinics, and primary health centers using real-time location data, ensuring quick access to care during emergencies.",
    icon: MapPin,
  },
  {
    name: "Swasthya Connect",
    description:
      "Discover and connect with verified doctors and specialists, including urban experts, enabling rural patients to book consultations with ease.",
    icon: Stethoscope,
  },
  {
    name: "Swasthya View",
    description:
      "Interactive health insights and visualizations highlighting urban-rural healthcare gaps, helping policymakers and NGOs make data-driven decisions.",
    icon: BarChart3,
  },
  {
    name: "Trusted & Ethical AI",
    description:
      "Built with strong safety guidelines, clear medical disclaimers, and privacy-first design to ensure responsible and trustworthy healthcare assistance.",
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section className="container px-4 space-y-12 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-2xl leading-[1.2] sm:text-3xl md:text-5xl">
          Transforming Healthcare for Rural India
        </h2>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground">
          Swasthya Saathi leverages AI, multilingual support, and location-based
          services to bring accessible, reliable, and affordable healthcare to
          underserved communities.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative overflow-hidden rounded-lg border bg-background p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h3 className="font-bold text-lg sm:text-xl">{feature.name}</h3>
            </div>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
