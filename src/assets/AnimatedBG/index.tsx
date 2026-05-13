import { type Engine, type ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useState } from 'react';

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // دي الخطوة اللي كانت بتعمل Error
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = {
    // 1. دي أهم حتة: بتخلي الخلفية تغطي الشاشة كلها وتثبت ورا الكلام
    fullScreen: {
      enable: true, // مش عايزينه يغطي كل حاجة، بس عايزينه يشتغل في الحتة اللي إحنا حاطينه فيها
      zIndex: -1, // عشان تكون ورا أي محتوى تاني
    },
    background: {
      color: {
        value: '#000000', // لون الخلفية الأسود
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab', // التأثير اللي بيوصل الخطوط بالماوس
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.8, // الخطوط اللي قريبة من الماوس تكون واضحة
          },
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.3, // الخطوط البعيدة تكون خفيفة
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5, // سرعة الحركة هادية زي الفيديو
        direction: 'none',
        outModes: {
          default: 'bounce',
        },
      },
      number: {
        density: {
          enable: true,
        },
        value: 150, // عدد النقط
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
};

export default ParticlesComponent;
