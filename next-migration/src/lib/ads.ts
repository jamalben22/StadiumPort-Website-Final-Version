export type AdsProvider = 'ezoic' | 'adsense' | 'none';

// Feature flag for Ad Provider
// Change this to 'adsense' to switch back, or 'none' to disable all ads
export const ADS_PROVIDER: AdsProvider = 'ezoic';

export const isEzoicEnabled = (ADS_PROVIDER as string) === 'ezoic';
export const isAdSenseEnabled = (ADS_PROVIDER as string) === 'adsense';
