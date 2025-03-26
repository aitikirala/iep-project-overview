// Updated page.tsx to integrate DocumentPipeline into a dedicated section
import Header from "components/Header";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Accordion from "components/Accordion";
import Download from "components/Download";
import DocumentPipeline from "components/DocumentPipeline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <DocumentPipeline />
        <Section
          leftHalf={<Accordion items={[
            { title: "Phase 1: Template Setup", content: "Create labeled templates and train models on incoming documents." },
            { title: "Phase 2: Developer-in-the-loop", content: "Validate outputs, refine logic, and ensure data quality." },
            { title: "Phase 3: Business User Flow", content: "Train and deploy models via UI, without developer dependency." }
          ]} />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Phased AI Integration
              </h2>
              <p className="text-xl font-light">
                Our pipeline evolves from setup to advanced AI with feedback loops, giving full control to both developers and business users.
              </p>
            </div>
          }
        />
        <Customers />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
