
import React, { useState } from 'react';
import { Scale, Plus, Send } from 'lucide-react';
import { Button } from './ui/button';
import Chat from './Chat';

const DebateContent: React.FC = () => {
  const [questions, setQuestions] = useState<string[]>([
    "Ποια είναι η νομική βάση της θέσης σας;",
    "Πώς αντιμετωπίζετε τις αντιρρήσεις του αντιδίκου;"
  ]);
  const [newQuestion, setNewQuestion] = useState('');
  const [side1Messages, setSide1Messages] = useState([
    "Η νομική μας θέση βασίζεται σε ισχυρά τεκμήρια...",
    "Έχουμε πλήρη τεκμηρίωση για όλα τα στοιχεία"
  ]);
  const [side2Messages, setSide2Messages] = useState([
    "Αμφισβητούμε την εγκυρότητα των στοιχείων...",
    "Τα προσκομιζόμενα στοιχεία δεν είναι επαρκή"
  ]);
  const [moderatorMessages, setModeratorMessages] = useState([
    "Καλώς ήρθατε στο debate",
    "Παρακαλώ να παρουσιάσετε τις θέσεις σας"
  ]);

  // Calculate which side is winning (for scale tilt)
  const side1Score = 60; // Example score
  const side2Score = 40;
  const scaleRotation = ((side1Score - side2Score) / 100) * 15; // Max 15 degrees tilt

  const addQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([...questions, newQuestion.trim()]);
      setNewQuestion('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="border-b border-gray-200 px-6 py-4 bg-white">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-gray-900">Legal Debate</h1>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Side 1: {side1Score}% | Side 2: {side2Score}%</span>
                <Button variant="outline" size="sm">
                  Export Debate
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex">
            {/* Left Side - Scale and Chats */}
            <div className="flex-1 flex flex-col">
              {/* Scale Section */}
              <div className="flex-1 flex items-center justify-center bg-gray-50 border-b border-gray-200">
                <div className="text-center">
                  <h2 className="text-lg font-medium text-gray-900 mb-8">Debate Balance</h2>
                  
                  {/* Legal Scale */}
                  <div className="relative">
                    <Scale 
                      className="w-32 h-32 text-gray-700 mx-auto"
                      style={{ 
                        transform: `rotate(${scaleRotation}deg)`,
                        transition: 'transform 0.5s ease-in-out'
                      }}
                    />
                    
                    {/* Percentages below scale */}
                    <div className="flex justify-center items-center mt-6 space-x-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{side1Score}%</div>
                        <div className="text-sm text-gray-600">Side 1</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{side2Score}%</div>
                        <div className="text-sm text-gray-600">Side 2</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Chats Section */}
              <div className="flex-1 p-6 bg-white">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Live Debate</h3>
                
                <div className="grid grid-cols-3 gap-4 h-full">
                  {/* Side 1 Chat */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex flex-col">
                    <h4 className="font-medium text-green-800 mb-3">Side 1</h4>
                    <div className="flex-1 space-y-2 overflow-y-auto">
                      {side1Messages.map((message, index) => (
                        <div key={index} className="bg-white p-2 rounded text-sm border border-green-100">
                          {message}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex">
                      <input 
                        type="text" 
                        placeholder="Type response..."
                        className="flex-1 px-3 py-1 text-sm border border-green-300 rounded-l focus:outline-none focus:ring-1 focus:ring-green-500"
                      />
                      <Button size="sm" className="rounded-l-none bg-green-600 hover:bg-green-700">
                        <Send className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  {/* Moderator Chat */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex flex-col">
                    <h4 className="font-medium text-gray-800 mb-3">Διαιτητής</h4>
                    <div className="flex-1 space-y-2 overflow-y-auto">
                      {moderatorMessages.map((message, index) => (
                        <div key={index} className="bg-white p-2 rounded text-sm border border-gray-100">
                          {message}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex">
                      <input 
                        type="text" 
                        placeholder="Moderate debate..."
                        className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-gray-500"
                      />
                      <Button size="sm" variant="outline" className="rounded-l-none">
                        <Send className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  {/* Side 2 Chat with Questions Panel above */}
                  <div className="flex flex-col">
                    {/* Questions Panel above Side 2 */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 h-64">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Ερωτήσεις Debate</h4>
                      
                      {/* Add Question Form */}
                      <div className="mb-4">
                        <textarea
                          value={newQuestion}
                          onChange={(e) => setNewQuestion(e.target.value)}
                          placeholder="Προσθήκη νέας ερώτησης..."
                          className="w-full p-2 border border-gray-300 rounded text-xs resize-none focus:outline-none focus:ring-1 focus:ring-green-500"
                          rows={2}
                        />
                        <Button 
                          onClick={addQuestion}
                          className="mt-2 w-full bg-green-600 hover:bg-green-700"
                          size="sm"
                        >
                          <Plus className="w-3 h-3 mr-1" />
                          Προσθήκη
                        </Button>
                      </div>

                      {/* Questions List with scroll */}
                      <div className="space-y-2 overflow-y-auto h-32">
                        {questions.map((question, index) => (
                          <div key={index} className="bg-gray-50 p-2 rounded border border-gray-200">
                            <p className="text-xs text-gray-700 mb-1">{question}</p>
                            <div className="flex space-x-1">
                              <Button size="sm" variant="outline" className="text-xs px-2 py-1 h-auto">
                                Side 1
                              </Button>
                              <Button size="sm" variant="outline" className="text-xs px-2 py-1 h-auto">
                                Side 2
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Side 2 Chat */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex flex-col flex-1">
                      <h4 className="font-medium text-blue-800 mb-3">Side 2</h4>
                      <div className="flex-1 space-y-2 overflow-y-auto">
                        {side2Messages.map((message, index) => (
                          <div key={index} className="bg-white p-2 rounded text-sm border border-blue-100">
                            {message}
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 flex">
                        <input 
                          type="text" 
                          placeholder="Type response..."
                          className="flex-1 px-3 py-1 text-sm border border-blue-300 rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <Button size="sm" className="rounded-l-none bg-blue-600 hover:bg-blue-700">
                          <Send className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Chat Panel */}
            <div className="w-80 bg-white border-l border-gray-200">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebateContent;
