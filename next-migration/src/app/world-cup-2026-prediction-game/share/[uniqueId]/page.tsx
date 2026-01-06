import { Metadata } from 'next';
import { supabase } from '../../../../lib/supabase';
import ShareClient from './ShareClient';

interface PageProps {
  params: Promise<{ uniqueId: string }>;
}

async function getPrediction(id: string) {
  if (!supabase) return null;
  
  try {
    const { data } = await supabase
      .from('predictions')
      .select('*')
      .eq('unique_id', id)
      .single();
    return data;
  } catch (e) {
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { uniqueId } = await params;
  const prediction = await getPrediction(uniqueId);
  
  const userName = prediction?.name || 'A Fan';
  const title = `${userName}'s World Cup 2026 Prediction`;
  const description = `Check out ${userName}'s bracket for the 2026 World Cup! Who wins it all? Play the free predictor game now.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://stadiumport.com/world-cup-2026-prediction-game/share/${uniqueId}`,
      images: [
        {
          url: '/images/hub-pages/FIFA-World-Cup-26-qualified-teams-wallchart-graphic.webp',
          width: 1200,
          height: 630,
          alt: 'World Cup 2026 Prediction Challenge',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/hub-pages/FIFA-World-Cup-26-qualified-teams-wallchart-graphic.webp'],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { uniqueId } = await params;
  const prediction = await getPrediction(uniqueId);

  return <ShareClient uniqueId={uniqueId} initialPrediction={prediction} />;
}
