import { Match } from './bracket-logic';

/**
 * Resolves the team ID for a specific match slot (1 or 2).
 * 
 * @param matchId - The ID of the match to find a team for
 * @param slot - 1 for team1, 2 for team2
 * @param matches - Array of all matches in the bracket
 * @param knockoutPicks - Current state of knockout picks (matchId -> winnerId)
 * @returns The team ID if resolved, or null if not yet determined
 */
export const getTeamForMatchSlot = (
  matchId: string, 
  slot: 1 | 2, 
  matches: Match[], 
  knockoutPicks: Record<string, string>
): string | null => {
  const match = matches.find(m => m.id === matchId);
  if (!match) return null;

  // For Round of 32, teams are already assigned in the match object
  if (matchId.startsWith('R32')) {
    return slot === 1 ? match.team1Id : match.team2Id;
  }

  // For later rounds, find the matches that feed into this one
  const feedingMatches = matches.filter(m => m.nextMatchId === matchId);
  
  // Sort by ID to ensure consistent ordering (e.g. R16-01 feeds into QF-01, R16-02 feeds into QF-01)
  // We assume the bracket logic generates IDs such that sorting them gives correct slot order
  feedingMatches.sort((a, b) => a.id.localeCompare(b.id));

  if (feedingMatches.length < 2) return null;

  const sourceMatch = slot === 1 ? feedingMatches[0] : feedingMatches[1];
  
  // The team for this slot is the WINNER of the source match
  return knockoutPicks[sourceMatch.id] || null;
};
