import React from 'react'
import Particles from "react-tsparticles";
import styles from './animation.module.css'

const Animation = () => {
  return (
    <div className={styles.container}>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#282c34",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 600,
                duration: 4,
                opacity: 0.8,
                size: 30,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 500,
                duration: 3,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1000,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 4,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}

export default Animation