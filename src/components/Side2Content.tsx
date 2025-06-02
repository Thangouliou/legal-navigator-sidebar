
import React from 'react';
import { FileText, Clock, User } from 'lucide-react';
import { Scale } from 'lucide-react';

const Side2Content: React.FC = () => {
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
          <div className="bg-gray-50 rounded-lg p-8 h-full">
            <div className="max-w-4xl">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Side 2 Analysis</h2>
              
              <div className="space-y-6">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="text-red-800 font-medium mb-2">Opposition Strategy</h3>
                  <p className="text-red-700 text-sm">Counter-arguments and defensive positioning</p>
                </div>

                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Defensive Positions</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Procedural challenges</li>
                      <li>• Evidence disputes</li>
                      <li>• Legal precedent analysis</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Counter-Strategy</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Risk mitigation approaches</li>
                      <li>• Alternative legal pathways</li>
                      <li>• Settlement considerations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom half - Build Actions */}
        <div className="flex-1 p-6 bg-gray-50">
          <div className="bg-white rounded-lg p-8 h-full">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Side 2 Builds</h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">1) Defensive Legal Position</h3>
                <p className="text-gray-600 text-sm">Building counter-arguments and defensive strategies</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">2) Risk Assessment & Mitigation</h3>
                <p className="text-gray-600 text-sm">Evaluating potential outcomes and risk factors</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="text-yellow-800 font-medium mb-2">ΠΡΟΣΟΧΗ</h3>
              <p className="text-yellow-700 text-sm">Side 2 considerations and strategic warnings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side2Content;
