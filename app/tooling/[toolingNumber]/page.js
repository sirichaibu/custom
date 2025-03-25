'use client'; // Must be at the top for client components

import { useRouter } from 'next/navigation'; // Correct import for App Router
import { QRCodeSVG } from 'qrcode.react'; // Using named import

export default function ToolingCard({ params }) {
  const router = useRouter();
  const { toolingNumber } = params; // Get toolingNumber from params

  // Mock data - in a real app you would fetch this
  const toolingData = {
    toolingNumber: toolingNumber || 'TL-12345',
    name: 'Injection Mold A',
    description: 'For product XYZ, cavity 4',
    location: 'Shelf B2',
    quantity: 1,
    status: 'In Stock',
    lastMaintenance: '2023-05-15',
    nextMaintenance: '2023-06-14',
    maintenanceInterval: 30,
  };

  const handleCheckOut = () => {
    router.push(`/scan?action=checkout&tooling=${toolingNumber}`);
  };

  const handleMaintenance = () => {
    router.push(`/maintenance?tooling=${toolingNumber}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-bold">{toolingData.name}</h1>
              <p className="text-gray-600">{toolingData.toolingNumber}</p>
            </div>
            <div className="bg-gray-100 p-2 rounded">
              <QRCodeSVG 
                value={toolingData.toolingNumber} 
                size={80}
                level="H" // High error correction
              />
            </div>
          </div>
          
          <div className="mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Location</h3>
                <p>{toolingData.location}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Status</h3>
                <p className={`inline-flex px-2 py-1 rounded text-xs ${
                  toolingData.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                  toolingData.status === 'In Production' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {toolingData.status}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Last Maintenance</h3>
                <p>{toolingData.lastMaintenance}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Next Maintenance</h3>
                <p>{toolingData.nextMaintenance}</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">Description</h3>
              <p>{toolingData.description}</p>
            </div>
          </div>
          
          <div className="mt-6 flex space-x-3">
            <button 
              onClick={handleCheckOut}
              className="bg-blue-500 text-white px-4 py-2 rounded flex-1"
            >
              Check Out to Production
            </button>
            <button 
              onClick={handleMaintenance}
              className="bg-gray-200 px-4 py-2 rounded flex-1"
            >
              Maintenance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}