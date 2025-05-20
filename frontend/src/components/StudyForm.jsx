// src/components/StudyForm.jsx

import { useState } from "react";

export default function StudyForm({ onGeneratePlan }) {
  const [subjects, setSubjects] = useState([{ name: "", hours: "", examDate: "" }]);

  const handleChange = (index, field, value) => {
    const newSubjects = [...subjects];
    newSubjects[index][field] = value;
    setSubjects(newSubjects);
  };

  const addSubject = () => {
    setSubjects([...subjects, { name: "", hours: "", examDate: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGeneratePlan(subjects);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold">Enter Your Subjects</h2>
      {subjects.map((subject, index) => (
        <div key={index} className="grid grid-cols-3 gap-2">
          <input
            type="text"
            placeholder="Subject"
            value={subject.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="number"
            placeholder="Hours"
            value={subject.hours}
            onChange={(e) => handleChange(index, "hours", e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="date"
            value={subject.examDate}
            onChange={(e) => handleChange(index, "examDate", e.target.value)}
            className="border p-2 rounded"
            required
          />
        </div>
      ))}
      <div className="flex space-x-4">
        <button type="button" onClick={addSubject} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Subject
        </button>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Generate Plan
        </button>
      </div>
    </form>
  );
}
