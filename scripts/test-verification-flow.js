
import jwt from 'jsonwebtoken';
import http from 'http';

const JWT_SECRET = process.env.JWT_SECRET || 'stadiumport-secure-secret-key-2026';
const SITE_URL = process.env.VITE_SITE_URL || 'http://localhost:3000';

// 1. Test Signup (POST)
const testSignup = () => {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      type: 'predictor-signup',
      data: {
        name: 'Verification Test User',
        email: 'test-verify@stadiumport.com',
        country: 'Canada',
        ageConfirmed: true,
        termsAccepted: true
      }
    });

    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/api/send-email',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        console.log(`Signup Status: ${res.statusCode}`);
        console.log('Signup Response:', data);
        if (res.statusCode === 200) resolve();
        else reject(new Error('Signup failed'));
      });
    });

    req.on('error', (e) => {
      console.error('Signup Request Error:', e);
      reject(e);
    });

    req.write(postData);
    req.end();
  });
};

// 2. Test Verification (GET)
const testVerification = () => {
  return new Promise((resolve, reject) => {
    // Generate a valid token manually
    const token = jwt.sign(
      { 
        name: 'Verification Test User', 
        email: 'test-verify@stadiumport.com', 
        country: 'Canada', 
        timestamp: Date.now() 
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    console.log('Generated Test Token:', token);

    const options = {
      hostname: 'localhost',
      port: 3000,
      path: `/api/verify-email?token=${token}`,
      method: 'GET',
    };

    const req = http.request(options, (res) => {
      console.log(`Verification Status: ${res.statusCode}`);
      console.log(`Redirect Location: ${res.headers.location}`);
      
      if (res.statusCode === 302 && res.headers.location.includes('success?verified=true')) {
        console.log('SUCCESS: Verification redirected correctly!');
        resolve();
      } else {
        console.log('FAILURE: Verification did not redirect as expected.');
        reject(new Error('Verification failed'));
      }
    });

    req.on('error', (e) => {
      console.error('Verification Request Error:', e);
      reject(e);
    });

    req.end();
  });
};

const runTests = async () => {
  try {
    console.log('--- Starting Signup Test ---');
    await testSignup();
    console.log('\n--- Starting Verification Test ---');
    await testVerification();
    console.log('\nALL TESTS PASSED');
  } catch (error) {
    console.error('\nTESTS FAILED:', error);
  }
};

runTests();
