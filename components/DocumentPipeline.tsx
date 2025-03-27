'use client';

import React, { useState } from "react";
import { FaFileAlt, FaCog, FaRobot, FaCheckCircle, FaChartLine, FaUsers, FaChevronDown } from "react-icons/fa";

const pipelineSteps = [
  {
    icon: FaFileAlt,
    title: "Form Intake + Scanner Integration",
    description: "Bring in forms from different channels and upload to Google Storage",
    details: "We use Google Cloud Functions to monitor uploads, Cloud Storage buckets for intake, and OCR-compatible scanners for integration."
  },
  {
    icon: FaRobot,
    title: "DocAI Processing",
    description: "AI models extract data from documents using DocAI processors, bounding boxes, and labeling tools.",
    details: "Google Document AI with custom-trained parsers is used. Bounding box labeling is done with AutoML tools. JSON output is post-processed using Node.js."
  },
  {
    icon: FaCog,
    title: "Validation & Business Rules",
    description: "Automated validation, confidence thresholds, and business logic rules ensure correct formatting and structure.",
    details: "Rules are defined in a rule engine (e.g. JSONLogic or custom JS rules), and confidence thresholds are tuned with historical QA data."
  },
  {
    icon: FaUsers,
    title: "Human-in-the-loop Action Center",
    description: "Flagged data or exceptions are reviewed by human validators for quality control and training feedback.",
    details: "Validators use a React-based review UI powered by Firebase Auth and Firestore for logging actions and feedback data."
  },
  {
    icon: FaChartLine,
    title: "Model Feedback & Retraining",
    description: "Real-time feedback, error reviews, and edge cases improve model accuracy and are used to retrain weak models.",
    details: "Feedback data is batched and used to retrain models using TensorFlow pipelines deployed on Vertex AI."
  },
  {
    icon: FaCheckCircle,
    title: "Structured Data Output",
    description: "Once validated, the data is output in a structured format for downstream workflows or storage.",
    details: "Output is stored in BigQuery or forwarded to downstream APIs in JSON/CSV/XML format. Audit logs are saved for compliance."
  },
];

const DocumentPipeline: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="mt-4 p-2 border border-gray-300 dark:border-gray-600 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle details"
              >
                <FaChevronDown
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  size={16}
                />
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm font-light">
                  {step.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentPipeline;
