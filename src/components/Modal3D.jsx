import React from 'react';
import ModelViewer from './ModelViewer';
import './Modal3D.css';

function Modal3D({ isOpen, onClose, modelPath, productName }) {
  if (!isOpen || !modelPath) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        <div className="modal-header">
          <h2>{productName}</h2>
        </div>
        <div className="modal-viewer">
          <ModelViewer selectedModel={modelPath} />
        </div>
        <div className="modal-info">
          <p>Arraste para rotacionar • Scroll para zoom</p>
        </div>
      </div>
    </div>
  );
}

export default Modal3D;

