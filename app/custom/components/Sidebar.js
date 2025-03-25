import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-screen bg-gray-900 text-white p-5 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-gray-400 hover:text-white mb-5 flex items-center"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <ul className="space-y-4">
        <li>
          <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded-lg">
            <span className="text-lg">🏠</span>
            {isOpen && <span>Home</span>}
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded-lg">
            <span className="text-lg">📁</span>
            {isOpen && <span>Projects</span>}
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded-lg">
            <span className="text-lg">📊</span>
            {isOpen && <span>Reports</span>}
          </a>
        </li>
      </ul>
    </div>
  );
}
