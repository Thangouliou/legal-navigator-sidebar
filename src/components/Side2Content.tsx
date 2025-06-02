
import React, { useState } from 'react';
import { FileText, Clock, User } from 'lucide-react';
import { Scale } from 'lucide-react';

interface Build {
  id: string;
  name: string;
  quality: 'strong' | 'medium' | 'weak';
  description: string;
}

const Side2Content: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [showNodeOptions, setShowNodeOptions] = useState(false);

  const nodeBuilds: Record<string, Build[]> = {
    '1': [
      { id: 'build-1-1', name: 'Defensive Evidence', quality: 'medium', description: 'Counter-evidence preparation' },
      { id: 'build-1-2', name: 'Procedural Defense', quality: 'strong', description: 'Strong procedural position' }
    ],
    '2': [
      { id: 'build-2-1', name: 'Risk Mitigation', quality: 'weak', description: 'Limited risk mitigation options' },
      { id: 'build-2-2', name: 'Alternative Strategies', quality: 'medium', description: 'Secondary strategy options' }
    ],
    '3': [
      { id: 'build-3-1', name: 'Settlement Position', quality: 'strong', description: 'Strong settlement negotiation position' }
    ]
  };

  const getNodeColor = (nodeId: string) => {
    const builds = nodeBuilds[nodeId] || [];
    const strongBuilds = builds.filter(b => b.quality === 'strong').length;
    const mediumBuilds = builds.filter(b => b.quality === 'medium').length;
    const weakBuilds = builds.filter(b => b.quality === 'weak').length;

    if (strongBuilds > 0 && weakBuilds === 0) return 'bg-green-600 hover:bg-green-700';
    if (weakBuilds > 0) return 'bg-red-600 hover:bg-red-700';
    return 'bg-yellow-600 hover:bg-yellow-700';
  };

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(nodeId);
    setShowNodeOptions(true);
  };

  const handleBuildClick = (buildId: string) => {
    console.log(`Navigating to build: ${buildId}`);
    setShowNodeOptions(false);
    // Here you would navigate to the specific build
  };

  return (
    <div className="flex-1 bg-white flex flex-col">
      {/* Header with Side 1 // Side 2 */}
      <div className="border-b border-gray-200 px-6 py-3 bg-gray-50">
        <div className="flex items-center justify-center">
          <span className="text-sm font-medium text-gray-700">Side 1</span>
          <Scale className="w-5 h-5 mx-4 text-gray-600" />
          <span className="text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded">Side 2</span>
        </div>
      </div>

      {/* Strategy Section */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Side 2 Strategy</h1>
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              <span>Last modified 1 hour ago</span>
              <span className="mx-2">•</span>
              <User className="w-4 h-4 mr-1" />
              <span>Legal Team</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Share
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700">
              Edit
            </button>
          </div>
        </div>
      </div>
      
      {/* Main content area split vertically */}
      <div className="flex-1 flex flex-col">
        {/* Top half - Strategy Flow */}
        <div className="flex-1 p-6 border-b border-gray-200 relative">
          <div className="bg-gray-50 rounded-lg p-8 h-full">
            <div className="max-w-4xl">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Side 2 Analysis</h2>
              
              <div className="space-y-6">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="text-red-800 font-medium mb-2">Opposition Strategy</h3>
                  <p className="text-red-700 text-sm">Counter-arguments and defensive positioning</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col items-center">
                      <button 
                        onClick={() => handleNodeClick('1')}
                        className={`w-8 h-8 ${getNodeColor('1')} text-white rounded-full flex items-center justify-center text-sm font-medium transition-colors cursor-pointer`}
                      >
                        1
                      </button>
                      <div className="w-px h-16 bg-gray-300 mt-2"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">Defensive Positions</h3>
                      <p className="text-gray-600 text-sm">Procedural challenges and evidence disputes</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col items-center">
                      <button 
                        onClick={() => handleNodeClick('2')}
                        className={`w-8 h-8 ${getNodeColor('2')} text-white rounded-full flex items-center justify-center text-sm font-medium transition-colors cursor-pointer`}
                      >
                        2
                      </button>
                      <div className="w-px h-16 bg-gray-300 mt-2"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">Counter-Strategy</h3>
                      <p className="text-gray-600 text-sm">Risk mitigation and alternative pathways</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => handleNodeClick('3')}
                      className={`w-8 h-8 ${getNodeColor('3')} text-white rounded-full flex items-center justify-center text-sm font-medium transition-colors cursor-pointer`}
                    >
                      3
                    </button>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">Settlement</h3>
                      <p className="text-gray-600 text-sm">Settlement considerations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Node Options Modal */}
          {showNodeOptions && selectedNode && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
              <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Node {selectedNode} Builds
                </h3>
                <div className="space-y-3">
                  {nodeBuilds[selectedNode]?.map((build) => (
                    <button
                      key={build.id}
                      onClick={() => handleBuildClick(build.id)}
                      className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{build.name}</h4>
                          <p className="text-sm text-gray-600">{build.description}</p>
                        </div>
                        <div className={`w-3 h-3 rounded-full ${
                          build.quality === 'strong' ? 'bg-green-500' :
                          build.quality === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                      </div>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setShowNodeOptions(false)}
                  className="mt-4 w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom half - Weak Points and Summary */}
        <div className="flex-1 p-6 bg-gray-50">
          <div className="bg-white rounded-lg p-8 h-full flex flex-col">
            {/* Weak Points Section */}
            <div className="flex-1">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Αδύναμα Σημεία</h2>
              
              <div className="space-y-4">
                <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                  <h3 className="font-medium text-red-900 mb-2">1) Περιορισμένες αμυντικές επιλογές</h3>
                  <p className="text-red-700 text-sm">Λίγες διαθέσιμες επιλογές για αμυντική στρατηγική</p>
                </div>

                <div className="border border-orange-200 rounded-lg p-4 bg-orange-50">
                  <h3 className="font-medium text-orange-900 mb-2">2) Εξάρτηση από διαδικαστικές προκλήσεις</h3>
                  <p className="text-orange-700 text-sm">Βασίζεται κυρίως σε διαδικαστικά ζητήματα</p>
                </div>

                <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
                  <h3 className="font-medium text-yellow-900 mb-2">3) Περιορισμένος χρόνος αντίδρασης</h3>
                  <p className="text-yellow-700 text-sm">Ανάγκη για γρήγορη ανταπόκριση στις κινήσεις του αντιδίκου</p>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Side 2 Summary</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-blue-800 font-medium mb-2">Αμυντική Στρατηγική</h3>
                <p className="text-blue-700 text-sm mb-2">
                  Η στρατηγική επικεντρώνεται στην αμυντική τοποθέτηση, μείωση κινδύνων και εναλλακτικές λύσεις.
                </p>
                <p className="text-blue-700 text-sm">
                  <strong>Προσοχή:</strong> Ανάγκη για προσεκτική διαχείριση κινδύνων
                </p>
              </div>

              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="text-yellow-800 font-medium mb-2">ΠΡΟΣΟΧΗ</h3>
                <p className="text-yellow-700 text-sm">Side 2 considerations and strategic warnings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side2Content;
