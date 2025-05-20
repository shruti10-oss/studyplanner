// src/components/PlanTable.jsx

export default function PlanTable({ plan }) {
  if (!plan || plan.length === 0) return null;

  return (
    <div className="mt-6 p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">Study Plan</h2>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Subject</th>
            <th className="border px-4 py-2">Hours</th>
          </tr>
        </thead>
        <tbody>
          {plan.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.date}</td>
              <td className="border px-4 py-2">{item.subject}</td>
              <td className="border px-4 py-2">{item.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
