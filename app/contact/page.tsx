import { Metadata } from "next";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactHeroHeading from "@/components/ContactHeroHeading";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mattered Digital. Let's build something great together. Reach us for web development, digital marketing, AI automation, and more.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Mattered",
    description: "Start your next project with Mattered Digital.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <main className="relative min-h-screen bg-black pt-32 pb-20 overflow-hidden">
        {/* Subtle background element */}
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="section-shell relative z-10">
          <div className="max-w-4xl mx-auto">
            <header className="mb-16">
              <span className="section-heading mb-4 block">Get in touch</span>
              <ContactHeroHeading />
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
              <ContactForm defaultService="Web Development" />

              <div className="space-y-12">
                <section>
                  <h3 className="text-[10px] uppercase tracking-widest text-gray-light/60 font-mono mb-6">
                    Contact Info
                  </h3>
                  <div className="space-y-4">
                    <p className="text-xl">hi@mattered.digital</p>
                    <p className="text-xl">+91 94305 58276</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-[10px] uppercase tracking-widest text-gray-light/60 font-mono mb-6">
                    Offices
                  </h3>
                  <div className="space-y-4">
                    <p className="text-xl">
                      Patna, BR
                      <br />
                      India
                    </p>
                    <p className="text-xl">Remote Worldwide</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-[10px] uppercase tracking-widest text-gray-light/60 font-mono mb-6">
                    Socials
                  </h3>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="text-xl hover:text-gray-light transition-colors">
                      Instagram
                    </a>
                    <a href="#" className="text-xl hover:text-gray-light transition-colors">
                      LinkedIn
                    </a>
                    <a href="#" className="text-xl hover:text-gray-light transition-colors">
                      X / Twitter
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
