
import React from 'react';
import { FileText, Clock, User } from 'lucide-react';
import { Scale } from 'lucide-react';

const Side1Content: React.FC = () => {
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
        <div className="flex-1 p-6 border-b border-gray-200">
          <div className="bg-gray-50 rounded-lg p-8 h-full">
            <div className="max-w-4xl">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Strategy Flow</h2>
              
              {/* Strategy Steps */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
                    <div className="w-px h-16 bg-gray-300 mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">ΠΛΗΡΗΣ</h3>
                    <p className="text-gray-600">ΔΟΤ ΕΛΕΓΧΟ</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
                    <div className="w-px h-16 bg-gray-300 mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">ΠΙΕΣΗ</h3>
                    <p className="text-gray-600">Tactical approach</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">3</div>
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
        </div>

        {/* Bottom half - Build Actions */}
        <div className="flex-1 p-6 bg-gray-50">
          <div className="bg-white rounded-lg p-8 h-full">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Builds (Build)</h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">1) Ανατίκευμα προβλ. υγείας (μέτριο)</h3>
                <p className="text-gray-600 text-sm">Health-related legal position building</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">2) Υπερτοποθέτηση και ευικολικό διαλόνεια (ισχυρό)</h3>
                <p className="text-gray-600 text-sm">Strategic positioning and procedural advantages</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="text-green-800 font-medium mb-2">ΔΥΝΑΜΗΣ ΣΗΜΕΙΑ</h3>
              <p className="text-green-700 text-sm">Θέση από επικεριμάτα και εκτίμηση στρατηγικής</p>
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
