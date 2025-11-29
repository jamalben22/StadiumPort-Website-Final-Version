export interface Team {
  id: string;
  name: string;
  code: string; // ISO 2-letter code for flags
  fifaCode: string; // 3-letter FIFA code
  flagUrl: string;
  region: 'CONCACAF' | 'CONMEBOL' | 'UEFA' | 'CAF' | 'AFC' | 'OFC';
  rating: number; // For simulation purposes (1-100)
  colors: [string, string]; // Primary and Secondary colors for gradients
}

// 48 Teams Data (Based on 2026 Projections)
export const TEAMS: Team[] = [
  // HOSTS
  { id: 'mex', name: 'Mexico', code: 'mx', fifaCode: 'MEX', flagUrl: 'https://flagcdn.com/w320/mx.png', region: 'CONCACAF', rating: 84, colors: ['#006847', '#CE1126'] },
  { id: 'can', name: 'Canada', code: 'ca', fifaCode: 'CAN', flagUrl: 'https://flagcdn.com/w320/ca.png', region: 'CONCACAF', rating: 79, colors: ['#FF0000', '#FFFFFF'] },
  { id: 'usa', name: 'USA', code: 'us', fifaCode: 'USA', flagUrl: 'https://flagcdn.com/w320/us.png', region: 'CONCACAF', rating: 85, colors: ['#3C3B6E', '#B22234'] },

  // CONMEBOL (South America)
  { id: 'arg', name: 'Argentina', code: 'ar', fifaCode: 'ARG', flagUrl: 'https://flagcdn.com/w320/ar.png', region: 'CONMEBOL', rating: 92, colors: ['#74ACDF', '#FFFFFF'] },
  { id: 'bra', name: 'Brazil', code: 'br', fifaCode: 'BRA', flagUrl: 'https://flagcdn.com/w320/br.png', region: 'CONMEBOL', rating: 91, colors: ['#FFDF00', '#009C3B'] },
  { id: 'uru', name: 'Uruguay', code: 'uy', fifaCode: 'URU', flagUrl: 'https://flagcdn.com/w320/uy.png', region: 'CONMEBOL', rating: 86, colors: ['#5BA4D6', '#000000'] },
  { id: 'col', name: 'Colombia', code: 'co', fifaCode: 'COL', flagUrl: 'https://flagcdn.com/w320/co.png', region: 'CONMEBOL', rating: 85, colors: ['#FCD116', '#003893'] },
  { id: 'ecu', name: 'Ecuador', code: 'ec', fifaCode: 'ECU', flagUrl: 'https://flagcdn.com/w320/ec.png', region: 'CONMEBOL', rating: 82, colors: ['#FFDD00', '#034EA2'] },
  { id: 'chi', name: 'Chile', code: 'cl', fifaCode: 'CHI', flagUrl: 'https://flagcdn.com/w320/cl.png', region: 'CONMEBOL', rating: 78, colors: ['#DA291C', '#0039A6'] },
  { id: 'per', name: 'Peru', code: 'pe', fifaCode: 'PER', flagUrl: 'https://flagcdn.com/w320/pe.png', region: 'CONMEBOL', rating: 76, colors: ['#D91023', '#FFFFFF'] },

  // UEFA (Europe)
  { id: 'fra', name: 'France', code: 'fr', fifaCode: 'FRA', flagUrl: 'https://flagcdn.com/w320/fr.png', region: 'UEFA', rating: 90, colors: ['#002395', '#ED2939'] },
  { id: 'eng', name: 'England', code: 'gb-eng', fifaCode: 'ENG', flagUrl: 'https://flagcdn.com/w320/gb-eng.png', region: 'UEFA', rating: 89, colors: ['#FFFFFF', '#CE1124'] },
  { id: 'esp', name: 'Spain', code: 'es', fifaCode: 'ESP', flagUrl: 'https://flagcdn.com/w320/es.png', region: 'UEFA', rating: 88, colors: ['#AA151B', '#F1BF00'] },
  { id: 'ger', name: 'Germany', code: 'de', fifaCode: 'GER', flagUrl: 'https://flagcdn.com/w320/de.png', region: 'UEFA', rating: 87, colors: ['#FFFFFF', '#000000'] },
  { id: 'ned', name: 'Netherlands', code: 'nl', fifaCode: 'NED', flagUrl: 'https://flagcdn.com/w320/nl.png', region: 'UEFA', rating: 86, colors: ['#F36C21', '#21468B'] },
  { id: 'por', name: 'Portugal', code: 'pt', fifaCode: 'POR', flagUrl: 'https://flagcdn.com/w320/pt.png', region: 'UEFA', rating: 87, colors: ['#E42518', '#006600'] },
  { id: 'ita', name: 'Italy', code: 'it', fifaCode: 'ITA', flagUrl: 'https://flagcdn.com/w320/it.png', region: 'UEFA', rating: 85, colors: ['#0064AA', '#FFFFFF'] },
  { id: 'cro', name: 'Croatia', code: 'hr', fifaCode: 'CRO', flagUrl: 'https://flagcdn.com/w320/hr.png', region: 'UEFA', rating: 84, colors: ['#FF0000', '#FFFFFF'] },
  { id: 'bel', name: 'Belgium', code: 'be', fifaCode: 'BEL', flagUrl: 'https://flagcdn.com/w320/be.png', region: 'UEFA', rating: 85, colors: ['#E30613', '#FDDA24'] },
  { id: 'den', name: 'Denmark', code: 'dk', fifaCode: 'DEN', flagUrl: 'https://flagcdn.com/w320/dk.png', region: 'UEFA', rating: 82, colors: ['#C60C30', '#FFFFFF'] },
  { id: 'sui', name: 'Switzerland', code: 'ch', fifaCode: 'SUI', flagUrl: 'https://flagcdn.com/w320/ch.png', region: 'UEFA', rating: 81, colors: ['#FF0000', '#FFFFFF'] },
  { id: 'srb', name: 'Serbia', code: 'rs', fifaCode: 'SRB', flagUrl: 'https://flagcdn.com/w320/rs.png', region: 'UEFA', rating: 79, colors: ['#C6363C', '#0C4076'] },
  { id: 'pol', name: 'Poland', code: 'pl', fifaCode: 'POL', flagUrl: 'https://flagcdn.com/w320/pl.png', region: 'UEFA', rating: 78, colors: ['#FFFFFF', '#DC143C'] },
  { id: 'ukr', name: 'Ukraine', code: 'ua', fifaCode: 'UKR', flagUrl: 'https://flagcdn.com/w320/ua.png', region: 'UEFA', rating: 77, colors: ['#FFD700', '#0057B8'] },
  { id: 'swe', name: 'Sweden', code: 'se', fifaCode: 'SWE', flagUrl: 'https://flagcdn.com/w320/se.png', region: 'UEFA', rating: 76, colors: ['#FECC00', '#006AA7'] },
  { id: 'tur', name: 'Turkey', code: 'tr', fifaCode: 'TUR', flagUrl: 'https://flagcdn.com/w320/tr.png', region: 'UEFA', rating: 76, colors: ['#E30A17', '#FFFFFF'] },
  { id: 'aut', name: 'Austria', code: 'at', fifaCode: 'AUT', flagUrl: 'https://flagcdn.com/w320/at.png', region: 'UEFA', rating: 77, colors: ['#ED2939', '#FFFFFF'] },
  { id: 'hun', name: 'Hungary', code: 'hu', fifaCode: 'HUN', flagUrl: 'https://flagcdn.com/w320/hu.png', region: 'UEFA', rating: 75, colors: ['#CE2939', '#477050'] },
  { id: 'sco', name: 'Scotland', code: 'gb-sct', fifaCode: 'SCO', flagUrl: 'https://flagcdn.com/w320/gb-sct.png', region: 'UEFA', rating: 75, colors: ['#005EB8', '#FFFFFF'] },

  // CAF (Africa)
  { id: 'mar', name: 'Morocco', code: 'ma', fifaCode: 'MAR', flagUrl: 'https://flagcdn.com/w320/ma.png', region: 'CAF', rating: 83, colors: ['#C1272D', '#006233'] },
  { id: 'sen', name: 'Senegal', code: 'sn', fifaCode: 'SEN', flagUrl: 'https://flagcdn.com/w320/sn.png', region: 'CAF', rating: 81, colors: ['#00853F', '#FDEF42'] },
  { id: 'nga', name: 'Nigeria', code: 'ng', fifaCode: 'NGA', flagUrl: 'https://flagcdn.com/w320/ng.png', region: 'CAF', rating: 78, colors: ['#008751', '#FFFFFF'] },
  { id: 'egy', name: 'Egypt', code: 'eg', fifaCode: 'EGY', flagUrl: 'https://flagcdn.com/w320/eg.png', region: 'CAF', rating: 77, colors: ['#CE1126', '#FFFFFF'] },
  { id: 'civ', name: 'Ivory Coast', code: 'ci', fifaCode: 'CIV', flagUrl: 'https://flagcdn.com/w320/ci.png', region: 'CAF', rating: 77, colors: ['#F77F00', '#009E60'] },
  { id: 'cmr', name: 'Cameroon', code: 'cm', fifaCode: 'CMR', flagUrl: 'https://flagcdn.com/w320/cm.png', region: 'CAF', rating: 76, colors: ['#007A5E', '#CE1126'] },
  { id: 'alg', name: 'Algeria', code: 'dz', fifaCode: 'ALG', flagUrl: 'https://flagcdn.com/w320/dz.png', region: 'CAF', rating: 76, colors: ['#006233', '#FFFFFF'] },
  { id: 'gha', name: 'Ghana', code: 'gh', fifaCode: 'GHA', flagUrl: 'https://flagcdn.com/w320/gh.png', region: 'CAF', rating: 75, colors: ['#CE1126', '#FCD116'] },
  { id: 'tun', name: 'Tunisia', code: 'tn', fifaCode: 'TUN', flagUrl: 'https://flagcdn.com/w320/tn.png', region: 'CAF', rating: 74, colors: ['#E70013', '#FFFFFF'] },
  { id: 'mli', name: 'Mali', code: 'ml', fifaCode: 'MLI', flagUrl: 'https://flagcdn.com/w320/ml.png', region: 'CAF', rating: 74, colors: ['#14B53A', '#FCD116'] },

  // AFC (Asia)
  { id: 'jpn', name: 'Japan', code: 'jp', fifaCode: 'JPN', flagUrl: 'https://flagcdn.com/w320/jp.png', region: 'AFC', rating: 82, colors: ['#000555', '#FFFFFF'] },
  { id: 'kor', name: 'South Korea', code: 'kr', fifaCode: 'KOR', flagUrl: 'https://flagcdn.com/w320/kr.png', region: 'AFC', rating: 80, colors: ['#CD2E3A', '#0047A0'] },
  { id: 'irn', name: 'Iran', code: 'ir', fifaCode: 'IRN', flagUrl: 'https://flagcdn.com/w320/ir.png', region: 'AFC', rating: 79, colors: ['#DA0000', '#239F40'] },
  { id: 'aus', name: 'Australia', code: 'au', fifaCode: 'AUS', flagUrl: 'https://flagcdn.com/w320/au.png', region: 'AFC', rating: 77, colors: ['#FFCD00', '#00843D'] },
  { id: 'ksa', name: 'Saudi Arabia', code: 'sa', fifaCode: 'KSA', flagUrl: 'https://flagcdn.com/w320/sa.png', region: 'AFC', rating: 76, colors: ['#165D31', '#FFFFFF'] },
  { id: 'qat', name: 'Qatar', code: 'qa', fifaCode: 'QAT', flagUrl: 'https://flagcdn.com/w320/qa.png', region: 'AFC', rating: 74, colors: ['#8D1B3D', '#FFFFFF'] },
  { id: 'uzb', name: 'Uzbekistan', code: 'uz', fifaCode: 'UZB', flagUrl: 'https://flagcdn.com/w320/uz.png', region: 'AFC', rating: 72, colors: ['#0099B5', '#CE1126'] },
  { id: 'irq', name: 'Iraq', code: 'iq', fifaCode: 'IRQ', flagUrl: 'https://flagcdn.com/w320/iq.png', region: 'AFC', rating: 71, colors: ['#007A3D', '#000000'] },

  // CONCACAF (Others)
  { id: 'crc', name: 'Costa Rica', code: 'cr', fifaCode: 'CRC', flagUrl: 'https://flagcdn.com/w320/cr.png', region: 'CONCACAF', rating: 75, colors: ['#CE1126', '#002B7F'] },
  { id: 'pan', name: 'Panama', code: 'pa', fifaCode: 'PAN', flagUrl: 'https://flagcdn.com/w320/pa.png', region: 'CONCACAF', rating: 73, colors: ['#DA121A', '#072357'] },
  { id: 'jam', name: 'Jamaica', code: 'jm', fifaCode: 'JAM', flagUrl: 'https://flagcdn.com/w320/jm.png', region: 'CONCACAF', rating: 72, colors: ['#FED100', '#009B3A'] },
  { id: 'hon', name: 'Honduras', code: 'hn', fifaCode: 'HON', flagUrl: 'https://flagcdn.com/w320/hn.png', region: 'CONCACAF', rating: 70, colors: ['#0073CF', '#FFFFFF'] },

  // OFC (Oceania)
  { id: 'nzl', name: 'New Zealand', code: 'nz', fifaCode: 'NZL', flagUrl: 'https://flagcdn.com/w320/nz.png', region: 'OFC', rating: 72, colors: ['#000000', '#FFFFFF'] },
];

export const TEAM_MAP = new Map(TEAMS.map(t => [t.id, t]));

export const GROUPS: Record<string, string[]> = {
  A: ['mex', 'egy', 'pol', 'kor'],
  B: ['can', 'sui', 'cmr', 'ksa'],
  C: ['usa', 'den', 'sen', 'pan'],
  D: ['bra', 'ukr', 'tun', 'jam'],
  E: ['fra', 'chi', 'irn', 'nzl'],
  F: ['arg', 'swe', 'alg', 'crc'],
  G: ['eng', 'nga', 'ecu', 'qat'],
  H: ['esp', 'tur', 'gha', 'aus'],
  I: ['por', 'uru', 'civ', 'jpn'],
  J: ['ita', 'col', 'srb', 'mar'],
  K: ['ger', 'cro', 'per', 'uzb'],
  L: ['ned', 'bel', 'aut', 'mli']
};
