import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        particles: {
          number: { value: 18, density: { enable: true, area: 800 } },
          color: { value: "#fff" },
          shape: { type: "star" },
          opacity: { value: 0.8 },
          size: { value: { min: 1, max: 2 } },
          move: {
            enable: true,
            speed: 8,
            direction: "bottom-right",
            straight: false,
            outModes: { default: "out" }
          }
        },
        background: { color: "transparent" }
      }}
    />
  );
}