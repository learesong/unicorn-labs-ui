import React, { useState, useEffect } from 'react';
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
  Crown
} from 'lucide-react';

// Custom Unicorn SVG Component
const UnicornIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" opacity="0.8"/>
    <path d="M8 12C8 8.69 10.69 6 14 6C17.31 6 20 8.69 20 12C20 15.31 17.31 18 14 18C10.69 18 8 15.31 8 12Z" opacity="0.6"/>
    <path d="M14 4L15 7L18 8L15 9L14 12L13 9L10 8L13 7L14 4Z"/>
    <circle cx="14" cy="10" r="1"/>
    <path d="M16 14C15.5 14.5 14.8 15 14 15C13.2 15 12.5 14.5 12 14"/>
  </svg>
);

// Money Rain Component
const MoneyRain = ({ isActive, onComplete }) => {
  const [moneyItems, setMoneyItems] = useState([]);

  useEffect(() => {
    if (isActive) {
      const items = [];
      for (let i = 0; i < 50; i++) {
        items.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 3 + Math.random() * 2,
          symbol: ['💰', '💵', '💸', '🤑', '💎'][Math.floor(Math.random() * 5)]
        });
      }
      setMoneyItems(items);

      const timer = setTimeout(() => {
        onComplete();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {moneyItems.map((item) => (
        <div
          key={item.id}
          className="absolute text-2xl animate-bounce"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            top: '-50px'
          }}
        >
          <div 
            className="animate-pulse"
            style={{
              animation: `fall ${item.duration}s linear ${item.delay}s forwards, wiggle 0.5s ease-in-out infinite`
            }}
          >
            {item.symbol}
          </div>
        </div>
      ))}
      
      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
      `}</style>
    </div>
  );
};

// Unicorn Animation Component
const UnicornAnimation = ({ isActive, onComplete }) => {
  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <div 
        className="absolute text-8xl"
        style={{
          left: '-100px',
          top: '50%',
          transform: 'translateY(-50%)',
          animation: 'unicornFly 4s ease-in-out forwards'
        }}
      >
        🦄
      </div>
      
      <div 
        className="absolute text-6xl opacity-80"
        style={{
          left: '-80px',
          top: '30%',
          transform: 'translateY(-50%)',
          animation: 'unicornFly 4s ease-in-out 0.5s forwards'
        }}
      >
        ✨
      </div>
      
      <div 
        className="absolute text-6xl opacity-80"
        style={{
          left: '-80px',
          top: '70%',
          transform: 'translateY(-50%)',
          animation: 'unicornFly 4s ease-in-out 1s forwards'
        }}
      >
        🌟
      </div>

      <style jsx>{`
        @keyframes unicornFly {
          0% {
            left: -100px;
            transform: translateY(-50%) rotate(0deg);
          }
          50% {
            transform: translateY(-50%) rotate(10deg) scale(1.2);
          }
          100% {
            left: calc(100vw + 100px);
            transform: translateY(-50%) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showDemo, setShowDemo] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleStartJourney = () => {
    setShowAnimation(true);
    // Here you would typically handle the actual sign-up/redirect logic
  };

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    // You could redirect to sign-up page or show a modal here
    alert('Welcome to UnicornLabs! 🦄 Let\'s build your empire!');
  };

  const testimonials = [
    {
      quote: "I was just trying to build a better way to rate hot girls on campus. Now I'm testifying before Congress about data privacy. UnicornLabs didn't prepare me for THAT pivot.",
      author: "Mark Z.",
      title: "Definitely Not Facebook",
      rating: 5,
      unicornStatus: "🦄 Unicorn Founder"
    },
    {
      quote: "Started with $20 and a dream of not paying rent. Now I have my own space program. My landlord is probably still waiting for that security deposit from 2002.",
      author: "Elon M.",
      title: "Guy Who Really Loves Rockets",
      rating: 5,
      unicornStatus: "🦄 Multi-Unicorn Builder"
    },
    {
      quote: "All I wanted was to sell books online. Now people blame me when their toothbrush arrives late. Also, I apparently own the internet now? UnicornLabs escalated quickly.",
      author: "Jeff B.",
      title: "Bald Guy with Rockets (Different Rockets)",
      rating: 5,
      unicornStatus: "🦄 Unicorn Emperor"
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Business Strategy",
      description: "Get personalized business strategies powered by advanced AI algorithms that analyze millions of successful startups.",
      unicornFeature: "🦄 Unicorn-tested strategies"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Market Validation",
      description: "Validate your idea with real-time market analysis and competitor intelligence before you invest time and money.",
      unicornFeature: "🦄 Billion-dollar market insights"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Building",
      description: "Connect with co-founders, advisors, and team members through our AI-matched network of entrepreneurs.",
      unicornFeature: "🦄 Unicorn founder network"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Funding Pipeline",
      description: "Access pre-vetted investors and get matched with funding opportunities tailored to your startup stage.",
      unicornFeature: "🦄 Direct unicorn investor access"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Growth Analytics",
      description: "Track your progress with advanced analytics and get AI-powered recommendations for accelerated growth.",
      unicornFeature: "🦄 Unicorn growth patterns"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Legal & Compliance",
      description: "Automated legal document generation and compliance tracking to keep your startup legally protected.",
      unicornFeature: "🦄 Unicorn-grade protection"
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
      popular: false,
      unicornBadge: null
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
      popular: true,
      unicornBadge: "🦄 Most Popular"
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
      cta: "Go Unicorn 🦄",
      popular: false,
      unicornBadge: "🦄 Unicorn Tier"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Animation Components */}
      <UnicornAnimation isActive={showAnimation} onComplete={() => {}} />
      <MoneyRain isActive={showAnimation} onComplete={handleAnimationComplete} />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.02),transparent)]"></div>
      
      {/* Floating Unicorn Elements */}
      <div className="absolute top-20 left-10 opacity-10 animate-pulse">
        <UnicornIcon className="w-16 h-16" />
      </div>
      <div className="absolute top-40 right-20 opacity-5 animate-bounce">
        <span className="text-4xl">🦄</span>
      </div>
      <div className="absolute bottom-40 left-20 opacity-10 animate-pulse">
        <span className="text-3xl">✨</span>
      </div>
      
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 border-b border-gray-200 backdrop-blur-lg bg-white/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <UnicornIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-black">
              UnicornLabs
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-black transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-black transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-black transition-colors">Success Stories</a>
            <button 
              onClick={handleStartJourney}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all hover:shadow-lg"
            >
              Get Started 🦄
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
              <button 
                onClick={handleStartJourney}
                className="bg-black text-white px-6 py-2 rounded-full"
              >
                Get Started 🦄
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
            <span className="text-sm text-gray-700">Join 50,000+ successful founders 🦄</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-black underline decoration-4 underline-offset-8">
              Idea to $1B
            </span>
            <br />
            in 10 mins
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            The AI-powered platform that transforms entrepreneurs into unicorn founders. 
            Get personalized strategies, connect with investors, and build your empire faster than ever. 🦄
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={handleStartJourney}
              className="group bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all hover:shadow-lg flex items-center space-x-2"
            >
              <span>Start Your Journey</span>
              <span className="text-xl">🦄</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setShowDemo(true)}
              className="group border border-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-black hover:bg-gray-50 transition-colors flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>2,847 unicorns launched this month 🦄</span>
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
                Unicorn 🦄
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
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                <div className="text-sm text-purple-600 font-semibold">
                  {feature.unicornFeature}
                </div>
              </div>
            ))}
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
              <div className="text-2xl mt-2">💰</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                847
              </div>
              <div className="text-gray-600">Unicorns created</div>
              <div className="text-2xl mt-2">🦄</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                92%
              </div>
              <div className="text-gray-600">Success rate</div>
              <div className="text-2xl mt-2">🎯</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                6.2
              </div>
              <div className="text-gray-600">Average time to $10M</div>
              <div className="text-sm text-gray-500">months</div>
              <div className="text-2xl mt-2">⚡</div>
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
              Unicorn Founders 🦄
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
                  <div className="flex justify-center mb-4">
                    <div className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
                      {testimonial.unicornStatus}
                    </div>
                  </div>
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
                Success 🦄
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
                {plan.unicornBadge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`px-4 py-1 rounded-full text-sm font-semibold border ${
                      plan.popular 
                        ? 'bg-white text-black border-gray-200' 
                        : 'bg-purple-100 text-purple-600 border-purple-200'
                    }`}>
                      {plan.unicornBadge}
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
                
                <button 
                  onClick={handleStartJourney}
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'border border-gray-300 hover:border-black hover:bg-gray-50'
                  }`}
                >
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
              Unicorn? 🦄
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful entrepreneurs who've transformed their ideas 
            into billion-dollar businesses with UnicornLabs.
          </p>
          <button 
            onClick={handleStartJourney}
            className="group bg-white text-black px-12 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all hover:shadow-lg flex items-center space-x-2 mx-auto"
          >
            <span>Start Your Journey Today</span>
            <span className="text-2xl">🦄</span>
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
                <UnicornIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-black">
                UnicornLabs
              </span>
            </div>
            <div className="text-gray-500 text-sm">
              © 2025 UnicornLabs. All rights reserved. Building the future, one unicorn at a time. 🦄
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-black">See UnicornLabs in Action 🦄</h3>
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
                <span className="text-sm">🦄</span>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-800">
                    Hi! I'm your AI business strategist. Tell me about your startup idea and I'll create a comprehensive plan to get you to $10M in revenue. 🦄✨
                  </p>
                </div>
                <div className="text-right">
                  <div className="bg-black text-white p-4 rounded-lg inline-block">
                    <p className="text-sm">I want to build a sustainable fashion brand...</p>
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-800">
                    Excellent! Based on market analysis, I recommend focusing on eco-friendly materials and direct-to-consumer sales. Here's your custom 18-month roadmap to unicorn status... 🦄💰
                  </p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => {
                setShowDemo(false);
                handleStartJourney();
              }}
              className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-all"
            >
              Try It Now - Free 🦄
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;