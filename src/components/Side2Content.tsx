
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
  const [nodeSelectedBuilds, setNodeSelectedBuilds] = useState<Record<string, string>>({});

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
    const selectedBuildId = nodeSelectedBuilds[nodeId];
    if (selectedBuildId) {
      const builds = nodeBuilds[nodeId] || [];
      const selectedBuild = builds.find(b => b.id === selectedBuildId);
      if (selectedBuild) {
        if (selectedBuild.quality === 'strong') return 'bg-green-600 hover:bg-green-700';
        if (selectedBuild.quality === 'medium') return 'bg-yellow-600 hover:bg-yellow-700';
        if (selectedBuild.quality === 'weak') return 'bg-red-600 hover:bg-red-700';
      }
    }

    const builds = nodeBuilds[nodeId] || [];
    const strongBuilds = builds.filter(b => b.quality === 'strong').length;
    const mediumBuilds = builds.filter(b => b.quality === 'medium').length;
    const weakBuilds = builds.filter(b => b.quality === 'weak').length;

    if (strongBuilds > 0 && weakBuilds === 0) return 'bg-green-600 hover:bg-green-700';
    if (weakBuilds > 0) return 'bg-red-600 hover:bg-red-700';
    return 'bg-yellow-600 hover:bg-yellow-700';
  };

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(selectedNode === nodeId ? null : nodeId);
  };

  const handleBuildClick = (buildId: string, nodeId: string) => {
    setNodeSelectedBuilds(prev => ({
      ...prev,
      [nodeId]: buildId
    }));
    setSelectedNode(null);
    console.log(`Selected build: ${buildId} for node: ${nodeId}`);
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
        <div className="flex-1 p-6 border-b border-gray-200">
          <div className="bg-gray-50 rounded-lg p-8 h-full flex items-center justify-center">
            <div className="max-w-2xl w-full">
              <h2 className="text-lg font-medium text-gray-900 mb-8 text-center">Side 2 Analysis</h2>
              
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="text-red-800 font-medium mb-2">Opposition Strategy</h3>
                <p className="text-red-700 text-sm">Counter-arguments and defensive positioning</p>
              </div>

              {/* Strategy Steps - Centered */}
              <div className="space-y-8">
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-4 w-full max-w-md">
                    <button 
                      onClick={() => handleNodeClick('1')}
                      className={`w-10 h-10 ${getNodeColor('1')} text-white rounded-full flex items-center justify-center text-sm font-medium transition-colors cursor-pointer flex-shrink-0`}
                    >
                      1
                    </button>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">Defensive Positions</h3>
                      <p className="text-gray-600 text-sm">Procedural challenges and evidence disputes</p>
                    </div>
                  </div>
                  
                  {/* Build options for node 1 */}
                  {selectedNode === '1' && (
                    <div className="mt-4 w-full max-w-md space-y-2">
                      {nodeBuilds['1']?.map((build) => (
                        <button
                          key={build.id}
                          onClick={() => handleBuildClick(build.id, '1')}
                          className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors bg-white"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-gray-900 text-sm">{build.name}</h4>
                              <p className="text-xs text-gray-600">{build.description}</p>
                            </div>
                            <div className={`w-3 h-3 rounded-full ${
                              build.quality === 'strong' ? 'bg-green-500' :
                              build.quality === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
                            }`}></div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                  
                  <div className="w-px h-12 bg-gray-300 mt-4"></div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-4 w-full max-w-md">
                    <button 
                      onClick={() => handleNodeClick('2')}
                      className={`w-10 h-10 ${getNodeColor('2')} text-white rounded-full flex items-center justify-center text-sm font-medium transition-colors cursor-pointer flex-shrink-0`}
                    >
                      2
                    </button>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">Counter-Strategy</h3>
                      <p className="text-gray-600 text-sm">Risk mitigation and alternative pathways</p>
                    </div>
                  </div>
                  
                  {/* Build options for node 2 */}
                  {selectedNode === '2' && (
                    <div className="mt-4 w-full max-w-md space-y-2">
                      {nodeBuilds['2']?.map((build) => (
                        <button
                          key={build.id}
                          onClick={() => handleBuildClick(build.id, '2')}
                          className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors bg-white"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-gray-900 text-sm">{build.name}</h4>
                              <p className="text-xs text-gray-600">{build.description}</p>
                            </div>
                            <div className={`w-3 h-3 rounded-full ${
                              build.quality === 'strong' ? 'bg-green-500' :
                              build.quality === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
                            }`}></div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                  
                  <div className="w-px h-12 bg-gray-300 mt-4"></div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-4 w-full max-w-md">
                    <button 
                      onClick={() => handleNodeClick('3')}
                      className={`w-10 h-10 ${getNodeColor('3')} text-white rounded-full flex items-center justify-center text-sm font-medium transition-colors cursor-pointer flex-shrink-0`}
                    >
                      3
                    </button>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">Settlement</h3>
                      <p className="text-gray-600 text-sm">Settlement considerations</p>
                    </div>
                  </div>
                  
                  {/* Build options for node 3 */}
                  {selectedNode === '3' && (
                    <div className="mt-4 w-full max-w-md space-y-2">
                      {nodeBuilds['3']?.map((build) => (
                        <button
                          key={build.id}
                          onClick={() => handleBuildClick(build.id, '3')}
                          className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors bg-white"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-gray-900 text-sm">{build.name}</h4>
                              <p className="text-xs text-gray-600">{build.description}</p>
                            </div>
                            <div className={`w-3 h-3 rounded-full ${
                              build.quality === 'strong' ? 'bg-green-500' :
                              build.quality === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
                            }`}></div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
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
