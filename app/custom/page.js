"use client"

import { useState ,} from 'react';
//import Navbar from './components/Navbar';
//mport Sidebar from './components/Sidebar';

export default function Home() {
  const [projects, setProjects] = useState([
    { id: 1, name: 'WDC', pendingItems: 5 },
    { id: 2, name: 'INPOS', pendingItems: 0 },
    { id: 3, name: 'BBPOS', pendingItems: 12 },
    { id: 4, name: 'SONY', pendingItems: 3 }
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [pendingItems, setPendingItems] = useState([]);

  const fetchPendingItems = (projectId) => {
    const mockItems = {
      1: [
        { id: 101, title: 'Update documentation', priority: 'High' },
        { id: 102, title: 'Fix login bug', priority: 'Critical' }
      ],
      3: [
        { id: 301, title: 'Security audit', priority: 'Critical' },
        { id: 302, title: 'Database migration', priority: 'High' }
      ],
      4: [
        { id: 401, title: 'UX research for new feature', priority: 'High' }
      ]
    };
    
    return mockItems[projectId] || [];
  };

  const handleProjectClick = (project) => {
    if (project.pendingItems > 0) {
      setSelectedProject(project);
      setPendingItems(fetchPendingItems(project.id));
    }
  };

  const handleBackClick = () => {
    setSelectedProject(null);
    setPendingItems([]);
  };

  return (
    <div className="flex">
      <div className="flex-1 min-h-screen bg-gray-100">

        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-blue-600">Customs Formula Pending</h1>
          
          {!selectedProject ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  onClick={() => handleProjectClick(project)}
                >
                  <h2 className="text-xl font-semibold mb-2 text-black">{project.name}</h2>
                  <div className="flex items-center">
                    <span className="text-black">Pending Items:</span>
                    {project.pendingItems > 0 ? (
                      <span 
                        className="ml-2 bg-orange-300 text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-orange-600"
                      >
                        {project.pendingItems}
                      </span>
                    ) : (
                      <span className="ml-2 text-gray-500">0</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <button 
                onClick={handleBackClick}
                className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Dashboard
              </button>
              
              <h2 className="text-2xl font-bold mb-4 text-black">{selectedProject.name}: Pending Items ({pendingItems.length})</h2>
              
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Part Number</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {pendingItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                            ${item.priority === 'Critical' ? 'bg-red-100 text-red-800' : 
                              item.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                              item.priority === 'Medium' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                            {item.priority}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
