import { Canvas } from "@react-three/fiber";
import { Bounds, Center, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("/models/soundsystem.glb");

  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

export default function SoundSystemModel() {
  return (
    <div className="h-[500px] w-full overflow-hidden rounded-xl bg-[#101010]">
      <Canvas camera={{ position: [4, 3, 6], fov: 45 }}>
        <ambientLight intensity={1.8} />
        <directionalLight position={[5, 8, 5]} intensity={2} />

        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <Model />
          </Bounds>
        </Suspense>

        <OrbitControls
          makeDefault
          enableDamping
          enableZoom
          enablePan={false}
          minDistance={1}
          maxDistance={50}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/soundsystem.glb");