import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { font } from "../lib/font";

const PERIOD = 4.0; // seconds per full loop
const DRAW_FRACTION = 0.7; // portion of the loop spent drawing the trace

const InstallingTracer = (props) => {
  const { geometry, totalCount } = useMemo(() => {
    const shapes = font.generateShapes("Installing", 0.55);
    const positions = [];

    // Walk shapes in glyph order (left -> right). Each contour is emitted as
    // sequential line segments so a growing drawRange reveals it L->R.
    for (const shape of shapes) {
      const contours = [shape.getPoints(24), ...shape.holes.map((h) => h.getPoints(24))];
      for (const pts of contours) {
        for (let i = 0; i < pts.length - 1; i++) {
          positions.push(pts[i].x, pts[i].y, 0, pts[i + 1].x, pts[i + 1].y, 0);
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(positions), 3)
    );
    geo.center();
    geo.setDrawRange(0, 0);

    return { geometry: geo, totalCount: positions.length / 3 };
  }, []);

  useFrame((state) => {
    const t = (state.clock.elapsedTime % PERIOD) / PERIOD;
    const progress = Math.min(t / DRAW_FRACTION, 1);
    geometry.setDrawRange(0, Math.floor(progress * totalCount));
  });

  return (
    <lineSegments geometry={geometry} {...props}>
      <lineBasicMaterial color={[0, 2.2, 2.8]} toneMapped={false} transparent />
    </lineSegments>
  );
};

export default InstallingTracer;
