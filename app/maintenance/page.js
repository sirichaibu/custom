// pages/maintenance.js
import Link from 'next/link';

const maintenanceItems = [
  {
    toolingNumber: 'TL-12345',
    name: 'Injection Mold A',
    lastMaintenance: '2023-05-15',
    nextMaintenance: '2023-06-14',
    status: 'Scheduled',
  },
  {
    toolingNumber: 'TL-67890',
    name: 'Stamping Die B',
    lastMaintenance: '2023-04-20',
    nextMaintenance: '2023-05-20',
    status: 'Overdue',
  },
  {
    toolingNumber: 'TL-54321',
    name: 'Fixture Assembly C',
    lastMaintenance: '2023-03-10',
    nextMaintenance: '2023-04-09',
    status: 'Completed',
  },
];

export default function MaintenanceSchedule() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Maintenance Schedule</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Tooling Number</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Last Maintenance</th>
              <th className="py-2 px-4 border-b">Next Maintenance</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {maintenanceItems.map((item) => (
              <tr key={item.toolingNumber}>
                <td className="py-2 px-4 border-b">
                  <Link
                    href={`/tooling/${item.toolingNumber}`}
                    className="text-blue-500 hover:underline"
                  >
                    {item.toolingNumber}
                  </Link>
                </td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.lastMaintenance}</td>
                <td className="py-2 px-4 border-b">{item.nextMaintenance}</td>
                <td className="py-2 px-4 border-b">
                  <span className={`inline-flex px-2 py-1 rounded text-xs ${item.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                      item.status === 'Overdue' ? 'bg-red-100 text-red-800' :
                        'bg-green-100 text-green-800'
                    }`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded text-sm">
                    Record Maintenance
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}