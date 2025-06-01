
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface Build {
  id: string;
  name: string;
  type: 'position' | 'opinion';
  status: 'active' | 'inactive';
}

interface BuildsProps {
  selectedItem: string | null;
}

const mockBuilds: Record<string, Build[]> = {
  'case-1-1': [
    { id: 'build-1-1-1', name: 'Position A: Contract Validity', type: 'position', status: 'active' },
    { id: 'build-1-1-2', name: 'Position B: Breach Analysis', type: 'position', status: 'inactive' },
    { id: 'build-1-1-3', name: 'Counter-argument', type: 'opinion', status: 'inactive' },
  ],
  'case-1-2': [
    { id: 'build-1-2-1', name: 'Position A: Liability Assessment', type: 'position', status: 'active' },
    { id: 'build-1-2-2', name: 'Position B: Damages Calculation', type: 'position', status: 'inactive' },
  ],
  'case-2-1': [
    { id: 'build-2-1-1', name: 'Position A: Regulatory Compliance', type: 'position', status: 'active' },
    { id: 'build-2-1-2', name: 'Position B: Procedural Issues', type: 'position', status: 'inactive' },
    { id: 'build-2-1-3', name: 'Opinion: Precedent Analysis', type: 'opinion', status: 'inactive' },
  ],
};

const Builds: React.FC<BuildsProps> = ({ selectedItem }) => {
  const [selectedBuild, setSelectedBuild] = useState<string | null>(null);
  
  if (!selectedItem) {
    return null;
  }

  const builds = mockBuilds[selectedItem] || [];

  if (builds.length === 0) {
    return null;
  }

  return (
    <div className="border-t border-gray-200 bg-gray-50">
      <div className="px-6 py-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Builds & Positions</h3>
        <div className="space-y-2">
          {builds.map((build) => (
            <button
              key={build.id}
              onClick={() => setSelectedBuild(build.id)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-150",
                selectedBuild === build.id || build.status === 'active'
                  ? "bg-green-100 text-green-800 border-l-2 border-green-500"
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <div className="flex items-center justify-between">
                <span>{build.name}</span>
                <span className={cn(
                  "text-xs px-2 py-1 rounded-full",
                  build.type === 'position' 
                    ? "bg-blue-100 text-blue-800" 
                    : "bg-purple-100 text-purple-800"
                )}>
                  {build.type}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Builds;
