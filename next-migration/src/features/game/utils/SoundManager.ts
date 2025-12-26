// Simple Sound Manager for UI Effects
// In a real app, this would preload assets. 
// For now, it manages the Audio objects safely.

class SoundManager {
  private sounds: Record<string, HTMLAudioElement> = {};
  private muted: boolean = false;

  constructor() {
    // Preload sounds if available (paths relative to public folder)
    // In dev, we might not have the actual assets yet.
    if (process.env.NODE_ENV === 'development') {
      console.log('[SoundManager] Initialized in dev mode (sounds disabled until assets added to /public/sounds/)');
    } else {
      this.registerSound('open', '/sounds/ui-open.mp3');
      this.registerSound('hover', '/sounds/ui-hover.mp3');
      this.registerSound('click', '/sounds/ui-click.mp3');
      this.registerSound('success', '/sounds/ui-success.mp3');
    }
  }

  registerSound(name: string, path: string) {
    if (typeof window !== 'undefined') {
      const audio = new Audio(path);
      audio.volume = 0.5;
      this.sounds[name] = audio;
    }
  }

  play(name: string) {
    if (this.muted) return;
    
    const sound = this.sounds[name];
    if (sound) {
      // Reset time to allow rapid replay
      sound.currentTime = 0;
      sound.play().catch(e => {
        // Ignore autoplay policy errors or missing files during dev
        console.log(`[SoundManager] Playing '${name}' (simulated)`);
      });
    }
  }

  setMuted(muted: boolean) {
    this.muted = muted;
  }
}

export const soundManager = new SoundManager();
