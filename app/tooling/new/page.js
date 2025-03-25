'use client'; // Must be first line

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Updated import
import { QRCodeSVG } from 'qrcode.react'; // Using SVG version (or QRCodeCanvas if preferred)

export default function NewTooling() {
  const [tooling, setTooling] = useState({
    toolingNumber: '',
    name: '',
    description: '',
    location: '',
    quantity: 1,
    maintenanceInterval: 30, // days
  });
  
  const [generatedQR, setGeneratedQR] = useState('');
  const router = useRouter();

  const generateToolingNumber = () => {
    const prefix = 'TL';
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    return `${prefix}-${randomNum}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const toolingNumber = generateToolingNumber();
    const toolingWithNumber = { ...tooling, toolingNumber };
    setTooling(toolingWithNumber);
    setGeneratedQR(toolingNumber);
    
    // In a real app, you would save to database here
    console.log('Saving tooling:', toolingWithNumber);
  };

  const handleViewTooling = () => {
    router.push(`/tooling/${generatedQR}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Create New Tooling</h1>
      
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label className="block mb-2">Tooling Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={tooling.name}
            onChange={(e) => setTooling({...tooling, name: e.target.value})}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            className="w-full p-2 border rounded"
            value={tooling.description}
            onChange={(e) => setTooling({...tooling, description: e.target.value})}
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Location</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={tooling.location}
            onChange={(e) => setTooling({...tooling, location: e.target.value})}
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Quantity</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={tooling.quantity}
            onChange={(e) => setTooling({...tooling, quantity: parseInt(e.target.value) || 1})}
            min="1"
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Maintenance Interval (days)</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={tooling.maintenanceInterval}
            onChange={(e) => setTooling({...tooling, maintenanceInterval: parseInt(e.target.value) || 30})}
            min="1"
          />
        </div>
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Tooling
        </button>
      </form>
      
      {generatedQR && (
        <div className="mt-8 p-4 border rounded-lg max-w-md">
          <h2 className="text-xl font-semibold mb-4">Tooling Created</h2>
          <div className="flex items-center">
            <div className="mr-4">
              <QRCodeSVG 
                value={generatedQR} 
                size={128}
                level="H" // Error correction level (L, M, Q, H)
                includeMargin={true}
              />
            </div>
            <div>
              <p><strong>Tooling Number:</strong> {generatedQR}</p>
              <p><strong>Name:</strong> {tooling.name}</p>
              <button 
                onClick={handleViewTooling}
                className="mt-2 bg-green-500 text-white px-3 py-1 rounded text-sm"
              >
                View Tooling Card
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}