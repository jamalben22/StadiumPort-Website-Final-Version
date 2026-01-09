import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';

const STORAGE_KEY = 'sp_wc26_predictions';

export function usePredictionByCode(code?: string) {
  const [prediction, setPrediction] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (!code) return;
      setLoading(true);
      setError('');
      setPrediction(null);

      // 1) Try Supabase if configured
      if (supabase) {
        try {
          const { data, error: sbError } = await supabase
            .from('predictions')
            .select('*')
            .eq('unique_id', code)
            .single();

          if (!sbError && data) {
            setPrediction(data);
            setLoading(false);
            return;
          }
        } catch (e) {
          console.error('Supabase fetch error:', e);
        }
      }

      // 2) Fallback to localStorage (client-side persistence)
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const map = raw ? JSON.parse(raw) : {};
        const local = map[code];
        if (local) {
          setPrediction(local);
        } else {
          setError('Prediction not found');
        }
      } catch {
        setError('Prediction not found');
      }
      setLoading(false);
    };
    fetchData();
  }, [code]);

  return { prediction, loading, error };
}
