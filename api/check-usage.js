const userUsage = new Map();

const getSessionId = (req) => {
  return req.headers['x-forwarded-for']?.split(',')[0] || 
         req.connection?.remoteAddress || 
         'anonymous';
};

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const sessionId = getSessionId(req);
  const usage = userUsage.get(sessionId) || { count: 0, email: null, name: null };
  
  res.json({
    count: usage.count,
    needsInfo: usage.count >= 1 && !usage.email,
    isBlocked: usage.count >= 5,
    hasInfo: !!usage.email
  });
};