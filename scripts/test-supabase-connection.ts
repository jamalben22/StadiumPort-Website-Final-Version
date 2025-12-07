
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load env
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    console.log('📄 Loading .env file...');
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split(/\r?\n/).forEach(line => {
      const lineContent = line.trim();
      if (!lineContent || lineContent.startsWith('#')) return;
      const delimiterIndex = lineContent.indexOf('=');
      if (delimiterIndex !== -1) {
        const key = lineContent.substring(0, delimiterIndex).trim();
        let value = lineContent.substring(delimiterIndex + 1).trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        if (!process.env[key]) process.env[key] = value;
      }
    });
  } else {
    console.error('❌ .env file not found!');
  }
}

loadEnv();

const url = process.env.VITE_SUPABASE_URL;
const key = process.env.VITE_SUPABASE_ANON_KEY;

console.log('----------------------------------------');
console.log('🔍 Supabase Connection Test');
console.log('----------------------------------------');
console.log(`URL: ${url ? '✅ Found' : '❌ Missing'}`);
console.log(`Key: ${key ? '✅ Found' : '❌ Missing'}`);

if (!url || !key) {
  console.error('❌ Missing credentials. Please check .env file.');
  process.exit(1);
}

const supabase = createClient(url, key);

async function testConnection() {
  try {
    console.log('📡 Testing connection to "predictions" table...');
    
    // Try to select 1 record
    const { data, error, count } = await supabase
      .from('predictions')
      .select('count', { count: 'exact', head: true });

    if (error) {
      console.error('❌ Connection Failed:', error.message);
      console.error('   Hint: Check if table "predictions" exists and RLS policies allow selection.');
    } else {
      console.log('✅ Connection Successful!');
      console.log(`📊 Current row count: ${count}`);
    }
    
  } catch (err) {
    console.error('❌ Unexpected error:', err);
  }
}

testConnection();
