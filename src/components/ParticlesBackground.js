import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSnowPreset } from "tsparticles-preset-snow";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSnowPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "snow",
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: "transparent" },
        particles: {
          number: { value: 40 }, // default desktop
          move: { speed: 0.7 }
        },
        responsive: [
          {
            maxWidth: 700, // breakpoint mobile
            options: {
              particles: {
                number: { value: 15 }, // lebih sedikit di mobile
                move: { speed: 0.4 }   // lebih lambat di mobile
              }
            }
          }
        ]
      }}
    />
  );
}