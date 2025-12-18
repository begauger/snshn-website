const Anthropic = require('@anthropic-ai/sdk');

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

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

  try {
    const sessionId = getSessionId(req);
    const usage = userUsage.get(sessionId) || { count: 0, email: null, name: null };
    
    if (usage.count >= 5) {
      return res.status(403).json({ 
        error: 'Usage limit reached. Contact us for a passcode.',
        isBlocked: true
      });
    }
    
    if (usage.count >= 1 && !usage.email) {
      return res.status(403).json({ 
        error: 'Please provide your name and email to continue.',
        needsInfo: true
      });
    }
    
    const { imageData, mediaType } = req.body;
    
    if (!imageData) {
      return res.status(400).json({ error: 'No image provided' });
    }

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: mediaType,
                data: imageData,
              },
            },
            {
              type: 'text',
              text: `You are a professional property damage assessor. Analyze this image and provide a detailed assessment in JSON format with the following structure:

{
  "damageType": "Brief description of the type of damage",
  "severity": "Minor/Moderate/Severe/Critical",
  "estimatedRepairCost": "Range in dollars (e.g., $5,000 - $8,000)",
  "currentValue": "Estimated current property value considering damage",
  "restoredValue": "Estimated value after proper restoration",
  "immediateActions": ["action 1", "action 2", "action 3"],
  "repairPlan": ["step 1", "step 2", "step 3"],
  "timeframe": "Estimated time to complete repairs",
  "additionalNotes": "Any important observations or recommendations"
}

Be specific and professional. If you cannot see clear property damage, indicate that in the response. Respond ONLY with valid JSON, no preamble or explanation.`,
            },
          ],
        },
      ],
    });

    const textContent = message.content
      .filter(item => item.type === 'text')
      .map(item => item.text)
      .join('');

    const cleanJson = textContent.replace(/```json\n?|```\n?/g, '').trim();
    const parsed = JSON.parse(cleanJson);
    
    usage.count += 1;
    userUsage.set(sessionId, usage);
    
    res.json({ 
      assessment: parsed,
      usageCount: usage.count 
    });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to analyze image' });
  }
};