"use client";
import type { Container } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect, useId, useState } from "react";
import "./sparkles.css";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;

  const [init, setInit] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  const generatedId = useId();

  return (
    <motion.div
      animate={controls}
      className={`sparkles-container ${className}`}
    >
      {init && (
        <Particles
          id={id || generatedId}
          className="particles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "transparent",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true as any,
              },
              modes: {
                push: {
                  quantity: 10,
                },
                repulse: {
                  distance: 2000,
                  duration: 0.4,
                },
              },
            },
            particles: {
              bounce: {
                horizontal: { value: 1 },
                vertical: { value: 1 },
              },
              collisions: { enable: false },
              color: {
                value: particleColor || "#fff",
              },
              number: {
                density: {
                  enable: true,
                  width: 500,
                  height: 500,
                },
                value: particleDensity || 120,
              },
              opacity: {
                value: { min: 0.1, max: 0.75 },
                animation: {
                  count: 0,
                  enable: true,
                  speed: speed || 4,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                  destroy: "none",
                },
              },
              size: {
                value: {
                  min: minSize || 3,
                  max: maxSize || 3,
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};

const Sparkles = ({ children }: { children: ReactNode }) => {
  return (
    <div className="sparkles-outer">
      {children}
      <div className="sparkles-inner">
        <SparklesCore minSize={0.4} maxSize={1} particleDensity={1200} />
        <div className="sparkles-bottom">
          <div className="line gradient-line1"></div>
          <div className="line gradient-line2 blur-line"></div>
          <div className="line gradient-line2 thin"></div>
        </div>
      </div>
    </div>
  );
};

export default Sparkles;
