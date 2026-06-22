import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { icons as vscodeIcons } from "@iconify-json/vscode-icons";

const NORMAL_ICONS = [
  "file-type-video",
  "file-type-pdf",
  "file-type-audio",
  "file-type-text",
  "file-type-image",
  "file-type-zip",
  "file-type-word",
  "file-type-excel",
  "file-type-powerpoint",
  "file-type-png",
  "file-type-jpg",
];

const CODE_ICONS = [

  "file-type-json",
  "file-type-svg",
  "file-type-html",
  "file-type-css",
  "file-type-code",
];

const FILE_ICON_NAMES = [...NORMAL_ICONS, ...CODE_ICONS];

const NORMAL_WEIGHT = 0.65;

function weightedRandomIcon(validNormal, validCode) {
  const pool = Math.random() < NORMAL_WEIGHT ? validNormal : validCode;
  return pool[Math.floor(Math.random() * pool.length)];
}

const PARTICLE_COUNT = 50;
const BOUNDS_X = 7;
const BOUNDS_Y = 4;
const BOUNDS_Z = 2;

function svgToTexture(iconName) {
  return new Promise((resolve) => {
    const iconData = vscodeIcons.icons[iconName];
    if (!iconData) { resolve(null); return; }

    const w = vscodeIcons.width ?? 32;
    const h = vscodeIcons.height ?? 32;
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">${iconData.body}</svg>`;

    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0, 64, 64);
      URL.revokeObjectURL(url);
      resolve(new THREE.CanvasTexture(canvas));
    };
    img.onerror = () => { URL.revokeObjectURL(url); resolve(null); };
    img.src = url;
  });
}

const Embers = () => {
  const groupRef = useRef();
  const particlesRef = useRef([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const textureMap = {};
      await Promise.all(
        FILE_ICON_NAMES.map(async (name) => {
          const tex = await svgToTexture(name);
          if (tex) textureMap[name] = tex;
        })
      );

      if (cancelled || !groupRef.current) return;

      const validNames = FILE_ICON_NAMES.filter((n) => textureMap[n]);
      if (!validNames.length) return;

      const validNormal = NORMAL_ICONS.filter((n) => textureMap[n]);
      const validCode = CODE_ICONS.filter((n) => textureMap[n]);

      const particles = Array.from({ length: PARTICLE_COUNT }, () => {
        const iconName = weightedRandomIcon(
          validNormal.length ? validNormal : validNames,
          validCode.length ? validCode : validNames
        );
        const material = new THREE.SpriteMaterial({
          map: textureMap[iconName],
          transparent: true,
          opacity: 0.5 + Math.random() * 0.5,
          depthTest: false,
        });
        const sprite = new THREE.Sprite(material);

        sprite.position.set(
          Math.random() * BOUNDS_X * 2 - BOUNDS_X,
          Math.random() * BOUNDS_Y * 2 - BOUNDS_Y,
          Math.random() * BOUNDS_Z - BOUNDS_Z / 2
        );
        sprite.scale.setScalar(0.35 + Math.random() * 0.3);

        return { sprite, speed: 0.3 + Math.random() * 0.5 };
      });

      particlesRef.current = particles;
      particles.forEach(({ sprite }) => groupRef.current.add(sprite));
      setReady(true);
    }

    init();
    return () => { cancelled = true; };
  }, []);

  useFrame((_, delta) => {
    for (const { sprite, speed } of particlesRef.current) {
      sprite.position.x += delta * speed;
      if (sprite.position.x > BOUNDS_X) {
        sprite.position.x = -BOUNDS_X;
        sprite.position.y = Math.random() * BOUNDS_Y * 2 - BOUNDS_Y;
      }
    }
  });

  return <group ref={groupRef} />;
};

export default Embers;
