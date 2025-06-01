
import React from 'react';
import { FileText, Clock, User } from 'lucide-react';
import { Scale } from 'lucide-react';
import Builds from './Builds';

interface MainContentProps {
  selectedItem: string | null;
  selectedItemName: string | null;
}

const MainContent: React.FC<MainContentProps> = ({ selectedItem, selectedItemName }) => {
  if (!selectedItem) {
    return (
      <div className="flex-1 flex flex-col bg-white">
        {/* Header with Side 1 // Side 2 */}
        <div className="border-b border-gray-200 px-6 py-3 bg-gray-50">
          <div className="flex items-center justify-center">
            <span className="text-sm font-medium text-gray-700">Side 1</span>
            <Scale className="w-5 h-5 mx-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Side 2</span>
          </div>
        </div>

        {/* Main content area split vertically */}
        <div className="flex-1 flex flex-col">
          {/* Top half - Document area */}
          <div className="flex-1 flex items-center justify-center border-b border-gray-200">
            <div className="text-center">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Welcome to Legal Index
              </h3>
              <p className="text-gray-500 max-w-sm">
                Select a document or case from the sidebar to view its contents and start working.
              </p>
            </div>
          </div>

          {/* Bottom half - Build area */}
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Build Area
              </h3>
              <p className="text-gray-500 max-w-sm">
                Select a document to start building your legal position.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-white flex flex-col">
      {/* Header with Side 1 // Side 2 */}
      <div className="border-b border-gray-200 px-6 py-3 bg-gray-50">
        <div className="flex items-center justify-center">
          <span className="text-sm font-medium text-gray-700">Side 1</span>
          <Scale className="w-5 h-5 mx-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Side 2</span>
        </div>
      </div>

      {/* Document header */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">{selectedItemName}</h1>
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              <span>Last modified 2 hours ago</span>
              <span className="mx-2">•</span>
              <User className="w-4 h-4 mr-1" />
              <span>Legal Team</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Share
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Edit
            </button>
          </div>
        </div>
      </div>
      
      {/* Main content area split vertically */}
      <div className="flex-1 flex flex-col">
        {/* Top half - Document content */}
        <div className="flex-1 p-6 border-b border-gray-200">
          <div className="bg-gray-50 rounded-lg p-8 h-full">
            <div className="max-w-4xl">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Document Content</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  This is the content of <strong>{selectedItemName}</strong>. 
                  In a real application, this area would display the actual legal document, case file, 
                  or law text that was selected from the sidebar.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The document content area is designed to be modular and can easily accommodate:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Live document editing with rich text formatting</li>
                  <li>LLM-powered legal analysis and summaries</li>
                  <li>Document comparison and version control</li>
                  <li>Legal citation management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom half - Build content */}
        <div className="flex-1 p-6 bg-gray-50">
          <div className="bg-white rounded-lg p-8 h-full">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Build Position</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Here you can build your legal position for the selected document excerpt.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-green-800 font-medium mb-2">Current Build</h3>
                <p className="text-green-700 text-sm">
                  Analysis and position building for {selectedItemName} will appear here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
