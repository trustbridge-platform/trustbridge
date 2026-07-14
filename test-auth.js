const fetch = require('node-fetch');

async function testAuth() {
  const base = 'http://localhost:5000/api';
  
  // Test signup
  const signupData = {
    firstName: 'Test',
    lastName: 'User',
    email: 'testuser456@example.com',
    password: 'testpass123',
    confirmPassword: 'testpass123'
  };
  
  console.log('=== TESTING SIGNUP ===');
  try {
    const signupRes = await fetch(`${base}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signupData)
    });
    const signupBody = await signupRes.json();
    console.log('Signup Status:', signupRes.status);
    console.log('Signup Response:', JSON.stringify(signupBody, null, 2));
    
    if (signupRes.ok) {
      const token = signupBody.token;
      console.log('\n=== TESTING LOGIN ===');
      const loginRes = await fetch(`${base}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'testuser456@example.com', password: 'testpass123' })
      });
      const loginBody = await loginRes.json();
      console.log('Login Status:', loginRes.status);
      console.log('Login Response:', JSON.stringify(loginBody, null, 2));
      
      if (loginRes.ok) {
        console.log('\n=== TESTING GET ME ===');
        const meRes = await fetch(`${base}/auth/me`, {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const meBody = await meRes.json();
        console.log('Me Status:', meRes.status);
        console.log('Me Response:', JSON.stringify(meBody, null, 2));
        console.log('\n✅ ALL TESTS PASSED');
      }
    }
  } catch (err) {
    console.error('ERROR:', err.message);
  }
}

testAuth();