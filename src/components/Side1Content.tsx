
import React, { useState } from 'react';
import { FileText, Clock, User } from 'lucide-react';
import { Scale } from 'lucide-react';

interface Build {
  id: string;
  name: string;
  quality: 'strong' | 'medium' | 'weak';
  description: string;
}

const Side1Content: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [showNodeOptions, setShowNodeOptions] = useState(false);

  const nodeBuilds: Record<string, Build[]> = {
    '1': [
      { id: 'build-1-1', name: 'ΔΟΤ ΕΛΕΓΧΟ Evidence', quality: 'strong', description: 'Comprehensive evidence collection' },
      { id: 'build-1-2', name: 'Documentation Build', quality: 'medium', description: 'Supporting documentation' }
    ],
    '2': [
      { id: 'build-2-1', name: 'Tactical Pressure Build', quality: 'strong', description: 'Strategic pressure application' },
      { id: 'build-2-2', name: 'Procedural Build', quality: 'weak', description: 'Limited procedural evidence' }
    ],
    '3': [
      { id: 'build-3-1', name: 'Legal Proceedings Build', quality: 'medium', description: 'Court procedure preparation' }
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
          <span className="text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded">Side 1</span>
          <Scale className="w-5 h-5 mx-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Side 2</span>
        </div>
      </div>

      {/* Strategy Section */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Strategy (πώς θα build)</h1>
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              <span>Last modified 2 hours ago</span>
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
              <h2 className="text-lg font-medium text-gray-900 mb-6">Strategy Flow</h2>
              
              {/* Strategy Steps */}
              <div className="space-y-6">
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
                    <h3 className="font-medium text-gray-900">ΠΛΗΡΗΣ</h3>
                    <p className="text-gray-600">ΔΟΤ ΕΛΕΓΧΟ</p>
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
                    <h3 className="font-medium text-gray-900">ΠΙΕΣΗ</h3>
                    <p className="text-gray-600">Tactical approach</p>
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
                    <h3 className="font-medium text-gray-900">ΔΙΚ</h3>
                    <p className="text-gray-600">Legal proceedings</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-blue-800 font-medium mb-2">Αποθεματικό σε χοραίο που έχω & έχεις</h3>
                <p className="text-blue-700 text-sm">Εξωδικό 15 ημέρες!</p>
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
                  <h3 className="font-medium text-red-900 mb-2">1) Έλλειψη τεκμηρίωσης</h3>
                  <p className="text-red-700 text-sm">Ανεπαρκής τεκμηρίωση για ορισμένα στοιχεία της υπόθεσης</p>
                </div>

                <div className="border border-orange-200 rounded-lg p-4 bg-orange-50">
                  <h3 className="font-medium text-orange-900 mb-2">2) Χρονικοί περιορισμοί</h3>
                  <p className="text-orange-700 text-sm">Περιορισμένος χρόνος για συλλογή επιπλέον στοιχείων</p>
                </div>

                <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
                  <h3 className="font-medium text-yellow-900 mb-2">3) Αντιπαραθέσεις με τον αντίδικο</h3>
                  <p className="text-yellow-700 text-sm">Πιθανές ισχυρές αντιπαραθέσεις από την αντίπαλη πλευρά</p>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Side 1 Summary</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-green-800 font-medium mb-2">Στρατηγική Επισκόπηση</h3>
                <p className="text-green-700 text-sm mb-2">
                  Η στρατηγική βασίζεται σε πλήρη έλεγχο των στοιχείων, τακτική πίεση και τελική δικαστική διεκδίκηση.
                </p>
                <p className="text-green-700 text-sm">
                  <strong>Δυνατότητα επιτυχίας:</strong> 75% με βάση τα υπάρχοντα builds
                </p>
              </div>
            </div>

            <div className="mt-4 text-right">
              <span className="text-sm text-gray-500">Αλέκει ± Δύο &500sq ½ - 5 day&</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side1Content;
