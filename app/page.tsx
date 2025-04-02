// Updated page.tsx to integrate DocumentPipeline into a dedicated section
import Header from "components/Header";
import Footer from "components/Footer";
import Accordion from "components/Accordion";
import DocumentPipeline from "components/DocumentPipeline";
import Flowchart from "components/Flowchart";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <DocumentPipeline />
        <Flowchart />
      </main>
      <Footer />
    </div>
  );
}
