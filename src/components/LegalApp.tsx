
import React, { useState } from 'react';
import Chat from './Chat';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Side1Content from './Side1Content';
import Side2Content from './Side2Content';

interface LegalAppProps {
  currentSide?: 'index' | 'side1' | 'side2';
}

const LegalApp: React.FC<LegalAppProps> = ({ currentSide = 'index' }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedItemName, setSelectedItemName] = useState<string | null>(null);

  const handleItemSelect = (itemId: string, itemName: string) => {
    setSelectedItem(itemId);
    setSelectedItemName(itemName);
  };

  const renderMainContent = () => {
    switch (currentSide) {
      case 'side1':
        return <Side1Content />;
      case 'side2':
        return <Side2Content />;
      default:
        return (
          <MainContent 
            selectedItem={selectedItem} 
            selectedItemName={selectedItemName} 
          />
        );
    }
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
        {renderMainContent()}
        
        {/* Right Side Chat - Full Height */}
        <div className="w-80 border-l border-gray-200 bg-white">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default LegalApp;
