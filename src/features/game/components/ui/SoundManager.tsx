import useSound from 'use-sound';
import { useCallback } from 'react';

// Sound file paths (assuming they exist in public/sounds/)
const SOUNDS = {
  click: '/sounds/click.mp3',
  swoosh: '/sounds/swoosh.mp3',
};

export const useSoundManager = () => {
  const [playClick] = useSound(SOUNDS.click, { volume: 0.5 });
  const [playSwoosh] = useSound(SOUNDS.swoosh, { volume: 0.3 });

  const playHover = useCallback(() => {
    // Optional: Add a subtle hover sound if needed later
  }, []);

  return {
    playClick,
    playSwoosh,
    playHover,
  };
};
