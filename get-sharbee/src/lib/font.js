import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import fontJson from "three/examples/fonts/helvetiker_regular.typeface.json";

// Parsed once and shared. Bundled with three, so fully offline (no CDN fetch).
export const font = new FontLoader().parse(fontJson);
