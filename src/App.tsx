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
  Send,
  ArrowLeft,
  Download,
  Share2,
  Edit3,
  Clock,
  MapPin,
  Briefcase,
  PieChart,
  Calendar,
  FileText,
  Lightbulb,
  TrendingUp as Growth,
  Code,
  Database,
  Globe,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showDemo, setShowDemo] = useState(false);
  const [ideaInput, setIdeaInput] = useState('');
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'business-plan'
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
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

  const businessPlanSections = [
    {
      id: 'executive-summary',
      icon: <Lightbulb className="w-4 h-4" />,
      label: 'Executive Summary',
      title: 'Executive Summary',
      content: {
        intro: "Your innovative business concept represents a significant opportunity in the rapidly evolving digital marketplace. Based on our analysis of over 50,000 successful startups, your idea demonstrates strong potential for scalability and sustainable market penetration.",
        metrics: [
          { label: 'Projected Year 1 Revenue', value: '£1.8M' },
          { label: 'Time to Break-even', value: '14 months' },
          { label: 'Total Addressable Market', value: '£8.2B' }
        ],
        keyPoints: [
          'Validated product-market fit with demonstrated demand signals',
          'Scalable business model with diversified revenue streams',
          'Clear competitive advantages and defensible market position',
          'Experienced founding team with relevant industry expertise'
        ]
      }
    },
    {
      id: 'market-analysis',
      icon: <Target className="w-4 h-4" />,
      label: 'Market Analysis',
      title: 'Market Analysis',
      content: {
        intro: "The market for your solution is experiencing unprecedented growth, with a compound annual growth rate (CAGR) of 23.4% over the next five years. Key market drivers include increasing digital adoption, evolving consumer behaviours, and technological advancement.",
        marketSize: [
          { label: 'Total Addressable Market (TAM)', value: '£8.2B' },
          { label: 'Serviceable Addressable Market (SAM)', value: '£2.1B' },
          { label: 'Serviceable Obtainable Market (SOM)', value: '£120M' }
        ],
        growthProjections: [
          { label: 'Year 1 Market Share', value: '0.8%' },
          { label: 'Year 3 Market Share', value: '2.4%' },
          { label: 'Year 5 Market Share', value: '5.2%' }
        ]
      }
    },
    {
      id: 'target-audience',
      icon: <Users className="w-4 h-4" />,
      label: 'Target Audience',
      title: 'Target Audience Analysis',
      content: {
        intro: "Our comprehensive market research has identified three primary customer segments that represent the highest value opportunities for your business concept.",
        segments: [
          {
            name: 'Early Adopters',
            size: '2.3M individuals',
            characteristics: ['Tech-savvy professionals', 'High disposable income', 'Value innovation'],
            painPoints: ['Time constraints', 'Quality concerns', 'Limited options']
          },
          {
            name: 'Enterprise Customers',
            size: '45K companies',
            characteristics: ['£10M+ annual revenue', 'Digital transformation focus', 'Efficiency-driven'],
            painPoints: ['Legacy system limitations', 'Scalability challenges', 'Cost optimisation']
          },
          {
            name: 'SME Market',
            size: '180K businesses',
            characteristics: ['Growth-oriented', 'Resource-conscious', 'Agile decision-making'],
            painPoints: ['Limited budgets', 'Skill gaps', 'Time to market pressure']
          }
        ]
      }
    },
    {
      id: 'business-model',
      icon: <Briefcase className="w-4 h-4" />,
      label: 'Business Model',
      title: 'Business Model & Revenue Streams',
      content: {
        intro: "Your business model leverages multiple revenue streams to ensure sustainable growth and reduced dependency on any single income source.",
        revenueStreams: [
          {
            name: 'Subscription Revenue',
            percentage: '65%',
            description: 'Monthly and annual recurring subscriptions',
            projection: '£1.17M Year 1'
          },
          {
            name: 'Transaction Fees',
            percentage: '25%',
            description: 'Commission on platform transactions',
            projection: '£450K Year 1'
          },
          {
            name: 'Premium Services',
            percentage: '10%',
            description: 'High-value consulting and custom solutions',
            projection: '£180K Year 1'
          }
        ],
        keyMetrics: [
          { label: 'Customer Acquisition Cost (CAC)', value: '£85' },
          { label: 'Customer Lifetime Value (CLV)', value: '£1,240' },
          { label: 'Monthly Churn Rate', value: '3.2%' },
          { label: 'Gross Margin', value: '78%' }
        ]
      }
    },
    {
      id: 'financial-projections',
      icon: <BarChart3 className="w-4 h-4" />,
      label: 'Financial Projections',
      title: 'Financial Projections & Growth',
      content: {
        intro: "Conservative financial projections based on comparable market data and validated assumptions about customer acquisition and retention.",
        yearlyProjections: [
          { year: 'Year 1', revenue: '£1.8M', expenses: '£1.2M', profit: '£600K', customers: '12K' },
          { year: 'Year 2', revenue: '£4.2M', expenses: '£2.8M', profit: '£1.4M', customers: '28K' },
          { year: 'Year 3', revenue: '£8.9M', expenses: '£5.6M', profit: '£3.3M', customers: '58K' },
          { year: 'Year 4', revenue: '£16.2M', expenses: '£9.8M', profit: '£6.4M', customers: '105K' },
          { year: 'Year 5', revenue: '£28.5M', expenses: '£16.2M', profit: '£12.3M', customers: '180K' }
        ],
        fundingRequirements: [
          { round: 'Seed', amount: '£500K', use: 'Product development & initial team' },
          { round: 'Series A', amount: '£2.5M', use: 'Market expansion & scaling' },
          { round: 'Series B', amount: '£8M', use: 'International expansion' }
        ]
      }
    },
    {
      id: 'marketing-strategy',
      icon: <Growth className="w-4 h-4" />,
      label: 'Marketing Strategy',
      title: 'Go-to-Market Strategy',
      content: {
        intro: "A multi-channel approach focusing on digital marketing, strategic partnerships, and thought leadership to build brand awareness and drive customer acquisition.",
        channels: [
          {
            name: 'Content Marketing',
            budget: '£15K/month',
            description: 'SEO-optimised content, thought leadership articles',
            expectedROI: '4.2x'
          },
          {
            name: 'Paid Advertising',
            budget: '£25K/month',
            description: 'Google Ads, LinkedIn, targeted social media',
            expectedROI: '3.8x'
          },
          {
            name: 'Partnership Marketing',
            budget: '£8K/month',
            description: 'Strategic alliances and co-marketing initiatives',
            expectedROI: '6.1x'
          }
        ],
        milestones: [
          { milestone: 'Brand Launch', timeline: 'Month 1', description: 'Complete brand identity and website launch' },
          { milestone: 'First 1K Users', timeline: 'Month 3', description: 'Achieve initial user base through early adopter campaigns' },
          { milestone: 'Product-Market Fit', timeline: 'Month 6', description: 'Validate core value proposition with target segments' },
          { milestone: 'Scale Marketing', timeline: 'Month 9', description: 'Expand marketing channels and increase spend' }
        ]
      }
    },
    {
      id: 'timeline-milestones',
      icon: <Calendar className="w-4 h-4" />,
      label: 'Timeline & Milestones',
      title: 'Implementation Timeline',
      content: {
        intro: "A detailed 18-month roadmap with key milestones, deliverables, and success metrics to guide execution and measure progress.",
        phases: [
          {
            name: 'Foundation Phase',
            duration: 'Months 1-3',
            objectives: ['Build MVP', 'Validate concept', 'Secure initial funding'],
            deliverables: ['Working prototype', 'First 100 users', 'Seed funding secured']
          },
          {
            name: 'Growth Phase',
            duration: 'Months 4-9',
            objectives: ['Scale user base', 'Optimise product', 'Build team'],
            deliverables: ['10K active users', 'Product-market fit', 'Series A funding']
          },
          {
            name: 'Scale Phase',
            duration: 'Months 10-18',
            objectives: ['Market expansion', 'Revenue growth', 'Operational excellence'],
            deliverables: ['£1M ARR', 'Market leadership', 'Sustainable growth']
          }
        ],
        criticalPath: [
          'Product development completion',
          'Initial customer validation',
          'Funding milestone achievement',
          'Team scaling and hiring',
          'Market expansion execution'
        ]
      }
    },
    {
      id: 'risk-analysis',
      icon: <Shield className="w-4 h-4" />,
      label: 'Risk Analysis',
      title: 'Risk Assessment & Mitigation',
      content: {
        intro: "Comprehensive analysis of potential risks and corresponding mitigation strategies to ensure business resilience and sustainable growth.",
        risks: [
          {
            category: 'Market Risk',
            level: 'Medium',
            description: 'Market saturation or economic downturn',
            mitigation: 'Diversified revenue streams and flexible pricing models',
            probability: '25%'
          },
          {
            category: 'Technology Risk',
            level: 'Low',
            description: 'Technical scalability or security issues',
            mitigation: 'Robust architecture and regular security audits',
            probability: '15%'
          },
          {
            category: 'Competition Risk',
            level: 'High',
            description: 'New competitors or existing players pivoting',
            mitigation: 'Strong IP protection and continuous innovation',
            probability: '60%'
          },
          {
            category: 'Funding Risk',
            level: 'Medium',
            description: 'Difficulty raising subsequent funding rounds',
            mitigation: 'Strong unit economics and multiple funding sources',
            probability: '30%'
          }
        ],
        contingencyPlans: [
          'Pivot strategy for alternative market segments',
          'Cost reduction plan for economic downturns',
          'Partnership agreements for market access',
          'IP protection and defensive strategies'
        ]
      }
    }
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

  const handleStartJourney = () => {
    // If no idea is entered, use a default one or prompt user to scroll to input
    if (!ideaInput.trim()) {
      // Scroll to the input section
      const inputSection = document.querySelector('.idea-input-section');
      if (inputSection) {
        inputSection.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      // If input section not found, use a default idea
      setIdeaInput("I want to create an innovative tech startup");
    }
    
    setIsGenerating(true);
    setGenerationProgress(0);
    
    // Simulate progress
    const progressInterval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsGenerating(false);
          setCurrentPage('business-plan');
          setActiveSection(0);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const handleGetStarted = () => {
    // For "Get Started" buttons, scroll to input or go directly to business plan
    const inputSection = document.querySelector('.idea-input-section');
    if (inputSection) {
      inputSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If input section not visible, go directly with default idea
      setIdeaInput("I want to create an innovative tech startup");
      handleStartJourney();
    }
  };

  const handleSectionClick = (index: number) => {
    setActiveSection(index);
    // Smooth scroll to section content
    const sectionElement = document.getElementById(`section-${index}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNextSection = () => {
    if (activeSection < businessPlanSections.length - 1) {
      handleSectionClick(activeSection + 1);
    }
  };

  const handlePrevSection = () => {
    if (activeSection > 0) {
      handleSectionClick(activeSection - 1);
    }
  };

  const testimonials = [
    {
      quote: "UnicornLabs transformed our vague concept into a comprehensive strategy. The AI-driven insights helped us secure Series A funding within 8 months.",
      author: "Sarah Chen",
      title: "Founder & CEO, TechFlow",
      rating: 5
    },
    {
      quote: "The platform's market validation tools saved us months of research. We pivoted early and found product-market fit faster than we ever imagined.",
      author: "Marcus Rodriguez",
      title: "Co-founder, DataBridge",
      rating: 5
    },
    {
      quote: "From idea to £2M ARR in 18 months. UnicornLabs didn't just give us a plan—it gave us the confidence to execute at scale.",
      author: "Emma Thompson",
      title: "Founder, GreenTech Solutions",
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Strategy Engine",
      description: "Advanced algorithms analyse market patterns and successful startup trajectories to create personalised growth strategies."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Market Intelligence",
      description: "Real-time competitive analysis and market validation tools to ensure you're building something people actually want."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Founder Network",
      description: "Connect with vetted co-founders, advisors, and industry experts through our AI-matched professional network."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Capital Pipeline",
      description: "Direct access to pre-qualified investors and funding opportunities tailored to your startup's stage and sector."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Growth Analytics",
      description: "Comprehensive metrics dashboard with predictive insights to optimise your path to sustainable revenue growth."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Legal Framework",
      description: "Automated compliance tracking and legal document generation to protect your intellectual property and business interests."
    }
  ];

  const pricingPlans = [
    {
      name: "Founder",
      price: "Free",
      period: "",
      description: "Perfect for validating your concept",
      features: [
        "AI business analysis",
        "Market research tools",
        "Community access",
        "1 comprehensive business plan"
      ],
      cta: "Start Building",
      popular: false
    },
    {
      name: "Scale",
      price: "£49",
      period: "/month",
      description: "For serious entrepreneurs ready to launch",
      features: [
        "Advanced AI strategy development",
        "Unlimited business plan generations",
        "Founder network access",
        "Priority support",
        "Investor matching platform"
      ],
      cta: "Accelerate Growth",
      popular: true
    },
    {
      name: "Enterprise",
      price: "£149",
      period: "/month",
      description: "For scaling to £10M+ businesses",
      features: [
        "Everything in Scale",
        "Dedicated success manager",
        "Custom AI model training",
        "Direct investor introductions",
        "Board advisory access",
        "White-glove onboarding"
      ],
      cta: "Go Enterprise",
      popular: false
    }
  ];

  const renderSectionContent = (section: typeof businessPlanSections[0]) => {
    const content = section.content;
    
    switch (section.id) {
      case 'executive-summary':
        return (
          <div className="prose max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">{content.intro}</p>
            
            <div className="grid md:grid-cols-3 gap-6 my-8">
              {content.metrics?.map((metric, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="text-2xl font-bold text-slate-900 mb-2">{metric.value}</div>
                  <div className="text-sm text-slate-600">{metric.label}</div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Key Success Factors</h3>
            <ul className="space-y-2 mb-6">
              {content.keyPoints?.map((point, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      
      case 'market-analysis':
        return (
          <div className="prose max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">{content.intro}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-slate-900 mb-3">Market Size</h4>
                <div className="space-y-2 text-sm">
                  {content.marketSize?.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-slate-600">{item.label}</span>
                      <span className="font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-slate-900 mb-3">Growth Projections</h4>
                <div className="space-y-2 text-sm">
                  {content.growthProjections?.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-slate-600">{item.label}</span>
                      <span className="font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'target-audience':
        return (
          <div className="prose max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">{content.intro}</p>
            
            <div className="space-y-6">
              {content.segments?.map((segment, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-semibold text-slate-900">{segment.name}</h4>
                    <span className="text-sm text-slate-600 bg-white px-3 py-1 rounded-full border">
                      {segment.size}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-slate-800 mb-2">Characteristics</h5>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {segment.characteristics.map((char, charIndex) => (
                          <li key={charIndex}>• {char}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-slate-800 mb-2">Pain Points</h5>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {segment.painPoints.map((pain, painIndex) => (
                          <li key={painIndex}>• {pain}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'business-model':
        return (
          <div className="prose max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">{content.intro}</p>
            
            <div className="space-y-6 mb-8">
              <h4 className="font-semibold text-slate-900">Revenue Streams</h4>
              {content.revenueStreams?.map((stream, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-medium text-slate-900">{stream.name}</h5>
                    <span className="text-lg font-bold text-slate-900">{stream.percentage}</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{stream.description}</p>
                  <div className="text-sm font-medium text-emerald-600">{stream.projection}</div>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-slate-900 mb-3">Key Metrics</h4>
                <div className="space-y-2 text-sm">
                  {content.keyMetrics?.map((metric, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-slate-600">{metric.label}</span>
                      <span className="font-medium">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'financial-projections':
        return (
          <div className="prose max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">{content.intro}</p>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-200 p-3 text-left">Year</th>
                    <th className="border border-slate-200 p-3 text-left">Revenue</th>
                    <th className="border border-slate-200 p-3 text-left">Expenses</th>
                    <th className="border border-slate-200 p-3 text-left">Profit</th>
                    <th className="border border-slate-200 p-3 text-left">Customers</th>
                  </tr>
                </thead>
                <tbody>
                  {content.yearlyProjections?.map((projection, index) => (
                    <tr key={index}>
                      <td className="border border-slate-200 p-3 font-medium">{projection.year}</td>
                      <td className="border border-slate-200 p-3">{projection.revenue}</td>
                      <td className="border border-slate-200 p-3">{projection.expenses}</td>
                      <td className="border border-slate-200 p-3 text-emerald-600 font-medium">{projection.profit}</td>
                      <td className="border border-slate-200 p-3">{projection.customers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Funding Requirements</h4>
              <div className="space-y-3">
                {content.fundingRequirements?.map((funding, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div>
                      <div className="font-medium text-slate-900">{funding.round}</div>
                      <div className="text-sm text-slate-600">{funding.use}</div>
                    </div>
                    <div className="text-lg font-bold text-slate-900">{funding.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'marketing-strategy':
        return (
          <div className="prose max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">{content.intro}</p>
            
            <div className="space-y-6 mb-8">
              <h4 className="font-semibold text-slate-900">Marketing Channels</h4>
              {content.channels?.map((channel, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-medium text-slate-900">{channel.name}</h5>
                    <div className="text-right">
                      <div className="text-sm font-medium text-slate-900">{channel.budget}</div>
                      <div className="text-xs text-emerald-600">ROI: {channel.expectedROI}</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">{channel.description}</p>
                </div>
              ))}
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Key Milestones</h4>
              <div className="space-y-4">
                {content.milestones?.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h5 className="font-medium text-slate-900">{milestone.milestone}</h5>
                        <span className="text-sm text-slate-600">{milestone.timeline}</span>
                      </div>
                      <p className="text-sm text-slate-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'timeline-milestones':
        return (
          <div className="prose max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">{content.intro}</p>
            
            <div className="space-y-6 mb-8">
              {content.phases?.map((phase, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-semibold text-slate-900">{phase.name}</h4>
                    <span className="text-sm text-slate-600 bg-white px-3 py-1 rounded-full border">
                      {phase.duration}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-slate-800 mb-2">Objectives</h5>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {phase.objectives.map((objective, objIndex) => (
                          <li key={objIndex}>• {objective}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-slate-800 mb-2">Key Deliverables</h5>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {phase.deliverables.map((deliverable, delIndex) => (
                          <li key={delIndex}>• {deliverable}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Critical Path</h4>
              <div className="space-y-2">
                {content.criticalPath?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'risk-analysis':
        return (
          <div className="prose max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">{content.intro}</p>
            
            <div className="space-y-4 mb-8">
              {content.risks?.map((risk, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="flex justify-between items-start mb-3">
                    <h5 className="font-medium text-slate-900">{risk.category}</h5>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        risk.level === 'High' ? 'bg-red-100 text-red-800' :
                        risk.level === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {risk.level}
                      </span>
                      <span className="text-sm text-slate-600">{risk.probability}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{risk.description}</p>
                  <div className="text-sm text-slate-800">
                    <strong>Mitigation:</strong> {risk.mitigation}
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Contingency Plans</h4>
              <ul className="space-y-2">
                {content.contingencyPlans?.map((plan, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{plan}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      
      default:
        return <div>Content not available</div>;
    }
  };

  if (currentPage === 'business-plan') {
    return (
      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setCurrentPage('home')}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold text-slate-900">UnicornLabs</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
                <Download className="w-4 h-4" />
                <span>Export PDF</span>
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-slate-200 p-6 sticky top-24">
                <h3 className="font-semibold text-slate-900 mb-4">Business Plan Sections</h3>
                <nav className="space-y-2">
                  {businessPlanSections.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => handleSectionClick(index)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-left ${
                        index === activeSection
                          ? 'bg-slate-900 text-white' 
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {section.icon}
                      <span className="text-sm">{section.label}</span>
                    </button>
                  ))}
                </nav>
                
                {/* Navigation Controls */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex justify-between">
                    <button
                      onClick={handlePrevSection}
                      disabled={activeSection === 0}
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>
                    <button
                      onClick={handleNextSection}
                      disabled={activeSection === businessPlanSections.length - 1}
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="mt-4">
                    <div className="text-xs text-slate-500 mb-2">
                      Section {activeSection + 1} of {businessPlanSections.length}
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-slate-900 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((activeSection + 1) / businessPlanSections.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl border border-slate-200">
                {/* Header */}
                <div className="p-8 border-b border-slate-200">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h1 className="text-3xl font-bold text-slate-900 mb-2">
                        Strategic Business Plan
                      </h1>
                      <p className="text-slate-600">
                        Generated for: "{ideaInput || 'Your innovative business concept'}"
                      </p>
                    </div>
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                      <Edit3 className="w-5 h-5 text-slate-600" />
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm text-slate-500">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Generated 2 minutes ago</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span>12 pages</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-emerald-500 fill-current" />
                      <span>AI Confidence: 94%</span>
                    </div>
                  </div>
                </div>

                {/* Dynamic Section Content */}
                <div className="p-8" id={`section-${activeSection}`}>
                  <div className="mb-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                        {businessPlanSections[activeSection].icon}
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        {businessPlanSections[activeSection].title}
                      </h2>
                    </div>
                    
                    {renderSectionContent(businessPlanSections[activeSection])}
                  </div>

                  {/* Section Navigation */}
                  <div className="flex justify-between items-center pt-8 border-t border-slate-200">
                    <button
                      onClick={handlePrevSection}
                      disabled={activeSection === 0}
                      className="flex items-center space-x-2 px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      <span>Previous Section</span>
                    </button>
                    
                    <div className="text-sm text-slate-500">
                      {activeSection + 1} of {businessPlanSections.length}
                    </div>
                    
                    <button
                      onClick={handleNextSection}
                      disabled={activeSection === businessPlanSections.length - 1}
                      className="flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <span>Next Section</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden font-sans">
      {/* Loading Overlay */}
      {isGenerating && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-white animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Generating Your Strategic Plan</h3>
            <p className="text-slate-600 mb-6">Our AI is analysing your concept and creating a comprehensive strategy...</p>
            
            <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
              <div 
                className="bg-slate-900 h-3 rounded-full transition-all duration-300"
                style={{ width: `${generationProgress}%` }}
              ></div>
            </div>
            <div className="text-sm text-slate-500">{Math.round(generationProgress)}% complete</div>
          </div>
        </div>
      )}

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.02),transparent)]"></div>
      
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 border-b border-slate-200 backdrop-blur-lg bg-white/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-slate-900">
              UnicornLabs
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Pricing</a>
            <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Success Stories</a>
            <button 
              onClick={handleGetStarted}
              className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-all hover:shadow-lg font-medium"
            >
              Get Started
            </button>
          </div>
          
          <button 
            className="md:hidden text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-slate-200 p-6">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Features</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Pricing</a>
              <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Success Stories</a>
              <button 
                onClick={handleGetStarted}
                className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-100 rounded-full px-4 py-2 mb-8 border border-slate-200">
            <Zap className="w-4 h-4 text-slate-900" />
            <span className="text-sm text-slate-700 font-medium">Trusted by 50,000+ founders</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-slate-900">
              From Concept to
            </span>
            <br />
            <span className="text-slate-900 underline decoration-4 underline-offset-8 decoration-slate-300">
              £10M Revenue
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            The AI-powered platform that transforms entrepreneurs into successful founders. 
            Get personalised strategies, connect with investors, and scale with confidence.
          </p>
          
          {/* Idea Input Section */}
          <div className="max-w-4xl mx-auto mb-12 idea-input-section">
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">What's your business concept?</h3>
              
              {/* Example Ideas Carousel */}
              <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-sm text-slate-500 mb-2 font-medium">💡 Ideas that became unicorns:</div>
                <div className="text-slate-700 italic min-h-[24px] transition-all duration-500">
                  "{exampleIdeas[currentExampleIndex]}"
                </div>
              </div>
              
              {/* Input Field */}
              <div className="relative">
                <textarea
                  ref={textareaRef}
                  value={ideaInput}
                  onChange={(e) => setIdeaInput(e.target.value)}
                  placeholder="Describe your concept... (e.g., 'I want to create a platform that...')"
                  className="w-full p-6 pr-24 border-2 border-slate-200 rounded-xl text-lg resize-none focus:border-slate-900 focus:outline-none transition-all duration-200 min-h-[60px] overflow-hidden font-light"
                  rows={1}
                  style={{ height: 'auto' }}
                />
                
                {/* Voice Input Button */}
                <button
                  onClick={handleVoiceInput}
                  className={`absolute right-16 top-6 p-3 rounded-full transition-all ${
                    isListening 
                      ? 'bg-red-500 text-white animate-pulse' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  title="Voice input"
                >
                  <Mic className="w-5 h-5" />
                </button>
                
                {/* Submit Button */}
                <button
                  onClick={handleStartJourney}
                  className="absolute right-3 top-6 p-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!ideaInput.trim()}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              
              <div className="mt-4 text-sm text-slate-500 text-center font-light">
                Our AI will analyse your concept and create a custom roadmap to £10M+ revenue
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={handleStartJourney}
              className="group bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all hover:shadow-lg flex items-center space-x-2"
            >
              <span>Start Building</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-slate-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span>2,847 businesses launched this month</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
              ))}
              <span className="ml-2">4.9/5 from 12,000+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Everything You Need to Build a{' '}
              <span className="text-slate-900 underline decoration-4 underline-offset-8 decoration-slate-300">
                Successful Business
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Our AI-powered platform provides all the tools, connections, and insights 
              you need to transform your concept into a sustainable, profitable business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-200 group-hover:scale-110 transition-all">
                  <div className="text-slate-900">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Watch Demo Button */}
          <div className="text-center mt-16">
            <button 
              onClick={() => setShowDemo(true)}
              className="group border border-slate-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-slate-900 hover:bg-white transition-colors flex items-center space-x-2 mx-auto"
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
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                £2.8B+
              </div>
              <div className="text-slate-600 font-light">Total funding raised</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                847
              </div>
              <div className="text-slate-600 font-light">Successful exits</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                92%
              </div>
              <div className="text-slate-600 font-light">Success rate</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                18
              </div>
              <div className="text-slate-600 font-light">Average months to £1M ARR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 px-6 py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Success Stories from{' '}
            <span className="text-slate-900 underline decoration-4 underline-offset-8 decoration-slate-300">
              Successful Founders
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
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-slate-800 mb-8 leading-relaxed font-light">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-lg text-slate-900">{testimonial.author}</div>
                    <div className="text-slate-600 font-light">{testimonial.title}</div>
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
                      ? 'bg-slate-900' 
                      : 'bg-slate-300 hover:bg-slate-400'
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
              <span className="text-slate-900 underline decoration-4 underline-offset-8 decoration-slate-300">
                Success
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Whether you're validating your concept or ready to scale, 
              we have the perfect plan to accelerate your journey to £10M+ revenue.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all hover:shadow-lg ${
                  plan.popular
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-slate-900 px-4 py-1 rounded-full text-sm font-semibold border border-slate-200">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className={plan.popular ? "text-slate-300 font-light" : "text-slate-500 font-light"}>{plan.period}</span>
                  </div>
                  <p className={plan.popular ? "text-slate-300 font-light" : "text-slate-600 font-light"}>{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className={plan.popular ? "text-slate-300 font-light" : "text-slate-600 font-light"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={handleGetStarted}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-slate-900 hover:bg-slate-100'
                      : 'border border-slate-300 hover:border-slate-900 hover:bg-slate-50'
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
      <section className="relative z-10 px-6 py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build Your{' '}
            <span className="underline decoration-4 underline-offset-8 decoration-slate-600">
              Success Story?
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-light">
            Join thousands of successful entrepreneurs who've transformed their concepts 
            into profitable businesses with UnicornLabs.
          </p>
          <button 
            onClick={handleStartJourney}
            className="group bg-white text-slate-900 px-12 py-4 rounded-lg text-xl font-semibold hover:bg-slate-100 transition-all hover:shadow-lg flex items-center space-x-2 mx-auto"
          >
            <span>Start Building Today</span>
            <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <section className="relative z-10 px-6 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-slate-900">
                UnicornLabs
              </span>
            </div>
            <div className="text-slate-500 text-sm font-light">
              © 2025 UnicornLabs. All rights reserved. Engineering tomorrow's success stories.
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900">See UnicornLabs in Action</h3>
              <button 
                onClick={() => setShowDemo(false)}
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 mb-6 border border-slate-200">
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquare className="w-5 h-5 text-slate-900" />
                <span className="text-sm text-slate-600 font-medium">AI Business Strategist</span>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-100 p-4 rounded-lg border border-slate-200">
                  <p className="text-sm text-slate-800 font-light">
                    Hello! I'm your AI business strategist. Tell me about your startup concept and I'll create a comprehensive plan to get you to £10M in revenue.
                  </p>
                </div>
                <div className="text-right">
                  <div className="bg-slate-900 text-white p-4 rounded-lg inline-block">
                    <p className="text-sm font-light">I want to build a sustainable fashion brand...</p>
                  </div>
                </div>
                <div className="bg-slate-100 p-4 rounded-lg border border-slate-200">
                  <p className="text-sm text-slate-800 font-light">
                    Excellent! Based on market analysis, I recommend focusing on eco-friendly materials and direct-to-consumer sales. Here's your custom 18-month roadmap...
                  </p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setShowDemo(false)}
              className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all"
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