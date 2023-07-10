import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesBackground = ({ particleSettings }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particleSettings} />;
};

export default ParticlesBackground;
