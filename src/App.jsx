import React, { useState } from 'react';
import ModelViewer from './components/ModelViewer';
import ModelSelector from './components/ModelSelector';
import modelsList from './models.json';
import './App.css'

// Error Boundary para capturar erros
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Erro capturado:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Algo deu errado</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Tentar novamente
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

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
    <ErrorBoundary>
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
    </ErrorBoundary>
  )
}

export default App
