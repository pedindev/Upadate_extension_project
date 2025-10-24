import React, { useState } from 'react';
import ModelViewer from './components/ModelViewer';
import Modal3D from './components/Modal3D';
import './App.css'

function App() {
  const [selectedModel, setSelectedModel] = useState('/torta_doce.glb');
  const [selectedModelName, setSelectedModelName] = useState('torta_doce');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalModel, setModalModel] = useState(null);
  const [modalProductName, setModalProductName] = useState('');

  // Dados dos produtos com informações completas
  const products = [
    {
      id: 'bolo_cenoura',
      name: 'bolo_cenoura',
      nameDisplay: 'Bolo de Cenoura',
      image: '/bolo_cenoura.glb',
      imageUrl: 'https://via.placeholder.com/300x300/FF6B6B/FFFFFF?text=Bolo+de+Cenoura',
      category: 'doces',
      price: 10.00,
      description: 'Um delicioso bolo de cenoura com uma rica cobertura de chocolate.',
      ingredients: 'Farinha de trigo, açúcar, ovos, cenoura, chocolate'
    },
    {
      id: 'torta_doce',
      name: 'torta_doce',
      nameDisplay: 'Torta de Leite',
      image: '/torta_doce.glb',
      imageUrl: 'https://via.placeholder.com/300x300/FFB347/FFFFFF?text=Torta+de+Leite',
      category: 'doces',
      price: 15.00,
      description: 'Uma torta cremosa de leite condensado com base de biscoito.',
      ingredients: 'Leite condensado, creme de leite, biscoito, manteiga'
    },
    {
      id: 'cuscuz',
      name: 'prato_cuscuz',
      nameDisplay: 'Cuscuz com Ovo',
      image: '/prato_cuscuz.glb',
      imageUrl: 'https://via.placeholder.com/300x300/FFE66D/FFFFFF?text=Cuscuz+com+Ovo',
      category: 'salgados',
      price: 12.00,
      description: 'O tradicional café da manhã nordestino.',
      ingredients: 'Cuscuz de milho, ovo frito'
    },
    {
      id: 'bomba',
      name: 'bomba',
      nameDisplay: 'Bomba',
      image: '/bomba.glb',
      imageUrl: 'https://via.placeholder.com/300x300/4ECDC4/FFFFFF?text=Bomba',
      category: 'salgados',
      price: 8.00,
      description: 'Salgado Típico da cidade de Teresina.',
      ingredients: 'Queijo e Presunto'
    }
  ];

  const handleModelSelect = (modelName) => {
    const product = products.find(p => p.name === modelName);
    if (product) {
      setSelectedModel(product.image);
      setSelectedModelName(product.name);
    }
  };

  const handleOpenModal = (product) => {
    setModalModel(product.image);
    setModalProductName(product.nameDisplay);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'doces', name: 'Doces' },
    { id: 'salgados', name: 'Salgados' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <button className="menu-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </button>
          <button className="search-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-image">
          <ModelViewer key="hero-viewer" selectedModel={selectedModel} />
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="restaurant-info">
        <div className="logo-placeholder">
          <div className="logo-circle">🍰</div>
        </div>
        <h1 className="restaurant-name">3DINE</h1>
        <div className="status-badge closed">
          <span>Fechado</span>
        </div>
        <div className="restaurant-details">
          <span className="detail-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
            40-143min
          </span>
          <span className="separator">•</span>
          <span className="detail-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
            </svg>
            Mínimo R$ 10,00
          </span>
          <span className="separator">•</span>
          <span className="detail-link">Ver mais</span>
        </div>
      </div>

      {/* Category Menu */}
      <div className="category-menu">
        <div className="category-list">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <main className="products-section">
        <div className="section-header">
          <h2>{selectedCategory === 'all' ? 'Produtos em Destaque' : categories.find(c => c.id === selectedCategory)?.name}</h2>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className={`product-card ${selectedModelName === product.name ? 'selected' : ''}`}
              onClick={() => handleModelSelect(product.name)}
            >
              <div className="product-image">
                <img src={product.imageUrl} alt={product.nameDisplay} />
                <button 
                  className="view-3d-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(product);
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  Ver 3D
                </button>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.nameDisplay}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">R$ {product.price.toFixed(2)}</span>
                  <button className="add-btn">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal 3D */}
      <Modal3D 
        isOpen={modalOpen}
        onClose={handleCloseModal}
        modelPath={modalModel}
        productName={modalProductName}
      />
    </div>
  )
}

export default App
