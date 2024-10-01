import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Environment } from '@react-three/drei';
import { Suspense, useEffect, useRef } from 'react';
import { AnimationMixer, Mesh } from 'three';
import astronautModelSrc from "../../assets/astronaut/scene.gltf?url";
import { TextureLoader } from 'three';
import texture1 from '../../assets/astronaut/textures/botas_nino_m_diffuse.png';
import texture2 from '../../assets/astronaut/textures/casco_nino_m_diffuse.png';
import texture3 from '../../assets/astronaut/textures/pasted__logonino_diffuse.jpeg';
import texture4 from '../../assets/astronaut/textures/pasted__trajechico_diffuse.jpeg';


export default function Astronaut()
{
    const gltf = useGLTF(astronautModelSrc, true);
    const ref = useRef<Mesh>();
    const mixer = useRef<AnimationMixer>();
    const textureLoader = new TextureLoader();
    const texture1Map = textureLoader.load(texture1);
    const texture2Map = textureLoader.load(texture2);
    const texture3Map = textureLoader.load(texture3);
    const texture4Map = textureLoader.load(texture4);

    const initialPosition = useRef<[number, number, number]>([0, -1, 0]);

useFrame((state, delta) => {
    if (!ref.current) return;

    // Store the initial position
    if (initialPosition.current[1] === -1) {
        initialPosition.current = [
            ref.current.position.x,
            ref.current.position.y,
            ref.current.position.z
        ];
    }

    // Calculate the new Y position
    const time = state.clock.getElapsedTime();
    const newY = initialPosition.current[1] + Math.sin(time * .5) * 1.5; // Adjust 0.1 to change oscillation amplitude

    // Update the position
    ref.current.position.y = newY;

    // Update animation mixer if it exists
    if (mixer.current) mixer.current.update(delta);
});

useEffect(() => {
    if (gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.material instanceof THREE.MeshPhysicalMaterial) {
            child.material.map = texture4Map;
            child.material.emissiveMap = texture3Map;
            child.material.metalnessMap = texture1Map;
            child.material.roughnessMap = texture2Map;
            child.material.needsUpdate = true;
          }
        }
      });
    }
  }, [gltf, texture1Map, texture2Map, texture3Map, texture4Map]);

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.position.set(2.3, -2, -2);
      gltf.scene.rotation.x = Math.PI * 0.2;
      gltf.scene.rotation.z = Math.PI * 0.15;
      gltf.scene.scale.set(1.5, 1.5, 1.5);
    }
  }, [gltf]);
  


  return(
    <Suspense fallback={null}>                    
        <primitive ref={ref} object={gltf.scene}/>
        <Environment preset="sunset"/>
        <ambientLight intensity={0.8} />
        <directionalLight position={[1, 2, 0]} intensity={1} castShadow />
    </Suspense>
)

}