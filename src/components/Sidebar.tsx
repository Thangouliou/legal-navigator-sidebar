
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FileText, Scale, Folder, Image, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DocumentItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
}

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  items: DocumentItem[];
  expanded?: boolean;
}

interface SidebarProps {
  selectedItem: string | null;
  onItemSelect: (itemId: string, itemName: string) => void;
}

const mockData: Category[] = [
  {
    id: 'cases',
    name: 'Cases',
    icon: Scale,
    items: [
      { id: 'case-1', name: 'Exodiko S2→S1', type: 'folder' },
      { id: 'case-1-1', name: 'build 1 S1', type: 'file' },
      { id: 'case-1-2', name: 'build 2 S1', type: 'file' },
      { id: 'case-2', name: 'Adosi S1→S2', type: 'folder' },
      { id: 'case-2-1', name: 'build 1 S2', type: 'file' },
      { id: 'case-2-2', name: 'build 2 S1', type: 'file' },
    ],
    expanded: true,
  },
  {
    id: 'laws',
    name: 'Laws',
    icon: FileText,
    items: [
      { id: 'law-1', name: 'AK', type: 'file' },
      { id: 'law-2', name: '4412', type: 'file' },
      { id: 'law-3', name: 'Company Law', type: 'file' },
    ],
    expanded: false,
  },
  {
    id: 'caselaw',
    name: 'Case Law',
    icon: Scale,
    items: [
      { id: 'caselaw-1', name: 'Supreme Court Decisions', type: 'folder' },
      { id: 'caselaw-2', name: 'Appeals Court', type: 'folder' },
    ],
    expanded: false,
  },
  {
    id: 'files',
    name: 'Files',
    icon: Folder,
    items: [
      { id: 'files-1', name: 'Photos', type: 'folder' },
      { id: 'files-2', name: 'Documents', type: 'folder' },
      { id: 'files-3', name: 'Downloads', type: 'folder' },
    ],
    expanded: false,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ selectedItem, onItemSelect }) => {
  const [categories, setCategories] = useState<Category[]>(mockData);

  const toggleCategory = (categoryId: string) => {
    setCategories(prev => 
      prev.map(cat => 
        cat.id === categoryId 
          ? { ...cat, expanded: !cat.expanded }
          : cat
      )
    );
  };

  return (
    <div className="w-72 bg-gray-50 border-r border-gray-200 h-screen flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">LAWGIC</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-2">
          {categories.map((category) => (
            <div key={category.id} className="mb-1">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-150"
              >
                <div className="flex items-center flex-1">
                  {category.expanded ? (
                    <ChevronDown className="w-4 h-4 mr-1 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-4 h-4 mr-1 text-gray-500" />
                  )}
                  <category.icon className="w-4 h-4 mr-2 text-gray-600" />
                  <span className="font-medium">{category.name}</span>
                </div>
              </button>
              
              {category.expanded && (
                <div className="ml-6 mt-1">
                  {category.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onItemSelect(item.id, item.name)}
                      className={cn(
                        "w-full flex items-center px-2 py-1.5 text-sm rounded-md transition-colors duration-150",
                        selectedItem === item.id
                          ? "bg-green-100 text-green-800 border-l-2 border-green-500"
                          : "text-gray-600 hover:bg-gray-100"
                      )}
                    >
                      {item.type === 'folder' ? (
                        <Folder className="w-4 h-4 mr-2 text-gray-500" />
                      ) : (
                        <FileText className="w-4 h-4 mr-2 text-gray-500" />
                      )}
                      <span className="truncate">{item.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="p-4 border-t border-gray-200 space-y-3">
        <button className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
          Find a Lawyer
        </button>
        <button className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
          Explore Packages
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
