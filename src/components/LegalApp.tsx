
import React, { useState } from 'react';
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
        <Sidebar 
          selectedItem={selectedItem} 
          onItemSelect={handleItemSelect} 
        />
        <MainContent 
          selectedItem={selectedItem} 
          selectedItemName={selectedItemName} 
        />
      </div>
    </div>
  );
};

export default LegalApp;
