-- FIX: Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Enable insert for all users" ON predictions;
DROP POLICY IF EXISTS "Enable read access for all users" ON predictions;
DROP POLICY IF EXISTS "Enable public insert" ON predictions;
DROP POLICY IF EXISTS "Enable public read" ON predictions;

-- Ensure RLS is enabled
ALTER TABLE predictions ENABLE ROW LEVEL SECURITY;

-- 1. ALLOW INSERT (Public/Anon)
CREATE POLICY "Enable public insert" ON predictions
  FOR INSERT 
  WITH CHECK (true);

-- 2. ALLOW SELECT (Public/Anon) - Required for "My Prediction" lookup
CREATE POLICY "Enable public read" ON predictions
  FOR SELECT 
  USING (true);

-- Verify:
-- SELECT * FROM pg_policies WHERE tablename = 'predictions';
