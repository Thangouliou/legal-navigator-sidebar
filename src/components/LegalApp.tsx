
import React, { useState } from 'react';
import Chat from './Chat';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const LegalApp: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedItemName, setSelectedItemName] = useState<string | null>(null);

  const handleItemSelect = (itemId: string, itemName: string) => {
    setSelectedItem(itemId);
    setSelectedItemName(itemName);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Left Sidebar - Legal Index */}
        <Sidebar 
          selectedItem={selectedItem} 
          onItemSelect={handleItemSelect} 
        />
        
        {/* Main Content Area */}
        <MainContent 
          selectedItem={selectedItem} 
          selectedItemName={selectedItemName} 
        />
        
        {/* Right Side Chat - Full Height */}
        <div className="w-80 border-l border-gray-200 bg-white">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default LegalApp;
