
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
    <div className="min-h-screen bg-gray-100 relative">
      <div className="flex h-screen">
        <Sidebar 
          selectedItem={selectedItem} 
          onItemSelect={handleItemSelect} 
        />
        <MainContent 
          selectedItem={selectedItem} 
          selectedItemName={selectedItemName} 
        />
      </div>
      
      {/* Chat positioned at bottom right */}
      <div className="fixed bottom-4 right-4 z-50">
        <Chat />
      </div>
    </div>
  );
};

export default LegalApp;
