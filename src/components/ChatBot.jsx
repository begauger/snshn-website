import { useState } from 'react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    topic: '',
    contactPerson: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const COOLDOWN_MINUTES = 5; // 5 minute cooldown

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Remove all non-digits
    const digitsOnly = phone.replace(/\D/g, '');
    // Check if it's 10 digits (US format)
    return digitsOnly.length === 10;
  };

  const validateName = (name) => {
    return name.trim().length >= 2;
  };

  // Check if user is in cooldown
  const checkCooldown = () => {
    const lastSubmit = localStorage.getItem('chatbot_last_submit');
    if (!lastSubmit) return null;
    
    const timeSinceLastSubmit = Date.now() - parseInt(lastSubmit);
    const cooldownMs = COOLDOWN_MINUTES * 60 * 1000;
    
    if (timeSinceLastSubmit < cooldownMs) {
      const remainingMs = cooldownMs - timeSinceLastSubmit;
      return remainingMs;
    }
    return null;
  };

  // Conversation flow steps
  const steps = {
    0: 'intro',
    1: 'selectTopic',
    2: 'selectPerson',
    3: 'getName',
    4: 'getEmail',
    5: 'getPhone',
    6: 'confirmation'
  };

  const topics = [
    { id: 'leasing', label: 'Leasing & Rentals' },
    { id: 'tenants', label: 'Tenant Services' },
    { id: 'manage', label: 'Property Management' },
    { id: 'rehab', label: 'Rehab & Renovations' }
  ];

  const contactPeople = [
    { id: 'sarah', name: 'Sarah - Leasing Specialist' },
    { id: 'james', name: 'James - Property Manager' },
    { id: 'maria', name: 'Maria - Tenant Relations' },
    { id: 'general', name: 'General Inquiry' }
  ];

  const handleTopicSelect = (topic) => {
    setFormData({ ...formData, topic });
    setStep(2);
  };

  const handlePersonSelect = (person) => {
    setFormData({ ...formData, contactPerson: person });
    setStep(3);
  };

  const handleNameSubmit = (e) => {
    if (e.key === 'Enter') {
      if (!validateName(formData.name)) {
        setErrors({ name: 'Please enter at least 2 characters' });
        return;
      }
      setErrors({});
      setStep(4);
    }
  };

  const handleEmailSubmit = (e) => {
    if (e.key === 'Enter') {
      if (!validateEmail(formData.email)) {
        setErrors({ email: 'Please enter a valid email address' });
        return;
      }
      setErrors({});
      setStep(5);
    }
  };

  const handlePhoneSubmit = (e) => {
    if (e.key === 'Enter') {
      if (!validatePhone(formData.phone)) {
        setErrors({ phone: 'Please enter a valid 10-digit phone number' });
        return;
      }
      
      // Check cooldown
      const remainingCooldown = checkCooldown();
      if (remainingCooldown) {
        const remainingSeconds = Math.ceil(remainingCooldown / 1000);
        const remainingMinutes = Math.floor(remainingSeconds / 60);
        const remainingSecondsDisplay = remainingSeconds % 60;
        
        setErrors({ 
          phone: `Please wait ${remainingMinutes}m ${remainingSecondsDisplay}s before submitting again` 
        });
        return;
      }
      
      setErrors({});
      localStorage.setItem('chatbot_last_submit', Date.now().toString());
      setStep(6);
      sendMessage();
    }
  };

  const sendMessage = () => {
    // We'll implement SendGrid here later
    console.log('Sending message:', formData);
  };

  const resetChat = () => {
    setStep(0);
    setFormData({
      topic: '',
      contactPerson: '',
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setErrors({});
    // Don't reset lastSubmitTime - keep the cooldown active
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-yellow-400 hover:bg-yellow-500 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Open chat"
      >
        {/* Sun-faced stick figure icon */}
        <div className="relative">
          {/* Sun head */}
          <div className="w-6 h-6 bg-black rounded-full relative">
            {/* Sun rays */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-black"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-black"></div>
            <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-2 h-0.5 bg-black"></div>
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-0.5 bg-black"></div>
            {/* Face */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex gap-1 mb-0.5">
                <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
              </div>
              <div className="w-3 h-1 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
          {/* Body */}
          <div className="w-0.5 h-4 bg-black mx-auto mt-0.5"></div>
          {/* Waving arm (right) */}
          <div className="absolute top-3 -right-2 w-3 h-0.5 bg-black origin-left transform rotate-[-30deg] animate-wave"></div>
          {/* Left arm */}
          <div className="absolute top-3 -left-2 w-3 h-0.5 bg-black"></div>
          {/* Legs */}
          <div className="flex gap-1 mt-0.5 ml-2">
            <div className="w-0.5 h-3 bg-black transform rotate-12"></div>
            <div className="w-0.5 h-3 bg-black transform -rotate-12"></div>
          </div>
        </div>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 z-50 w-96 max-w-[calc(100vw-4rem)] bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-yellow-400 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="font-bold text-yellow-400" style={{ fontFamily: 'Pirulen, sans-serif' }}>S</span>
              </div>
              <div>
                <h3 className="font-bold text-black" style={{ fontFamily: 'Pirulen, sans-serif' }}>SONNY</h3>
                <p className="text-xs text-black/70 font-eurostile">Virtual Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Content */}
          <div className="p-6 h-96 overflow-y-auto space-y-4">
            {/* Step 0: Intro */}
            {step === 0 && (
              <div className="space-y-4">
                <div className="bg-zinc-800 rounded-lg p-4 rounded-tl-none">
                  <p className="font-eurostile text-white text-sm">
                    Hi! I'm <span className="text-yellow-400 font-bold">SONNY</span>, your virtual assistant! 👋
                  </p>
                  <p className="font-eurostile text-white text-sm mt-2">
                    Do you have questions about our services?
                  </p>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold py-3 rounded-lg transition-all duration-300"
                >
                  Yes, let's get started!
                </button>
              </div>
            )}

            {/* Step 1: Select Topic */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="bg-zinc-800 rounded-lg p-4 rounded-tl-none">
                  <p className="font-eurostile text-white text-sm">
                    Great! What would you like to know more about?
                  </p>
                </div>
                <div className="space-y-2">
                  {topics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => handleTopicSelect(topic.label)}
                      className="w-full bg-zinc-800 hover:bg-yellow-400 hover:text-black text-white font-eurostile py-3 rounded-lg transition-all duration-300 text-sm"
                    >
                      {topic.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Select Person */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="bg-zinc-800 rounded-lg p-4 rounded-tl-none">
                  <p className="font-eurostile text-white text-sm">
                    Perfect! Who would you like to speak with about <span className="text-yellow-400">{formData.topic}</span>?
                  </p>
                </div>
                <div className="space-y-2">
                  {contactPeople.map((person) => (
                    <button
                      key={person.id}
                      onClick={() => handlePersonSelect(person.name)}
                      className="w-full bg-zinc-800 hover:bg-yellow-400 hover:text-black text-white font-eurostile py-3 rounded-lg transition-all duration-300 text-sm"
                    >
                      {person.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Get Name */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="bg-zinc-800 rounded-lg p-4 rounded-tl-none">
                  <p className="font-eurostile text-white text-sm">
                    Awesome! I'll connect you with <span className="text-yellow-400">{formData.contactPerson}</span>.
                  </p>
                  <p className="font-eurostile text-white text-sm mt-2">
                    First, what's your name?
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onKeyPress={handleNameSubmit}
                    placeholder="Type your name and press Enter"
                    className={`w-full bg-zinc-800 text-white font-eurostile px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-white/10'
                    } focus:border-yellow-400 focus:outline-none text-sm`}
                    autoFocus
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs font-eurostile mt-1">{errors.name}</p>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Get Email */}
            {step === 4 && (
              <div className="space-y-4">
                <div className="bg-zinc-800 rounded-lg p-4 rounded-tl-none">
                  <p className="font-eurostile text-white text-sm">
                    Nice to meet you, <span className="text-yellow-400">{formData.name}</span>!
                  </p>
                  <p className="font-eurostile text-white text-sm mt-2">
                    What's your email address?
                  </p>
                </div>
                <div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onKeyPress={handleEmailSubmit}
                    placeholder="Type your email and press Enter"
                    className={`w-full bg-zinc-800 text-white font-eurostile px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-white/10'
                    } focus:border-yellow-400 focus:outline-none text-sm`}
                    autoFocus
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs font-eurostile mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
            )}

            {/* Step 5: Get Phone */}
            {step === 5 && (
              <div className="space-y-4">
                <div className="bg-zinc-800 rounded-lg p-4 rounded-tl-none">
                  <p className="font-eurostile text-white text-sm">
                    And what's the best phone number to reach you?
                  </p>
                </div>
                <div>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    onKeyPress={handlePhoneSubmit}
                    placeholder="Type your phone and press Enter"
                    className={`w-full bg-zinc-800 text-white font-eurostile px-4 py-3 rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-white/10'
                    } focus:border-yellow-400 focus:outline-none text-sm`}
                    autoFocus
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs font-eurostile mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
            )}

            {/* Step 6: Confirmation */}
            {step === 6 && (
              <div className="space-y-4">
                <div className="bg-zinc-800 rounded-lg p-4 rounded-tl-none">
                  <p className="font-eurostile text-white text-sm">
                    Perfect! ✨
                  </p>
                  <p className="font-eurostile text-white text-sm mt-2">
                    I've sent your information to <span className="text-yellow-400">{formData.contactPerson}</span>. They'll reach out to you at:
                  </p>
                  <ul className="mt-3 space-y-1 text-xs text-gray-400 font-eurostile">
                    <li>📧 {formData.email}</li>
                    <li>📱 {formData.phone}</li>
                  </ul>
                  <p className="font-eurostile text-white text-sm mt-3">
                    Expect to hear from them within 24 hours!
                  </p>
                </div>
                <button
                  onClick={resetChat}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold py-3 rounded-lg transition-all duration-300"
                >
                  Start New Conversation
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Wave animation */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(-30deg); }
          50% { transform: rotate(-60deg); }
        }
        .animate-wave {
          animation: wave 0.6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}