export function generateUniqueID(): string {
  const prefix = 'WC26';
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Removed I, 1, O, 0 to avoid confusion
  let result = '';
  
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return `${prefix}-${result}`;
}
