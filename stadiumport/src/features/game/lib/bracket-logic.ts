// Type definitions for the bracket structure
export interface Match {
  id: string; // e.g., "R32-1", "QF-2"
  team1Id: string | null;
  team2Id: string | null;
  nextMatchId?: string; // ID of the match the winner advances to
}

export interface Bracket {
  roundOf32: Match[];
}

/**
 * Generates the Round of 32 matches based on group standings and 3rd place picks.
 * 
 * Logic based on standard 48-team tournament structure (hypothetical/projected):
 * - 12 Group Winners (1A-1L)
 * - 12 Group Runners-up (2A-2L)
 * - 8 Best 3rd Place Teams (3rd places)
 * 
 * Note: The exact mapping of 3rd place teams to specific matches is complex and depends on 
 * which groups provide the 3rd place teams. 
 * For this implementation, we'll use a simplified distribution logic to ensure valid matchups.
 */
export const generateBracketMatches = (
  groupStandings: Record<string, string[]>, 
  thirdPlacePicks: string[]
): Bracket => {
  
  // Helper to get team by position (0=1st, 1=2nd, 2=3rd)
  const getTeam = (group: string, pos: number) => groupStandings[group]?.[pos] || null;

  // We have 8 third place teams. We need to assign them to play against Group Winners.
  // In a 32-team bracket:
  // - Top seeded group winners play 3rd place teams
  // - Other group winners play Runners-up?
  // 
  // Standard 48-team bracket projection (one variation):
  // 1.  1A vs 3rd
  // 2.  1B vs 3rd
  // 3.  1C vs 3rd
  // 4.  1D vs 3rd
  // 5.  1E vs 3rd
  // 6.  1F vs 3rd
  // 7.  1G vs 3rd
  // 8.  1H vs 3rd
  // (That's 8 matches of Winner vs 3rd)
  // 
  // Remaining 4 Group Winners (I, J, K, L) vs Group Runners-up?
  // Or strict bracket slots.
  // 
  // Let's implement a fixed structure where:
  // Matches 1-8: Winner vs 3rd Place (Distributed)
  // Matches 9-16: Winner vs Runner-up OR Runner-up vs Runner-up
  // 
  // Since we don't have the official 2026 bracket logic (it varies by specific 3rd place combos),
  // we will simply fill the "3rd Place" slots with the `thirdPlacePicks` array in order.
  // This is a simplification but sufficient for a predictor game user experience.
  
  const tp = [...thirdPlacePicks]; // Copy to shift from

  // Structure based on common 32-team knockout trees (Left/Right balance)
  // We define 16 matches for Round of 32.
  // 
  // Match ID convention: R32-01 to R32-16
  // 
  // Hypothetical Matchups:
  // R32-01: 2A vs 2B
  // R32-02: 1C vs 3rd (1)
  // R32-03: 1E vs 3rd (2)
  // R32-04: 1G vs 3rd (3)
  // R32-05: 1I vs 3rd (4)
  // R32-06: 2D vs 2E
  // R32-07: 1A vs 3rd (5)
  // R32-08: 1B vs 3rd (6)
  // ... and so on.
  
  // To make it robust and deterministic:
  // We'll pair Winners (1A-1L) and remaining spots.
  // 
  // Total slots: 32.
  // Teams: 12 Winners + 12 Runners-up + 8 Thirds = 32. Perfect.
  
  // Let's create a mapping that feels "tournament-like" (mixing groups).
  
  const matches: Match[] = [
    // --- TOP HALF LEFT ---
    { id: 'R32-01', team1Id: getTeam('A', 1), team2Id: getTeam('B', 1), nextMatchId: 'R16-01' }, // 2A vs 2B
    { id: 'R32-02', team1Id: getTeam('C', 0), team2Id: tp[0] || null, nextMatchId: 'R16-01' },   // 1C vs 3rd
    
    { id: 'R32-03', team1Id: getTeam('E', 0), team2Id: tp[1] || null, nextMatchId: 'R16-02' },   // 1E vs 3rd
    { id: 'R32-04', team1Id: getTeam('G', 0), team2Id: tp[2] || null, nextMatchId: 'R16-02' },   // 1G vs 3rd
    
    // --- TOP HALF RIGHT ---
    { id: 'R32-05', team1Id: getTeam('I', 0), team2Id: tp[3] || null, nextMatchId: 'R16-03' },   // 1I vs 3rd
    { id: 'R32-06', team1Id: getTeam('D', 1), team2Id: getTeam('E', 1), nextMatchId: 'R16-03' }, // 2D vs 2E
    
    { id: 'R32-07', team1Id: getTeam('A', 0), team2Id: tp[4] || null, nextMatchId: 'R16-04' },   // 1A vs 3rd
    { id: 'R32-08', team1Id: getTeam('B', 0), team2Id: tp[5] || null, nextMatchId: 'R16-04' },   // 1B vs 3rd
    
    // --- BOTTOM HALF LEFT ---
    { id: 'R32-09', team1Id: getTeam('K', 0), team2Id: tp[6] || null, nextMatchId: 'R16-05' },   // 1K vs 3rd
    { id: 'R32-10', team1Id: getTeam('G', 1), team2Id: getTeam('H', 1), nextMatchId: 'R16-05' }, // 2G vs 2H
    
    { id: 'R32-11', team1Id: getTeam('D', 0), team2Id: getTeam('I', 1), nextMatchId: 'R16-06' }, // 1D vs 2I
    { id: 'R32-12', team1Id: getTeam('F', 0), team2Id: getTeam('C', 1), nextMatchId: 'R16-06' }, // 1F vs 2C
    
    // --- BOTTOM HALF RIGHT ---
    { id: 'R32-13', team1Id: getTeam('H', 0), team2Id: getTeam('J', 1), nextMatchId: 'R16-07' }, // 1H vs 2J
    { id: 'R32-14', team1Id: getTeam('J', 0), team2Id: getTeam('K', 1), nextMatchId: 'R16-07' }, // 1J vs 2K
    
    { id: 'R32-15', team1Id: getTeam('L', 0), team2Id: tp[7] || null, nextMatchId: 'R16-08' },   // 1L vs 3rd
    { id: 'R32-16', team1Id: getTeam('F', 1), team2Id: getTeam('L', 1), nextMatchId: 'R16-08' }, // 2F vs 2L
  ];

  return {
    roundOf32: matches
  };
};
