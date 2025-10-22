import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

// Componente para carregar seu modelo GLB
function TortaModel() {
  const { scene } = useGLTF('/torta_doce.glb');
  
  // Escala muito maior para zoom próximo
  const scale = 8;
  
  // Posição centralizada
  const position = [0, 0, 0];
  
  return (
    <primitive 
      object={scene} 
      scale={scale} 
      position={position}
    />
  );
}

// Componente principal do visualizador
function ModelViewer() {
  return (
    <div style={{ width: '100%', height: '500px', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{ background: '#1a1a1a' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          <TortaModel />
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ModelViewer;