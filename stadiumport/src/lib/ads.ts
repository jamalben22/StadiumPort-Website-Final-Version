export type AdsProvider = 'adsense' | 'none';

// Feature flag for Ad Provider
// Change this to 'adsense' to switch back, or 'none' to disable all ads
export const ADS_PROVIDER: AdsProvider = 'adsense';

export const isAdSenseEnabled = (ADS_PROVIDER as string) === 'adsense';
