import React, { useState } from 'react';
import ModelViewer from './components/ModelViewer';
import ModelSelector from './components/ModelSelector';
import modelsList from './models.json';
import './App.css'

function App() {
  const [selectedModel, setSelectedModel] = useState('/torta_doce.glb');
  const [selectedModelName, setSelectedModelName] = useState('torta_doce');

  const handleModelSelect = (modelName) => {
    const model = modelsList.models.find(m => m.name === modelName);
    if (model) {
      setSelectedModel(model.path);
      setSelectedModelName(model.name);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Visualizador de Modelo 3D</h1>
        <p>{selectedModelName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - Modelo GLB Interativo</p>
      </header>
      
      <main className="app-main">
        <div className="viewer-section">
          <ModelViewer selectedModel={selectedModel} />
        </div>
        
        <ModelSelector 
          selectedModel={selectedModelName}
          onModelSelect={handleModelSelect}
        />
        
        <div className="controls-info">
          <h3>Controles:</h3>
          <ul>
            <li><strong>Botão esquerdo:</strong> Rotacionar modelo</li>
            <li><strong>Botão direito:</strong> Mover modelo</li>
            <li><strong>Scroll:</strong> Zoom in/out</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App
