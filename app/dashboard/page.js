// app/dashboard/page.js
import Link from 'next/link';

const toolingItems = [
  {
    toolingNumber: 'TL-12345',
    name: 'Injection Mold A',
    location: 'Shelf B2',
    status: 'In Stock',
    lastMaintenance: '2023-05-15',
  },
  {
    toolingNumber: 'TL-67890',
    name: 'Stamping Die B',
    location: 'Shelf C1',
    status: 'In Production',
    lastMaintenance: '2023-04-20',
  },
  {
    toolingNumber: 'TL-54321',
    name: 'Fixture Assembly C',
    location: 'Workstation 5',
    status: 'Maintenance',
    lastMaintenance: '2023-03-10',
  },
];

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tooling Inventory</h1>
        <Link
          href="/tooling/new"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Add New Tooling
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {toolingItems.map((tooling) => (
          <Link
            key={tooling.toolingNumber}
            href={`/tooling/${tooling.toolingNumber}`}
            className="block border rounded-lg p-4 hover:shadow-md transition-shadow hover:border-blue-200"
          >
            <div className="flex justify-between">
              <h2 className="font-semibold">{tooling.name}</h2>
              <span className={`inline-flex px-2 py-1 rounded text-xs ${
                tooling.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                tooling.status === 'In Production' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {tooling.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{tooling.toolingNumber}</p>
            <p className="text-sm mt-2"><span className="font-medium">Location:</span> {tooling.location}</p>
            <p className="text-sm"><span className="font-medium">Last Maintenance:</span> {tooling.lastMaintenance}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}