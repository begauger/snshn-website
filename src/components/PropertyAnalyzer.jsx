import { useState, useEffect } from 'react';
import { Camera, Upload, AlertCircle, CheckCircle, DollarSign, Wrench, X } from 'lucide-react';

export default function PropertyAnalyzer() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [assessment, setAssessment] = useState(null);
  const [error, setError] = useState(null);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showBlockedModal, setShowBlockedModal] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [usageCount, setUsageCount] = useState(0);
  const [hasInfo, setHasInfo] = useState(false);

  const API_URL = '/api';

  useEffect(() => {
    checkUsage();
  }, []);

  const checkUsage = async () => {
    try {
      const response = await fetch(`${API_URL}/check-usage`);
      const data = await response.json();
      setUsageCount(data.count);
      setHasInfo(data.hasInfo);
      
      if (data.isBlocked) {
        setShowBlockedModal(true);
      }
    } catch (err) {
      console.error('Failed to check usage:', err);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setAssessment(null);
      setError(null);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInfoSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    if (!name || name.trim().length === 0) {
      setError('Please enter your name');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/submit-info`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });

      if (response.ok) {
        setShowInfoModal(false);
        setHasInfo(true);
        setError(null);
        analyzeImage();
      }
    } catch (err) {
      setError('Failed to submit information. Please try again.');
    }
  };

  const analyzeImage = async () => {
    if (!image) return;

    setLoading(true);
    setError(null);

    try {
      const base64Data = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsDataURL(image);
      });

      const response = await fetch(`${API_URL}/analyze-damage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageData: base64Data,
          mediaType: image.type,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.needsInfo) {
          setShowInfoModal(true);
          setLoading(false);
          return;
        }
        if (data.isBlocked) {
          setShowBlockedModal(true);
          setLoading(false);
          return;
        }
        throw new Error(data.error || 'Failed to analyze image');
      }

      setAssessment(data.assessment);
      setUsageCount(data.usageCount);
      
      if (data.usageCount >= 5) {
        setShowBlockedModal(true);
      }
    } catch (err) {
      console.error('Analysis error:', err);
      setError(err.message || 'Failed to analyze image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (severity) => {
    const colors = {
      'Minor': 'bg-green-500/20 text-green-300 border-green-500/50',
      'Moderate': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50',
      'Severe': 'bg-orange-500/20 text-orange-300 border-orange-500/50',
      'Critical': 'bg-red-500/20 text-red-300 border-red-500/50'
    };
    return colors[severity] || 'bg-gray-500/20 text-gray-300 border-gray-500/50';
  };

  return (
    <div className="w-full">
      <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        
        {/* Usage Counter */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-yellow-400" />
            <span className="font-eurostile text-sm text-gray-400">
              Uses: {usageCount}/5 {hasInfo && '✓'}
            </span>
          </div>
        </div>

        {/* Upload Area */}
        <div className="mb-6">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-white/20 rounded-xl cursor-pointer hover:border-yellow-400/50 transition-colors bg-black/30">
            {preview ? (
              <img src={preview} alt="Preview" className="max-h-60 rounded-lg" />
            ) : (
              <div className="flex flex-col items-center">
                <Upload className="w-12 h-12 text-yellow-400 mb-3" />
                <p className="text-lg font-eurostile text-white mb-2">Upload Property Photo</p>
                <p className="text-sm font-eurostile text-gray-400">Click to select or drag and drop</p>
              </div>
            )}
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={usageCount >= 5}
            />
          </label>
        </div>

        {/* Analyze Button */}
        {image && !loading && usageCount < 5 && (
          <button
            onClick={analyzeImage}
            className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-eurostile font-semibold hover:bg-yellow-300 transition-colors mb-6"
          >
            Analyze Damage
          </button>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
            <p className="ml-4 text-lg font-eurostile text-gray-300">Analyzing damage...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 flex items-start gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-eurostile font-semibold text-red-400">Error</p>
              <p className="font-eurostile text-red-300">{error}</p>
            </div>
          </div>
        )}

        {/* Assessment Results */}
        {assessment && (
          <div className="space-y-6">
            {/* Header Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                <h3 className="font-eurostile font-semibold text-gray-400 mb-2">Damage Type</h3>
                <p className="font-eurostile text-white">{assessment.damageType}</p>
              </div>
              <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                <h3 className="font-eurostile font-semibold text-gray-400 mb-2">Severity</h3>
                <span className={`inline-block px-3 py-1 rounded-full font-eurostile font-semibold border ${getSeverityColor(assessment.severity)}`}>
                  {assessment.severity}
                </span>
              </div>
            </div>

            {/* Financial Assessment */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 rounded-lg p-6 border border-yellow-500/30">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-eurostile font-bold text-white">Financial Assessment</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-eurostile text-gray-400 mb-1">Estimated Repair Cost</p>
                  <p className="text-2xl font-eurostile font-bold text-white">{assessment.estimatedRepairCost}</p>
                </div>
                <div>
                  <p className="text-sm font-eurostile text-gray-400 mb-1">Current Value</p>
                  <p className="text-2xl font-eurostile font-bold text-orange-400">{assessment.currentValue}</p>
                </div>
                <div>
                  <p className="text-sm font-eurostile text-gray-400 mb-1">Restored Value</p>
                  <p className="text-2xl font-eurostile font-bold text-green-400">{assessment.restoredValue}</p>
                </div>
              </div>
            </div>

            {/* Immediate Actions */}
            <div className="bg-black/40 rounded-lg p-6 border border-red-500/30">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-eurostile font-bold text-white">Immediate Actions Required</h3>
              </div>
              <ul className="space-y-2">
                {assessment.immediateActions.map((action, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="font-eurostile text-gray-300">{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Repair Plan */}
            <div className="bg-black/40 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-eurostile font-bold text-white">Repair Plan</h3>
              </div>
              <ol className="space-y-3">
                {assessment.repairPlan.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-eurostile font-bold">
                      {idx + 1}
                    </span>
                    <span className="font-eurostile text-gray-300 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-sm font-eurostile text-gray-300">
                  <span className="font-semibold text-white">Estimated Timeframe:</span> {assessment.timeframe}
                </p>
              </div>
            </div>

            {/* Additional Notes */}
            {assessment.additionalNotes && (
              <div className="bg-black/40 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-eurostile font-bold text-white mb-2">Additional Notes</h3>
                <p className="font-eurostile text-gray-300">{assessment.additionalNotes}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Info Collection Modal */}
      {showInfoModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 border border-white/20 rounded-xl p-8 max-w-md w-full">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-eurostile font-bold text-white">Continue with Your Info</h2>
              <button onClick={() => setShowInfoModal(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="font-eurostile text-gray-300 mb-6">
              You've used your first free analysis! Enter your information to continue.
            </p>
            <form onSubmit={handleInfoSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg mb-4 text-white font-eurostile focus:outline-none focus:border-yellow-400"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg mb-4 text-white font-eurostile focus:outline-none focus:border-yellow-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-eurostile font-semibold hover:bg-yellow-300 transition-colors"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Blocked Modal */}
      {showBlockedModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 border border-white/20 rounded-xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-eurostile font-bold text-white mb-4">Usage Limit Reached</h2>
            <p className="font-eurostile text-gray-300 mb-6">
              You've reached the maximum of 5 free property assessments. Contact us for a passcode to continue or to discuss premium access.
            </p>
            <button
              onClick={() => setShowBlockedModal(false)}
              className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-eurostile font-semibold hover:bg-yellow-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}