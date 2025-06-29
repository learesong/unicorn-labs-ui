import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Target, 
  Users, 
  TrendingUp, 
  Check, 
  Play, 
  Star,
  ChevronDown,
  Menu,
  X,
  Rocket,
  Brain,
  DollarSign,
  BarChart3,
  Shield,
  MessageSquare,
  Mic,
  Send
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showDemo, setShowDemo] = useState(false);
  const [ideaInput, setIdeaInput] = useState('');
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const exampleIdeas = [
    "I want to sleep in other people's houses and pay them for it",
    "What if we let strangers drive other strangers around for money?",
    "I want to send disappearing photos that somehow become permanent",
    "Let's make a website where people argue about everything",
    "What if we made people pay monthly to watch TV shows?",
    "I want to sell books online... and then everything else",
    "Let's make a social network but only for college students",
    "What if we let people rent movies through the mail?"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExampleIndex((prev) => (prev + 1) % exampleIdeas.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [ideaInput]);

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      recognition.onstart = () => {
        setIsListening(true);
      };
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setIdeaInput(transcript);
        setIsListening(false);
      };
      
      recognition.onerror = () => {
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognition.start();
    } else {
      alert('Speech recognition not supported in this browser');
    }
  };

  const testimonials = [
    {
      quote: "I was just trying to build a better way to rate hot girls on campus. Now I'm testifying before Congress about data privacy. UnicornLabs didn't prepare me for THAT pivot.",
      author: "Mark Z.",
      title: "Definitely Not Facebook",
      rating: 5
    },
    {
      quote: "Started with $20 and a dream of not paying rent. Now I have my own space program. My landlord is probably still waiting for that security deposit from 2002.",
      author: "Elon M.",
      title: "Guy Who Really Loves Rockets",
      rating: 5
    },
    {
      quote: "All I wanted was to sell books online. Now people blame me when their toothbrush arrives late. Also, I apparently own the internet now? UnicornLabs escalated quickly.",
      author: "Jeff B.",
      title: "Bald Guy with Rockets (Different Rockets)",
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Business Strategy",
      description: "Get personalized business strategies powered by advanced AI algorithms that analyze millions of successful startups."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Market Validation",
      description: "Validate your idea with real-time market analysis and competitor intelligence before you invest time and money."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Building",
      description: "Connect with co-founders, advisors, and team members through our AI-matched network of entrepreneurs."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Funding Pipeline",
      description: "Access pre-vetted investors and get matched with funding opportunities tailored to your startup stage."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Growth Analytics",
      description: "Track your progress with advanced analytics and get AI-powered recommendations for accelerated growth."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Legal & Compliance",
      description: "Automated legal document generation and compliance tracking to keep your startup legally protected."
    }
  ];

  const pricingPlans = [
    {
      name: "Explorer",
      price: "Free",
      period: "",
      description: "Perfect for validating your idea",
      features: [
        "Basic AI business analysis",
        "Market research tools",
        "Community access",
        "1 business plan generation"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Founder",
      price: "$29",
      period: "/month",
      description: "For serious entrepreneurs ready to launch",
      features: [
        "Advanced AI strategy development",
        "Unlimited business plan generations",
        "Team building network",
        "Priority support",
      ],
      cta: "Start Building",
      popular: true
    },
    {
      name: "Unicorn",
      price: "$89",
      period: "/month",
      description: "For scaling to $10M+ businesses",
      features: [
        "Everything in Founder",
        "Dedicated success manager",
        "Custom AI model training",
        "Direct investor introductions",
        "Board advisory access",
        "White-glove onboarding",
        "Investor matching platform",
      ],
      cta: "Go Unicorn",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.02),transparent)]"></div>
      
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 border-b border-gray-200 backdrop-blur-lg bg-white/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-black">
              UnicornLabs
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-black transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-black transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-black transition-colors">Success Stories</a>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all hover:shadow-lg">
              Get Started
            </button>
          </div>
          
          <button 
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200 p-6">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-black transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-black transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-black transition-colors">Success Stories</a>
              <button className="bg-black text-white px-6 py-2 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-8 border border-gray-200">
            <Zap className="w-4 h-4 text-black" />
            <span className="text-sm text-gray-700">Join 50,000+ successful founders</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-black underline decoration-4 underline-offset-8">
              Idea to $1B
            </span>
            <br />
            in 10 mins
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            The AI-powered platform that transforms entrepreneurs into unicorn founders. 
            Get personalized strategies, connect with investors, and build your empire faster than ever.
          </p>
          
          {/* Idea Input Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-black">What's your billion-dollar idea?</h3>
              
              {/* Example Ideas Carousel */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-sm text-gray-500 mb-2">💡 Crazy ideas that worked:</div>
                <div className="text-gray-700 italic min-h-[24px] transition-all duration-500">
                  "{exampleIdeas[currentExampleIndex]}"
                </div>
              </div>
              
              {/* Input Field */}
              <div className="relative">
                <textarea
                  ref={textareaRef}
                  value={ideaInput}
                  onChange={(e) => setIdeaInput(e.target.value)}
                  placeholder="Describe your idea... (e.g., 'I want to create an app that...')"
                  className="w-full p-6 pr-24 border-2 border-gray-200 rounded-xl text-lg resize-none focus:border-black focus:outline-none transition-all duration-200 min-h-[60px] overflow-hidden"
                  rows={1}
                  style={{ height: 'auto' }}
                />
                
                {/* Voice Input Button */}
                <button
                  onClick={handleVoiceInput}
                  className={`absolute right-16 top-6 p-3 rounded-full transition-all ${
                    isListening 
                      ? 'bg-red-500 text-white animate-pulse' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  title="Voice input"
                >
                  <Mic className="w-5 h-5" />
                </button>
                
                {/* Submit Button */}
                <button
                  className="absolute right-3 top-6 p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!ideaInput.trim()}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              
              <div className="mt-4 text-sm text-gray-500 text-center">
                Our AI will analyze your idea and create a custom roadmap to $10M+ revenue
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="group bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all hover:shadow-lg flex items-center space-x-2">
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>2,847 businesses launched this month</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
              ))}
              <span className="ml-2">4.9/5 from 12,000+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Everything You Need to Build a{' '}
              <span className="text-black underline decoration-4 underline-offset-8">
                Unicorn
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides all the tools, connections, and insights 
              you need to transform your idea into a billion-dollar business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-200 group-hover:scale-110 transition-all">
                  <div className="text-black">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Watch Demo Button - Moved Here */}
          <div className="text-center mt-16">
            <button 
              onClick={() => setShowDemo(true)}
              className="group border border-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-black hover:bg-white transition-colors flex items-center space-x-2 mx-auto"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                $2.8B+
              </div>
              <div className="text-gray-600">Total funding raised</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                847
              </div>
              <div className="text-gray-600">Unicorns created</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                92%
              </div>
              <div className="text-gray-600">Success rate</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                6.2M
              </div>
              <div className="text-gray-600">Average time to $10M</div>
              <div className="text-sm text-gray-500">months</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Success Stories from{' '}
            <span className="text-black underline decoration-4 underline-offset-8">
              Unicorn Founders
            </span>
          </h2>
          
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === activeTestimonial 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8 absolute inset-0'
                }`}
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-lg text-black">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial 
                      ? 'bg-black' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Choose Your Path to{' '}
              <span className="text-black underline decoration-4 underline-offset-8">
                Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're just starting out or ready to scale, 
              we have the perfect plan to accelerate your journey to $10M+.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all hover:shadow-lg ${
                  plan.popular
                    ? 'bg-black text-white border-black shadow-lg'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold border border-gray-200">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className={plan.popular ? "text-gray-300" : "text-gray-500"}>{plan.period}</span>
                  </div>
                  <p className={plan.popular ? "text-gray-300" : "text-gray-600"}>{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className={plan.popular ? "text-gray-300" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'border border-gray-300 hover:border-black hover:bg-gray-50'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build Your{' '}
            <span className="underline decoration-4 underline-offset-8">
              Unicorn?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful entrepreneurs who've transformed their ideas 
            into billion-dollar businesses with UnicornLabs.
          </p>
          <button className="group bg-white text-black px-12 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all hover:shadow-lg flex items-center space-x-2 mx-auto">
            <span>Start Your Journey Today</span>
            <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <section className="relative z-10 px-6 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-black">
                UnicornLabs
              </span>
            </div>
            <div className="text-gray-500 text-sm">
              © 2025 UnicornLabs. All rights reserved. Building the future, one unicorn at a time.
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-black">See UnicornLabs in Action</h3>
              <button 
                onClick={() => setShowDemo(false)}
                className="text-gray-400 hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquare className="w-5 h-5 text-black" />
                <span className="text-sm text-gray-600">AI Business Strategist</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-800">
                    Hi! I'm your AI business strategist. Tell me about your startup idea and I'll create a comprehensive plan to get you to $10M in revenue.
                  </p>
                </div>
                <div className="text-right">
                  <div className="bg-black text-white p-4 rounded-lg inline-block">
                    <p className="text-sm">I want to build a sustainable fashion brand...</p>
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-800">
                    Excellent! Based on market analysis, I recommend focusing on eco-friendly materials and direct-to-consumer sales. Here's your custom 18-month roadmap...
                  </p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setShowDemo(false)}
              className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-all"
            >
              Try It Now - Free
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;