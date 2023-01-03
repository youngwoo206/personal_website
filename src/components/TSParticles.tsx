import React from "react";
import { useCallback, useMemo } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function TSParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const options = useMemo(() => {
    return {
      particles: {
        links: {
          enable: false,
        },
        move: {
          enable: false,
        },
      },
    };
  }, []);

  return <Particles init={particlesInit} options={options} />;
}

export default TSParticles;
