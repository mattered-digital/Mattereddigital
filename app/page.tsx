import AgencyStatement from "@/components/AgencyStatement";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import ProjectTable from "@/components/ProjectTable";
import ServicesAccordion from "@/components/ServicesAccordion";
import ShowreelSection from "@/components/ShowreelSection";
import AboutSection from "@/components/ServicesSection";

export default function Page() {
  return (
    <>
      <Preloader />
      <main className="relative overflow-hidden">
        <Hero />
        <ProjectTable />
        <AgencyStatement />
        <ShowreelSection />
        <AboutSection />
        <ServicesAccordion />
      </main>
      <Footer />
    </>
  );
}
