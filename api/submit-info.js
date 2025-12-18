const userUsage = new Map();

const getSessionId = (req) => {
  return req.headers['x-forwarded-for']?.split(',')[0] || 
         req.connection?.remoteAddress || 
         'anonymous';
};

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sessionId = getSessionId(req);
  const { email, name } = req.body;
  
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }
  
  if (!name || name.trim().length === 0) {
    return res.status(400).json({ error: 'Name required' });
  }
  
  const usage = userUsage.get(sessionId) || { count: 0, email: null, name: null };
  usage.email = email;
  usage.name = name;
  userUsage.set(sessionId, usage);
  
  console.log('New user registration:', { name, email, timestamp: new Date().toISOString() });
  
  res.json({ success: true });
};