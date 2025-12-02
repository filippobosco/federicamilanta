import {
  Hero,
  Intro,
  Target,
  MiciosHouse,
  Features,
  Program,
  Gallery,
  About,
  Testimonials,
  Info,
  FAQ,
  Urgency,
  ContactForm,
  Footer,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      {/* Hero - Above the fold */}
      <Hero />

      {/* Intro - Value proposition */}
      <Intro />

      {/* Target audience */}
      <Target />

      {/* MICIO'S HOUSE - La villa */}
      <MiciosHouse />

      {/* Features - What's included */}
      <Features />

      {/* Program - Day by day */}
      <Program />

      {/* Gallery */}
      <Gallery />

      {/* About Federica */}
      <About />

      {/* Testimonials */}
      <Testimonials />

      {/* Practical info */}
      <Info />

      {/* Urgency / Scarcity */}
      <Urgency />

      {/* Contact form */}
      <ContactForm />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </>
  )
}

