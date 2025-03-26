// New component: DocumentPipeline.tsx
import React from "react";
import { FaFileAlt, FaCog, FaRobot, FaCheckCircle, FaChartLine, FaUsers } from "react-icons/fa";

const pipelineSteps = [
  {
    icon: FaFileAlt,
    title: "Form Intake + Scanner Integration",
    description:
      "Documents enter the system via scan, fax, or email. They are batched, renamed, and categorized before processing.",
  },
  {
    icon: FaRobot,
    title: "DocAI Processing",
    description:
      "AI models extract data from documents using DocAI processors, bounding boxes, and labeling tools.",
  },
  {
    icon: FaCog,
    title: "Validation & Business Rules",
    description:
      "Automated validation, confidence thresholds, and business logic rules ensure correct formatting and structure.",
  },
  {
    icon: FaUsers,
    title: "Human-in-the-loop Action Center",
    description:
      "Flagged data or exceptions are reviewed by human validators for quality control and training feedback.",
  },
  {
    icon: FaChartLine,
    title: "Model Feedback & Retraining",
    description:
      "Real-time feedback, error reviews, and edge cases improve model accuracy and are used to retrain weak models.",
  },
  {
    icon: FaCheckCircle,
    title: "Structured Data Output",
    description:
      "Once validated, the data is output in a structured format for downstream workflows or storage.",
  },
];

const DocumentPipeline: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          How Our Document Processing Pipeline Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pipelineSteps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-200 text-center"
            >
              <step.icon size={40} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 font-light">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentPipeline;
