import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

// Componente para carregar modelo GLB dinâmico
function DynamicModel({ modelPath, visible }) {
  const gltf = useGLTF(modelPath);
  
  // Clonar a cena para evitar problemas de referência compartilhada
  const clonedScene = useMemo(() => {
    return gltf.scene.clone();
  }, [gltf.scene]);
  
  // Escala muito maior para zoom próximo
  const scale = 8;
  
  // Posição centralizada
  const position = [0, 0, 0];
  
  return (
    <primitive 
      object={clonedScene} 
      scale={scale} 
      position={position}
      visible={visible}
    />
  );
}

// Componente principal do visualizador
function ModelViewer({ selectedModel }) {
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
          <DynamicModel modelPath="/bolo_cenoura.glb" visible={selectedModel === '/bolo_cenoura.glb'} />
          <DynamicModel modelPath="/bomba.glb" visible={selectedModel === '/bomba.glb'} />
          <DynamicModel modelPath="/prato_cuscuz.glb" visible={selectedModel === '/prato_cuscuz.glb'} />
          <DynamicModel modelPath="/torta_doce.glb" visible={selectedModel === '/torta_doce.glb'} />
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