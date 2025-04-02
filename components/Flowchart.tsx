'use client';

import React from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  { id: "1", type: "input", data: { label: "Intake Processes" }, position: { x: 50, y: 50 } },
  { id: "2", data: { label: "Pre-Processing (AWS)" }, position: { x: 250, y: 50 } },
  { id: "3", data: { label: "Workflow" }, position: { x: 450, y: 50 } },
  { id: "4", data: { label: "Validation (AWS)" }, position: { x: 650, y: 50 } },
  { id: "5", type: "output", data: { label: "Post-Processing" }, position: { x: 850, y: 50 } },
  { id: "6", data: { label: "Extraction API Call" }, position: { x: 250, y: 150 } },
  { id: "7", data: { label: "Split Batch/Document" }, position: { x: 450, y: 150 } },
  { id: "8", data: { label: "Classify" }, position: { x: 650, y: 150 } },
  { id: "9", data: { label: "Extract" }, position: { x: 850, y: 150 } },
  { id: "10", data: { label: "Human Validation" }, position: { x: 450, y: 250 } },
];

const edges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
  { id: "e2-6", source: "2", target: "6" },
  { id: "e6-7", source: "6", target: "7" },
  { id: "e7-8", source: "7", target: "8" },
  { id: "e8-9", source: "8", target: "9" },
  { id: "e7-10", source: "7", target: "10" },
];

const Flowchart = () => {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Process Flowchart
        </h2>
        <div className="h-[500px] bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-200">
          <ReactFlow nodes={nodes} edges={edges} fitView>
            <Controls />
            <Background color="#895AFC" gap={16} />
          </ReactFlow>
        </div>
      </div>
    </section>
  );
};

export default Flowchart;
