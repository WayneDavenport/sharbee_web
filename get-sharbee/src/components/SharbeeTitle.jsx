import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { font } from "../lib/font";

const SharbeeTitle = (props) => {
  const matRef = useRef();

  const geometry = useMemo(() => {
    const geo = new TextGeometry("Sharbee", {
      font,
      size: 1.2,
      depth: 0.05,
      curveSegments: 12,
      bevelEnabled: false,
    });
    geo.center();
    return geo;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Periods chosen to divide the 8s capture window so the deterministic
    // layer loops seamlessly: full hue cycle = 8s, one breath = 2s (4 per loop).
    const hue = (t / 8) % 1;
    const pulse = 1.6 + Math.sin(t * ((2 * Math.PI) / 2)) * 0.9;
    if (matRef.current) {
      matRef.current.color.setHSL(hue, 1, 0.6).multiplyScalar(pulse);
    }
  });

  return (
    <mesh geometry={geometry} {...props}>
      <meshBasicMaterial ref={matRef} toneMapped={false} />
    </mesh>
  );
};

export default SharbeeTitle;
