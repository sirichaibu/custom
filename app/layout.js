// app/layout.js
'use client'; // Add this since we're using client-side functionality
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { 
  FiHome, 
  FiTool, 
  FiMaximize2, 
  FiCalendar,
  FiPieChart,
  FiSettings,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          {/* Collapsible Sidebar */}
          <div className={`
            bg-gray-800 text-white 
            transition-all duration-300 ease-in-out
            ${collapsed ? 'w-20' : 'w-64'}
          `}>
            <div className="p-4 flex items-center justify-between">
              {!collapsed && <h1 className="text-xl font-bold">Tooling System</h1>}
              <button 
                onClick={() => setCollapsed(!collapsed)}
                className="p-1 rounded-full hover:bg-gray-700"
              >
                {collapsed ? <FiChevronRight size={20} /> : <FiChevronLeft size={20} />}
              </button>
            </div>
            
            <nav className="space-y-1 p-2">
              <SidebarLink 
                href="/dashboard" 
                icon={<FiHome size={20} />}
                collapsed={collapsed}
              >
                Dashboard
              </SidebarLink>
              <SidebarLink 
                href="/tooling" 
                icon={<FiTool size={20} />}
                collapsed={collapsed}
              >
                Tooling
              </SidebarLink>
              <SidebarLink 
                href="/scan" 
                icon={<FiMaximize2 size={20} />}
                collapsed={collapsed}
              >
                Scan
              </SidebarLink>
              <SidebarLink 
                href="/maintenance" 
                icon={<FiCalendar size={20} />}
                collapsed={collapsed}
              >
                Maintenance
              </SidebarLink>
              <SidebarLink 
                href="/reports" 
                icon={<FiPieChart size={20} />}
                collapsed={collapsed}
              >
                Reports
              </SidebarLink>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto bg-gray-50">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

function SidebarLink({ href, icon, children, collapsed }) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 p-3 rounded
        hover:bg-gray-700 transition-colors
        ${collapsed ? 'justify-center' : ''}
      `}
      title={collapsed ? children : undefined}
    >
      <span className="text-xl">{icon}</span>
      {!collapsed && <span className="text-sm">{children}</span>}
    </Link>
  )
}