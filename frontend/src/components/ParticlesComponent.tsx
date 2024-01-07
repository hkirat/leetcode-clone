import React, { useEffect } from 'react';
import { tsParticles } from '@tsparticles/engine';
import { loadAll } from '@tsparticles/all';

interface ParticleComponentProps {
  containerId: string;
}

const ParticleComponent: React.FC<ParticleComponentProps> = ({ containerId }) => {
  useEffect(() => {
    const initializeParticles = async () => {
      await loadAll(tsParticles);

      await tsParticles.addPreset('lightdark', {
        fullScreen: {
          enable: false,
        },
        particles: {
          links: {
            enable: true,
          },
          move: {
            enable: true,
          },
          number: {
            value: 50,
          },
          opacity: {
            value: { min: 0.3, max: 1 },
          },
          shape: {
            type: ['square', 'polygon'],
            options: {
              polygon: [
                {
                  sides: 6,
                },
                {
                  sides: 8,
                },
              ],
            },
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      });

      await tsParticles.load({
        id: containerId,
        options: {
          preset: 'lightdark',
          particles: {
            color: {
              value: '#ffff',
            },
            links: {
              color: '#ffff',
            },
          },
        },
      });
    };

    initializeParticles();
  }, [containerId]);

  return <div id={containerId} style={{ width: '100%', height: '100%'}} />;
};

export default ParticleComponent;
