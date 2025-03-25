// pages/scan.js
'use client'; 
import { useState } from 'react';

export default function ScanTooling() {
  const [scanResult, setScanResult] = useState('');
  const [action, setAction] = useState('checkout');
  const [toolingData, setToolingData] = useState(null);
  const [productionOrder, setProductionOrder] = useState('');

  const handleScan = (e) => {
    e.preventDefault();
    // In a real app, this would come from a QR scanner
    const scannedToolingNumber = scanResult;
    
    // Simulate fetching tooling data
    const mockToolingData = {
      toolingNumber: scannedToolingNumber,
      name: 'Injection Mold A',
      status: action === 'checkout' ? 'In Stock' : 'In Production',
    };
    
    setToolingData(mockToolingData);
  };

  const handleConfirm = () => {
    // In a real app, this would update the database
    const newStatus = action === 'checkout' ? 'In Production' : 'In Stock';
    alert(`Tooling ${toolingData.toolingNumber} has been ${action === 'checkout' ? 'checked out' : 'returned'}`);
    setToolingData(null);
    setScanResult('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Scan Tooling</h1>
      
      <div className="max-w-md mx-auto">
        <div className="flex mb-4 border rounded-lg overflow-hidden">
          <button
            className={`flex-1 py-2 ${action === 'checkout' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setAction('checkout')}
          >
            Check Out to Production
          </button>
          <button
            className={`flex-1 py-2 ${action === 'return' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setAction('return')}
          >
            Return from Production
          </button>
        </div>
        
        <form onSubmit={handleScan} className="mb-6">
          <div className="mb-4">
            <label className="block mb-2">Scan Tooling QR Code</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={scanResult}
              onChange={(e) => setScanResult(e.target.value)}
              placeholder="Or enter tooling number manually"
              required
            />
          </div>
          
          {action === 'checkout' && (
            <div className="mb-4">
              <label className="block mb-2">Production Order</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={productionOrder}
                onChange={(e) => setProductionOrder(e.target.value)}
                required={action === 'checkout'}
              />
            </div>
          )}
          
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
            Scan Tooling
          </button>
        </form>
        
        {toolingData && (
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Tooling Found</h2>
            <p><strong>Number:</strong> {toolingData.toolingNumber}</p>
            <p><strong>Name:</strong> {toolingData.name}</p>
            <p><strong>Current Status:</strong> {toolingData.status}</p>
            
            <div className="mt-4">
              <p className="font-medium mb-2">
                {action === 'checkout' 
                  ? 'Check out to production?' 
                  : 'Return to inventory?'}
              </p>
              {action === 'checkout' && productionOrder && (
                <p>Production Order: {productionOrder}</p>
              )}
              
              <div className="flex space-x-3 mt-3">
                <button 
                  onClick={() => setToolingData(null)}
                  className="bg-gray-200 px-4 py-2 rounded flex-1"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleConfirm}
                  className="bg-green-500 text-white px-4 py-2 rounded flex-1"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}