import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const MultiTilt: React.FC<{
  cls: string;
  options: {
    speed?: number;
    max?: number;
    "max-glare"?: number;
    gyroscope?: boolean;
    scale?: number;
    perspective?: number;
    reverse?: boolean;
    glare?: boolean;
    easing?: string;
  };
}> = ({ cls, options }) => {
  useEffect(() => {
    const cards = document.querySelectorAll(`.${cls}`);
    cards.forEach((card) => {
      VanillaTilt.init(card as HTMLElement, options);
    });
    return () => {
      cards.forEach((card) => {
        (
          card as HTMLElement & { vanillaTilt?: { destroy: () => void } }
        ).vanillaTilt?.destroy();
      });
    };
  }, [options, cls]);
  return null;
};

export default MultiTilt;
