import React, { useState } from 'react';
import './Mission.css'; // You'll need to create this CSS file

const Mission = () => {
  const [currentFile, setCurrentFile] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(1);

  const levels = [
    { id: 1, name: 'Level 1' },
    { id: 2, name: 'Level 2' },
    { id: 3, name: 'Level 3' },
    // Add more levels as needed
  ];

  const fileSystem = [
    { name: 'home', type: 'folder', children: [
      { name: 'question.txt', type: 'file', content: 'This is the question for the mission.' },
      { name: 'hint.txt', type: 'file', content: 'Here\'s a hint to help you.' },
    ]},
    { name: 'log', type: 'folder', children: [] },
    { name: 'bin', type: 'folder', children: [
      { name: 'SecurityTracer.exe', type: 'file', content: 'Binary content here...' },
    ]},
    { name: 'sys', type: 'folder', children: [] },
  ];

  const openFile = (file) => {
    setCurrentFile(file);
  };

  return (
    <div className="mission-container">
      <div className="left-sidebar">
        <h2>Tutorial</h2>
        <p>That should be all you'll need from your own server for now.</p>
        <p>Disconnect From Your Machine</p>
      </div>
      
      <div className="main-content">
        <h2>tszhoill PC File System</h2>
        <div className="file-system">
          {fileSystem.map((item, index) => (
            <div key={index} className="file-item">
              {item.type === 'folder' ? '📁' : '📄'} {item.name}
              {item.type === 'folder' && item.children.map((child, childIndex) => (
                <div key={childIndex} className="file-item child" onClick={() => openFile(child)}>
                  📄 {child.name}
                </div>
              ))}
            </div>
          ))}
        </div>
        {currentFile && (
          <div className="file-content">
            <h3>{currentFile.name}</h3>
            <p>{currentFile.content}</p>
          </div>
        )}
      </div>
      
      <div className="bottom-progress">
        {levels.map((level) => (
          <div 
            key={level.id} 
            className={`progress-dot ${currentLevel === level.id ? 'active' : ''}`}
            onClick={() => setCurrentLevel(level.id)}
          >
            {level.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;