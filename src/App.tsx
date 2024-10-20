import React, { useState, useEffect } from 'react';
import { MessageSquare, Mic, FileText, DollarSign, Zap, Check, ChevronDown, Play, Pause, Menu, X, Clock, Headphones, Smile } from 'lucide-react';

const FeatureCard = ({ icon, title, description, iconColor }) => (
  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
    <div className={`${iconColor} mb-4`}>{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorksStep = ({ number, title, description }) => (
  <div className="flex items-start mb-6">
    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const TimeSavedCounter = () => {
  const [timeSaved, setTimeSaved] = useState({ days: 500, hours: 0, minutes: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSaved(prev => {
        const newMinutes = prev.minutes + 1;
        const newHours = prev.hours + Math.floor(newMinutes / 60);
        const newDays = prev.days + Math.floor(newHours / 24);
        return {
          days: newDays,
          hours: newHours % 24,
          minutes: newMinutes % 60
        };
      });
    }, 10000); // Update every 10 seconds for demo purposes

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-purple-600 text-white py-2 px-4 flex justify-between items-center text-sm">
      <div className="flex items-center">
        <Clock className="mr-2" size={18} />
        <span>Time Saved: {timeSaved.days} days, {timeSaved.hours} hours, {timeSaved.minutes} minutes</span>
      </div>
      <div className="flex items-center">
        <a href="#" className="bg-white text-purple-600 px-3 py-1 rounded-full font-bold text-sm mr-2 hover:bg-purple-100 transition-colors duration-300">Try for Free!</a>
        <button className="text-white"><X size={18} /></button>
      </div>
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800 pb-16 md:pb-20">
      <header className="bg-purple-600 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <MessageSquare className="mr-2" />
            <span className="text-2xl font-bold">VoiceText Pro</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#features" className="hover:text-purple-200">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-purple-200">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-purple-200">Pricing</a></li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-purple-500 p-4">
          <ul className="space-y-2">
            <li><a href="#features" className="block py-2 text-white" onClick={() => setIsMenuOpen(false)}>Features</a></li>
            <li><a href="#how-it-works" className="block py-2 text-white" onClick={() => setIsMenuOpen(false)}>How It Works</a></li>
            <li><a href="#pricing" className="block py-2 text-white" onClick={() => setIsMenuOpen(false)}>Pricing</a></li>
          </ul>
        </div>
      )}

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-purple-600">Free WhatsApp Audio to Text</h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-600">Convert any WhatsApp voice message to text right within WhatsApp</h2>
          <p className="text-xl mb-8 text-gray-600">Never suffer through long WhatsApp voice messages again. Convert them to text and save your sanity!</p>
          <a href="#" className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-lg inline-flex items-center">
            Use for Free
          </a>
          <p className="mt-4 text-sm text-gray-500">Send a "Hi" message to get started!</p>
        </section>

        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-600">Why You'll Love VoiceText Pro</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap size={48} />}
              title="Lightning Fast"
              description="Convert voice to text faster than you can say 'Why is this message so long?'"
              iconColor="text-yellow-500"
            />
            <FeatureCard
              icon={<Smile size={48} />}
              title="Sanity Saver"
              description="No more listening to 5-minute voice essays about what someone had for lunch"
              iconColor="text-pink-500"
            />
            <FeatureCard
              icon={<Clock size={48} />}
              title="Time is Money"
              description="Read messages at your own pace, because your time is precious (and so is your patience)"
              iconColor="text-purple-500"
            />
          </div>
        </section>

        <section id="how-it-works" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-600">How It Works</h2>
          <div className="max-w-2xl mx-auto">
            <HowItWorksStep
              number="1"
              title="Send 'Hi' to Our WhatsApp Bot"
              description="Just send a simple 'Hi' message to our WhatsApp number to get started."
            />
            <HowItWorksStep
              number="2"
              title="Forward Voice Messages"
              description="Forward any voice message you want to convert to our bot."
            />
            <HowItWorksStep
              number="3"
              title="Receive Transcribed Text"
              description="Get the transcribed text back in seconds. No more listening required!"
            />
          </div>
        </section>

        <section id="pricing" className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-purple-600">Simple, Transparent Pricing</h2>
          <div className="bg-white shadow-lg rounded-xl p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Free Trial</h3>
            <p className="text-4xl font-bold mb-4 text-purple-600">1 Hour Free</p>
            <p className="mb-6 text-gray-600">Try VoiceText Pro with no commitment</p>
            <ul className="text-left mb-8">
              <li className="flex items-center mb-2 text-gray-600"><Check className="mr-2 text-green-500" /> 1 hour of voice-to-text conversion</li>
              <li className="flex items-center mb-2 text-gray-600"><Check className="mr-2 text-green-500" /> WhatsApp integration</li>
              <li className="flex items-center text-gray-600"><Check className="mr-2 text-green-500" /> Instant text delivery</li>
            </ul>
            <a href="#" className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-lg inline-flex items-center">
              Start Free Trial
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-purple-600 py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 VoiceText Pro. All rights reserved.</p>
        </div>
      </footer>

      <TimeSavedCounter />
    </div>
  );
}

export default App;