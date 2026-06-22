import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Embers from "./Embers";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <Embers />

      <EffectComposer>
        <Bloom
          intensity={1.3}
          luminanceThreshold={0.25}
          luminanceSmoothing={0.9}
          mipmapBlur
          radius={0.7}
        />
      </EffectComposer>
    </>
  );
};

export default Scene;
