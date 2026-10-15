import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const Tilt: React.FC<{
  cls: string;
  options: {
    speed?: number;
    max?: number;
    "max-glare"?: number;
    gyroscope?: boolean;
    scale?: number;
    reverse?: boolean;
    glare?: boolean;
    perspective?: number;
  };
}> = ({ cls, options }) => {
  useEffect(() => {
    const el = document.querySelector(`.${cls}`) as
      (HTMLElement & { vanillaTilt?: { destroy: () => void } }) | null;
    if (el) {
      VanillaTilt.init(el, options);
      return () => {
        el.vanillaTilt?.destroy();
      };
    }
  }, [options, cls]);
  return null;
};

export default Tilt;
