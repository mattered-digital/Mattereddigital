import AboutSection from "@/components/AboutSection";
import AgencyStatement from "@/components/AgencyStatement";
import BrandGrid from "@/components/BrandGrid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestProjects from "@/components/LatestProjects";
import Preloader from "@/components/Preloader";
import ProjectTable from "@/components/ProjectTable";
import ServicesAccordion from "@/components/ServicesAccordion";
import ShowreelSection from "@/components/ShowreelSection";

export default function Page() {
  return (
    <>
      <Preloader />
      <main className="relative overflow-hidden pt-24">
        <Hero />
        <LatestProjects />
        <AgencyStatement />
        <ProjectTable />
        <AboutSection />
        <ServicesAccordion />
        <ShowreelSection />
        <BrandGrid />
      </main>
      <Footer />
    </>
  );
}
