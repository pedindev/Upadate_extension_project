import ModelViewer from './components/ModelViewer'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Visualizador de Modelo 3D</h1>
        <p>Torta Doce - Modelo GLB Interativo</p>
      </header>
      
      <main className="app-main">
        <div className="viewer-section">
          <ModelViewer />
        </div>
        
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
