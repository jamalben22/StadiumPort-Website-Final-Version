# Supabase Connection Verification

## 1. Quick Verification (Script)
We have created a script to verify the Supabase connection and table access.

Run the following command in your terminal:
```bash
node scripts/test-supabase-connection.js
```
Expected Output:
```
----------------------------------------
🔍 Supabase Connection Test
----------------------------------------
URL: ✅ Found
Key: ✅ Found
📡 Testing connection to "predictions" table...
✅ Connection Successful!
📊 Current row count: [NUMBER]
```

## 2. Verify in Browser (Frontend)
1. **Restart your development server** to apply the changes to `vite-api-middleware.ts`:
   ```bash
   npm run dev
   ```
2. Open your browser console (F12).
3. Go to the Prediction Game and submit a prediction.
4. Watch the **Terminal Output** (where you ran `npm run dev`). You should see:
   ```
   📝 Processing signup for: user@example.com with ID: WC26-XXXXXX
   💾 Attempting to save to Supabase...
   ✅ Prediction stored in Supabase successfully
   ```
5. If successful, you will receive the email with your Unique ID.

## 3. Verify Data in Supabase
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard).
2. Click on **Table Editor** (left sidebar).
3. Select the `predictions` table.
4. You should see your new entry with the generated `unique_id`.

## 4. Verify "My Prediction" Lookup
1. Go to the "My Prediction" page (link in the email or `/my-prediction`).
2. Enter the Unique ID.
3. The bracket should load with your saved data.

## Troubleshooting
- **"Supabase client not initialized"**: Check `.env` file for `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
- **"Database operation failed"**: Check the terminal logs for the specific error message.
- **Page not loading**: Ensure you restarted the server after the code changes.
