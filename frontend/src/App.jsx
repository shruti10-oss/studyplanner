// src/App.jsx

import { useState } from "react";
import StudyForm from "./components/StudyForm";
import PlanTable from "./components/PlanTable";

function App() {
  const [plan, setPlan] = useState([]);

  const handleGeneratePlan = async (subjects) => {
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + "/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subjects }),
      });
      const data = await res.json();
      setPlan(data.plan);
    } catch (error) {
      console.error("Error generating plan:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">📘 Study Planner</h1>
        <StudyForm onGeneratePlan={handleGeneratePlan} />
        <PlanTable plan={plan} />
      </div>
    </div>
  );
}

export default App;

